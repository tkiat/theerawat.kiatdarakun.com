import React from "react"
import * as jsYaml from "js-yaml"
import {useImmer} from "use-immer"

import {capitalize} from "@app/share"
import {WeekTable} from "./Consumables/WeekTable"
import {AvgChart} from "./Consumables/AvgChart"
import {sharedFields} from "./Consumables/share"

const resource = "/character/consumables/record.yaml"
const consumableTypes = ["food", "drink-liquid", "drink-solid", "other-edibles", "nonedibles"]

// type Mode = "car" | "online" | "no fuel"
// 
// type Weeks = {
//   [key: string]: [
//     {
//       mode: Mode,
// 
//     }
//   ]
// }

export const Consumables = (): React.ReactElement => {
  const [weeks, setWeeks] = React.useState()

  const [avgSummaries, setAvgSummaries] = React.useState()

  const [cur, setCur] = useImmer("4")
//   const [cur, setCur] = useImmer("2023-02-11")

  const [fields, setFields] = React.useState(new Set(
    [0, 2].map(x => consumableTypes[x])
  ))

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await fetch(resource)

      if (mounted) {
        const type = res.headers.get("content-type")
        if (type && type.indexOf("text/yaml") !== -1) {
          const yaml = jsYaml.load(await res.text())
          setWeeks(yaml)
        }
      }
    })()

    return () => { mounted = false }
  }, [])

  React.useEffect((): (() => void) => {
    if (!weeks) return

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
    }, {}))
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
        <Checkboxes
          consumableTypes={consumableTypes}
          fields={fields}
          setFields={setFields}
        />
      </div>
      {
        isNaN(cur) ?
          (
            weeks ?
              <WeekTable orders={weeks[cur]} fields={fields} />
            : <p>Loading ...</p>
          )
        : (
            avgSummaries ?
              <AvgChart avgSummary={avgSummaries[cur]} fields={fields} />
            : <p>Loading ...</p>
          )
      }
    </section>
  )
}

const Select = ({cur, setCur, avgSummaries, weeks}): React.ReactElement =>
  <>
    <label htmlFor="consumables-panel-select">
      {isNaN(cur) ? "Week" : "Weekly Average" }
    </label>
    <br />
    <select
      id="consumables-panel-select"
      key={avgSummaries && weeks ? "not loaded" : "loaded"}
      onChange={e => setCur(e.target.value)}
      defaultValue={cur}
    >
      <optgroup label="Weekly Average">
        {
          avgSummaries && Object.keys(avgSummaries).map((x, i) =>
            <option key={i} value={x}>Last {x} Weeks</option>
          )
        }
      </optgroup>
      <optgroup label="Week">
        {
          weeks && Object.keys(weeks).map((x, i) =>
            <option key={i} value={x}>{x}</option>
          )
        }
      </optgroup>
    </select>
  </>

const Checkboxes = ({consumableTypes, fields, setFields}): React.ReactElement =>
  <>
    {
      consumableTypes.map((x, i) =>
        <label key={i}>
          <input
            type="checkbox"
            value={x}
            checked={fields.has(x)}
            onChange={e => {
              setFields(prev => e.target.checked ?
                  new Set(prev.add(e.target.value))
                : new Set([...prev].filter(x => x !== e.target.value))
              )
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
}, {km: { public: 0, private: 0, }})

const createWeeklySummaries = weeks => {
  const summaryAllWeeks = []

  weeks.forEach(([date, orders]) => {
    const summaryOneWeek = JSON.parse(JSON.stringify(weeklySummaryTemplate))
    orders.forEach(order => {
      if (order.delivery.type !== "no fuel") {
        summaryOneWeek.km[order.delivery.type] += order.delivery.km
      }
      Object.entries(order.items).forEach(([type, items]) => {
        items.forEach(item => {
          const v = Object.values(item)[0]
          const thb = isNaN(v[0]) ? 0 : v[0]
          const gram = isNaN(v[1]) ? 0 : v[1]

          summaryOneWeek[type].thb += thb
          summaryOneWeek[type].total_gram += gram

          summaryOneWeek[type].vegan += isNaN(v[2]) ? 0 : gram - v[2]
          summaryOneWeek[type].non_vegan += isNaN(v[2]) ? 0 : v[2]
          summaryOneWeek[type].cert_organic += v[3] === "yes" ? gram : 0
          summaryOneWeek[type].not_cert_organic += v[3] === "no" ? gram : 0
          summaryOneWeek[type].unprocessed += v[4] === "no" ? gram : 0
          summaryOneWeek[type].processed += v[4] === "processed" ? gram : 0
          summaryOneWeek[type].ultra_processed += v[4] === "ultra" ? gram : 0

          summaryOneWeek[type].waste.plastic += isNaN(v[5]) ? 0 : v[5]
          summaryOneWeek[type].waste.paper += isNaN(v[6]) ? 0 : v[6]
          summaryOneWeek[type].waste.glass += isNaN(v[7]) ? 0 : v[7]
        })
      })
    })
    summaryAllWeeks.push({ [date]: summaryOneWeek })
  })
  return summaryAllWeeks
}

const createAvgSummary = (summaries, n) => {
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
