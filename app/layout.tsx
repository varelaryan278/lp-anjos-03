import type { Metadata, Viewport } from "next"
import { Geologica } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"

const geologica = Geologica({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: "Black Friday Anjos | Conjuntos box com até 60% OFF em Londrina, Rolândia e Cambé",
  description:
    "Black Friday Anjos: conjuntos box das melhores linhas com até 60% OFF e 12x sem juros. 5 lojas em Londrina, Rolândia e Cambé. Ofertas até 30/11 ou enquanto durarem os estoques.",
  openGraph: {
    title: "Black Friday Anjos — até 60% OFF",
    description: "Conjuntos box com até 60% OFF e 12x sem juros nas lojas Anjos.",
    locale: "pt_BR",
    type: "website",
    images: ["/hero-bg.jpeg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
}

const RootLayout = ({ children }: LayoutProps<"/">) => (
  <html lang="pt-BR" className={cn("h-full antialiased font-sans", geologica.variable)}>
    <body className="min-h-full flex flex-col bg-cream-50 text-navy-950">
      {children}
      <Analytics />
    </body>
  </html>
)

export default RootLayout
