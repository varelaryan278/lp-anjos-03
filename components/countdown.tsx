"use client"

import { useEffect, useState } from "react"

const units = [
  { label: "dias", ms: 86_400_000 },
  { label: "horas", ms: 3_600_000 },
  { label: "min", ms: 60_000 },
  { label: "seg", ms: 1_000 },
]

const split = (remaining: number) =>
  units.map((unit, index) => {
    const upper = index === 0 ? Infinity : units[index - 1].ms
    return { label: unit.label, value: Math.floor((remaining % upper) / unit.ms) }
  })

export const Countdown = ({ endsAt }: { endsAt: string }) => {
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    const target = new Date(endsAt).getTime()
    const tick = () => setRemaining(Math.max(0, target - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [endsAt])

  if (remaining === 0) return <p className="text-sm font-semibold text-gold-400">Últimas unidades — consulte a loja.</p>

  return (
    <div role="timer" aria-label="Tempo restante da Black Friday" className="flex gap-2 sm:gap-3">
      {split(remaining ?? 0).map((part) => (
        <div key={part.label} className="w-16 rounded-xl bg-white/5 py-2 text-center ring-1 ring-gold-400/30 sm:w-20">
          <span className="block text-2xl font-bold tabular-nums text-gold-400 sm:text-3xl">
            {remaining === null ? "--" : String(part.value).padStart(2, "0")}
          </span>
          <span className="block text-[11px] uppercase tracking-widest text-cream-50/60">{part.label}</span>
        </div>
      ))}
    </div>
  )
}
