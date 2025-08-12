/**
 * Hilfsfunktionen für die PDF-Generierung
 */

// Konvertiert Pixel in Punkte (pt) für PDF-Dokumente
export function pxToPt(px: number): number {
  return px * 0.75 // Ungefähre Umrechnung von Pixel zu Punkten
}

// Optimiert Bilder für PDF-Export
export async function optimizeImageForPDF(imageUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      if (!ctx) {
        reject(new Error("Canvas context not available"))
        return
      }

      // Setze die Canvas-Größe auf die Bildgröße
      canvas.width = img.width
      canvas.height = img.height

      // Zeichne das Bild auf den Canvas
      ctx.drawImage(img, 0, 0)

      // Konvertiere zu PNG mit hoher Qualität
      try {
        const optimizedImageUrl = canvas.toDataURL("image/png", 1.0)
        resolve(optimizedImageUrl)
      } catch (error) {
        reject(error)
      }
    }

    img.onerror = (error) => {
      reject(error)
    }

    img.src = imageUrl
  })
}

// Fügt Metadaten zum PDF hinzu
export function addPDFMetadata(
  pdf: any,
  metadata: {
    title?: string
    author?: string
    subject?: string
    keywords?: string
    creator?: string
  },
) {
  if (metadata.title) pdf.setProperties({ title: metadata.title })
  if (metadata.author) pdf.setProperties({ author: metadata.author })
  if (metadata.subject) pdf.setProperties({ subject: metadata.subject })
  if (metadata.keywords) pdf.setProperties({ keywords: metadata.keywords })
  if (metadata.creator) pdf.setProperties({ creator: metadata.creator })

  return pdf
}
