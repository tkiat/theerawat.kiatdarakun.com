export const consumableTypes = ["food", "drink-solid", "drink-liquid", "other-edibles", "nonedibles"] as const
export type ConsumableType = (typeof consumableTypes)[number]

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
export type Week = [Order]
export type Weeks = {[key: string]: Week}

export const consumableTypeSummaryTemplate = {
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
type ConsumableTypeSummary = typeof consumableTypeSummaryTemplate

export type WeeklySummaryValue = {
  [key in ConsumableType]: ConsumableTypeSummary // TODO put types as 1st level key
} & {
  "km": { public: 0, private: 0 }
}
export type WeeklySummary = {[key: string]: WeeklySummaryValue}
