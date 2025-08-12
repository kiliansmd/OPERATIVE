"use client"

import { useEffect, useMemo, useState } from "react"
import type { CandidateProfile } from "@/lib/schema"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2, Download, Eye } from "lucide-react"

type Props = {
  initial: CandidateProfile
  onChange?: (value: CandidateProfile) => void
}

export default function CandidateEditor({ initial, onChange }: Props) {
  const [data, setData] = useState<CandidateProfile>(normalize(initial))
  const [showJson, setShowJson] = useState(false)

  useEffect(() => {
    onChange?.(data)
  }, [data, onChange])

  function normalize(p: CandidateProfile): CandidateProfile {
    return {
      ...p,
      profileSummary: p.profileSummary ?? [""],
      qualifications: p.qualifications ?? [],
      personalDetails: p.personalDetails ?? [],
      itSkills: p.itSkills ?? [],
      languages: p.languages ?? [],
      education: p.education ?? [],
    }
  }

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "kandidatenprofil.json"
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  const add = (key: keyof CandidateProfile) => {
    setData((prev) => {
      const copy: any = { ...prev }
      if (key === "profileSummary") copy.profileSummary = [...(copy.profileSummary ?? []), ""]
      if (key === "itSkills") copy.itSkills = [...(copy.itSkills ?? []), { skill: "", level: "" }]
      if (key === "languages") copy.languages = [...(copy.languages ?? []), { lang: "", level: "" }]
      if (key === "education") copy.education = [...(copy.education ?? []), ""]
      if (key === "personalDetails") copy.personalDetails = [...(copy.personalDetails ?? []), { label: "", value: "" }]
      return copy
    })
  }

  const remove = (key: keyof CandidateProfile, idx: number) => {
    setData((prev) => {
      const copy: any = { ...prev }
      copy[key] = [...(copy[key] ?? [])]
      copy[key].splice(idx, 1)
      return copy
    })
  }

  const JSONPreview = useMemo(() => JSON.stringify(data, null, 2), [data])

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-[#282550]">Profilvorschau bearbeiten</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Titel</Label>
              <Input
                value={data.title || ""}
                onChange={(e) => setData((p) => ({ ...p, title: e.target.value }))}
                placeholder="z. B. Projektingenieur Sondermaschinenbau | Konstruktion ..."
              />
            </div>
            <div>
              <Label>Verfügbarkeit</Label>
              <Input
                value={data.availability || ""}
                onChange={(e) => setData((p) => ({ ...p, availability: e.target.value }))}
                placeholder="z. B. Start in 4 Wochen"
              />
            </div>
            <div>
              <Label>Gehalt</Label>
              <Input
                value={data.salaryExpectation || ""}
                onChange={(e) => setData((p) => ({ ...p, salaryExpectation: e.target.value }))}
                placeholder="z. B. 80.000€ brutto/Jahr"
              />
            </div>
            <div>
              <Label>Standort</Label>
              <Input
                value={data.location || ""}
                onChange={(e) => setData((p) => ({ ...p, location: e.target.value }))}
                placeholder="z. B. NRW, remote/hybrid"
              />
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Erfahrung (Jahre)</Label>
              <Input
                value={data.experienceYears || ""}
                onChange={(e) => setData((p) => ({ ...p, experienceYears: e.target.value }))}
                placeholder="z. B. 8+ Jahre"
              />
            </div>
            <div>
              <Label>Kontaktperson (fix)</Label>
              <Input
                value={data.contactPerson?.name || ""}
                onChange={(e) => setData((p) => ({ ...p, contactPerson: { ...p.contactPerson, name: e.target.value } }))}
                placeholder="z. B. Frau Daniela Sentesch"
              />
            </div>
            <div>
              <Label>Kontakt E‑Mail</Label>
              <Input
                value={data.contactPerson?.email || ""}
                onChange={(e) => setData((p) => ({ ...p, contactPerson: { ...p.contactPerson, email: e.target.value } }))}
                placeholder="...@getexperts.io"
              />
            </div>
            <div>
              <Label>Kontakt Telefon</Label>
              <Input
                value={data.contactPerson?.phone || ""}
                onChange={(e) => setData((p) => ({ ...p, contactPerson: { ...p.contactPerson, phone: e.target.value } }))}
                placeholder="+49 ..."
              />
            </div>
          </section>

          <section className="space-y-2">
            <Label>Profilzusammenfassung</Label>
            {(data.profileSummary ?? []).map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <Textarea
                  value={line}
                  onChange={(e) =>
                    setData((p) => {
                      const list = [...(p.profileSummary ?? [])]
                      list[i] = e.target.value
                      return { ...p, profileSummary: list }
                    })
                  }
                  placeholder="Kurzer, prägnanter Satz zur Erfahrung/Expertise"
                />
                <Button variant="ghost" size="icon" onClick={() => remove("profileSummary", i)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => add("profileSummary")}>
              <Plus className="h-4 w-4 mr-1" /> Zeile hinzufügen
            </Button>
          </section>

          <section className="space-y-2">
            <Label>IT‑Skills</Label>
            {(data.itSkills ?? []).map((row, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-2 items-center">
                <Input
                  value={row.skill}
                  onChange={(e) =>
                    setData((p) => {
                      const list = [...(p.itSkills ?? [])]
                      list[i] = { ...list[i], skill: e.target.value }
                      return { ...p, itSkills: list }
                    })
                  }
                  placeholder="Skill"
                />
                <div className="flex gap-2">
                  <Input
                    value={row.level ?? ""}
                    onChange={(e) =>
                      setData((p) => {
                        const list = [...(p.itSkills ?? [])]
                        list[i] = { ...list[i], level: e.target.value }
                        return { ...p, itSkills: list }
                      })
                    }
                    placeholder="Level/Beschreibung"
                  />
                  <Button variant="ghost" size="icon" onClick={() => remove("itSkills", i)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => add("itSkills")}>
              <Plus className="h-4 w-4 mr-1" /> Skill hinzufügen
            </Button>
          </section>

          <section className="space-y-2">
            <Label>Sprachen</Label>
            {(data.languages ?? []).map((row, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-2 items-center">
                <Input
                  value={row.lang}
                  onChange={(e) =>
                    setData((p) => {
                      const list = [...(p.languages ?? [])]
                      list[i] = { ...list[i], lang: e.target.value }
                      return { ...p, languages: list }
                    })
                  }
                  placeholder="Sprache"
                />
                <div className="flex gap-2">
                  <Input
                    value={row.level ?? ""}
                    onChange={(e) =>
                      setData((p) => {
                        const list = [...(p.languages ?? [])]
                        list[i] = { ...list[i], level: e.target.value }
                        return { ...p, languages: list }
                      })
                    }
                    placeholder="Niveau"
                  />
                  <Button variant="ghost" size="icon" onClick={() => remove("languages", i)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => add("languages")}>
              <Plus className="h-4 w-4 mr-1" /> Sprache hinzufügen
            </Button>
          </section>

          <section className="space-y-2">
            <Label>Ausbildung</Label>
            {(data.education ?? []).map((line, i) => (
              <div key={i} className="flex items-center gap-2">
                <Input
                  value={line}
                  onChange={(e) =>
                    setData((p) => {
                      const list = [...(p.education ?? [])]
                      list[i] = e.target.value
                      return { ...p, education: list }
                    })
                  }
                  placeholder="z. B. M.Sc. Maschinenbau, KIT (2018)"
                />
                <Button variant="ghost" size="icon" onClick={() => remove("education", i)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => add("education")}>
              <Plus className="h-4 w-4 mr-1" /> Eintrag hinzufügen
            </Button>
          </section>

          <div className="flex gap-2">
            <Button onClick={downloadJSON}>
              <Download className="h-4 w-4 mr-1" /> Als JSON speichern
            </Button>
            <Button variant="outline" onClick={() => setShowJson((s) => !s)}>
              <Eye className="h-4 w-4 mr-1" /> JSON {showJson ? "ausblenden" : "anzeigen"}
            </Button>
          </div>

          {showJson && (
            <pre className="bg-slate-950 text-slate-100 text-xs md:text-sm p-4 rounded-lg overflow-auto max-h-[480px]">
{JSONPreview}
            </pre>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
