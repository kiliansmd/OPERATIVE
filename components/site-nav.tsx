"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const links = [
  { href: "/", label: "Startseite" },
  { href: "/mt", label: "Profil MT" },
  { href: "/as", label: "Profil AS" },
  { href: "/cs", label: "Profil CS" },
  { href: "/import", label: "Import" },
  { href: "#kontakt", label: "Kontakt" },
]

export default function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-[#282550] focus:text-white focus:px-3 focus:py-1.5 focus:rounded"
      >
        Zum Inhalt springen
      </a>

      <div className="max-w-6xl mx-auto h-14 px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Startseite">
          <Image src="/getexperts-logo.png" alt="getexperts Logo" width={120} height={40} />
          <span className="hidden sm:inline text-sm font-semibold tracking-wide text-[#282550]">Talent Profiles</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = l.href !== "#" && (l.href === pathname || (l.href !== "/" && pathname?.startsWith(l.href)))
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "text-[#282550] bg-[#282550]/10" : "text-slate-600 hover:text-[#282550] hover:bg-slate-100"
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" className="bg-[#282550] hover:bg-[#1a1a38] text-white">
            <Link href="/import">Neues Profil</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menü öffnen">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left text-[#282550]">Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-1">
                {links.map((l) => {
                  const isActive =
                    l.href !== "#" && (l.href === pathname || (l.href !== "/" && pathname?.startsWith(l.href)))
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#282550] bg-[#282550]/10"
                          : "text-slate-700 hover:text-[#282550] hover:bg-slate-100"
                      }`}
                    >
                      {l.label}
                    </Link>
                  )
                })}
                <div className="pt-2">
                  <Button asChild className="w-full bg-[#282550] hover:bg-[#1a1a38] text-white">
                    <Link href="/import" onClick={() => setOpen(false)}>
                      Neues Profil
                    </Link>
                  </Button>
                </div>
                <Button variant="ghost" className="mt-4" onClick={() => setOpen(false)}>
                  <X className="h-4 w-4 mr-2" />
                  Schließen
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
