import React from "react"
import * as jsYaml from "js-yaml"
import {useImmer} from "use-immer"
import { Chart, registerables } from "chart.js"

import { Bar } from 'react-chartjs-2'

const options = {
  maintainAspectRatio: false,
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
        text: "gram",
      },
    }
  }
}

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

const createWeeklySummaries = wks => {
  const result = []
  wks.forEach(([date, orders]) => {
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

const createOptionElements = (el, values, prefix, suffix) => {
  values.forEach(x => {
    const optionElem = document.createElement("option")
    optionElem.value = x
    optionElem.innerText = prefix + x + suffix
    el.appendChild(optionElem)
  })
}

const combineFields = (summary, fields) =>
  [...fields].reduce((acc, cur) => {
    acc.total_gram += summary[cur].total_gram

    acc.vegan += summary[cur].vegan
    acc.non_vegan += summary[cur].non_vegan
    acc.cert_organic += summary[cur].cert_organic
    acc.not_cert_organic += summary[cur].not_cert_organic
    acc.unprocessed += summary[cur].unprocessed
    acc.processed += summary[cur].processed
    acc.ultra_processed += summary[cur].ultra_processed

    acc.waste.plastic += summary[cur].waste.plastic
    acc.waste.paper += summary[cur].waste.paper
    acc.waste.glass += summary[cur].waste.glass
    return acc
  }, {
    ... JSON.parse(JSON.stringify(sharedFields)),
    km: { car: summary.km.car, online: summary.km.online, },
  })

export const Consumables = (): React.ReactElement => {
  const [weeks, setWeeks] = React.useState()

  const [avgSummaries, setAvgSummaries] = React.useState()

  const [cur, setCur] = useImmer({
    "mode": "avg",
    "value": 4,
  })

  const [fields, setFields] = React.useState(new Set())

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

    const avgOptions = createAvgOptions(weekEntries.length)
    const avgOptgroupElem = document.getElementById("select-avg")
    avgOptions.forEach(x => {
      const el = document.createElement("option")
      el.value = x
      el.innerText = "Last " + x + " Weeks"
      avgOptgroupElem.appendChild(el)
    })

    const weekOptions = weekEntries.map(([x,]) => x)
    const weekOptgroupElem = document.getElementById("select-week")
    weekOptions.forEach(x => {
      const el = document.createElement("option")
      el.value = x
      el.innerText = x
      weekOptgroupElem.appendChild(el)
    })

    const weeklySummaries = createWeeklySummaries(weekEntries)
    setAvgSummaries(avgOptions.reduce((acc, cur) => {
      acc[cur] = createAvgSummary(weeklySummaries.slice(0, cur), cur)
      return acc
    }, {}))

    const selectElem = document.getElementById("select")

    const c = document.getElementById("consumables-type-container")
    const typeCheckboxes = c.querySelectorAll("input[type='checkbox']")

    const onCheckboxElemChange = e => {
      setFields(prev => e.target.checked ?
          new Set(prev.add(e.target.value))
        : new Set([...prev].filter(x => x !== e.target.value))
      )
    }
    typeCheckboxes.forEach(el => {
      if (el.checked) setFields(prev => new Set(prev.add(el.value)))
      el.addEventListener("change", onCheckboxElemChange)
    })

    return () => {
      typeCheckboxes.forEach(el =>
        el.removeEventListener("change", onCheckboxElemChange)
      )
    }
  }, [weeks])

  return (
    <section>
      <h2>Consumables</h2>

      <div id="panel">
        <label id="consumables-mode" htmlFor="select">
          {cur.mode === "avg" ? "Weekly Average" : "Specific Week"}
        </label>
        <br />
        <select
          id="select"
          onChange={e => {
            setCur(d => {
              d.mode = e.target.options[e.target.selectedIndex].parentNode.dataset.mode
              d.value = e.target.value
            })
          }}>
          <optgroup data-mode="avg" id="select-avg" label="Weekly Average"></optgroup>
          <optgroup data-mode="specific" id="select-week" label="Specific Week"></optgroup>
        </select>

        <span id="consumables-type-container">
          <label>
            <input type="checkbox" value="food" defaultChecked />
            Food
          </label>

          <label>
            <input type="checkbox" value="drink" />
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

      {
        cur.mode === "avg" ?
          (avgSummaries ? <AvgChart avgSummary={avgSummaries[cur.value]} fields={fields} /> : <p>Loading ...</p>)
        : <WeekTable orders={weeks[cur.value]} fields={fields} />
      }
    </section>
  )
}

const AvgChart = ({avgSummary, fields}): React.ReactElement => {
//   return <canvas id="consumables-chart" width="400px" height="400px"></canvas>
  const summary = combineFields(avgSummary, fields)
  const data = {
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
  }

  return <Bar width={400} height={400} data={data} options={options} />
}

const WeekTable = ({fields, orders}): React.ReactElement => {
  const total =
    { thb: 0, gram: 0, nonvegan: 0, plastic: 0, paper: 0, glass: 0 }

  return (
    <table className="consumables-table">
      <colgroup span="3"></colgroup>
      <colgroup span="3"></colgroup>
      <colgroup span="3"></colgroup>
      <thead>
        <tr>
          <th rowSpan="2">Order</th>
          <th rowSpan="2">Title</th>
          <th rowSpan="2">THB</th>
          <th rowSpan="2">Total<br />(g)</th>
          <th rowSpan="2">Non-<br />Vegan (g)</th>
          <th rowSpan="2">Ultra-<br />Processed (g)</th>
          <th colSpan="3">Packaging (g)</th>
        </tr>
        <tr>
          <th>Plastic</th>
          <th>Paper</th>
          <th>Glass</th>
        </tr>
      </thead>
      <tbody>
      {
        orders.map((order, i) => {
          const modesInOrder = Object.entries(order.items)
          const numItems = Object.values(order.items).reduce((acc, cur) =>
            acc + cur.length, 0)
          return (
          <React.Fragment key={i}>
            {
              modesInOrder.map(([type, type_items], j) => {
//                 return fields.has(type) && (
                return (
                <React.Fragment key={j}>
                  {
                    type_items.map((item, k) => {
                      const name = Object.keys(item)[0]
                      const dscp = Object.values(item)[0]

                      total.thb += isNaN(dscp[0]) ? 0 : dscp[0]
                      total.gram += isNaN(dscp[1]) ? 0 : dscp[1]
                      total.nonvegan += isNaN(dscp[2]) ? 0 : dscp[2]
                      total.plastic += isNaN(dscp[5]) ? 0 : dscp[5]
                      total.paper += isNaN(dscp[6]) ? 0 : dscp[6]
                      total.glass += isNaN(dscp[7]) ? 0 : dscp[7]

                      const lastIteminOrder = j === modesInOrder.length - 1 &&
                        k === type_items.length - 1
                      const className = lastIteminOrder ? "last-tr-order" : ""
                      return (
                        <tr className={className} key={k}>
                          {
                            (j === 0 && k === 0) &&
                            <td rowSpan={numItems}>
                              {order.mode}
                              {"km" in order && <><br />({order.km} km)</>}
                            </td>
                          }
                          <td>{name}</td>
                          <td>{dscp[0]}</td>
                          <td>{dscp[1]}</td>
                          <td>{dscp[2]}</td>
                          <td>{dscp[3]}</td>
                          <td>{dscp[5]}</td>
                          <td>{dscp[6]}</td>
                          <td>{dscp[7]}</td>
                        </tr>
                      )
                    })
                  }
                </React.Fragment>
                )
              })
            }
          </React.Fragment>
          )
        })
      }
        <tr>
          <td colSpan="2">Total</td>
          <td>{total.thb}</td>
          <td>{total.gram}</td>
          <td>{total.nonvegan}</td>
          <td>{total.thb}</td>
          <td>{total.plastic}</td>
          <td>{total.paper}</td>
          <td>{total.glass}</td>
        </tr>
      </tbody>
    </table>
  )
}
