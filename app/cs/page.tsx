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
  Zap,
  Cpu,
  Wrench,
  Code,
  TestTube,
  Activity,
} from "lucide-react"
import ServerPdfButton from "@/components/server-pdf-button"

export const metadata: Metadata = {
  title: "Inbetriebnehmer & SPS-Programmierer | Automatisierungstechnik | Staatl. gepr. Techniker | CS",
  description:
    "Anonymes Kandidatenprofil: Inbetriebnehmer & SPS-Programmierer mit Spezialisierung auf Automatisierungstechnik, Schaltschrankprüfung und Extrusionsanlagen. Staatlich geprüfter Techniker, IHK Software Developer. 6+ Jahre Erfahrung. Wunschgehalt €90.000, Raum Stuttgart.",
}

const candidateData = {
  initials: "CS",
  title: "Inbetriebnehmer & SPS-Programmierer | Automatisierungstechnik | Staatl. gepr. Techniker",
  salaryExpectation: "90.000€ brutto/Jahr",
  availability: "Verfügbar in 4 Wochen (2 Monate Kündigungsfrist)",
  location: "Raum Stuttgart (Großbottwar) | Hybrid-Arbeitsmodell",
  experienceYears: "6+ Jahre Automatisierungstechnik & Inbetriebnahme",
  contactPerson: {
    name: "Frau Daniela Sentesch",
    phone: "+49 156 7816 2538",
    email: "daniela.sentesch@getexperts.io",
    website: "www.getexperts.io",
  },
  profileSummary: [
    "Staatlich geprüfter Techniker für Energie- und Automatisierungstechnik mit fundierter Praxis in Schaltschrankprüfung, Erstinbetriebnahme von Extrusionsanlagen und SPS-Programmierung. Durchgängige Erfahrung von der Mechatroniker-Ausbildung bis zur aktuellen Spezialisierung auf komplexe Automatisierungssysteme.",
    "Expertise in Siemens-Technologien (TIA Portal, SIMATIC, WinCC, SINAMICS Antriebssysteme) sowie strukturierter SPS-Programmierung mit SCL. Praktische Erfahrung in Funktionstest, Fehlerdiagnose und Softwareprüfung im industriellen Umfeld.",
    "Kontinuierliche Weiterbildung: IHK Software Developer (2024), Siemens SINAMICS Schulungen. Starke Motivation zur beruflichen Weiterentwicklung in Richtung SPS-Programmierung und Automatisierungslösungen.",
  ],
  topSkills: [
    {
      id: "1",
      name: "SPS-Programmierung & Automatisierung",
      description:
        "Sehr gute Kenntnisse in SPS-Programmierung, strukturierte Programmierung mit SCL, TIA Portal und SIMATIC Systeme.",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      id: "2",
      name: "Inbetriebnahme & Prüftechnik",
      description:
        "Prüfung und Erstinbetriebnahme von Schaltschränken und Extrusionsanlagen, Funktionstest und Fehlerdiagnose.",
      icon: <TestTube className="h-6 w-6" />,
    },
    {
      id: "3",
      name: "Siemens Antriebstechnik",
      description:
        "Zertifizierte Kenntnisse in SINAMICS G150/G130/S150 Diagnose und Service, Antriebssystem-Optimierung.",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      id: "4",
      name: "Visualisierung & HMI",
      description:
        "Gute Kenntnisse in WinCC für Prozessvisualisierung und HMI-Entwicklung, TIA Advanced WinCC Prüfsimulationen.",
      icon: <Monitor className="h-6 w-6" />,
    },
    {
      id: "5",
      name: "Elektrokonstruktion & EPLAN",
      description:
        "Gute Kenntnisse in EPLAN für Elektrokonstruktion und Schaltplan-Erstellung, technische Dokumentation.",
      icon: <Wrench className="h-6 w-6" />,
    },
  ],
  qualifications: [
    "Staatlich geprüfter Techniker in Energie- und Automatisierungstechnik (Werner-Siemens Schule Stuttgart)",
    "IHK Software Developer Weiterbildung (2024)",
    "Ausbildung zum Mechatroniker mit Fachhochschulreife",
    "SINAMICS G150/G130/S150 – Diagnose und Service Zertifizierung (Siemens)",
    "Sehr gute Kenntnisse: SPS-Programmierung, SCL",
    "Gute Kenntnisse: WinCC, EPLAN, Python",
  ],
  personalDetails: [
    { label: "Verfügbarkeit", value: "4 Wochen (2 Monate Kündigungsfrist)" },
    { label: "Wunschgehalt", value: "90.000€ brutto/Jahr" },
    { label: "Standort", value: "Raum Stuttgart (Großbottwar)" },
    { label: "Arbeitsmodell", value: "Hybrid bevorzugt" },
    { label: "Reisebereitschaft", value: "25%" },
    { label: "Beschäftigungsart", value: "Festanstellung (Vollzeit)" },
    {
      label: "Wunschposition",
      value: "Inbetriebnehmer, SPS-Programmierer, Prüftechniker",
    },
  ],
  techSkills: [
    { skill: "SPS-Programmierung", level: "Sehr gut (SCL, TIA Portal, SIMATIC)" },
    { skill: "Visualisierung", level: "Gut (WinCC, HMI-Entwicklung)" },
    { skill: "Elektrokonstruktion", level: "Gut (EPLAN, Schaltplan-Erstellung)" },
    { skill: "Antriebstechnik", level: "Zertifiziert (SINAMICS G150/G130/S150)" },
    { skill: "Programmiersprachen", level: "SCL (sehr gut), Python (gut), Java/C# (Grundkenntnisse)" },
    { skill: "Prüf- & Messtechnik", level: "Funktionstest, Fehlerdiagnose, Softwareprüfung" },
    { skill: "Entwicklungstools", level: "JetBrains, Git, TIA Advanced WinCC" },
  ],
  languages: [
    { lang: "Deutsch", level: "Muttersprache" },
    { lang: "Englisch", level: "Gut" },
    { lang: "Latein", level: "Grundkenntnisse" },
  ],
  education: [
    "IHK Software Developer Weiterbildung, Industrie- und Handelskammer, 04/2024 – 07/2024",
    "Staatlich geprüfter Techniker in Energie- und Automatisierungstechnik, Werner-Siemens Schule Stuttgart, 09/2021 – 07/2022",
    "Ausbildung zum Mechatroniker mit Fachhochschulreife, 09/2015 – 01/2019",
    "Oscar-Paret Schule, Freiberg am Neckar, 09/2006 – 08/2015",
  ],
  keyProjects: [
    {
      id: "p1",
      title: "Erstinbetriebnahme von Extrusionsanlagen",
      category: "Inbetriebnahme | Prüftechnik",
      description:
        "Prüfung und Erstinbetriebnahme von komplexen Schaltschränken und Extrusionsanlagen. Durchführung von systematischen Funktionstests, Fehlerdiagnose und Softwareprüfung im industriellen Umfeld.",
      tags: ["Extruder", "Schaltschrankprüfung", "Funktionstest", "Fehlerdiagnose", "Inbetriebnahme"],
      scope: "Sichere und termingerechte Inbetriebnahme komplexer Automatisierungsanlagen.",
      icon: <TestTube className="h-6 w-6" />,
    },
    {
      id: "p2",
      title: "SPS-Programmierung & Automatisierungssysteme",
      category: "SPS | Programmierung",
      description:
        "Strukturierte SPS-Programmierung mit SCL, Entwicklung und Test von Automatisierungslösungen. Selbstständige Entwicklung von Prüfsimulationen mit TIA Advanced WinCC.",
      tags: ["SPS", "SCL", "TIA Portal", "SIMATIC", "Automatisierung"],
      scope: "Effiziente und wartbare Automatisierungslösungen für industrielle Anwendungen.",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      id: "p3",
      title: "Siemens SINAMICS Antriebssysteme",
      category: "Antriebstechnik | Service",
      description:
        "Diagnose und Service von Siemens SINAMICS Antriebssystemen (G150/G130/S150). Optimierung von Antriebsparametern und Fehlerbehebung.",
      tags: ["SINAMICS", "Antriebstechnik", "Diagnose", "Service", "Siemens"],
      scope: "Zertifizierte Kompetenz in modernen Antriebssystemen.",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      id: "p4",
      title: "WinCC Visualisierung & HMI-Entwicklung",
      category: "Visualisierung | HMI",
      description:
        "Entwicklung von Prozessvisualisierungen mit WinCC, HMI-Programmierung und Bedienoberflächen für komplexe Automatisierungsanlagen.",
      tags: ["WinCC", "HMI", "Visualisierung", "Bedienoberflächen"],
      scope: "Benutzerfreundliche und intuitive Bedienoberflächen für Anlagenbediener.",
      icon: <Monitor className="h-6 w-6" />,
    },
  ],
  // Firmennamen anonymisiert in bezeichnende Begriffe
  experienceTimeline: [
    {
      id: "exp_current",
      dateRange: "01/2019 – Aktuell",
      title: "Schaltschrankprüfer & Inbetriebnehmer, Führender Hersteller für Extrusionsanlagen (Stuttgart)",
      description:
        "Prüfung und Erstinbetriebnahme von Schaltschränken und Extrusionsanlagen. Durchführung von Funktionstests, Fehlerdiagnose und Softwareprüfung. Entwicklung von Prüfsimulationen mit TIA Advanced WinCC.",
    },
    {
      id: "exp_weiterbildung_software",
      dateRange: "04/2024 – 07/2024",
      title: "IHK Software Developer Weiterbildung",
      description:
        "Weiterbildung zum Software Developer bei der Industrie- und Handelskammer mit Fokus auf moderne Programmiersprachen und Entwicklungsmethoden.",
    },
    {
      id: "exp_weiterbildung_techniker",
      dateRange: "09/2021 – 07/2022",
      title: "Weiterbildung zum staatlich geprüften Techniker, Werner-Siemens Schule Stuttgart",
      description:
        "Spezialisierung in Energie- und Automatisierungstechnik mit Fokus auf SPS-Programmierung, Antriebstechnik und Prozessautomatisierung.",
    },
    {
      id: "exp_ausbildung",
      dateRange: "09/2015 – 01/2019",
      title: "Ausbildung zum Mechatroniker, Führender Hersteller für Extrusionsanlagen (Stuttgart)",
      description:
        "Duale Ausbildung zum Mechatroniker mit Fachhochschulreife. Grundlagen in Mechanik, Elektronik, Pneumatik und Automatisierungstechnik.",
    },
    {
      id: "exp_school",
      dateRange: "09/2006 – 08/2015",
      title: "Schulausbildung, Oscar-Paret Schule, Freiberg am Neckar",
      description: "Allgemeine Schulausbildung mit technischem Schwerpunkt.",
    },
  ],
  careerGoals: [
    {
      title: "SPS-Programmierung & Automatisierungslösungen",
      description:
        "Vertiefung in SPS-Programmierung und Entwicklung komplexer Automatisierungslösungen für industrielle Anwendungen.",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      title: "Technische Projektleitung",
      description: "Übernahme von Projektverantwortung in Inbetriebnahme-Projekten und Automatisierungslösungen.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Software-Entwicklung in der Automatisierung",
      description:
        "Integration moderner Software-Entwicklungsmethoden in die Automatisierungstechnik, basierend auf IHK Software Developer Weiterbildung.",
      icon: <Code className="h-6 w-6" />,
    },
  ],
  interests: [
    { name: "SPS-Programmierung & Automatisierung", icon: <Cpu className="h-7 w-7" /> },
    { name: "Inbetriebnahme & Prüftechnik", icon: <TestTube className="h-7 w-7" /> },
    { name: "Antriebstechnik & SINAMICS", icon: <Settings className="h-7 w-7" /> },
    { name: "Software-Entwicklung", icon: <Code className="h-7 w-7" /> },
  ],
  personalityTraits: [
    "Strukturiert und systematisch in der Fehlerdiagnose und Problemlösung",
    "Teamfähig mit starkem technischen Verständnis durch langjährige Praxiserfahrung",
    "Lernbereit und weiterbildungsorientiert (kontinuierliche Qualifikation)",
    "Zuverlässig in der Inbetriebnahme komplexer industrieller Anlagen",
  ],
  motivationFactors: [
    "Berufliche Weiterentwicklung in Richtung SPS-Programmierung und Automatisierungslösungen",
    "Technisch anspruchsvolle Projekte mit modernen Siemens-Technologien",
    "Eigenverantwortliche Projektarbeit und Inbetriebnahme-Verantwortung",
    "Kontinuierliche Weiterbildung und Zertifizierung in neuen Technologien",
  ],
  hobbies: [
    { name: "Handball (aktiv)", icon: <Activity className="h-6 w-6" /> },
    { name: "Crossfit", icon: <Zap className="h-6 w-6" /> },
    { name: "Joggen", icon: <Activity className="h-6 w-6" /> },
  ],
}

