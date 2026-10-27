"use client"

import Script from "next/script"
import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const ADS_ID = "AW-529378621"
const CONVERSION_LABEL = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL
const CONVERSION_TRACKS = ["whatsapp", "phone"]

export const Analytics = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track]")
      if (!el || !window.gtag) return
      const track = el.dataset.track ?? ""
      window.gtag("event", track === "whatsapp" ? "inicio_conversa" : `${track}_click`, {
        store: el.dataset.store,
        placement: el.dataset.placement,
      })
      if (CONVERSION_LABEL && CONVERSION_TRACKS.includes(track)) {
        window.gtag("event", "conversion", { send_to: `${ADS_ID}/${CONVERSION_LABEL}` })
      }
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ADS_ID}');`}
      </Script>
    </>
  )
}
