import { Award, CreditCard, ShieldCheck, Truck } from "lucide-react"

const benefits = [
  { icon: Award, title: "Qualidade Anjos", text: "Mais de 50 anos cuidando do seu descanso." },
  { icon: CreditCard, title: "Até 12x sem juros", text: "Parcele no cartão e leve para casa agora." },
  { icon: Truck, title: "Entrega na região", text: "Levamos até a sua casa. Consulte a disponibilidade para o seu endereço." },
  { icon: ShieldCheck, title: "Garantia de fábrica", text: "Conforto e durabilidade com a garantia do fabricante." },
]

export const Benefits = () => (
  <section id="vantagens" aria-labelledby="vantagens-title" className="border-y border-navy-950/5 bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 id="vantagens-title" className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        Black Friday com a garantia Anjos
      </h2>
      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex flex-col items-center text-center">
            <div className="grid size-14 place-items-center rounded-full bg-cream-100 text-gold-700">
              <Icon className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-navy-700">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
