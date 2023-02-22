export const consumableTypes = ["food", "drink-solid", "drink-liquid", "other-edibles", "nonedibles"] as const
export type ConsumableType = (typeof consumableTypes)[number]

type ItemValue = {
  t: string,
  thb: number | string,
  g: number | string,
  nv: number | string,
  oc: number | string,
  mu: number | string,
  u: number | string,
  p: number,
  pa: number,
  gl: number | string
}
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

  non_vegan: 0,
  organic: 0,
  may_unhealthy: 0,
  unhealthy: 0,

  pkg: { plastic: 0, paper: 0, glass: 0, },
}
type ConsumableTypeSummary = typeof consumableTypeSummaryTemplate

export type WeeklySummaryValue = {
  types: {
    [key in ConsumableType]: ConsumableTypeSummary
  },
  "km": { public: 0, private: 0 },
}
export type WeeklySummary = {[key: string]: WeeklySummaryValue}
