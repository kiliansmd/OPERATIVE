import UploadIngest from "@/components/upload-ingest"

export default function ImportPage() {
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
          <UploadIngest />
        </div>
      </section>
    </main>
  )
}
