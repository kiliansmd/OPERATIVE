"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"

interface PDFExportButtonProps {
  targetId: string
  filename?: string
}

export default function PDFExportButton({ targetId, filename = "kandidatenprofil.pdf" }: PDFExportButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const generatePDF = async () => {
    try {
      setIsGenerating(true)

      // Dynamisch importieren, um die Bundle-Größe zu reduzieren
      const { jsPDF } = await import("jspdf")
      const { default: html2canvas } = await import("html2canvas")

      const element = document.getElementById(targetId)
      if (!element) {
        console.error("Element nicht gefunden")
        return
      }

      // Scrollposition speichern
      const originalScrollPos = window.scrollY

      // Temporäre Styling-Anpassungen für bessere PDF-Qualität
      const originalStyle = element.style.cssText
      const originalBodyStyle = document.body.style.cssText

      // Entferne alle Seitenumbrüche und setze temporäre Stile für die Konvertierung
      const sections = element.querySelectorAll("section")
      const originalSectionStyles: string[] = []

      sections.forEach((section) => {
        originalSectionStyles.push((section as HTMLElement).style.cssText)
        ;(section as HTMLElement).style.pageBreakAfter = "auto"
        ;(section as HTMLElement).style.pageBreakBefore = "auto"
        ;(section as HTMLElement).style.pageBreakInside = "auto"
      })

      // Setze temporäre Stile für bessere Qualität
      document.body.style.overflow = "hidden"
      element.style.width = "1200px"
      element.style.margin = "0"
      element.style.padding = "0"
      element.style.background = "white"

      // Erstelle ein Canvas vom gesamten Dokument
      const canvas = await html2canvas(element, {
        scale: 2, // Höhere Qualität
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: "#ffffff",
      })

      // Berechne die Dimensionen für das PDF
      const imgWidth = 210 // A4 Breite in mm
      const pageHeight = 297 // A4 Höhe in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      // Erstelle das PDF im A4-Format
      const pdf = new jsPDF("p", "mm", "a4")

      // Füge das Bild zum PDF hinzu
      const imgData = canvas.toDataURL("image/png")

      // Berechne die Anzahl der benötigten Seiten
      const pagesCount = Math.ceil(imgHeight / pageHeight)

      // Füge jede Seite zum PDF hinzu
      let heightLeft = imgHeight
      let position = 0

      // Erste Seite
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // Weitere Seiten, falls nötig
      while (heightLeft > 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      // Styling zurücksetzen
      element.style.cssText = originalStyle
      document.body.style.cssText = originalBodyStyle

      // Setze die Stile der Sektionen zurück
      sections.forEach((section, index) => {
        ;(section as HTMLElement).style.cssText = originalSectionStyles[index]
      })

      window.scrollTo(0, originalScrollPos)

      // PDF speichern
      pdf.save(filename)
    } catch (error) {
      console.error("Fehler beim PDF-Export:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      ref={buttonRef}
      onClick={generatePDF}
      disabled={isGenerating}
      className="fixed bottom-6 right-6 shadow-lg z-50 bg-[#282550] hover:bg-[#1a1a38] text-white"
      size="lg"
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          PDF wird erstellt...
        </>
      ) : (
        <>
          <Download className="mr-2 h-5 w-5" />
          Als PDF exportieren
        </>
      )}
    </Button>
  )
}
