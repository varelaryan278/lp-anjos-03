const steps = [
  { title: "Escolha a loja", text: "São 5 unidades em Londrina, Rolândia e Cambé. Escolha a mais perto de você." },
  { title: "Fale no WhatsApp", text: "Um vendedor confirma estoque e passa o seu preço de Black Friday." },
  { title: "Experimente e leve", text: "Deite, compare e escolha com calma. A gente cuida da entrega." },
]

export const HowItWorks = () => (
  <section aria-labelledby="como-title" className="py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold-700">Simples assim</p>
      <h2 id="como-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Garanta seu preço de Black em 3 passos
      </h2>
      <ol className="mt-10 grid gap-6 sm:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-2xl bg-white p-6 ring-1 ring-navy-950/5">
            <span className="text-4xl font-semibold text-gold-500">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-1 text-sm text-navy-700">{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
)
