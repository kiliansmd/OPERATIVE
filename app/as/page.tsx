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
  Ruler,
  Code,
  Cpu,
  Eye,
  Zap,
} from "lucide-react"
import ServerPdfButton from "@/components/server-pdf-button"

export const metadata: Metadata = {
  title: "Senior Embedded C++ Software Engineer | Qt/QML | Visual Computing | Dipl.-Ing. | AS",
  description:
    "Anonymes Kandidatenprofil: Senior Embedded C++ Software Engineer mit Spezialisierung auf Qt/QML, Visual Computing, Photogrammetrie und medizinische Bildverarbeitung. Dipl.-Ing. Computervisualistik. 8+ Jahre Erfahrung. Wunschgehalt €85.000, Teilzeit 35h bevorzugt, Sachsen-Anhalt.",
}

const candidateData = {
  initials: "AS",
  title: "Senior Embedded C++ Software Engineer | Qt/QML | Visual Computing | Dipl.-Ing.",
  salaryExpectation: "85.000€ brutto/Jahr",
  availability: "Verfügbar in 8 Wochen (3 Monate Kündigungsfrist)",
  location: "Sachsen-Anhalt (zwischen Leipzig und Berlin) | Remote/Hybrid bevorzugt",
  experienceYears: "8+ Jahre Embedded C++ & Visual Computing",
  contactPerson: {
    name: "Frau Daniela Sentesch",
    phone: "+49 156 7816 2538",
    email: "daniela.sentesch@getexperts.io",
    website: "www.getexperts.io",
  },
  profileSummary: [
    "Senior Software Engineer mit Spezialisierung auf moderne C++ Entwicklung, UI-Tooling und hochperformante räumliche Datenanwendungen. Fundierte Expertise in Qt/QML-Framework-Entwicklung, Visual Computing und Photogrammetrie-Anwendungen.",
    "Durchgängige Erfahrung von Embedded Systems (QNX RTOS) über medizinische Bildverarbeitung bis hin zu Drohnendaten-Verarbeitung und Geodatenverarbeitung. Starke Praxis in modularer Architektur-Entwicklung mit Fokus auf Performance und Skalierbarkeit.",
    "Akademischer Hintergrund: Dipl.-Ing. Computervisualistik mit Schwerpunkt Medical Image Processing. Zertifiziert in Qt Foundations und Advanced QML. Erfahrung in agiler Entwicklung, interdisziplinärer Zusammenarbeit und technischem Kundensupport.",
  ],
  topSkills: [
    {
      id: "1",
      name: "Modern C++ & Qt/QML Development",
      description:
        "Expertise in C++20, Qt5/Qt6 Framework, QML UI-Entwicklung. Migration von Qt5 zu Qt6, modulare UI-Tools mit Performance-Fokus.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      id: "2",
      name: "Visual Computing & Photogrammetrie",
      description:
        "Entwicklung von Software-Komponenten für Photogrammetrie-Anwendungen, Drohnendaten-Verarbeitung, Orthofotos und digitale Oberflächenmodelle.",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      id: "3",
      name: "Embedded Systems & Real-Time Programming",
      description:
        "QNX Neutrino RTOS Entwicklung, Embedded C++ für ophthalmische Geräte, Touch-Screen Interfaces und Echtzeit-Datenverarbeitung.",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      id: "4",
      name: "Medizinische Bildverarbeitung",
      description:
        "EEG-Aufzeichnungssysteme, kontinuierliche Streaming-Datenverarbeitung, Visualisierungsalgorithmen und 3D-Segmentierung.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      id: "5",
      name: "Geodatenverarbeitung & Streaming",
      description:
        "Export zu Geodatenformaten (PDF, GeoJSON), Echtzeit-Datenverarbeitung, räumliche Integration und Transformation.",
      icon: <Zap className="h-6 w-6" />,
    },
  ],
  qualifications: [
    "Dipl.-Ing. Computervisualistik, Otto-von-Guericke-Universität Magdeburg (Schwerpunkt: Medical Image Processing)",
    "Qt Foundations Certificate (Qt Group) - gültig bis Oktober 2026",
    "Advanced QML Certificate (KDAB) - 2019",
    "QNX Certified Training: Realtime Programming for QNX Neutrino RTOS - 2013",
    "Publikation: 'Auffaltung von Lebergefäßbäumen mit Hilfe von deformierbaren Oberflächen' (BVM 2012)",
    "Patent: 'Generation of visual command data' (DE102012204063 A1)",
  ],
  personalDetails: [
    { label: "Verfügbarkeit", value: "8 Wochen (3 Monate Kündigungsfrist)" },
    { label: "Wunschgehalt", value: "85.000€ brutto/Jahr" },
    { label: "Arbeitszeit", value: "Bevorzugt Teilzeit 35h/Woche" },
    { label: "Standort", value: "Sachsen-Anhalt (zwischen Leipzig und Berlin)" },
    { label: "Arbeitsmodell", value: "Remote/Hybrid bevorzugt" },
    { label: "Reisebereitschaft", value: "25%" },
    { label: "Beschäftigungsart", value: "Festanstellung (Vollzeit/Teilzeit)" },
  ],
  techSkills: [
    { skill: "Programmiersprachen", level: "Modern C++ (C++20), C#, Matlab, Python, Java, PowerShell" },
    { skill: "Frameworks", level: "Qt5/Qt6, QML, Boost, CppUTest, CMake, .NET, OpenCV" },
    { skill: "Spezialbibliotheken", level: "ITK, VTK, MeVisLab, CImg, Vulkan, LAPACK++" },
    { skill: "Systeme", level: "Linux, Windows, macOS, Embedded QNX (Neutrino RTOS)" },
    { skill: "Tools", level: "Git, GitHub, SVN, Atlassian Tools, Figma, Qt Creator, Visual Studio" },
    {
      skill: "Methoden",
      level: "Agile Entwicklung (Scrum), Test-Driven Development, interdisziplinäre Zusammenarbeit",
    },
  ],
  languages: [
    { lang: "Deutsch", level: "Muttersprache" },
    { lang: "Englisch", level: "Verhandlungssicher" },
    { lang: "Französisch", level: "Gute Kenntnisse" },
  ],
  education: [
    "Dipl.-Ing. Computervisualistik, Otto-von-Guericke-Universität Magdeburg, 2005–2011",
    "Schwerpunkt: Medical Image Processing und Computer Aided Geometric Design",
    "Auslandssemester: Université Pierre-et-Marie-Curie, Paris, 2008–2009",
    "Abitur mit Schwerpunkt Mathematik und Informatik, Berlin, 1992–2005",
  ],
  keyProjects: [
    {
      id: "p1",
      title: "Modulare UI-Tools für Visual Computing & Photogrammetrie",
      category: "Qt/QML | Performance",
      description:
        "Entwicklung modularer Architektur für interaktive UI-Tools mit Fokus auf Performance und Skalierbarkeit. Implementation von Map-Markern, komplexen Geometrien und Export zu Geodatenformaten (PDF, GeoJSON). Arbeit mit vorverarbeiteten Drohnendaten wie Orthofotos und digitalen Oberflächenmodellen.",
      tags: ["C++20", "Qt6", "QML", "Photogrammetrie", "Geodaten", "Performance"],
      scope: "Hochperformante, skalierbare Lösung für Agrar-Sektor mit räumlicher Integration.",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      id: "p2",
      title: "Qt5 zu Qt6 Migration & Framework-Modernisierung",
      category: "Migration | Modernisierung",
      description:
        "Migration interner Anwendungen von Qt5 zu Qt6. Anpassung bestehender QML-Komponenten, Performance-Optimierungen und Kompatibilitätssicherstellung.",
      tags: ["Qt5", "Qt6", "Migration", "QML", "Modernisierung"],
      scope: "Erfolgreiche Migration mit verbesserter Performance und Zukunftssicherheit.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      id: "p3",
      title: "EEG-Aufzeichnungs- und Monitoring-Systeme",
      category: "Medizinische Bildverarbeitung",
      description:
        "Entwicklung von Software-Komponenten für Elektroenzephalographie-Aufzeichnung und Monitoring-Systeme. Design und Implementation kontinuierlicher Streaming-Datenverarbeitung und Visualisierungsalgorithmen.",
      tags: ["C#", ".NET", "XAML", "Streaming", "Medizintechnik", "Echtzeit"],
      scope: "Klinische und Forschungsanwendungen mit Echtzeit-Datenverarbeitung.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      id: "p4",
      title: "Embedded Systems für ophthalmische Geräte",
      category: "Embedded | QNX",
      description:
        "Full-Stack Entwicklung für Embedded Systems in ophthalmischen Geräten. Realisierung kundenspezifischer Touch-Screen Benutzeroberflächen und Bildverarbeitungsalgorithmen auf QNX RTOS.",
      tags: ["C++", "Qt/QML", "QNX", "Embedded", "Touch-Screen", "Bildverarbeitung"],
      scope: "Robuste, echtzeitfähige Lösungen für medizinische Geräte.",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      id: "p5",
      title: "3D Lebergefäßbaum-Segmentierung (Siemens Healthcare)",
      category: "Forschung | 3D Visualisierung",
      description:
        "Design und Implementierung eines Prototyps für 2D-Darstellung einer 3D-Lebergefäßbaum-Segmentierung. Publikation und Patent aus der Forschungsarbeit.",
      tags: ["C++", "MeVisLab", "VTK", "3D-Segmentierung", "Medizinische Bildgebung"],
      scope: "Wissenschaftliche Publikation und Patent-Anmeldung.",
      icon: <Ruler className="h-6 w-6" />,
    },
  ],
  // Firmennamen anonymisiert in bezeichnende Begriffe
  experienceTimeline: [
    {
      id: "exp_current",
      dateRange: "07/2019 – Aktuell",
      title: "Senior Software Engineer, Führender Anbieter für Photogrammetrie-Software (Berlin)",
      description:
        "Entwicklung von Software-Komponenten für Visual Computing und Photogrammetrie-Anwendungen, primär im Agrar-Sektor. Modulare UI-Tools mit Performance-Fokus, Geodatenverarbeitung, Qt5→Qt6 Migration. Enge Zusammenarbeit mit UX-Design, QA und interdisziplinären Teams in agilen Prozessen.",
    },
    {
      id: "exp_medical",
      dateRange: "06/2016 – 06/2019",
      title: "Software Engineer, Spezialist für medizinische Bildgebungslösungen (Berlin)",
      description:
        "Entwicklung von Software-Komponenten für EEG-Aufzeichnung, Monitoring und Review-Systeme in klinischen und Forschungsanwendungen. Kontinuierliche Streaming-Datenverarbeitung, Visualisierungsalgorithmen, technischer Kundensupport.",
    },
    {
      id: "exp_embedded",
      dateRange: "11/2012 – 04/2016",
      title: "Software Developer, Embedded Systems Spezialist für ophthalmische Geräte (Erlangen)",
      description:
        "Full-Stack Entwicklung für Embedded Systems in ophthalmischen Geräten. Kundenspezifische Touch-Screen Interfaces, Bildverarbeitungsalgorithmen, QNX RTOS Entwicklung in SCRUM-Umgebung.",
    },
    {
      id: "exp_maternity",
      dateRange: "10/2011 – 11/2012",
      title: "Elternzeit",
      description: "Weiterbildung in Organisations- und Zeitmanagement-Fähigkeiten.",
    },
    {
      id: "exp_siemens",
      dateRange: "11/2010 – 10/2011",
      title: "Diplomarbeit, Globaler Medizintechnik-Konzern Healthcare Sektor (Forchheim)",
      description:
        "Design und Implementierung eines Prototyps für 2D-Darstellung einer 3D-Lebergefäßbaum-Segmentierung. Publikation und Patent-Anmeldung aus der Forschungsarbeit.",
    },
    {
      id: "exp_internships",
      dateRange: "2009 – 2010",
      title: "Praktika & Forschungsaufenthalte",
      description:
        "INRIA Project Pulsar (Sophia-Antipolis): Texture-Based Segmentation mit Graph-Cuts Optimierung. Universität Magdeburg: Active Contour Model Implementation.",
    },
  ],
  careerGoals: [
    {
      title: "Senior Technical Leadership",
      description:
        "Übernahme von technischer Führungsverantwortung in C++/Qt-Entwicklungsteams mit Fokus auf Performance-kritische Anwendungen.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Visual Computing & AI Integration",
      description:
        "Vertiefung in moderne Visual Computing Technologien und Integration von KI-Algorithmen in Echtzeit-Bildverarbeitungsanwendungen.",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: "Work-Life-Balance & Remote Work",
      description:
        "Teilzeit-Position (35h) mit Remote/Hybrid-Arbeitsmodell für optimale Work-Life-Balance bei technisch anspruchsvollen Projekten.",
      icon: <Settings className="h-6 w-6" />,
    },
  ],
  interests: [
    { name: "Modern C++ & Qt Framework", icon: <Code className="h-7 w-7" /> },
    { name: "Visual Computing & Photogrammetrie", icon: <Eye className="h-7 w-7" /> },
    { name: "Embedded Systems & Real-Time", icon: <Cpu className="h-7 w-7" /> },
    { name: "Medizinische Bildverarbeitung", icon: <Target className="h-7 w-7" /> },
  ],
  personalityTraits: [
    "Analytisch und detailorientiert in der Software-Architektur und Performance-Optimierung",
    "Kollaborativ in interdisziplinären Teams (UX, QA, Produktmanagement)",
    "Qualitätsbewusst mit Erfahrung in Test-Driven Development und Code Reviews",
    "Lösungsorientiert in technischem Kundensupport und komplexen Debugging-Situationen",
  ],
  motivationFactors: [
    "Technisch anspruchsvolle Projekte mit modernen C++ Standards und Qt Framework",
    "Work-Life-Balance durch Teilzeit und Remote/Hybrid-Arbeitsmodelle",
    "Interdisziplinäre Zusammenarbeit in agilen, innovativen Entwicklungsteams",
    "Kontinuierliche Weiterbildung in Visual Computing und Performance-Optimierung",
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
            C++ | Qt/QML | Visual Computing | Embedded Systems
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
                <span className="opacity-90">Teilzeit 35h bevorzugt & verhandlungsbereit</span>
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
              <h2 className="text-2xl font-bold text-[#282550] mb-3 text-balance">Direkter Kontakt zur C++ Expertin</h2>
              <p className="text-slate-600 mb-4">
                Senior Embedded C++ Software Engineer mit Spezialisierung auf Qt/QML, Visual Computing und
                Photogrammetrie. Dipl.-Ing. Computervisualistik mit 8+ Jahren Praxiserfahrung von Embedded Systems bis
                medizinischer Bildverarbeitung.
              </p>
              <ul className="mb-5 space-y-2">
                <li className="flex items-center gap-2 text-sm text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Sachsen-Anhalt – Remote/Hybrid bevorzugt</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Teilzeit 35h/Woche bevorzugt – 8 Wochen Verfügbarkeit</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>C++20, Qt6, QML | QNX RTOS | Visual Computing</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>Qt Foundations & Advanced QML zertifiziert</span>
                </li>
              </ul>
              <div className="inline-block px-6 py-2.5 bg-[#282550] text-white font-semibold rounded-lg text-sm md:text-base tracking-wide hover:bg-[#1a1a38] transition-colors cursor-pointer no-print">
                C++ Expertin jetzt anfragen
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
              Modern C++, Qt/QML Framework, Visual Computing und Embedded Systems – mit Fokus auf Performance und
              interdisziplinäre Zusammenarbeit.
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
                <div className="grid md:grid-cols-1 gap-x-8 gap-y-3">
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
            Senior Software Engineer (Dipl.-Ing. Computervisualistik) mit Expertise in C++, Qt/QML und Visual Computing.
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
                  <Code className="h-5 w-5" />
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

      {hasItems(candidateData.personalityTraits) && (
        <section className="py-16 md:py-20 px-6 md:px-8 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#282550] mb-3 text-center tracking-tight">
              Persönlichkeit & Arbeitsweise
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto text-lg">
              Analytisch, kollaborativ und qualitätsbewusst – mit Fokus auf Performance-Optimierung und
              interdisziplinäre Teamarbeit.
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
              Von Visual Computing über Embedded Systems bis hin zu medizinischer Bildverarbeitung und Forschung.
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
              Von Forschung und Embedded Systems über medizinische Bildverarbeitung bis hin zu Visual Computing und
              Photogrammetrie.
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
              Technical Leadership, moderne Visual Computing Technologien und optimale Work-Life-Balance.
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
              Fokusthemen: Modern C++, Qt Framework, Visual Computing und Embedded Real-Time Systems.
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
              Spezialisiert auf die Vermittlung erfahrener C++ Software Engineers und Embedded Systems Entwickler.
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
                <span className="text-slate-300">C++ Expertin:</span>
                <span className="text-white font-medium">8 Wochen</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
                <div className="bg-green-500 h-2 rounded-full w-[85%]" />
              </div>
              <p className="text-white text-xs font-medium">
                Senior C++ Engineer – Qt/QML, Visual Computing, Embedded Systems. Teilzeit 35h bevorzugt, Remote/Hybrid.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <div className="bg-white/5 px-3 py-1 rounded text-slate-300">C++20</div>
              <div className="bg-white/5 px-3 py-1 rounded text-slate-300">Qt6</div>
              <div className="bg-white/5 px-3 py-1 rounded text-slate-300">QML</div>
              <div className="bg-white/5 px-3 py-1 rounded text-slate-300">Visual Computing</div>
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
