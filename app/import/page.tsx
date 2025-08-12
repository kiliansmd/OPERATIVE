"use client"

import UploadIngest from "@/components/upload-ingest"
import CandidateEditor from "@/components/candidate-editor"
import { useState } from "react"
import type { CandidateProfile } from "@/lib/schema"

export default function ImportPage() {
  const [profile, setProfile] = useState<CandidateProfile | null>(null)

  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 md:px-10 py-10 md:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#282550] mb-3">
            Dokumente hochladen und ins Zielformat überführen
          </h1>
          <p className="text-slate-600 mb-8">
            Lade Lebensläufe, Profilunterlagen oder Zusatzinformationen hoch. Wir extrahieren die Inhalte, anonymisieren
            Firmennamen in bezeichnende Begriffe und strukturieren alles in das vorhandene Zielformat.
          </p>

          {/* Upload */}
          <UploadIngest onResult={(d) => setProfile(d)} />

          {/* Editor */}
          {profile && (
            <div className="mt-10">
              <CandidateEditor initial={profile} onChange={setProfile} />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
