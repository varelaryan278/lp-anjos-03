export type Store = {
  city: string
  name: string
  address: string
  phone: string
  phoneDigits: string
  whatsappDigits: string
  seller?: string
  mapsQuery: string
}

export const stores: Store[] = [
  {
    city: "Londrina",
    name: "Loja Centro",
    address: "Av. Juscelino Kubitschek, 2073 — Centro, Londrina/PR",
    phone: "(43) 3348-5103",
    phoneDigits: "554333485103",
    whatsappDigits: "554333485103",
    mapsQuery: "Av. Juscelino Kubitschek, 2073 Centro Londrina PR",
  },
  {
    city: "Londrina",
    name: "Loja Catuaí Shopping",
    address: "Rod. Celso Garcia Cid, 5600 — Catuaí Shopping, Palhano 2, Londrina/PR",
    phone: "(43) 3348-5103",
    phoneDigits: "554333485103",
    whatsappDigits: "554333485103",
    mapsQuery: "Catuaí Shopping Londrina Palhano 2",
  },
  {
    city: "Londrina",
    name: "Loja Vitória",
    address: "Av. Maringá, 2200 — Vitória, Londrina/PR — CEP 86060-000",
    phone: "(43) 3348-5103",
    phoneDigits: "554333485103",
    whatsappDigits: "554333485103",
    mapsQuery: "Av. Maringá, 2200 Vitória Londrina PR",
  },
  {
    city: "Rolândia",
    name: "Loja Rolândia",
    address: "Av. Interventor Manoel Ribas, nº 802 — Centro, Rolândia/PR — CEP 86600-010",
    phone: "(43) 3316-4808",
    phoneDigits: "554333164808",
    whatsappDigits: "5543991366342",
    seller: "Bruna",
    mapsQuery: "Av. Interventor Manoel Ribas 802 Rolandia PR",
  },
  {
    city: "Cambé",
    name: "Loja Cambé",
    address: "Av. Inglaterra, nº 426 — Centro, Cambé/PR",
    phone: "(43) 3020-8747",
    phoneDigits: "554330208747",
    whatsappDigits: "5543991724398",
    seller: "Jaqueline",
    mapsQuery: "Av. Inglaterra 426 Cambe PR",
  },
]

export const whatsappUrl = (store: Store, message: string) =>
  `https://wa.me/${store.whatsappDigits}?text=${encodeURIComponent(message)}`

export const mapsUrl = (store: Store) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.mapsQuery)}`

export const telUrl = (store: Store) => `tel:+${store.phoneDigits}`
