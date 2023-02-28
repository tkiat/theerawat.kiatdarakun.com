import {isType} from "@app/share"

export const consumableTypes = ["food", "drink-solid", "drink-liquid", "other-edibles", "nonedibles"] as const
export type ConsumableType = (typeof consumableTypes)[number]

type Item = {
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
export type Weeks = {
  [key: string]: Week
}

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

export const isWeeks = (u: unknown): u is Weeks =>
  typeof u === "object" && u !== null &&
  Object.entries(u).every(([k, x]) => {
    const r = typeof k === "string" && isWeekValue(x)
    if (!r) console.error("consumables record: wrong format. key: ", k, "value: ", x)
    return r
  })

const isWeekValue = (u: unknown) =>
  Array.isArray(u) && u.every(x => isOrder(x))

const isOrder = (u: unknown) =>
  typeof u === "object" && u !== null &&
    "delivery" in u && isDelivery(u.delivery) &&
    "types" in u && isTypes(u.types)

const isDelivery = (u: unknown) => typeof u === "object" && u !== null &&
  "type" in u && (u.type === "no fuel" ||
    (
      (u.type === "public" || u.type === "private") &&
        "km" in u && typeof u.km === "number"
    )
  )

const isTypes = (u: unknown) => Array.isArray(u) && u.every(x =>
  typeof x === "object" && x !== null &&
  "name" in x && isType(x.name, consumableTypes) &&
  "items" in x && isItems(x.items)
)

const isItems = (u: unknown) =>
  Array.isArray(u) && u.every(x => {
    return "t" in x && typeof x.t === "string" &&
    "thb" in x && (typeof x.thb === "number" || typeof x.thb === "string") &&
    "g" in x && (typeof x.g === "number" || typeof x.g === "string") &&
    "nv" in x && (typeof x.nv === "number" || typeof x.nv === "string") &&
    "oc" in x && (typeof x.oc === "number" || typeof x.oc === "string") &&
    "mu" in x && (typeof x.mu === "number" || typeof x.mu === "string") &&
    "u" in x && (typeof x.u === "number" || typeof x.u === "string") &&
    "p" in x && typeof x.p === "number" &&
    "pa" in x && typeof x.pa === "number" &&
    "gl" in x && typeof x.gl === "number"
  })

const weeklySummaryTemplate = consumableTypes.reduce((acc, cur) => {
  acc.types[cur] = consumableTypeSummaryTemplate
  return acc
}, {types: {}, km: { public: 0, private: 0, }} as WeeklySummaryValue)

export const createWeeklySummaries = (weeks: Weeks): WeeklySummary[] => {
  const weeklySummaries = [] as WeeklySummary[]

  (Object.entries(weeks) as [string, Week][]).forEach(([date, orders]) => {
    const s = JSON.parse(JSON.stringify(weeklySummaryTemplate))
    orders.forEach(order => {
      if (order.delivery.type !== "no fuel") {
        s.km[order.delivery.type] += order.delivery.km
      }
      order.types.forEach(type => {
        const n = type.name
        type.items.forEach(v => {
          s.types[n].thb += v.thb
          s.types[n].total_gram += isNaN(Number(v.g)) ? 0 : Number(v.g)
          s.types[n].non_vegan += isNaN(Number(v.nv)) ? 0 : Number(v.nv)
          s.types[n].organic += isNaN(Number(v.oc)) ? 0 : Number(v.oc)
          s.types[n].may_unhealthy += isNaN(Number(v.mu)) ? 0 : Number(v.mu)
          s.types[n].unhealthy += isNaN(Number(v.u)) ? 0 : Number(v.u)

          s.types[n].pkg.plastic += v.p
          s.types[n].pkg.paper += v.pa
          s.types[n].pkg.glass += v.gl
        })
      })
    })
    weeklySummaries.push({[date]: s})
  })
  return weeklySummaries
}

export const createAvgWeeklySummary = (ws: WeeklySummary[], n: number) => {
  const sum = ws.map(x => Object.values(x)[0]).reduce((acc, cur) =>
    combineWeeklySummaryValues(acc, cur)
  )
  return avgWeeklySummaryValue(sum, n)
}

const combineWeeklySummaryValues =
  (a: WeeklySummaryValue, b: WeeklySummaryValue) =>

  consumableTypes.reduce((acc, cur) => {
    acc.types[cur] = {
      thb: a.types[cur].thb + b.types[cur].thb,
      total_gram: a.types[cur].total_gram + b.types[cur].total_gram,
      non_vegan: a.types[cur].non_vegan + b.types[cur].non_vegan,
      may_unhealthy: a.types[cur].may_unhealthy + b.types[cur].may_unhealthy,
      unhealthy: a.types[cur].unhealthy + b.types[cur].unhealthy,
      organic: a.types[cur].organic + b.types[cur].organic,
      pkg: {
        plastic: a.types[cur].pkg.plastic + b.types[cur].pkg.plastic,
        paper: a.types[cur].pkg.paper + b.types[cur].pkg.paper,
        glass: a.types[cur].pkg.glass + b.types[cur].pkg.glass,
      },
    }
    return acc
  }, {
    types: {},
    km: {
      public: a.km.public + b.km.public,
      private: a.km.private + b.km.private,
    }
  } as WeeklySummaryValue)

const avgWeeklySummaryValue = (x: WeeklySummaryValue, n: number) =>
  consumableTypes.reduce((acc, cur) => {
    acc.types[cur] = {
      thb: Math.round(x.types[cur].thb / n),
      total_gram: Math.round(x.types[cur].total_gram / n),
      non_vegan: Math.round(x.types[cur].non_vegan / n),
      may_unhealthy: Math.round(x.types[cur].may_unhealthy / n),
      unhealthy: Math.round(x.types[cur].unhealthy / n),
      organic: Math.round(x.types[cur].organic / n),
      pkg: {
        plastic: Math.round(x.types[cur].pkg.plastic / n),
        paper: Math.round(x.types[cur].pkg.paper / n),
        glass: Math.round(x.types[cur].pkg.glass / n),
      },
    }
    return acc
  }, {
    types: {},
    km: {
      public: Math.round(x.km.public / n),
      private: Math.round(x.km.private / n),
    }
  } as WeeklySummaryValue)
