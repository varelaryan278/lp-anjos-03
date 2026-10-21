import { campaign } from "@/lib/campaign"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export const FinalCta = () => (
  <section className="bg-gold-400 py-16 sm:py-20">
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        A Black Friday Anjos acaba em {campaign.endsLabel}.
      </h2>
      <p className="max-w-xl text-navy-950/80">
        Os estoques são limitados. Fale agora com a loja mais perto e garanta o seu preço de Black.
      </p>
      <a
        href="#lojas"
        data-track="cta"
        data-placement="final"
        className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-8 py-4 text-base font-semibold text-cream-50 transition-colors hover:bg-navy-800"
      >
        <WhatsappIcon className="size-5" />
        Garantir minha oferta
      </a>
    </div>
  </section>
)
