import type { Metadata } from "next"
import Image from "next/image"
import {
  MapPin,
  Clock,
  Euro,
  Phone,
  Mail,
  Globe,
  Check,
  ChevronRight,
  User,
  Briefcase,
  GraduationCap,
  FileText,
  Languages,
  Monitor,
  Settings,
  Target,
  Wrench,
  Ruler,
  Hammer,
  Layout,
  Calculator,
} from "lucide-react"
import SimplePDFExporter from "@/components/simple-pdf-exporter"

export const metadata: Metadata = {
  title: "Projektingenieur Sondermaschinenbau | B.Eng. | 8+ Jahre | MT",
  description:
    "Anonymes Kandidatenprofil: Projektingenieur (Sondermaschinenbau) mit 8+ Jahren Erfahrung in Konstruktion, Anlagen-/Hallenlayout, Prototypen bis Serienreife, Anpassung Standardmaschinen, Kalkulation & Projektplanung. B.Eng. Maschinenbau (DHBW). Wunschgehalt 66.000€, Start in 1 Monat.",
}

const candidateData = {
  initials: "MT",
  title: "Projektingenieur Sondermaschinenbau | Konstruktion & Layout | B.Eng. | 8+ Jahre",
  salaryExpectation: "66.000€ brutto/Jahr",
  availability: "Start möglich mit 1 Monat Vorlauf",
  location: "Süddeutschland (Präsenz/Hybrid)",
  experienceYears: "8+ Jahre Projektierung & Konstruktion im Sondermaschinenbau",
  contactPerson: {
    name: "Frau Daniela Sentesch",
    phone: "+49 156 7816 2538",
    email: "daniela.sentesch@getexperts.io",
    website: "www.getexperts.io",
  },
  profileSummary: [
    "Erfahrener Projektingenieur im Sondermaschinenbau mit durchgängiger Verantwortung von der Klärung der Kundenanforderungen (Lasten-/Pflichtenheft) über die 3D-Konstruktion komplexer Baugruppen bis hin zur Planung kompletter Anlagen und Hallenlayouts.",
    "Stark in der Entwicklung von Prototypen inklusive Praxistests bis zur Serienreife sowie in der kundenspezifischen Anpassung von Standardmaschinen. Strukturierte Kalkulation und Projektplanung (Meilensteine, Termine, Ressourcen).",
    "Sichere Kommunikation mit Kunden, Lieferanten und internen Schnittstellen. Fundierte CAD-Kompetenz (Creo Parametric, Inventor, CATIA V5) sowie solide Tool-Praxis mit MS Office, MS Project und Mathcad Prime.",
  ],
  topSkills: [
    {
      id: "1",
      name: "Projektierung & Kundenanforderungen",
      description:
        "Eigenverantwortliche Bearbeitung von Projekten, Lasten-/Pflichtenheft-Klärung, Abstimmung mit Kunden und internen Fachbereichen.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      id: "2",
      name: "Konstruktion komplexer Baugruppen",
      description:
        "3D-CAD-Konstruktion im Sondermaschinenbau, fertigungsgerechte Detaillierung, Varianten- und Änderungsmanagement.",
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      id: "3",
      name: "Anlagen- & Hallenlayout",
      description:
        "Planung kompletter Anlagen und Hallenlayouts nach kundenspezifischen Vorgaben inklusive Materialfluss- und Aufstellkonzepten.",
      icon: <Layout className="h-6 w-6" />,
    },
    {
      id: "4",
      name: "Prototypen bis Serienreife",
      description:
        "Entwicklung von Prototypen, Praxistests, Iterationen und Überführung in die Serie mit sauberer Dokumentation.",
      icon: <Ruler className="h-6 w-6" />,
    },
    {
      id: "5",
      name: "Kalkulation & Projektplanung",
      description: "Erstellung von Kalkulationen, Terminplänen und Roadmaps; Tool-Erfahrung mit MS Project.",
      icon: <Calculator className="h-6 w-6" />,
    },
  ],
  qualifications: [
    "Bachelor of Engineering (Maschinenbau), DHBW Ravensburg (Campus Friedrichshafen)",
    "Studienrichtung: Konstruktion & Entwicklung | Schwerpunkt: Anlagenplanung",
    "Abschlussarbeit: Konstruktion einer Rohrbrennschneidemaschine mit automatischer Beladung (Note 1,4)",
    "CAD: Creo Parametric 2.0/3.0, Autodesk Inventor, CATIA V5",
    "Tools: MS Office, MS Project, Mathcad Prime",
  ],
  personalDetails: [
    { label: "Verfügbarkeit", value: "Start mit 1 Monat Vorlauf" },
    { label: "Wunschgehalt", value: "66.000€ brutto/Jahr" },
    { label: "Standort", value: "Süddeutschland (Präsenz/Hybrid)" },
    { label: "Rollenfokus", value: "Projektierung, Konstruktion, Anlagen-/Hallenlayout" },
  ],
  techSkills: [
    { skill: "CAD", level: "Creo Parametric 2.0/3.0, Inventor, CATIA V5" },
    { skill: "Projektplanung", level: "MS Project, Kalkulation, Termin-/Ressourcenplanung" },
    { skill: "Dokumentation", level: "Lasten-/Pflichtenheft, Stücklisten, Zeichnungen" },
    { skill: "Methoden", level: "Änderungswesen, Variantenmanagement, Prototypen-Iterationen" },
  ],
  languages: [
    { lang: "Deutsch", level: "Muttersprache" },
    { lang: "Englisch", level: "Fließend (B2 Zertifikat 06/2013)" },
    { lang: "Spanisch", level: "Fortgeschritten (C1 Zertifikat 06/2013)" },
  ],
  education: [
    "B.Eng. Maschinenbau (DHBW Ravensburg, Campus Friedrichshafen), 10/2014 – 09/2017",
    "Abitur (Technisches Gymnasium, Ravensburg), 2010 – 2013",
    "Realschulabschluss (Bad Saulgau), 2004 – 2010",
  ],
  keyProjects: [
    {
      id: "p1",
      title: "Komplettanlagen & Hallenlayout-Planung",
      category: "Anlagenlayout | Projektierung",
      description:
        "Planung kompletter Anlagen und Hallenlayouts nach kundenspezifischen Vorgaben. Definition von Materialfluss, Aufstellkonzept und Schnittstellen.",
      tags: ["Layout", "Materialfluss", "Schnittstellen", "Terminplanung"],
      scope: "Übersichtliche, skalierbare Layouts mit klarer Montage- und Inbetriebnahmegrundlage.",
      icon: <Layout className="h-6 w-6" />,
    },
    {
      id: "p2",
      title: "Prototypenentwicklung bis Serienreife",
      category: "Konstruktion | Entwicklung",
      description:
        "Entwicklung einzelner Prototypen inklusive Praxistests und Iterationen. Stabiler Übergang in die Serie mit dokumentierten Anpassungen.",
      tags: ["Prototypen", "Tests", "Serienreife", "Dokumentation"],
      scope: "Verkürzte Anlaufzeiten und robuste Serienumsetzung.",
      icon: <Ruler className="h-6 w-6" />,
    },
    {
      id: "p3",
      title: "Kundenspezifische Anpassung von Standardmaschinen",
      category: "Konstruktion",
      description: "Modifikation von Standardmaschinen nach Kundenwunsch, Variantensteuerung und Änderungsmanagement.",
      tags: ["Standardmaschinen", "Varianten", "Änderungswesen"],
      scope: "Hohe Kundenzufriedenheit durch passgenaue Lösungen.",
      icon: <Wrench className="h-6 w-6" />,
    },
  ],
  // Firmennamen anonymisiert in bezeichnende Begriffe
  experienceTimeline: [
    {
      id: "exp_current",
      dateRange: "09/2017 – Aktuell",
      title: "Projektingenieur, Mittelständischer Hersteller für Sondermaschinen (Süddeutschland)",
      description:
        "Eigenverantwortliche Projektbearbeitung, Konstruktion komplexer Baugruppen, Lastenheftabstimmung, Anlagen-/Hallenlayout, Prototypen bis Serienreife, Anpassung von Standardmaschinen, Kalkulation und Projektpläne.",
    },
    {
      id: "exp_dual",
      dateRange: "10/2014 – 09/2017",
      title: "Duales Studium Maschinenbau, Mittelständischer Hersteller für Sondermaschinen (Süddeutschland)",
      description:
        "CAD-Modellierung (Creo Parametric 2.0), Zeichnungserstellung/Änderungen, Ingenieuraufgaben sowie Projekt-/Studienarbeiten im Rahmen des dualen Studiums.",
    },
    {
      id: "exp_helper1",
      dateRange: "12/2013 – 10/2014",
      title: "Hilfsarbeiter (Montage), Mittelständischer Hersteller für Sondermaschinen (Süddeutschland)",
      description:
        "Vor- und Endmontage von Maschinen/Anlagen, Schweißen kleiner Schweißbaugruppen, Montageeinsätze beim Kunden.",
    },
    {
      id: "exp_helper2",
      dateRange: "06/2013 – 12/2013",
      title: "Hilfskraft Lager/Logistik, Maschinenbau-Zulieferer (Süddeutschland)",
      description:
        "Kommissionieren, Be-/Entladung, Inventuren, Fehlteilemanagement, Bestandsprüfung und Stammdatenpflege.",
    },
  ],
  careerGoals: [
    {
      title: "Verantwortung in Projektierung & Konstruktion",
      description:
        "Vertiefung in der eigenständigen Projektabwicklung und Führung größerer Arbeitspakete bis zur Serienreife.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Anlagenplanung & Layout",
      description:
        "Ausbau der Expertise in Anlagen- und Hallenlayouts mit Fokus auf Effizienz und Montagefreundlichkeit.",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      title: "Standardplattformen weiterentwickeln",
      description: "Skalierbare Variantenkonzepte und modulare Anpassungen für kundenspezifische Lösungen.",
      icon: <Wrench className="h-6 w-6" />,
    },
  ],
  interests: [
    { name: "Konstruktion & Entwicklung", icon: <Wrench className="h-7 w-7" /> },
    { name: "Anlagen- & Hallenlayout", icon: <Layout className="h-7 w-7" /> },
    { name: "Prototypen & Tests", icon: <Ruler className="h-7 w-7" /> },
    { name: "Montage & Anlauf", icon: <Hammer className="h-7 w-7" /> },
  ],
  personalityTraits: [
    "Strukturiert und qualitätsorientiert in der Projektabwicklung",
    "Kommunikativ und kundennah in Anforderungs- und Abstimmungsphasen",
    "Zuverlässig in Termin-, Kosten- und Dokumentationsfragen",
    "Hands-on‑Mentalität in Montage- und Anlaufbelangen",
  ],
}

