"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ServerPdfButtonProps {
  path?: string
  label?: string
}

export default function ServerPdfButton({ path, label = "Als PDF exportieren" }: ServerPdfButtonProps) {
  const pathname = usePathname()
  const targetPath = path || pathname || "/"
  const href = `/api/pdf?path=${encodeURIComponent(targetPath)}`

  return (
    <div className="no-print">
      <Button asChild className="fixed bottom-6 right-6 shadow-lg z-50 bg-[#282550] hover:bg-[#1a1a38] text-white" size="lg">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <Download className="mr-2 h-5 w-5" />
          {label}
        </Link>
      </Button>
    </div>
  )
}


