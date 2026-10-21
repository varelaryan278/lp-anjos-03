"use client"

import { useRef, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const ProductRail = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLUListElement>(null)

  const scroll = (direction: 1 | -1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" })
  }

  return (
    <div className="relative">
      <div className="mb-6 hidden justify-end gap-2 sm:flex">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Produtos anteriores"
          className="grid size-11 place-items-center rounded-full border border-navy-950/15 transition-colors hover:bg-navy-950 hover:text-cream-50"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Próximos produtos"
          className="grid size-11 place-items-center rounded-full border border-navy-950/15 transition-colors hover:bg-navy-950 hover:text-cream-50"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <ul
        ref={ref}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6"
      >
        {children}
      </ul>
    </div>
  )
}
