import Image from "next/image"
import { WhatsappIcon } from "@/components/whatsapp-icon"

const links = [
  { href: "#produtos", label: "Ofertas" },
  { href: "#vantagens", label: "Garantias" },
  { href: "#lojas", label: "Nossas lojas" },
]

export const SiteHeader = () => (
  <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/90 text-cream-50 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
      <a href="#inicio" className="flex items-center gap-2.5">
        <Image src="/anjos-icon.png" alt="" width={36} height={36} className="size-9" />
        <span className="leading-none">
          <span className="block text-lg font-semibold tracking-tight">Anjos</span>
          <span className="block text-[11px] uppercase tracking-[0.18em] text-gold-400">Colchões e Sofás</span>
        </span>
      </a>
      <nav aria-label="Principal" className="hidden items-center gap-8 text-sm text-cream-50/80 md:flex">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="transition-colors hover:text-gold-400">
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#lojas"
        className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-4 py-2 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300"
      >
        <WhatsappIcon className="size-4" />
        <span className="hidden sm:inline">Falar com vendedor</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  </header>
)
