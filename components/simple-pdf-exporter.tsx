"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, Loader2, ChevronDown, FileText, Monitor } from "lucide-react"
import { toast } from "sonner"

interface SimplePDFExporterProps {
  targetId: string
  filename?: string
}

export default function SimplePDFExporter({ targetId, filename = "kandidatenprofil.pdf" }: SimplePDFExporterProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [exportType, setExportType] = useState<"standard" | "continuous">("standard")

  const generatePDF = useCallback(async (type: "standard" | "continuous" = "standard") => {
    try {
      setIsGenerating(true)
      setExportType(type)

      // Dynamischer Import mit Fallback
      let jsPDF: any
      let html2canvas: any

      try {
        const jsPDFModule = await import("jspdf")
        jsPDF = jsPDFModule.jsPDF
      } catch (error) {
        console.error("jsPDF konnte nicht geladen werden:", error)
        toast.error("PDF-Bibliothek konnte nicht geladen werden")
        return
      }

      try {
        const html2canvasModule = await import("html2canvas")
        html2canvas = html2canvasModule.default
      } catch (error) {
        console.error("html2canvas konnte nicht geladen werden:", error)
        toast.error("Canvas-Bibliothek konnte nicht geladen werden")
        return
      }

      const element = document.getElementById(targetId)
      if (!element) {
        toast.error("Ziel-Element nicht gefunden")
        return
      }

      // Scrollposition speichern
      const originalScrollPos = window.scrollY

      // Alle ursprünglichen Styles speichern
      const originalStyles = {
        element: element.style.cssText,
        body: document.body.style.cssText
      }

      // PDF-optimierte Styles anwenden
      document.body.style.overflow = "hidden"
      element.style.width = "1200px"
      element.style.margin = "0"
      element.style.padding = "0"
      element.style.background = "white"
      element.style.minHeight = "auto"
      element.style.height = "auto"
      element.style.fontSize = "16px"

      // Globaler CSS-Sanitizer (verhindert mask/backdrop/blur im Export)
      const sanitizerStyle = document.createElement("style")
      sanitizerStyle.id = "pdf-sanitizer"
      sanitizerStyle.textContent = `
        * {
          -webkit-backdrop-filter: none !important;
          backdrop-filter: none !important;
          -webkit-mask-image: none !important;
          mask-image: none !important;
          mix-blend-mode: normal !important;
        }
        [class*="backdrop-blur"], .backdrop-blur { -webkit-backdrop-filter: none !important; backdrop-filter: none !important; }
        [class*="mask-"], [style*="mask"], .mask { -webkit-mask-image: none !important; mask-image: none !important; }
        [class*="bg-white/"], [class*="bg-white\\/"] { background-color: rgba(255,255,255,0.98) !important; }
        [class*="shadow"], .shadow { box-shadow: none !important; }
      `
      document.head.appendChild(sanitizerStyle)

      // KRITISCH: Alle problematischen CSS-Eigenschaften entfernen und durch solide Alternativen ersetzen
      const removeProblematicStyles = (el: HTMLElement) => {
        // Entferne alle Filter und Transparenzen
        el.style.backdropFilter = "none"
        ;(el.style as any).webkitBackdropFilter = "none"
        el.style.filter = "none"
        el.style.transform = "none"
        el.style.transition = "none"
        el.style.animation = "none"
        el.style.opacity = "1"
        el.style.mixBlendMode = "normal"
        ;(el.style as any).webkitMaskImage = "none"
        el.style.maskImage = "none"
        
        // Fixed/Sticky lösen, hohe z-index neutralisieren
        const cs = window.getComputedStyle(el)
        if (cs.position === "fixed" || cs.position === "sticky") {
          el.style.position = "static"
          el.style.top = "auto"
          el.style.left = "auto"
          el.style.right = "auto"
          el.style.bottom = "auto"
        }
        const z = Number.parseInt(cs.zIndex || "0", 10)
        if (!Number.isNaN(z) && z >= 10000) {
          el.style.zIndex = "auto"
        }
        
        // Stelle sicher, dass der Hintergrund sichtbar ist
        if (cs.backgroundColor === "rgba(0, 0, 0, 0)" || cs.backgroundColor === "transparent") {
          el.style.backgroundColor = "white"
        }
        
        // Entferne alle rgba/transparente Hintergründe
        if (el.style.background && el.style.background.includes("rgba")) {
          el.style.background = "white"
        }
      }

      // Alle Elemente durchgehen und problematische Styles entfernen
      const allElements = element.querySelectorAll("*")
      allElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          removeProblematicStyles(el)
        }
      })

      // Spezielle Behandlung für Hero-Sektion - das ist der kritische Bereich
      const heroSection = element.querySelector("section:first-of-type") as HTMLElement
      if (heroSection) {
        heroSection.style.minHeight = "auto"
        heroSection.style.height = "auto"
        heroSection.style.paddingTop = "4rem"
        heroSection.style.paddingBottom = "4rem"
        heroSection.style.display = "flex"
        heroSection.style.flexDirection = "column"
        heroSection.style.justifyContent = "center"
        heroSection.style.alignItems = "center"
        heroSection.style.background = "linear-gradient(135deg, #282550 0%, #1a1a38 100%)"

        // KRITISCH: Hero-Boxen mit soliden Farben ersetzen
        const heroBoxes = heroSection.querySelectorAll('[class*="bg-white/"], [class*="bg-white\\/"]')
        heroBoxes.forEach((box) => {
          if (box instanceof HTMLElement) {
            // Entferne alle problematischen Styles
            box.style.backdropFilter = "none"
            ;(box.style as any).webkitBackdropFilter = "none"
            box.style.filter = "none"
            
            // Setze solide, sichtbare Farben
            box.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
            box.style.border = "2px solid rgba(255, 255, 255, 0.98)"
            box.style.color = "#1a1a38"
            box.style.fontWeight = "600"
            box.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)"
            
            // Stelle sicher, dass der Text sichtbar ist
            const textElements = box.querySelectorAll("span, div, p")
            textElements.forEach((textEl) => {
              if (textEl instanceof HTMLElement) {
                textEl.style.color = "#1a1a38"
                textEl.style.textShadow = "none"
              }
            })
            
            // Icons sichtbar machen
            const icons = box.querySelectorAll("svg")
            icons.forEach((icon) => {
              if (icon instanceof HTMLElement) {
                icon.style.color = "#1a1a38"
                icon.style.fill = "#1a1a38"
                icon.style.stroke = "#1a1a38"
              }
            })
          }
        })

        // Zusätzliche Sicherheit: Alle Elemente in der Hero-Sektion
        const heroElements = heroSection.querySelectorAll("*")
        heroElements.forEach((el) => {
          if (el instanceof HTMLElement) {
            const computedStyle = window.getComputedStyle(el)
            
            // Wenn ein Element transparent ist, mache es sichtbar
            if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)" || 
                computedStyle.backgroundColor === "transparent") {
              el.style.backgroundColor = "rgba(255, 255, 255, 0.9)"
            }
            
            // Entferne alle backdrop-filter
            el.style.backdropFilter = "none"
            ;(el.style as any).webkitBackdropFilter = "none"
          }
        })
      }

      // Alle anderen Sektionen sicher machen
      const allSections = element.querySelectorAll("section")
      allSections.forEach((section) => {
        if (section instanceof HTMLElement) {
          section.style.minHeight = "auto"
          section.style.height = "auto"
          
          // Stelle sicher, dass alle Sektionen einen sichtbaren Hintergrund haben
          const computedStyle = window.getComputedStyle(section)
          if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)" || 
              computedStyle.backgroundColor === "transparent") {
            section.style.backgroundColor = "white"
          }
        }
      })

      // Alle Karten und Container sicher machen
      const cardElements = element.querySelectorAll(".bg-white, [class*='rounded'], [class*='shadow']")
      cardElements.forEach((cardEl) => {
        if (cardEl instanceof HTMLElement) {
          cardEl.style.backgroundColor = "white"
          cardEl.style.border = "1px solid #e2e8f0"
          cardEl.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
          cardEl.style.backdropFilter = "none"
          ;(cardEl.style as any).webkitBackdropFilter = "none"
        }
      })

      // Warte auf Layout-Anpassung
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Canvas erstellen mit optimierten Einstellungen
      const canvas = await html2canvas(element, {
        scale: 2.0,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: "#ffffff",
        height: element.scrollHeight,
        windowHeight: element.scrollHeight,
        letterRendering: true,
        removeContainer: true,
        foreignObjectRendering: false,
        ignoreElements: (el: Element) => {
          // Browser-Extension-Overlays und extrem hohe z-index Elemente ignorieren
          const attributes = `${el.id} ${Array.from(el.classList || []).join(" ")}`.toLowerCase()
          if (attributes.includes("plasmo") || attributes.includes("csui") || attributes.includes("floating-icon") || attributes.includes("extension") || (el as any).dataset?.plasmoRoot) {
            return true
          }
          const cs = window.getComputedStyle(el as Element)
          const z = Number.parseInt(cs.zIndex || "0", 10)
          if (!Number.isNaN(z) && z >= 2147480000) return true
          return false
        },
        onclone: (clonedDoc: Document) => {
          // Zusätzliche Optimierungen im geklonten Dokument
          const clonedElement = clonedDoc.getElementById(targetId)
          if (clonedElement) {
            // Sanitizer-Styles auch ins geklonte Dokument
            const clonedSanitizer = clonedDoc.createElement("style")
            clonedSanitizer.textContent = sanitizerStyle.textContent
            clonedDoc.head.appendChild(clonedSanitizer)

            const allClonedElements = clonedElement.querySelectorAll("*")
            allClonedElements.forEach((el) => {
              if (el instanceof HTMLElement) {
                removeProblematicStyles(el)
                
                // Stelle sicher, dass alle Elemente sichtbar sind
                const computedStyle = clonedDoc.defaultView?.getComputedStyle(el)
                if (computedStyle && (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)" || computedStyle.backgroundColor === "transparent")) {
                  el.style.backgroundColor = "white"
                }
              }
            })

            // Offensichtliche Extension-Overlays im geklonten DOM entfernen
            const overlaySelectors = [
              '[id*="plasmo"]', '[class*="plasmo"]', '[id*="csui"]', '[class*="csui"]',
              '[id*="floating-icon"]', '[class*="floating-icon"]', '[data-plasmo-root]', '[data-extension-host]'
            ]
            overlaySelectors.forEach((sel) => {
              clonedElement.querySelectorAll(sel).forEach((node) => node.remove())
            })

            // Hero-Sektion im geklonten Dokument zusätzlich sichern
            const clonedHeroSection = clonedElement.querySelector("section:first-of-type")
            if (clonedHeroSection && clonedHeroSection instanceof HTMLElement) {
              clonedHeroSection.style.background = "linear-gradient(135deg, #282550 0%, #1a1a38 100%)"
              
              const clonedHeroBoxes = clonedHeroSection.querySelectorAll('[class*="bg-white/"], [class*="bg-white\\/"]')
              clonedHeroBoxes.forEach((box) => {
                if (box instanceof HTMLElement) {
                  box.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
                  box.style.border = "2px solid rgba(255, 255, 255, 0.98)"
                  box.style.color = "#1a1a38"
                  box.style.backdropFilter = "none"
                  ;(box.style as any).webkitBackdropFilter = "none"
                }
              })

              // Entferne alle mask-images sicherheitshalber
              const masked = clonedHeroSection.querySelectorAll('[style*="mask"], [class*="mask-"]')
              masked.forEach((m) => {
                if (m instanceof HTMLElement) {
                  ;(m.style as any).webkitMaskImage = "none"
                  m.style.maskImage = "none"
                }
              })
            }
          }
        },
      })

      if (type === "continuous") {
        // Kontinuierlicher Export
        const imgWidth = 210
        const imgHeight = Math.min((canvas.height * imgWidth) / canvas.width, 8000)

        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: [210, imgHeight],
          compress: true,
        })

        const imgData = canvas.toDataURL("image/jpeg", 0.9)
        pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight, undefined, "FAST")

        const continuousFilename = filename.replace(".pdf", "-kontinuierlich.pdf")
        pdf.save(continuousFilename)
        toast.success("PDF erfolgreich erstellt")
      } else {
        // Standard A4-Export
        const imgWidth = 210
        const pageHeight = 297
        const imgHeight = (canvas.height * imgWidth) / canvas.width

        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
          compress: true,
        })

        const imgData = canvas.toDataURL("image/jpeg", 0.9)
        const pagesCount = Math.ceil(imgHeight / pageHeight)

        // Erste Seite
        pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight, undefined, "FAST")

        // Weitere Seiten
        for (let i = 1; i < pagesCount; i++) {
          const position = -pageHeight * i
          pdf.addPage()
          pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, "FAST")
        }

        pdf.save(filename)
        toast.success("PDF erfolgreich erstellt")
      }

      // Styles wiederherstellen und Sanitizer entfernen
      element.style.cssText = originalStyles.element
      document.body.style.cssText = originalStyles.body
      if (sanitizerStyle.parentNode) sanitizerStyle.parentNode.removeChild(sanitizerStyle)
      window.scrollTo(0, originalScrollPos)

    } catch (error) {
      console.error("Fehler beim PDF-Export:", error)
      toast.error("PDF-Export fehlgeschlagen")
    } finally {
      setIsGenerating(false)
    }
  }, [targetId, filename])

  return (
    <div className="fixed bottom-6 right-6 shadow-lg z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            disabled={isGenerating} 
            className="bg-[#282550] hover:bg-[#1a1a38] text-white" 
            size="lg"
            onClick={() => generatePDF(exportType)}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {exportType === "continuous" ? "Kontinuierlich..." : "PDF wird erstellt..."}
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Als PDF exportieren
                <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuItem 
            onClick={() => generatePDF("standard")} 
            className="cursor-pointer"
          >
            <FileText className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span className="font-medium">Standard (A4-Seiten)</span>
              <span className="text-xs text-slate-500">Optimiert für Druck mit Seitenumbrüchen</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => generatePDF("continuous")} 
            className="cursor-pointer"
          >
            <Monitor className="mr-2 h-4 w-4" />
            <div className="flex flex-col">
              <span className="font-medium">Kontinuierlich</span>
              <span className="text-xs text-slate-500">Eine lange Seite ohne Umbrüche</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
