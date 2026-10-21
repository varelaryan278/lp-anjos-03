import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { campaign } from "@/lib/campaign"
import { Countdown } from "@/components/countdown"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export const Hero = () => (
  <section id="inicio" className="relative isolate overflow-hidden bg-navy-950 text-cream-50">
    <Image src="/hero-bg.jpeg" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-25 grayscale" />
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(212,180,131,0.18),transparent_60%)]" />
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-20 sm:px-6 sm:pt-20 sm:pb-28 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col gap-7">
        <p className="self-start rounded-full border border-gold-400/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
          Londrina · Rolândia · Cambé
        </p>
        <h1 className="leading-none font-bold tracking-tight">
          <span className="block text-6xl sm:text-8xl">BLACK</span>
          <span className="block bg-gradient-to-r from-gold-300 via-gold-400 to-gold-700 bg-clip-text text-6xl text-transparent sm:text-8xl">
            FRIDAY
          </span>
          <span className="mt-3 block text-lg font-medium tracking-[0.4em] text-cream-50/80 sm:text-xl">ANJOS</span>
        </h1>
        <p className="max-w-lg text-base text-cream-50/80 sm:text-lg">
          Conjuntos box das melhores linhas Anjos com até <strong className="text-gold-400">{campaign.maxDiscount}% OFF</strong>{" "}
          e {campaign.maxInstallments}x sem juros. Ofertas válidas até {campaign.endsLabel} ou enquanto durarem os estoques.
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cream-50/60">As ofertas terminam em</p>
          <Countdown endsAt={campaign.endsAt} />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#lojas"
            data-track="cta"
            data-placement="hero"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-semibold text-navy-950 transition-colors hover:bg-gold-300"
          >
            <WhatsappIcon className="size-5" />
            Quero meu preço de Black
          </a>
          <a
            href="#produtos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/30 px-7 py-4 text-base font-medium transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            Ver ofertas
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-gold-400/30 lg:aspect-[4/5]">
          <Image
            src="/produtos/castel.webp"
            alt="Conjunto Box Castel Casal em quarto com parede de mármore e cabeceira iluminada"
            fill
            priority
            sizes="(min-width: 1024px) 460px, 92vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
        </div>
        <div className="absolute -bottom-6 -left-2 grid size-32 place-items-center rounded-full bg-gold-400 text-center text-navy-950 shadow-2xl sm:-left-6 sm:size-40">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest">até</p>
            <p className="text-5xl leading-none font-bold sm:text-6xl">
              {campaign.maxDiscount}
              <span className="text-2xl">%</span>
            </p>
            <p className="text-sm font-bold tracking-[0.3em]">OFF</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
