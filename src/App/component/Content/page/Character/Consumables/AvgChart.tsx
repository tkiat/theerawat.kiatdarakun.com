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

  return (
    <div className="consumables-avg">
      <ul className="info-side">
        <li>
          <b>All Consumables</b>
          <ul>
            <li>
              Delivery
              <ul>
                <li>Public ({summary.km.public}km)</li>
                <li>Private ({summary.km.private}km)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Selected Consumables</b>
          <ul>
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
      <p className="info-line"><b>All Consumables</b>: Delivery (Public {summary.km.public}km, Private {summary.km.private}km) <b> — Selected Consumables</b>: Spending ({summary.thb} THB), Packaging (Plastic {summary.waste.plastic}g, Paper {summary.waste.paper}g, Glass {summary.waste.glass}g)</p>
    </div>
  )
}
//       <p>{summary.thb} THB — Delivery (for All Consumables): Public {summary.km.public}km, Private {summary.km.private}km — Packaging: Plastic {summary.waste.plastic}g, Paper {summary.waste.paper}g, Glass {summary.waste.glass}g</p>

const combineFields = (summary: WeeklySummaryValue, fields: Set<ConsumableType>) =>
  [...fields].reduce((acc, cur) => {
    acc.total_gram += summary[cur].total_gram
    acc.thb += summary[cur].thb

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
    ... JSON.parse(JSON.stringify(consumableTypeSummaryTemplate)),
    km: { public: summary.km.public, private: summary.km.private, },
  })
