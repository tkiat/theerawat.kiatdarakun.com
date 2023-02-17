import React from "react"
import * as jsYaml from "js-yaml"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

const resource = "/character/consumables.yaml"

const sharedFields = {
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

const wkSummaryTemplate = {
  km: { car: 0, online: 0, },
  food: sharedFields,
  drink: sharedFields,
  "other edibles": sharedFields,
  nonedibles: sharedFields,
}

const createSummaryChart = (ctx, summary) => new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Vegan",
      "Non-Vegan",
      "",
      "Unprocessed",
      "Processed",
      "Ultra-Processed",
      "",
      "Certified Organic",
      "Not Certified Organic"
    ],
    datasets: [{
      data: [
        summary.vegan,
        summary.non_vegan,
        0,
        summary.unprocessed,
        summary.processed,
        summary.ultra_processed,
        0,
        summary.cert_organic,
        summary.not_cert_organic,
      ],
      borderWidth: 2,
      borderColor: "black",
      backgroundColor: "lightgray",
    }],
  },
  options: {
    plugins: {
      tooltip:{
        intersect : false,
        mode:"index",
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "",
      },
    },
    responsive: false,
    scales: {
      y: {
        title: {
          display: true,
          text: mode,
        },
      }
    }
  }
})

const createWeeklySummaries = wks => {
  const result = []
  wks.forEach(wk => {
    const date = Object.keys(wk)[0]
    const orders = Object.values(wk)[0]

    const summary = JSON.parse(JSON.stringify(wkSummaryTemplate))
    orders.forEach(order => {
      if (order.mode in summary.km && !isNaN(order.km)) {
        summary.km[order.mode] += order.km
      }
      Object.entries(order.items).forEach(([type, type_items]) => {
        type_items.forEach(item => {
          const v = Object.values(item)[0]

          const thb = isNaN(v[0]) ? 0 : v[0]
          const gram = isNaN(v[1]) ? 0 : v[1]

          summary[type].thb += thb
          summary[type].total_gram += gram

          summary[type].vegan += isNaN(v[2]) ? 0 : gram - v[2]
          summary[type].non_vegan += isNaN(v[2]) ? 0 : v[2]
          summary[type].cert_organic += v[3] === "yes" ? gram : 0
          summary[type].not_cert_organic += v[3] === "no" ? gram : 0
          summary[type].unprocessed += v[4] === "no" ? gram : 0
          summary[type].processed += v[4] === "processed" ? gram : 0
          summary[type].ultra_processed += v[4] === "ultra" ? gram : 0

          summary[type].waste.plastic += isNaN(v[5]) ? 0 : v[5]
          summary[type].waste.paper += isNaN(v[6]) ? 0 : v[6]
          summary[type].waste.glass += isNaN(v[7]) ? 0 : v[7]
        })
      })
    })
    result.push({ [date]: summary })
  })
  return result
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

const createAvgSummary = (summaries, n) => {
  const sum = summaries.reduce((acc, cur) =>
    addAtMostThreeLevelNestedObjs(acc, Object.values(cur)[0])
  , JSON.parse(JSON.stringify(wkSummaryTemplate)))

  const avg = opAtMostThreeLevelNestedObjs(sum, a => Math.round(a / n))
  return avg
}

const createAvgOptions = n => {
  if (n <=4 ) return [n]
  else if (n <= 12) return [4, n]
  else if (n <= 52) return [4, 12, n]
  else return [4, 12, 52, n]
}

const createSelectOptions = (elem, values, prefix, suffix) => {
  values.forEach(x => {
    const optionElem = document.createElement('option')
    optionElem.value = x
    optionElem.innerText = prefix + x + suffix
    elem.appendChild(optionElem)
  })
}

let avgGramChart, avgOptions, avgSummaries, mode

export const Consumables = (): React.ReactElement => {
  const [item, setItem] = React.useState()

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await fetch(resource)

      if (mounted) {
        const type = res.headers.get("content-type")
        if (type && type.indexOf("text/yaml") !== -1) {
          const c = await res.text()
          setItem(c)
        }
      }
    })()

    return () => { mounted = false }
  }, [])

  React.useEffect((): (() => void) => {
    if (item) {
      const weeks = jsYaml.load(item)

      avgOptions = createAvgOptions(weeks.length)
  //     const weekOptions = Object.values(weeks).map(x => Object.keys(x)[0])

      const weeklySummaries = createWeeklySummaries(weeks)
      avgSummaries = avgOptions.reduce((acc, cur) => {
        acc[cur] = createAvgSummary(weeklySummaries.slice(0, cur), cur)
        return acc
      }, {})

      createSelectOptions(document.getElementById("select-avg"), avgOptions, "Last ", " Weeks")

      const sElem = document.getElementById("select")
      sElem.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }, [item])

  return (
    <section>
      <h2>Consumables</h2>

      <div id="panel">
        <label id="consumables-mode" htmlFor="select"></label>
        <br />
        <select
          id="select"
          onChange={e => {
            const ind = e.target.selectedIndex
            const isOptgroupAvg = ind < avgOptions.length

            const s = document.getElementById("consumables-mode")

            if (isOptgroupAvg) {
              s.innerText = 'Weekly Average'

              const numWeeks = avgOptions[ind]
              const avgSummary = avgSummaries[numWeeks]?.food

              const chartElem = document.getElementById("consumables-chart")
              if (avgGramChart !== undefined) avgGramChart.destroy()
              avgGramChart = createSummaryChart(chartElem, avgSummary)
            } else {
              s.innerText = 'Specific Week'
            }
          }}
        >
          <optgroup id="select-avg" label="Weekly Average"></optgroup>
          <optgroup id="select-week" label="Specific Week"></optgroup>
        </select>

        <span id="field-selector">
          <label>
            <input type="checkbox" value="food" defaultChecked />
            Food
          </label>

          <label>
            <input type="checkbox" value="drink" defaultChecked />
            Drink
          </label>

          <label>
            <input type="checkbox" value="other edibles" defaultChecked />
            Other Edibles
          </label>

          <label>
            <input type="checkbox" value="nonedibles" />
            Nonedibles
          </label>
        </span>
      </div>

      <canvas id="consumables-chart" width="400px" height="400px"></canvas>
    </section>
  )
}
