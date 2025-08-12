export type ExtractedDoc = {
  name: string
  mime: string
  text: string
}

async function extractFromPDF(file: File): Promise<string> {
  // Use pdf-parse for robust PDF text extraction
  const ab = await file.arrayBuffer()
  const buf = Buffer.from(ab)
  const { default: pdfParse } = await import("pdf-parse")
  const data = await pdfParse(buf)
  return data.text || ""
}

async function extractFromDOCX(file: File): Promise<string> {
  const ab = await file.arrayBuffer()
  const { default: mammoth } = await import("mammoth")
  const res = await mammoth.extractRawText({ arrayBuffer: ab as ArrayBuffer })
  return res.value || ""
}

async function extractFromTextLike(file: File): Promise<string> {
  // Covers text/plain, text/markdown, etc.
  return await file.text()
}

export async function extractTextFromFiles(files: File[]): Promise<ExtractedDoc[]> {
  const out: ExtractedDoc[] = []
  for (const f of files) {
    try {
      const mime = (f.type || "").toLowerCase()
      let text = ""
      if (mime.includes("pdf") || f.name.toLowerCase().endsWith(".pdf")) {
        text = await extractFromPDF(f)
      } else if (
        mime.includes("wordprocessingml") ||
        f.name.toLowerCase().endsWith(".docx")
      ) {
        text = await extractFromDOCX(f)
      } else if (
        mime.startsWith("text/") ||
        f.name.toLowerCase().endsWith(".txt") ||
        f.name.toLowerCase().endsWith(".md") ||
        f.name.toLowerCase().endsWith(".markdown")
      ) {
        text = await extractFromTextLike(f)
      } else {
        // Fallback: try to read as text
        text = await extractFromTextLike(f)
      }

      // Normalize whitespace and truncate overly long texts to keep token usage reasonable
      const normalized = text.replace(/\r/g, "").replace(/\t/g, "  ")
      const limited = normalized.length > 200_000 ? normalized.slice(0, 200_000) : normalized

      out.push({
        name: f.name,
        mime: f.type || "application/octet-stream",
        text: limited,
      })
    } catch (e) {
      out.push({
        name: f.name,
        mime: f.type || "application/octet-stream",
        text: "",
      })
    }
  }
  return out
}
