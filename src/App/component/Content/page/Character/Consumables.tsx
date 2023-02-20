import React from "react"
import * as jsYaml from "js-yaml"
import {useImmer} from "use-immer"

import {capitalize, isType} from "@app/share"
import {WeekTable} from "./Consumables/WeekTable"
import {AvgChart} from "./Consumables/AvgChart"
import {AvgSummaries, ConsumableType, Item, Weekentry, WeeklySummary, Weeeks, consumableTypes, sharedFields} from "./Consumables/share"

const resource = "/character/consumables/record.yaml"

export const Consumables = (): React.ReactElement => {
  const [weeks, setWeeks] = React.useState<Weeks>({})

  const [avgSummaries, setAvgSummaries] = React.useState<AvgSummaries>({})

//   const [cur, setCur] = useImmer<string>("4")
  const [cur, setCur] = useImmer("2023-02-11")

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
//     if (weeks === undefined) return
    if (Object.keys(weeks).length === 0) return

    const weekEntries = Object.entries(weeks)
    const weeklySummaries = createWeeklySummaries(weekEntries)

    const numWeeks = weekEntries.length
    const avgSummaryOptions = []
    for (const x of [4, 12, 52]) {
      if (numWeeks > x) avgSummaryOptions.push(x)
      else break
    }
    avgSummaryOptions.push(numWeeks)

    setAvgSummaries(avgSummaryOptions.reduce((acc, cur) => {
      acc[cur] = createAvgSummary(weeklySummaries.slice(0, cur), cur)
      return acc
    }, {} as AvgSummaries))
  }, [weeks])

  return (
    <section>
      <h2>Consumables</h2>
      <div className="consumables-panel">
        <Select
          cur={cur}
          setCur={setCur}
          avgSummaries={avgSummaries}
          weeks={weeks}
        />
        <Checkboxes fields={fields} setFields={setFields} />
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
  avgSummaries: AvgSummaries,
  weeks: Weeks,
}
const Select = ({cur, setCur, avgSummaries, weeks}: SelectInp):
  React.ReactElement =>
  <>
    <label htmlFor="consumables-panel-select">
      {isNaN(Number(cur)) ? "Week" : "Weekly Average" }
    </label>
    <br />
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
        <label key={i}>
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
  acc[cur] = sharedFields
  return acc
}, {km: { public: 0, private: 0, }} as WeeklySummary)

const createWeeklySummaries =
  (entries: [string, WeekEntry][]): {[key: string]: WeeklySummary}[] => {

  const summaryAllWeeks = [] as {[key: string]: WeeklySummary}[]

  entries.forEach(([date, orders]) => {
    const summaryOneWeek = JSON.parse(JSON.stringify(weeklySummaryTemplate))
    orders.forEach(order => {
      if (order.delivery.type !== "no fuel") {
        summaryOneWeek.km[order.delivery.type] += order.delivery.km
      }
      order.types.forEach(type => {
        const n = type.name
        type.items.forEach(item => {
          const v = Object.values(item)[0] as Item

          const thb = isNaN(Number(v[0])) ? 0 : v[0]
          const gram = isNaN(Number(v[1])) ? 0 : Number(v[1])

          summaryOneWeek[n].thb += thb
          summaryOneWeek[n].total_gram += gram

          summaryOneWeek[n].vegan +=
            isNaN(Number(v[2])) ? 0 : gram - Number(v[2])
          summaryOneWeek[n].non_vegan += isNaN(Number(v[2])) ? 0 : v[2]
          summaryOneWeek[n].cert_organic += v[3] === "yes" ? gram : 0
          summaryOneWeek[n].not_cert_organic += v[3] === "no" ? gram : 0
          summaryOneWeek[n].unprocessed += v[4] === "no" ? gram : 0
          summaryOneWeek[n].processed += v[4] === "processed" ? gram : 0
          summaryOneWeek[n].ultra_processed += v[4] === "ultra" ? gram : 0

          summaryOneWeek[n].waste.plastic += isNaN(Number(v[5])) ? 0 : v[5]
          summaryOneWeek[n].waste.paper += isNaN(Number(v[6])) ? 0 : v[6]
          summaryOneWeek[n].waste.glass += isNaN(Number(v[7])) ? 0 : v[7]
        })
      })
    })
    summaryAllWeeks.push({ [date]: summaryOneWeek })
  })
  return summaryAllWeeks
}

const createAvgSummary =
  (summaries: {[key: string]: WeeklySummary}[], n: number) => {

  const sum = summaries.reduce((acc, cur) =>
    addAtMostThreeLevelNestedObjs(acc, Object.values(cur)[0])
  , JSON.parse(JSON.stringify(weeklySummaryTemplate)))

  const avg = opAtMostThreeLevelNestedObjs(sum, a => Math.round(a / n))
  return avg
}
const opAtMostThreeLevelNestedObjs = (a, op) => {
  return Object.keys(a).reduce((acc, j) => {
    if (isNaN(acc[j])) {
      Object.keys(acc[j]).forEach(k => {
        if (isNaN(acc[j][k])) {
          Object.keys(acc[j][k]).forEach(l => {
            acc[j][k][l] = op(acc[j][k][l])
          })
        } else {
          acc[j][k] = op(acc[j][k])
        }
      })
    } else {
      acc[j] = op(acc[j])
    }
    return acc
  }, a)
}
const addAtMostThreeLevelNestedObjs = (a, b) => {
  return Object.keys(a).reduce((acc, j) => {
    if (isNaN(acc[j])) {
      Object.keys(acc[j]).forEach(k => {
        if (isNaN(acc[j][k])) {
          Object.keys(acc[j][k]).forEach(l => {
            acc[j][k][l] += b[j][k][l]
          })
        } else {
          acc[j][k] += b[j][k]
        }
      })
    } else {
      acc[j] += b[j]
    }
    return acc
  }, a)
}
