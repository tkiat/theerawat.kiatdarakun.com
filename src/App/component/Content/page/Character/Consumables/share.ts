export const consumableTypes = ["food", "drink-solid", "drink-liquid", "other-edibles", "nonedibles"] as const
export type ConsumableType = (typeof consumableTypes)[number]

export type SharedFields = {
  thb: number,
  total_gram: number,

  vegan: number,
  non_vegan: number,

  unprocessed: number,
  processed: number,
  ultra_processed: number,

  cert_organic: number,
  not_cert_organic: number,

  waste: {plastic: number, paper: number, glass: number}
}

export const sharedFields = {
  thb: 0,
  total_gram: 0,

  vegan: 0,
  non_vegan: 0,

  unprocessed: 0,
  processed: 0,
  ultra_processed: 0,

  cert_organic: 0,
  not_cert_organic: 0,

  waste: { plastic: 0, paper: 0, glass: 0, },
}

export type WeeklySummary = {
  [key in ConsumableType]: SharedFields
} & {
  "km": { public: 0, private: 0 }
}


export type AvgSummaries = {
  [key: string]: WeeklySummary
}

export type ItemValue = [number, number | string, number | string, string, string, number, number, number]
type Item = {[key: string]: ItemValue}

type Type = {
  name: ConsumableType,
  items: Item[]
}
type Delivery = {
  type: "no fuel"
} | {
  type: "public" | "private",
  km: number
}

type Order = {
  delivery: Delivery,
  types: Type[]
}
export type Weeks = {
  [key: string]: [Order]
}
