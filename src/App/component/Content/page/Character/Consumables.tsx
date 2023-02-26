import React from "react"
import * as jsYaml from "js-yaml"
import {useImmer} from "use-immer"

import {capitalize, isType} from "@app/share"
import {TooltipFa, TooltipText} from "../../share"
import {WeekTable} from "./Consumables/WeekTable"
import {AvgChart} from "./Consumables/AvgChart"
import {ConsumableType, WeeklySummary, WeeklySummaryValue, Week, Weeks, consumableTypes, consumableTypeSummaryTemplate} from "./Consumables/share"

const resource = "/character/consumables/record.yaml"

export const Consumables = (): React.ReactElement => {
  const [weeks, setWeeks] = React.useState<Weeks>({})
  const [avgSummaries, setAvgSummaries] = React.useState<WeeklySummary>({})

  const [cur, setCur] = useImmer<string>("4")
//   const [cur, setCur] = useImmer<string>("2023-02-11")

  const [fields, setFields] = React.useState<Set<ConsumableType>>(new Set(
    [0, 1].map(x => consumableTypes[x])
  ))

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await fetch(resource)

      if (mounted) {
        const type = res.headers.get("content-type")
        if (type && type.indexOf("text/yaml") !== -1) {
          const yaml = jsYaml.load(await res.text())
          setWeeks(yaml as Weeks)
        }
      }
    })()

    return () => { mounted = false }
  }, [])

  React.useEffect((): (() => void) | undefined => {
    if (Object.keys(weeks).length === 0) return

    const weekEntries = Object.entries(weeks) as [string, Week][]
    const weeklySummaries = createWeeklySummaries(weekEntries)

    const numWeeks = weekEntries.length
    const avgSummaryOptions = []
    for (const x of [4, 12, 52]) {
      if (numWeeks > x) avgSummaryOptions.push(x)
      else break
    }
    avgSummaryOptions.push(numWeeks)

    setAvgSummaries(avgSummaryOptions.reduce((acc, cur) => {
      acc[cur] = createAvgWeeklySummary(weeklySummaries.slice(0, cur), cur)
      return acc
    }, {} as WeeklySummary))
  }, [weeks])

  return (
    <section>
      <h2>Consumables</h2>

      <section>
        <h3 className="highlight">Record</h3>

        <div className="consumables-panel">
          <Why />&ensp;
          <How /> —&nbsp;
          <label className="consumables-panel__label" htmlFor="consumables-panel-select">
            {isNaN(Number(cur)) ? "Single Week" : "Weekly Avg." }
          </label>
          <Select
            cur={cur}
            setCur={setCur}
            avgSummaries={avgSummaries}
            weeks={weeks}
          />
          <Checkboxes fields={fields} setFields={setFields} />
          <hr />
        </div>

        <div className="consumables-display-container">
          {
            isNaN(Number(cur)) ?
              <WeekTable cur={cur} fields={fields} weeks={weeks} />
            : <AvgChart cur={cur} fields={fields} avgSummaries={avgSummaries} />
          }
        </div>
      </section>

      <section>
        <h3 className="highlight">Cooking</h3>

        <h4>Food</h4>

        <ul className="more-gap-list">
          <li>
            <b className="highlight">Meal</b>:&nbsp;

            TODO
          </li>
        </ul>

        <h4>Drinks</h4>

        <ul className="more-gap-list">
          <li>
            <b className="highlight">Milk</b>:&nbsp;

            <TooltipText text="Soy Milk">
              I usually use soy milk for my smoothie — <span className="highlight">Recipe</span>: 300-400g soybeans (preferably non-GMO due to excessive glyphosate) and 2.5L water — <span className="highlight">Steps</span>: Wash soybeans, use blender and filter to get the milk, then use medium heat until some bubbles appear, and finally simmer it for 15 minutes.
            </TooltipText>
          </li>

          <li>
            <b className="highlight">Boiled Herbal Teas</b>:&nbsp;

            <TooltipText text="Hibiscus">
              Unlike many other herbal teas, I find sugar in hibiscus tea especially tasty as it fixes sourness in the tea — <span className="highlight">Recipe</span>: 20 dried hibiscus leaves, 2.5L water, (optional but recommended) 50g brown/crystalline sugar — <span className="highlight">Steps</span>: Wash the leaves and then put it in the water, boil it until it reaches the boiling point then simmer it for 20 minutes, done.
            </TooltipText>
            ,&nbsp;
            <TooltipText text="Lemongrass and Pandan">
              <span className="highlight">Recipe</span>: 50g dried lemongrass and pandan leaves, 2.5L water — <span className="highlight">Steps</span>: Wash the leaves and then put it in the boiling water, simmer it for 20 minutes, done.
            </TooltipText>
            ,&nbsp;
            <TooltipText text="Bael Fruit">
              <span className="highlight">Recipe</span>: 80g dried bael fruit, 2.5L water — <span className="highlight">Steps</span>: Wash the fruits and put it in the water, boil it until it reaches the boiling point then simmer it for 20 minutes, done.
            </TooltipText>
            ,&nbsp;
            <TooltipText text="Butterfly Pea Flower">
              It's best to consume 2-3 pieces a day (as per doctor recommendation). Since my cup is 350ml, I am going to use 20 pieces per 2.5L water for a 7-day serving — <span className="highlight">Recipe</span>: 20 dried leaves, 2.5L water, 1 Tsp lemon (optional, to make it purple) — <span className="highlight">Steps</span>: Wash the leaves and put it in the boiling water for 10 minutes, then stop boiling water and put limeade into it, done.
            </TooltipText>
            ,&nbsp;
            <TooltipText text="Chrysanthemum">
              <span className="highlight">Recipe</span>: 20 dried chrysanthemum leaves, 2-3 pieces gardenia fruit (optional), 2-3 pieces licorice (optional), 2.5L water — <span className="highlight">Steps</span>: Wash all leaves, rince the chrysanthemum leaves using boiled water for 10 seconds then followed by cool water (optional), then stop the boiling water then steep everything for five minutes, done.
            </TooltipText>
          </li>

          <li>
            <b className="highlight">Teas</b>:&nbsp;

            <TooltipText text="Thai Assam Green">
              <span className="highlight">Recipe</span>: 6g loose leaves, 350ml water — <span className="highlight">Steps</span>: Rinse the leaves quickly one or two time and then steep it in 90&#8451; water for a minute (first time) and 2 minutes (second time).
            </TooltipText>
          </li>
        </ul>

        <p>TODO</p>
      </section>
    </section>
  )
}

