import { NextResponse } from "next/server"
import chromium from "@sparticuz/chromium"
import puppeteer from "puppeteer-core"

export const dynamic = "force-dynamic"

function getBaseUrl(req: Request): string {
  const url = new URL(req.url)
  const host = url.host
  const proto = url.protocol || "http:"
  const envBase = process.env.NEXT_PUBLIC_APP_URL
  if (envBase) return envBase.replace(/\/$/, "")
  return `${proto}//${host}`
}

async function launchBrowser(isServerless: boolean) {
  if (isServerless) {
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: true,
    })
  }

  // 1) Versuche installierten Chrome-Kanal
  try {
    return await puppeteer.launch({ channel: "chrome", headless: true })
  } catch {}
  try {
    return await puppeteer.launch({ channel: "chromium", headless: true })
  } catch {}

  // 2) Versuche bekannte Pfade (macOS/Linux)
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/snap/bin/chromium",
  ].filter(Boolean) as string[]

  for (const p of candidates) {
    try {
      return await puppeteer.launch({ executablePath: p, headless: true })
    } catch {}
  }

  throw new Error(
    "Kein lokales Chrome gefunden. Installiere Chrome oder setze PUPPETEER_EXECUTABLE_PATH."
  )
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const path = searchParams.get("path") || "/"
    const urlBase = getBaseUrl(req)
    const target = new URL(path, urlBase).toString()

    const isServerless = !!process.env.AWS_REGION || !!process.env.LAMBDA_TASK_ROOT || process.env.VERCEL === "1"

    const browser = await launchBrowser(isServerless)
    const page = await browser.newPage()
    await page.goto(target, { waitUntil: "networkidle0", timeout: 60_000 })

    await page.addStyleTag({ content: "body{background:#fff} .no-print{display:none !important}" })

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "10mm", bottom: "12mm", left: "8mm", right: "8mm" },
    })

    await browser.close()

    return new NextResponse(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=profile.pdf",
        "Cache-Control": "no-store",
      },
    })
  } catch (e: any) {
    console.error("PDF error:", e)
    return NextResponse.json({ ok: false, error: e?.message || "PDF-Fehler" }, { status: 500 })
  }
}