export default function CandidateProfile() {
  const hasItems = (arr: any[] | undefined) => arr && arr.length > 0
  const card = "bg-white p-6 sm:p-7 rounded-xl shadow-md border border-slate-200/70"
  const accentCard = "bg-white p-7 rounded-xl shadow-lg border-l-4 border-[#282550]"
  const iconBadge = "p-2.5 rounded-lg bg-[#282550]/10 text-[#282550] shrink-0"

  return (
    <div className="min-h-screen bg-white font-sans" id="candidate-profile">
      {/* Serverseitiger PDF-Export */}
      <ServerPdfButton label="Als PDF exportieren" />

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
            SPS | Automatisierung | Inbetriebnahme | Siemens SINAMICS
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
                <span className="opacity-90">4 Wochen Verfügbarkeit & verhandlungsbereit</span>
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
                Direkter Kontakt zum Automatisierungsexperten
              </h2>
              <p className="text-slate-600 mb-4">
                Staatlich geprüfter Techniker für Automatisierungstechnik mit Spezialisierung auf SPS-Programmierung,
                Inbetriebnahme von Extrusionsanlagen und Siemens SINAMICS Antriebssysteme. IHK Software Developer
                zertifiziert.
              </p>
              <ul className="mb-5 space-y-2">
                <li className="flex items-center gap-2 text-sm text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Raum Stuttgart – Hybrid-Arbeitsmodell</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>4 Wochen Verfügbarkeit – 25% Reisebereitschaft</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>SPS (SCL), TIA Portal, WinCC | SINAMICS zertifiziert</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Wechselmotivation: Weiterentwicklung in SPS-Programmierung</span>
                </li>
              </ul>
              <div className="inline-block px-6 py-2.5 bg-[#282550] text-white font-semibold rounded-lg text-sm md:text-base tracking-wide hover:bg-[#1a1a38] transition-colors cursor-pointer no-print">
                Automatisierungsexperten jetzt anfragen
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
              SPS-Programmierung, Inbetriebnahme, Siemens SINAMICS und Automatisierungslösungen – mit kontinuierlicher
              Weiterbildung und Zertifizierung.
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
                <h3 className="text-xl font-bold text-[#282550] mb-5">Qualifikationen & Zertifikate</h3>
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
            Staatlich geprüfter Techniker mit Expertise in Automatisierungstechnik, SPS-Programmierung und
            Inbetriebnahme.
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
                  <Cpu className="h-5 w-5" />
                </span>
                Technische Fähigkeiten
              </h3>
              <ul className="space-y-2.5 text-slate-800">
                {candidateData.techSkills!.map((skillDetail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-4 w-4 mt-1 text-[#282550]" />
                    <span>
                      <strong>{skillDetail.skill}:</strong> {skillDetail.level}
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
                Bildung & Weiterbildung
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

      {hasItems(candidateData.personalityTraits) && (
        <section className="py-16 md:py-20 px-6 md:px-8 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#282550] mb-3 text-center tracking-tight">
              Persönlichkeit & Arbeitsweise
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">
              Strukturiert, teamfähig und lernbereit – mit starkem technischen Verständnis und Weiterbildungsmotivation.
            </p>
            <div className={`${accentCard} keep-together`}>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                {candidateData.personalityTraits!.map((trait, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-[#282550]/10 text-[#282550]">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-slate-800">{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {hasItems(candidateData.keyProjects) && (
        <section className="py-16 md:py-20 px-6 md:px-8 bg-slate-50 page-break-after">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#282550] mb-3 text-center tracking-tight">
              Ausgewählte Projekterfahrungen
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">
              Von Inbetriebnahme komplexer Anlagen über SPS-Programmierung bis hin zu Antriebstechnik und
              Visualisierung.
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
              Von der Mechatroniker-Ausbildung über kontinuierliche Weiterbildung bis zum Automatisierungsexperten.
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
              Weiterentwicklung in SPS-Programmierung, Projektleitung und moderne Software-Entwicklung in der
              Automatisierung.
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
              Fokusthemen: SPS-Programmierung, Automatisierung, Inbetriebnahme und moderne Software-Entwicklung.
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

      {hasItems(candidateData.hobbies) && (
        <section className="py-16 md:py-20 px-6 md:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#282550] mb-3 text-center tracking-tight">
              Persönliche Interessen
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">
              Aktiver Lebensstil mit Fokus auf Teamspirit und körperliche Fitness.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {candidateData.hobbies!.map((hobby, index) => (
                <div key={index} className={`${card} border-t-4 border-[#282550]/70 pt-4 keep-together`}>
                  <div className="flex items-center gap-4">
                    {hobby.icon && <div className={iconBadge}>{hobby.icon}</div>}
                    <h3 className="font-semibold text-lg text-slate-800">{hobby.name}</h3>
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
              Spezialisiert auf die Vermittlung erfahrener Automatisierungstechniker und SPS-Programmierer.
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
                <span className="text-slate-300">Automatisierungsexperte:</span>
                <span className="text-white font-medium">4 Wochen</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
                <div className="bg-green-500 h-2 rounded-full w-[90%]" />
              </div>
              <p className="text-white text-xs font-medium">
                Staatl. gepr. Techniker – SPS, Inbetriebnahme, SINAMICS. Wechselmotivation: SPS-Programmierung.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <div className="bg-white/5 px-3 py-1 rounded text-slate-300">SPS</div>
              <div className="bg-white/5 px-3 py-1 rounded text-slate-300">TIA Portal</div>
              <div className="bg-white/5 px-3 py-1 rounded text-slate-300">WinCC</div>
              <div className="bg-white/5 px-3 py-1 rounded text-slate-300">SINAMICS</div>
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