export default function CandidateProfile() {
  const hasItems = (arr: any[] | undefined) => arr && arr.length > 0
  const card = "bg-white p-6 sm:p-7 rounded-xl shadow-md border border-slate-200/70"
  const accentCard = "bg-white p-7 rounded-xl shadow-lg border-l-4 border-[#282550]"
  const iconBadge = "p-2.5 rounded-lg bg-[#282550]/10 text-[#282550] shrink-0"

  return (
    <div className="min-h-screen bg-white font-sans" id="candidate-profile">
      {/* Floating PDF Export Button (hidden in print) */}
      <div className="no-print">
        <SimplePDFExporter targetId="candidate-profile" filename="kandidatenprofil-mt.pdf" />
      </div>

      {/* Cover Page */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#282550] to-[#1a1a38] text-center overflow-hidden page-break-after">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/interwoven-algorithms.png')] bg-no-repeat bg-cover" />
        </div>

        {/* Initials Badge at the head of the document */}
        <div className="absolute top-6 right-6 z-20">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 ring-1 ring-white/30 flex items-center justify-center text-white font-bold tracking-widest">
            {candidateData.initials}
          </div>
        </div>

        {/* Faint initials watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div className="text-[28vw] md:text-[20vw] font-extrabold text-white/5 leading-none">
            {candidateData.initials}
          </div>
        </div>

        {/* Logo */}
        <div className="absolute top-8 left-8 z-10">
          <Image src="/getexperts-logo.png" alt="getexperts Logo" width={200} height={64} className="mb-8" />
        </div>

        <div className="max-w-4xl mx-auto z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-4 backdrop-blur-sm">
            Sondermaschinenbau | Projektierung | Konstruktion | Layout
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight text-balance leading-tight">
            {candidateData.title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-white bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-white/30">
              <Euro className="h-5 w-5 text-white flex-shrink-0" />
              <span className="text-base font-medium">Wunschgehalt: {candidateData.salaryExpectation}</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-white/30">
              <Clock className="h-5 w-5 text-white flex-shrink-0" />
              <span className="text-base font-medium">Verfügbar: {candidateData.availability}</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-white/30">
              <MapPin className="h-5 w-5 text-white flex-shrink-0" />
              <span className="text-base font-medium">Standort: {candidateData.location}</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-white/30">
              <Briefcase className="h-5 w-5 text-white flex-shrink-0" />
              <span className="text-base font-medium">Erfahrung: {candidateData.experienceYears}</span>
            </div>
          </div>
        </div>

        {candidateData.contactPerson && (
          <div className="absolute bottom-8 left-0 right-0 text-center z-10">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold text-slate-100 mb-1">Ihre Ansprechpartnerin</h3>
              <div className="flex flex-col items-center gap-2 text-slate-200 text-sm">
                <div className="font-semibold text-white">{candidateData.contactPerson.name}</div>
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{candidateData.contactPerson.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{candidateData.contactPerson.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>{candidateData.contactPerson.website}</span>
                  </div>
                </div>
                <span className="opacity-90">Start in 1 Monat & verhandlungsbereit</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Intro / Value Proposition */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#282550]/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#282550]/5 rounded-full translate-y-1/3 -translate-x-1/4" />

            <div className="z-10">
              <h2 className="text-2xl font-bold text-[#282550] mb-3 text-balance">
                Direkter Kontakt zum Projektingenieur
              </h2>
              <p className="text-slate-600 mb-4">
                Projektingenieur im Sondermaschinenbau mit Schwerpunkt Projektierung, Konstruktion komplexer Baugruppen,
                Anlagen- und Hallenlayout sowie Prototypenentwicklung bis zur Serienreife.
              </p>
              <ul className="mb-5 space-y-2">
                <li className="flex items-center gap-2 text-sm text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Süddeutschland – Präsenz/Hybrid</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Start: 1 Monat Vorlauf</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>CAD: Creo, Inventor, CATIA | Tools: MS Project, Mathcad</span>
                </li>
              </ul>
              <div className="inline-block px-6 py-2.5 bg-[#282550] text-white font-semibold rounded-lg text-sm md:text-base tracking-wide hover:bg-[#1a1a38] transition-colors cursor-pointer no-print">
                Projektingenieur jetzt anfragen
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 backdrop-blur-md relative">
              <div className="absolute inset-0 backdrop-blur-[6px] bg-white/50 z-10 flex items-center justify-center">
                <div className="bg-white/80 px-3 py-2 rounded-md shadow-sm flex items-center gap-2 text-[#282550] text-sm">
                  <Monitor className="h-4 w-4" />
                  <span className="font-medium">Kontaktdaten auf Anfrage verfügbar</span>
                </div>
              </div>
              <div className="space-y-4 relative">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={iconBadge}>
                      {i === 0 && <User className="h-5 w-5" />}
                      {i === 1 && <Mail className="h-5 w-5" />}
                      {i === 2 && <Phone className="h-5 w-5" />}
                      {i === 3 && <Briefcase className="h-5 w-5" />}
                      {i === 4 && <GraduationCap className="h-5 w-5" />}
                    </div>
                    <div>
                      <div
                        className={`h-4 bg-slate-300/70 rounded mb-1 ${
                          i === 0 ? "w-40" : i === 1 ? "w-56" : i === 2 ? "w-36" : i === 3 ? "w-48" : "w-52"
                        }`}
                      />
                      {i === 0 && <div className="h-3.5 bg-slate-200 rounded w-24" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {(hasItems(candidateData.topSkills) || hasItems(candidateData.qualifications)) && (
        <section className="py-16 md:py-20 px-6 md:px-8 bg-gradient-to-b from-slate-50 to-white page-break-after">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#282550] mb-3 text-center tracking-tight">
              Kernkompetenzen & Highlights
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">
              Projektierung, Konstruktion komplexer Baugruppen, Anlagen-/Hallenlayout sowie Prototypen bis Serienreife –
              mit klarer Kundenkommunikation und solider Planung.
            </p>

            {hasItems(candidateData.topSkills) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {candidateData.topSkills!.map((skill) => (
                  <div key={skill.id} className={`${card} border-t-4 border-[#282550] pt-4`}>
                    <div className="flex items-start gap-4 mb-3">
                      <div className={iconBadge}>{skill.icon}</div>
                      <h3 className="font-bold text-xl text-slate-800">{skill.name}</h3>
                    </div>
                    <p className="text-slate-700">{skill.description}</p>
                  </div>
                ))}
              </div>
            )}

            {hasItems(candidateData.qualifications) && (
              <div className={`${accentCard} mt-10`}>
                <h3 className="text-xl font-bold text-[#282550] mb-5">Qualifikationen</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {candidateData.qualifications!.map((qual, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-1.5 rounded-full bg-[#282550]/10 text-[#282550]">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-slate-800">{qual}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#282550] mb-3 text-center tracking-tight">Profilübersicht</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">
            Projektingenieur (B.Eng. Maschinenbau) mit Schwerpunkt Projektierung, Konstruktion und
            Anlagen-/Hallenlayout.
          </p>

          <div className="mb-10 bg-white p-6 md:p-7 rounded-xl shadow-sm border border-slate-200/70 keep-together">
            {candidateData.profileSummary!.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg text-slate-700 mb-4 last:mb-0 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 page-break-after">
            <div className={`${card} keep-together`}>
              <h3 className="text-xl font-bold text-[#282550] mb-4 flex items-center">
                <span className={`${iconBadge} mr-3`}>
                  <FileText className="h-5 w-5" />
                </span>
                Eckdaten & Konditionen
              </h3>
              <ul className="space-y-2.5 text-slate-800">
                {candidateData.personalDetails!.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-4 w-4 mt-1 text-[#282550]" />
                    <span>
                      {detail.label}: {detail.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${card} keep-together`}>
              <h3 className="text-xl font-bold text-[#282550] mb-4 flex items-center">
                <span className={`${iconBadge} mr-3`}>
                  <Settings className="h-5 w-5" />
                </span>
                Technische Fähigkeiten
              </h3>
              <ul className="space-y-2.5 text-slate-800">
                {candidateData.techSkills!.map((skillDetail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-4 w-4 mt-1 text-[#282550]" />
                    <span>
                      {skillDetail.skill} - {skillDetail.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${card} keep-together`}>
              <h3 className="text-xl font-bold text-[#282550] mb-4 flex items-center">
                <span className={`${iconBadge} mr-3`}>
                  <Languages className="h-5 w-5" />
                </span>
                Sprachkenntnisse
              </h3>
              <ul className="space-y-2.5 text-slate-800">
                {candidateData.languages!.map((langDetail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-4 w-4 mt-1 text-[#282550]" />
                    <span>
                      {langDetail.lang} - {langDetail.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${card} keep-together`}>
              <h3 className="text-xl font-bold text-[#282550] mb-4 flex items-center">
                <span className={`${iconBadge} mr-3`}>
                  <GraduationCap className="h-5 w-5" />
                </span>
                Bildung & Abschlüsse
              </h3>
              <ul className="space-y-2.5 text-slate-800">
                {candidateData.education!.map((edu, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-4 w-4 mt-1 text-[#282550]" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {hasItems(candidateData.keyProjects) && (
        <section className="py-16 md:py-20 px-6 md:px-8 bg-slate-50 page-break-after">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#282550] mb-3 text-center tracking-tight">
              Ausgewählte Projekterfahrungen
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">
              Praxis in der Projektierung, Konstruktion und Serienüberführung – kundenspezifisch und terminsicher.
            </p>

            <div className="space-y-8">
              {candidateData.keyProjects!.map((project) => (
                <div key={project.id} className={`${card} keep-together`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {project.icon && <div className={`${iconBadge} hidden md:block`}>{project.icon}</div>}
                      <h3 className="text-xl lg:text-2xl font-semibold text-[#282550]">{project.title}</h3>
                    </div>
                    {project.category && (
                      <span className="bg-slate-200/70 rounded-full text-[#282550] text-xs font-medium px-3 py-1 self-start">
                        {project.category}
                      </span>
                    )}
                  </div>
                  {project.description && <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags!.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-slate-200/70 rounded-full text-[#282550] text-xs font-medium px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.scope && (
                    <div className="bg-[#282550]/5 p-3 rounded-md text-slate-700">
                      <strong className="text-[#282550]">Ergebnis/Fokus:</strong> {project.scope}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasItems(candidateData.experienceTimeline) && (
        <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#282550] mb-3 text-center tracking-tight">Beruflicher Werdegang</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">
              Von dualem Studium über Montagepraxis bis zur eigenverantwortlichen Projektierung im Sondermaschinenbau.
            </p>

            <div className="relative border-l-2 border-[#282550]/20 pl-8 md:pl-10 ml-2 space-y-10">
              {candidateData.experienceTimeline!.map((exp) => (
                <div key={exp.id} className="relative keep-together">
                  <div className="absolute -left-[41px] md:-left-[53px] top-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#282550] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  </div>
                  <div className="mb-2">
                    <span className="bg-[#282550]/10 rounded-full text-[#282550] font-semibold text-xs md:text-sm px-3 py-1.5">
                      {exp.dateRange}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#282550] mb-1 text-balance">{exp.title}</h3>
                  {exp.description && <p className="text-slate-700 leading-relaxed text-base">{exp.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasItems(candidateData.careerGoals) && (
        <section className="py-16 md:py-20 px-6 md:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#282550] mb-3 text-center tracking-tight">
              Berufliche Ziele & Motivation
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">
              Mehr Verantwortung in Projektierung, Layout und modularen Plattformen.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {candidateData.careerGoals!.map((goal, index) => (
                <div key={index} className={`${card} border-t-4 border-[#282550]/70 pt-4 keep-together`}>
                  <div className="flex items-start gap-4">
                    <div className={iconBadge}>{goal.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-800 mb-2">{goal.title}</h3>
                      <p className="text-slate-600">{goal.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasItems(candidateData.interests) && (
        <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#282550] mb-3 text-center tracking-tight">Technische Interessen</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">
              Konstruktion, Layout, Prototypen und ein reibungsloser Serienanlauf.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {candidateData.interests!.map((interest, index) => (
                <div key={index} className={`${card} border-t-4 border-[#282550]/70 pt-4 keep-together`}>
                  <div className="flex items-center gap-4">
                    {interest.icon && <div className={iconBadge}>{interest.icon}</div>}
                    <h3 className="font-semibold text-lg text-slate-800">{interest.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer id="kontakt" className="py-12 px-6 md:px-8 bg-gradient-to-br from-[#282550] to-[#1a1a38] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image src="/getexperts-logo.png" alt="getexperts Logo" width={160} height={54} className="mb-4" />
            <p className="text-slate-300 text-sm mb-4">
              Spezialisiert auf die Vermittlung erfahrener Projektingenieure und Konstrukteure im Sondermaschinenbau.
            </p>
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>5.000+ Experten im exklusiven Pool</span>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 text-white">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span>Rudolfplatz 3, 50674 Köln</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="h-4 w-4 text-slate-400" />
                <span>{candidateData.contactPerson.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="h-4 w-4 text-slate-400" />
                <span>{candidateData.contactPerson.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="h-4 w-4 text-slate-400" />
                <span>{candidateData.contactPerson.website}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/10 rounded-lg p-4 mb-3">
              <h3 className="text-base md:text-lg font-semibold mb-2 text-white flex items-center gap-2">
                <Clock className="h-4 w-4" /> Verfügbarkeit
              </h3>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-slate-300">Projektingenieur:</span>
                <span className="text-white font-medium">1 Monat Vorlauf</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
                <div className="bg-yellow-500 h-2 rounded-full w-[55%]" />
              </div>
              <p className="text-white text-xs font-medium">
                Projektierung, Konstruktion & Layout im Sondermaschinenbau – CAD: Creo/Inventor/CATIA, Planung mit MS
                Project.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} getexperts GmbH. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-4 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-white transition-colors">
              AGB
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
