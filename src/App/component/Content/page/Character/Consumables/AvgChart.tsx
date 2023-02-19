import React from "react"
import {Bar} from "react-chartjs-2"
import {Chart, registerables} from "chart.js"

import {sharedFields} from "./share"

Chart.register(...registerables)

export const AvgChart = ({avgSummary, fields}): React.ReactElement => {
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

  return (
    <div className="consumables-avg">
      <ul>
        <li>Total Spent: {summary.thb} THB</li>
        <li>
          Delivery (km)<br />(for All Consumables)
          <ul>
            <li>Public ({summary.km.public})</li>
            <li>Private ({summary.km.private})</li>
          </ul>
        </li>
        <li>
          Packaging (g)
          <ul>
            <li>Plastic ({summary.waste.plastic})</li>
            <li>Paper ({summary.waste.paper})</li>
            <li>Glass ({summary.waste.glass})</li>
          </ul>
        </li>
      </ul>
      <Bar width={400} height={400} data={data}
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
          responsive: false,
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
  )
}

const combineFields = (summary, fields) =>
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
    ... JSON.parse(JSON.stringify(sharedFields)),
    km: { public: summary.km.public, private: summary.km.private, },
  })
