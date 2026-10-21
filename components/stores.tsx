import { MapPin, Phone } from "lucide-react"
import { mapsUrl, stores, telUrl, whatsappUrl } from "@/lib/stores"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export const Stores = () => (
  <section id="lojas" aria-labelledby="lojas-title" className="scroll-mt-16 bg-navy-950 py-20 text-cream-50 sm:py-28">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold-400">Nossas lojas no norte do Paraná</p>
      <h2 id="lojas-title" className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        5 unidades em 3 cidades pra você experimentar o conforto Anjos.
      </h2>
      <p className="mt-4 text-cream-50/70">
        Escolha a loja mais perto e fale direto com um vendedor pelo WhatsApp.
      </p>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stores.map((store) => (
          <li key={store.name} className="flex flex-col rounded-2xl bg-navy-900 p-6 ring-1 ring-cream-50/10">
            <span className="self-start rounded-full bg-gold-400/15 px-3 py-1 text-xs font-medium text-gold-400">
              {store.city}
            </span>
            <h3 className="mt-4 text-xl font-semibold">{store.name}</h3>
            <ul className="mt-4 flex flex-1 flex-col gap-3 text-sm text-cream-50/75">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <span>{store.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <a href={telUrl(store)} data-track="phone" data-store={store.name} className="hover:text-gold-400">
                  {store.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={whatsappUrl(store, `Olá! Vi a Black Friday Anjos no site e quero o preço de Black na ${store.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp"
                data-store={store.name}
                data-placement="lojas"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-navy-950 transition-opacity hover:opacity-90"
              >
                <WhatsappIcon className="size-4" />
                Chamar no WhatsApp
              </a>
              <a
                href={mapsUrl(store)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="maps"
                data-store={store.name}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/20 px-5 py-3 text-sm font-medium transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <MapPin className="size-4" />
                Como chegar
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
