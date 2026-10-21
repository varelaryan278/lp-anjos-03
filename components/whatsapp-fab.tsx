"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { stores, whatsappUrl } from "@/lib/stores"
import { WhatsappIcon } from "@/components/whatsapp-icon"

export const WhatsappFab = ({ message }: { message: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          id="whatsapp-stores"
          className="w-72 overflow-hidden rounded-2xl bg-white text-navy-950 shadow-2xl ring-1 ring-navy-950/10"
        >
          <p className="bg-navy-950 px-4 py-3 text-sm font-semibold text-cream-50">Escolha a loja para conversar</p>
          <ul className="divide-y divide-navy-950/5">
            {stores.map((store) => (
              <li key={store.name}>
                <a
                  href={whatsappUrl(store, `${message} ${store.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="whatsapp"
                  data-store={store.name}
                  data-placement="flutuante"
                  className="flex items-center justify-between gap-3 px-4 py-3 text-sm hover:bg-cream-50"
                >
                  <span>
                    <span className="block font-medium">{store.name}</span>
                    <span className="block text-xs text-navy-700">{store.city}</span>
                  </span>
                  <WhatsappIcon className="size-5 text-whatsapp" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="whatsapp-stores"
        aria-label={open ? "Fechar lista de lojas" : "Falar no WhatsApp"}
        className="grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <WhatsappIcon className="size-7" />}
      </button>
    </div>
  )
}
