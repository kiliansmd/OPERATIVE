"use client"

import { useCallback, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Loader2, Upload, FileText, X, Copy, Download } from 'lucide-react'

type IngestResponse = {
  ok: boolean
  data?: unknown
  error?: string
}

export default function UploadIngest() {
  const [files, setFiles] = useState<File[]>([])
  const [notes, setNotes] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<unknown | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const onDrop = useCallback((ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault()
    const dropped = Array.from(ev.dataTransfer.files || [])
    if (dropped.length) {
      setFiles((prev) => [...prev, ...dropped])
    }
  }, [])

  const onBrowse = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || [])
    if (selected.length) {
      setFiles((prev) => [...prev, ...selected])
    }
  }, [])

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const mimeHelp = useMemo(
    () => "Erlaubt: PDF, DOCX, TXT, MD. Mehrere Dateien möglich.",
    []
  )

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setResult(null)
      const fd = new FormData()
      files.forEach((f) => fd.append("files", f))
      fd.append("notes", notes)

      const res = await fetch("/api/ingest", {
        method: "POST",
        body: fd,
      })
      const json: IngestResponse = await res.json()
      if (!json.ok) {
        throw new Error(json.error || "Unbekannter Fehler")
      }
      setResult(json.data ?? null)
    } catch (err: any) {
      setResult({ error: err?.message || "Fehler bei der Verarbeitung" })
    } finally {
      setLoading(false)
    }
  }

  const copyJSON = async () => {
    if (!result) return
    await navigator.clipboard.writeText(JSON.stringify(result, null, 2))
  }

  const downloadJSON = () => {
    if (!result) return
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "kandidatenprofil.json"
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-[#282550]">Upload</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div
            className="border-2 border-dashed border-slate-300 rounded-lg p-6 md:p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors"
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
          >
            <Upload className="mx-auto h-8 w-8 text-slate-500 mb-3" />
            <div className="font-medium text-slate-700 mb-1">Dateien hierher ziehen</div>
            <div className="text-sm text-slate-500 mb-4">{mimeHelp}</div>
            <Button
              type="button"
              variant="secondary"
              onClick={() => inputRef.current?.click()}
              className="bg-white"
            >
              Dateien auswählen
            </Button>
            <Input
              ref={inputRef}
              type="file"
              accept=".pdf,.doc,.docx,.txt,.md,.markdown"
              multiple
              className="hidden"
              onChange={onBrowse}
            />
          </div>

          {files.length > 0 && (
            <div className="space-y-3">
              <Label className="text-slate-700">Ausgewählte Dateien</Label>
              <div className="flex flex-wrap gap-2">
                {files.map((f, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 rounded-full pl-2 pr-2.5 py-1"
                  >
                    <FileText className="h-4 w-4 text-slate-500" />
                    <span className="text-xs">{f.name}</span>
                    <button
                      className="p-0.5 rounded hover:bg-slate-200"
                      onClick={() => removeFile(i)}
                      aria-label="Datei entfernen"
                      title="Datei entfernen"
                    >
                      <X className="h-3.5 w-3.5 text-slate-500" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-slate-700">
              Zusätzliche Informationen (optional)
            </Label>
            <Textarea
              id="notes"
              placeholder="Ergänzungen, besondere Wünsche, Zielrollen, Region, Verfügbarkeit, Gehaltsrahmen..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[120px]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="text-[#282550] border-[#282550]">
              Anonymisierung aktiv (Firmennamen → bezeichnende Begriffe)
            </Badge>
            <Badge variant="outline" className="text-emerald-700 border-emerald-700">
              Zielformat: Kandidatenprofil JSON
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={handleSubmit} disabled={loading || files.length === 0}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verarbeiten...
                </>
              ) : (
                "Verarbeiten"
              )}
            </Button>
            <span className="text-xs text-slate-500">Die Verarbeitung erfolgt serverseitig.</span>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="text-[#282550]">Ergebnis (Zielformat)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-3">
              <Button variant="outline" size="sm" onClick={copyJSON}>
                <Copy className="h-4 w-4 mr-1" /> Kopieren
              </Button>
              <Button variant="outline" size="sm" onClick={downloadJSON}>
                <Download className="h-4 w-4 mr-1" /> Download JSON
              </Button>
            </div>
            <pre className="bg-slate-950 text-slate-100 text-xs md:text-sm p-4 rounded-lg overflow-auto max-h-[480px]">
{JSON.stringify(result, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
