import React from "react"
import {Bar} from "react-chartjs-2"
import {Chart, registerables} from "chart.js"

import {WeeklySummary, ConsumableType, WeeklySummaryValue, consumableTypeSummaryTemplate} from "./share"
import {TooltipFa} from "../../../share"

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
      "Probably Unhealthy",
      "Unhealthy",
      "Organic",
    ],
    datasets: [{
      data: [
        summary.total_gram,
        summary.non_vegan,
        summary.may_unhealthy,
        summary.unhealthy,
        summary.organic,
      ],
      borderWidth: 2,
      borderColor: "black",
      backgroundColor: "lightgray",
    }],
  }

  return (
    <div className="consumables-avg">
      <div className="info-side">
        <ul>
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
              <li>Plastic ({summary.pkg.plastic}g)</li>
              <li>Paper ({summary.pkg.paper}g)</li>
              <li>Glass ({summary.pkg.glass}g)</li>
            </ul>
          </li>
        </ul>
        <TooltipFa faclass="fa-solid fa-circle-question">
          <ul>
            <li>I mostly record only consumables I bought and exclude the delivery price (to make it more universal to the reader), so the actual spending is higher.</li>
            <li><b className="highlight">Non-vegan</b>: I always buy vegan food for myself, but I sometimes consume it when I think I should do so (like when it actually helps animals or in some social settings). I don't usually record those exceptions.</li>
            <li><b className="highlight">Delivery</b>: I regard any delivery to multiple recipients at a time (like any delivery service) as <i>public</i>, and everything else as <i>private</i>. I divide the share accordingly, for example, I record half of the actual distance when I order the same thing along with another person in one order.</li>
            <li><b className="highlight">Health</b>: I regard consumables that are harmful for health regardless of the amount as <i>unhealthy</i> (like ultra-processed food). When I am not sure about that, like processed food in a shop that I don't know the ingredients or what happens behind the scenes, I regard it as <i>probably unhealthy</i>.</li>
            <li><b className="highlight">Packaging</b>: I only record the package that coems with consumables. This excludes, for example, a cardboard box that is a part of a delivery service.</li>
          </ul>
        </TooltipFa>
      </div>
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
    acc.organic += summary.types[cur].organic
    acc.may_unhealthy += summary.types[cur].may_unhealthy
    acc.unhealthy += summary.types[cur].unhealthy

    acc.pkg.plastic += summary.types[cur].pkg.plastic
    acc.pkg.paper += summary.types[cur].pkg.paper
    acc.pkg.glass += summary.types[cur].pkg.glass
    return acc
  }, {
    ... JSON.parse(JSON.stringify(consumableTypeSummaryTemplate)),
    km: { public: summary.km.public, private: summary.km.private, },
  })
