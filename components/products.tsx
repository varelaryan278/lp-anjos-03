import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products"
import { campaign } from "@/lib/campaign"
import { ProductRail } from "@/components/product-rail"

export const Products = () => (
  <section id="produtos" aria-labelledby="produtos-title" className="py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold-700">Ofertas Black Friday</p>
        <h2 id="produtos-title" className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Conjuntos box com <span className="text-gold-700">até {campaign.maxDiscount}% OFF</span>
        </h2>
        <p className="mt-4 text-navy-700">
          Preços exclusivos de Black Friday em até 12x sem juros. Peça o seu valor pelo WhatsApp antes que o estoque acabe.
        </p>
      </div>
      <ProductRail>
        {products.map((product) => (
          <li
            key={product.slug}
            className="flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-950/5 sm:w-[46%] lg:w-[31.5%]"
          >
            <div className="relative aspect-[3/2]">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 82vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-gold-700">{product.category}</p>
              <h3 className="text-2xl font-semibold">{product.line}</h3>
              <p className="text-sm text-navy-700">{product.size}</p>
              <p className="mt-3 mb-5 text-sm text-navy-700">Preço especial de Black Friday — em até 12x sem juros.</p>
              <a
                href="#lojas"
                data-track="cta"
                data-placement={`produto-${product.slug}`}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-navy-950 px-5 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-navy-800"
              >
                Ver preço de Black
                <ArrowRight className="size-4" />
              </a>
            </div>
          </li>
        ))}
      </ProductRail>
    </div>
  </section>
)
