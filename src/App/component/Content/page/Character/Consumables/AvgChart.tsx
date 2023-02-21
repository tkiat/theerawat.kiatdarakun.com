import React from "react"
import {Bar} from "react-chartjs-2"
import {Chart, registerables} from "chart.js"

import {WeeklySummary, ConsumableType, WeeklySummaryValue, consumableTypeSummaryTemplate} from "./share"

Chart.register(...registerables)

type I = {
  cur: string,
  avgSummaries: WeeklySummary,
  fields: Set<ConsumableType>,
}
export const AvgChart = ({cur, fields, avgSummaries}: I):
  React.ReactElement => {

  if(!(cur in avgSummaries)) return <p>Loading ...</p>
  const summary = combineFields(avgSummaries[cur], fields)
  const data = {
    labels: [
      "Total",
      "Non-Vegan",
      "Processed",
      "Ultra-Processed",
      "Certified Organic",
    ],
    datasets: [{
      data: [
        summary.total_gram,
        summary.non_vegan,
        summary.processed,
        summary.ultra_processed,
        summary.cert_organic,
      ],
      borderWidth: 2,
      borderColor: "black",
      backgroundColor: "lightgray",
    }],
  }

  return (
    <div className="consumables-avg">
      <ul className="info-side">
        <li>
          Delivery
          <ul>
            <li>Public ({summary.km.public}km)</li>
            <li>Private ({summary.km.private}km)</li>
          </ul>
        </li>
        <li>Spending: {summary.thb} THB</li>
        <li>
          Packaging
          <ul>
            <li>Plastic ({summary.waste.plastic}g)</li>
            <li>Paper ({summary.waste.paper}g)</li>
            <li>Glass ({summary.waste.glass}g)</li>
          </ul>
        </li>
      </ul>
      <div className="consumables-avg__bar-container">
        <Bar
          data={data}
          options={{
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
            responsive: true,
            scales: {
              y: {
                title: {
                  display: true,
                  text: "gram",
                },
              }
            }
          }}
        />
      </div>
    </div>
  )
}

const combineFields = (summary: WeeklySummaryValue, fields: Set<ConsumableType>) =>
  [...fields].reduce((acc, cur) => {
    acc.thb += summary.types[cur].thb
    acc.total_gram += summary.types[cur].total_gram

    acc.non_vegan += summary.types[cur].non_vegan
    acc.cert_organic += summary.types[cur].cert_organic
    acc.processed += summary.types[cur].processed
    acc.ultra_processed += summary.types[cur].ultra_processed

    acc.waste.plastic += summary.types[cur].waste.plastic
    acc.waste.paper += summary.types[cur].waste.paper
    acc.waste.glass += summary.types[cur].waste.glass
    return acc
  }, {
    ... JSON.parse(JSON.stringify(consumableTypeSummaryTemplate)),
    km: { public: summary.km.public, private: summary.km.private, },
  })
