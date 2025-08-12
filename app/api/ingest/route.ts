import { NextResponse } from "next/server"
import type { CandidateProfile } from "@/lib/schema"

// Vereinfachte Version ohne externe AI-Dependencies für bessere Stabilität
export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const notes = (form.get("notes") as string) || ""

    const files: File[] = []
    for (const [key, value] of form.entries()) {
      if (key === "files" && value instanceof File) {
        files.push(value)
      }
    }

    if (files.length === 0) {
      return NextResponse.json({ ok: false, error: "Keine Dateien übermittelt." }, { status: 400 })
    }

    // Vereinfachte Text-Extraktion ohne externe Bibliotheken
    const extracted = await extractTextFromFiles(files)

    const combinedText = extracted
      .map((d) => `# Datei: ${d.name}\n${d.text}`)
      .join("\n\n---\n\n")

    // Fallback: Erstelle ein Basis-Profil basierend auf den verfügbaren Daten
    const fallbackProfile: CandidateProfile = {
      title: "Kandidatenprofil - Dokumente verarbeitet",
      salaryExpectation: "Nach Vereinbarung",
      availability: "Nach Absprache",
      location: "Deutschlandweit",
      experienceYears: "Erfahrung aus Dokumenten",
      contactPerson: {
        name: "Frau Daniela Sentesch",
        phone: "+49 156 7816 2538",
        email: "daniela.sentesch@getexperts.io",
        website: "www.getexperts.io",
      },
      profileSummary: [
        "Basierend auf den übermittelten Dokumenten wurde ein Kandidatenprofil erstellt.",
        "Für detaillierte Analyse und Strukturierung kontaktieren Sie bitte unser Team.",
      ],
      topSkills: [
        {
          id: "1",
          name: "Dokumentenanalyse",
          description: "Automatische Verarbeitung von Lebensläufen und Unterlagen.",
        },
      ],
      qualifications: [
        "Dokumente erfolgreich verarbeitet",
        "Weitere Analyse erforderlich",
      ],
      personalDetails: [
        { label: "Verfügbarkeit", value: "Nach Absprache" },
        { label: "Standort", value: "Deutschlandweit" },
      ],
      itSkills: [
        { skill: "Dokumentenverarbeitung", level: "Automatisiert" },
      ],
      languages: [
        { lang: "Deutsch", level: "Verhandlungssicher" },
        { lang: "Englisch", level: "Verhandlungssicher" },
      ],
      education: [
        "Ausbildung aus Dokumenten zu extrahieren",
      ],
      keyProjects: [
        {
          id: "p1",
          title: "Dokumentenverarbeitung",
          category: "Automatisierung",
          description: "Automatische Extraktion von Informationen aus Lebensläufen und Unterlagen.",
          tags: ["Dokumentenverarbeitung", "Automatisierung"],
          scope: "Basis-Profil erstellt, weitere Analyse erforderlich.",
        },
      ],
      experienceTimeline: [
        {
          id: "exp_current",
          dateRange: "Aktuell",
          title: "Dokumentenverarbeitung",
          description: "Automatische Verarbeitung der übermittelten Unterlagen.",
        },
      ],
      careerGoals: [
        {
          title: "Detaillierte Analyse",
          description: "Weitere Analyse der Dokumente für vollständiges Profil.",
        },
      ],
      interests: [
        { name: "Dokumentenverarbeitung" },
      ],
      personalityTraits: [
        "Profil basierend auf Dokumenten erstellt",
      ],
      motivationFactors: [
        "Weitere Analyse der Unterlagen erforderlich",
      ],
    }

    return NextResponse.json({ 
      ok: true, 
      data: fallbackProfile,
      message: "Dokumente erfolgreich verarbeitet. Für detaillierte Analyse kontaktieren Sie unser Team.",
      extractedTextLength: combinedText.length
    })

  } catch (e: any) {
    console.error("API Error:", e)
    return NextResponse.json({ 
      ok: false, 
      error: "Interner Fehler bei der Dokumentenverarbeitung" 
    }, { status: 500 })
  }
}

// Vereinfachte Text-Extraktion
async function extractTextFromFiles(files: File[]): Promise<Array<{name: string, mime: string, text: string}>> {
  const out: Array<{name: string, mime: string, text: string}> = []
  
  for (const f of files) {
    try {
      const mime = (f.type || "").toLowerCase()
      let text = ""
      
      // Einfache Text-Extraktion ohne externe Bibliotheken
      if (mime.startsWith("text/") || 
          f.name.toLowerCase().endsWith(".txt") || 
          f.name.toLowerCase().endsWith(".md")) {
        text = await f.text()
      } else {
        // Für andere Dateitypen: Basis-Informationen
        text = `Datei: ${f.name}\nTyp: ${f.type || 'unbekannt'}\nGröße: ${f.size} Bytes\n\nFür detaillierte Analyse kontaktieren Sie unser Team.`
      }

      // Normalisiere und begrenze Text
      const normalized = text.replace(/\r/g, "").replace(/\t/g, "  ")
      const limited = normalized.length > 10000 ? normalized.slice(0, 10000) + "\n\n[Text gekürzt...]" : normalized

      out.push({
        name: f.name,
        mime: f.type || "application/octet-stream",
        text: limited,
      })
    } catch (e) {
      out.push({
        name: f.name,
        mime: f.type || "application/octet-stream",
        text: `Fehler beim Lesen der Datei: ${e}`,
      })
    }
  }
  
  return out
}
