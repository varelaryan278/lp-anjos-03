import { mapsUrl, stores, telUrl } from "@/lib/stores"

const cities = [...new Set(stores.map((store) => store.city))]

export const SiteFooter = () => (
  <footer className="bg-navy-950 pb-20 text-cream-50/80">
    <div className="mx-auto grid max-w-6xl gap-10 border-t border-cream-50/10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_2fr]">
      <div>
        <p className="text-2xl font-semibold text-cream-50">
          Anjos<span className="text-gold-400">.</span>
        </p>
        <p className="mt-2 max-w-xs text-sm">Mais de 50 anos cuidando do descanso de quem dorme melhor.</p>
        <p className="mt-4 text-sm">Segunda a sábado, das 9h às 19h. Loja Catuaí segue o horário do shopping.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {cities.map((city) => (
          <div key={city}>
            <p className="text-sm font-semibold text-gold-400">{city}</p>
            <ul className="mt-3 flex flex-col gap-3 text-sm">
              {stores
                .filter((store) => store.city === city)
                .map((store) => (
                  <li key={store.name}>
                    <a href={mapsUrl(store)} target="_blank" rel="noopener noreferrer" className="block hover:text-gold-400">
                      {store.name}
                    </a>
                    <a href={telUrl(store)} data-track="phone" data-store={store.name} className="text-cream-50/60 hover:text-gold-400">
                      {store.phone}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="mx-auto max-w-6xl border-t border-cream-50/10 px-4 py-6 text-xs text-cream-50/50 sm:px-6">
      <p>
        Imagens meramente ilustrativas — os adornos não acompanham os produtos. Descontos de até 60% (sessenta por cento) em produtos selecionados, não cumulativos com outras promoções. Crédito sujeito a análise e aprovação.
        Consulte na loja as condições de pagamento, taxas e quantidade máxima de parcelas. Ofertas válidas até 30/11/2026 ou enquanto durarem os estoques.
      </p>
      <p className="mt-3">
        © Anjos Colchões e Sofás · Desenvolvido por{" "}
        <a href="https://matratecnologia.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">
          Matra Tecnologia
        </a>
      </p>
    </div>
  </footer>
)
