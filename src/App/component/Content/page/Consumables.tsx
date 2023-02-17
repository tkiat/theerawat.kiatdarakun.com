import React from "react"
import * as jsYaml from 'js-yaml'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const resource = "/character/consumables.yaml"

const gramThbObj = {
  gram: 0,
  thb: 0,
}
const edibleFields = {
  thb: 0,
  total_gram: 0,

  vegan: gramThbObj,
  non_vegan: gramThbObj,

  unprocessed: gramThbObj,
  processed: gramThbObj,
  ultra_processed: gramThbObj,

  cert_organic: gramThbObj,
  not_cert_organic: gramThbObj,

  waste: { plastic: 0, paper: 0, glass: 0, },
}

const wkSummaryTemplate = {
  km: { car: 0, online: 0, },
  food: edibleFields,
  drink: edibleFields,
  "other edibles": edibleFields,
  nonedibles: edibleFields,
}

const createSummaryChart = (ctx, summary, mode) => new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      'Vegan',
      'Non-Vegan',
      '',
      'Unprocessed',
      'Processed',
      'Ultra-Processed',
      '',
      'Certified Organic',
      'Not Certified Organic'
    ],
    datasets: [{
      data: [
        summary.vegan[mode],
        summary.non_vegan[mode],
        0,
        summary.unprocessed[mode],
        summary.processed[mode],
        summary.ultra_processed[mode],
        0,
        summary.cert_organic[mode],
        summary.not_cert_organic[mode],
      ],
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor: 'lightgray',
    }],
  },
  options: {
    plugins: {
      tooltip:{
        intersect : false,
        mode:'index',
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

          summary[type].vegan.gram += isNaN(v[2]) ? 0 : gram - v[2]
          summary[type].vegan.thb += isNaN(v[2]) ? 0 : (v[2] === 0 ? thb : 0)

          summary[type].non_vegan.gram += isNaN(v[2]) ? 0 : v[2]
          summary[type].non_vegan.thb += (isNaN(v[2]) || v[2] === 0) ? 0 : thb

          summary[type].cert_organic.gram += v[3] === 'yes' ? gram : 0
          summary[type].cert_organic.thb += v[3] === 'yes' ? thb : 0

          summary[type].not_cert_organic.gram += v[3] === 'no' ? gram : 0
          summary[type].not_cert_organic.thb += v[3] === 'no' ? thb : 0

          summary[type].unprocessed.gram += v[4] === 'no' ? gram : 0
          summary[type].unprocessed.thb += v[4] === 'no' ? thb : 0

          summary[type].processed.gram += v[4] === 'processed' ? gram : 0
          summary[type].processed.thb += v[4] === 'processed' ? thb : 0

          summary[type].ultra_processed.gram += v[4] === 'ultra' ? gram : 0
          summary[type].ultra_processed.thb += v[4] === 'ultra' ? thb : 0

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

const createWeeklyAvgSummary = (summaries, n) => {
  const sum = summaries.slice(0, n).reduce((acc, cur) =>
    addAtMostThreeLevelNestedObjs(acc, Object.values(cur)[0])
  , JSON.parse(JSON.stringify(wkSummaryTemplate)))

  return opAtMostThreeLevelNestedObjs(sum, a => Math.round(a / n))
}

const createAvgOptions = n => {
  if (n <=4 ) return [n]
  else if (n <= 12) return [4, n]
  else if (n <= 52) return [4, 12, n]
  else return [4, 12, 52, n]
}

let avgGramChart, avgOptions, avgSummaries

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
//         foodRecord.initialize(
//           document.getElementById('display-consumables-record_purchase'),
//           jsYaml.load(resoureces.consumables),
//         )
    })()

    return () => { mounted = false }
  }, [])

  if (item) {
    const weeks = jsYaml.load(item)
//     console.log(yaml)
    avgOptions = createAvgOptions(weeks.length)
    const weekOptions = Object.values(weeks).map(x => Object.keys(x)[0])

    const weeklySummaries = createWeeklySummaries(weeks)
    avgSummaries = avgOptions.reduce((acc, cur) => {
      acc[cur] = createWeeklyAvgSummary(weeklySummaries, cur)
      return acc
    }, {})
    const avgSummary = avgSummaries[4].food
    console.log(avgSummary)

    const chartElem = document.getElementById("consumables-chart")
    if (avgGramChart !== undefined) avgGramChart.destroy()
    avgGramChart = createSummaryChart(chartElem, avgSummary, 'gram')
  }

  return (
    <section>
      <h2>Consumables</h2>

      {
        avgOptions && avgOptions.map((t, i) =>
          <div key={i}>
            <input type="radio" name="avg-options" id={"avg-options-" + t} value={t}
                   style={{cursor: "pointer"}}
                   defaultChecked={t === avgOptions[0]}
                   onClick={() => {
                     console.log(t)
                     const chartElem = document.getElementById("consumables-chart")

                     if (avgGramChart !== undefined) avgGramChart.destroy()
                      const avgSummary = avgSummaries[4].food
                     avgGramChart = createSummaryChart(chartElem, avgSummary, 'gram')
                   }}
                   />
            <span>&nbsp;&nbsp;</span>
            <label style={{cursor: "pointer"}} htmlFor={"avg-options-" + t}>
              {t}
            </label>
          </div>
      )}
      <canvas id="consumables-chart" width="400px" height="400px"></canvas>

    </section>
  )
}