const Why = (): React.ReactElement =>
  <TooltipText text="Why?">
    <p>I live my life according to the realization that what truly matter cannot go beyond the flow inherent to sentient beings, and I subjectively prioritize my flow first. This results in me giving the following priorities: nonprocessed &gt; minimally processed &gt; processed &gt; ultra-processed, no waste &gt; more waste, and no fuel &gt; shorter delivery &gt; longer delivery and minimizing unnecessary impact to the environment and suffering upon other sentient beings. Trade-offs may exist but I shall use good judgment.</p>

    <p>This recording should not only remind me this realization but also serve as one practical example of a possible lifestyle based on this realization. This will also support the relevant works (that I am working on).</p>
  </TooltipText>

const How = (): React.ReactElement =>
  <TooltipText text="How?">
    <p>I just weigh and record almost all consumables I bought. While it sounds tedious, I often reuse numbers.</p>

    <ul>
      <li><b className="highlight">Non-vegan</b>: Rather than veganism (that minimizes animal products), I actually want to minimize unnecessary suffering in my own terms, which means I still consume animal products in some occasions. I still use the “vegan” term in my record as it is understood by many; I just don't record these non-vegan products in those occasions here.</li>
      <li><b className="highlight">Health</b>: I regard consumables that are harmful for health regardless of the amount as <i>unhealthy</i> (like typical ultra-processed food). When I am not sure about that, I regard it as <i>probably unhealthy</i> (e.g., processed food in a shop that I don't know what happens behind the scenes).</li>
      <li><b className="highlight">Delivery</b>: I exclude the delivery price and packaging waste to make it more universal to the reader. Unlike <i>private</i> delivery, <i>public</i> delivery targets multiple destinations per trip. I divide the share accordingly, like half the actual distance when I share half the order with another person.</li>
    </ul>
  </TooltipText>

type SelectInp = {
  cur: string,
  setCur: React.Dispatch<React.SetStateAction<string>>,
  avgSummaries: WeeklySummary,
  weeks: Weeks,
}
const Select = ({cur, setCur, avgSummaries, weeks}: SelectInp):
  React.ReactElement =>
  <>
    <select
      id="consumables-panel-select"
      key={Object.keys(avgSummaries).length && Object.keys(weeks).length ?
        "not loaded" : "loaded"}
      onChange={e => setCur(e.target.value)}
      defaultValue={cur}
    >
      <optgroup label="Weekly Average">
        {
          Object.keys(avgSummaries).map((x, i) =>
            <option key={i} value={x}>Last {x} Weeks</option>
          )
        }
      </optgroup>
      <optgroup label="Single Week">
        {
          Object.keys(weeks).map((x, i) =>
            <option key={i} value={x}>{x}</option>
          )
        }
      </optgroup>
    </select>
  </>

type CheckboxInp = {
  fields: Set<ConsumableType>,
  setFields: React.Dispatch<React.SetStateAction<Set<ConsumableType>>>,
}
const Checkboxes = ({fields, setFields}: CheckboxInp): React.ReactElement =>
  <>
    {
      consumableTypes.map((x, i) =>
        <label className="consumables-panel__checkbox" key={i}>
          <input
            type="checkbox"
            value={x}
            checked={fields.has(x)}
            onChange={e => {
              const v = e.target.value
              if(isType(v, consumableTypes)) {
                setFields(prev => e.target.checked ?
                    new Set(prev.add(v))
                  : new Set([...prev].filter(x => x !== v))
                )
              }
            }}
          />
          {capitalize(x)}
        </label>
      )
    }
  </>

const weeklySummaryTemplate = consumableTypes.reduce((acc, cur) => {
  acc.types[cur] = consumableTypeSummaryTemplate
  return acc
}, {types: {}, km: { public: 0, private: 0, }} as WeeklySummaryValue)

const createWeeklySummaries = (entries: [string, Week][]): WeeklySummary[] => {
  const weeklySummaries = [] as WeeklySummary[]

  entries.forEach(([date, orders]) => {
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

const createAvgWeeklySummary = (ws: WeeklySummary[], n: number) => {
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
