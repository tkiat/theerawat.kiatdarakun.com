import React from "react"
import * as jsYaml from "js-yaml"
import {useImmer} from "use-immer"

import {capitalize, isType} from "@app/share"
import {WeekTable} from "./Consumables/WeekTable"
import {AvgChart} from "./Consumables/AvgChart"
import {ConsumableType, ItemValue, WeeklySummary, WeeklySummaryValue, Week, Weeks, consumableTypes, consumableTypeSummaryTemplate} from "./Consumables/share"

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
      <div className="consumables-panel">
        <label htmlFor="consumables-panel-select">
          {isNaN(Number(cur)) ? "Week" : "Weekly Average" }
        </label>&ensp;
        <Select
          cur={cur}
          setCur={setCur}
          avgSummaries={avgSummaries}
          weeks={weeks}
        />
        <Checkboxes fields={fields} setFields={setFields} />
        <hr />
      </div>
      {
        isNaN(Number(cur)) ?
          <WeekTable cur={cur} fields={fields} weeks={weeks} />
        : <AvgChart cur={cur} fields={fields} avgSummaries={avgSummaries} />
      }
    </section>
  )
}

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
      <optgroup label="Week">
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
        type.items.forEach(item => {
          const v = Object.values(item)[0] as ItemValue

          s.types[n].thb += v[0]
          s.types[n].total_gram += isNaN(Number(v[1])) ? 0 : Number(v[1])
          s.types[n].non_vegan += isNaN(Number(v[2])) ? 0 : Number(v[2])
          s.types[n].cert_organic += isNaN(Number(v[3])) ? 0 : Number(v[3])
          s.types[n].processed += isNaN(Number(v[4])) ? 0 : Number(v[4])
          s.types[n].ultra_processed += isNaN(Number(v[5])) ? 0 : Number(v[5])

          s.types[n].waste.plastic += v[6]
          s.types[n].waste.paper += v[7]
          s.types[n].waste.glass += v[8]
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
      processed: a.types[cur].processed + b.types[cur].processed,
      ultra_processed: a.types[cur].ultra_processed + b.types[cur].ultra_processed,
      cert_organic: a.types[cur].cert_organic + b.types[cur].cert_organic,
      waste: {
        plastic: a.types[cur].waste.plastic + b.types[cur].waste.plastic,
        paper: a.types[cur].waste.paper + b.types[cur].waste.paper,
        glass: a.types[cur].waste.glass + b.types[cur].waste.glass,
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
      processed: Math.round(x.types[cur].processed / n),
      ultra_processed: Math.round(x.types[cur].ultra_processed / n),
      cert_organic: Math.round(x.types[cur].cert_organic / n),
      waste: {
        plastic: Math.round(x.types[cur].waste.plastic / n),
        paper: Math.round(x.types[cur].waste.paper / n),
        glass: Math.round(x.types[cur].waste.glass / n),
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
