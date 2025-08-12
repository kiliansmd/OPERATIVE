import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import SiteNav from "@/components/site-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Senior Konstruktionsingenieur Maschinenbau | Mischmaschinen | KIT | 7+ Jahre",
  description:
    "Anonymes Kandidatenprofil: Senior Konstruktionsingenieur (Maschinen- & Anlagenbau) mit Schwerpunkt Mischmaschinen, Projektleitung, Montageleitung, Logistikmanagement. Master Maschinenbau (KIT), SFI. Flexibel, bevorzugt Süddeutschland, reisebereit, keine Außendiensttätigkeit. Zielgehalt: 90.000€ All-in.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <SiteNav />
        <main id="main" className="pt-16">{children}</main>
      </body>
    </html>
  )
}
