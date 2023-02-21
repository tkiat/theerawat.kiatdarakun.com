import React from "react"

import {ConsumableType, ItemValue, Weeks, consumableTypeSummaryTemplate} from "./share"
import {TooltipText} from "../../../share"

type I = {
  cur: string,
  fields: Set<ConsumableType>,
  weeks: Weeks,
}
export const WeekTable = ({cur, fields, weeks}: I): React.ReactElement => {
  if(!(cur in weeks)) return <p>Loading ...</p>

  const total = JSON.parse(JSON.stringify(consumableTypeSummaryTemplate))

  return (
    <div className="consumables-table-wrapper">
      <table className="consumables-table">
        <thead>
          <tr>
            <th rowSpan={1}>Delivery</th>
            <th rowSpan={1}>Title</th>
            <th rowSpan={1}>THB</th>
            <th rowSpan={1}>Gram</th>
            <th rowSpan={1}>Non-Vegan (g)</th>
            <th rowSpan={1}>
              <TooltipText text="Health">
                <span className="notbold">
                  Probably Unhealthy (g) / Unhealthy (g)
                </span>
              </TooltipText>
            </th>
            <th rowSpan={1}>Plastic</th>
            <th rowSpan={1}>Paper</th>
            <th rowSpan={1}>Glass</th>
          </tr>
        </thead>
        <tbody>
        {
          weeks[cur].map((order, i) => {
            const types = order.types.filter(
              x => fields.has(x.name)
            )
            const numItems = types.reduce((acc, cur) => {
              return acc + cur.items.length
            }, 0)
            return (
            <React.Fragment key={i}>
              {
                types.map((type, j) => {
                  return (
                  <React.Fragment key={j}>
                    {
                      type.items.map((item, k) => {
                        const title = Object.keys(item)[0]
                        const v = Object.values(item)[0] as ItemValue

                        total.thb += v[0]
                        total.total_gram += isNaN(Number(v[1])) ? 0 : Number(v[1])
                        total.non_vegan += isNaN(Number(v[2])) ? 0 : Number(v[2])
//                         total.organic += isNaN(Number(v[3])) ? 0 : Number(v[3])
                        total.may_unhealthy += isNaN(Number(v[4])) ? 0 : Number(v[4])
                        total.unhealthy += isNaN(Number(v[5])) ? 0 : Number(v[5])
                        total.pkg.plastic += v[6]
                        total.pkg.paper += v[7]
                        total.pkg.glass += v[8]

                        const lastIteminOrder = j === types.length - 1 &&
                          k === type.items.length - 1
                        const className = lastIteminOrder ? "last-tr-order" : ""
                        return (
                          <tr className={className} key={k}>
                            {
                              (j === 0 && k === 0) &&
                              <td rowSpan={numItems}>
                                {order.delivery.type}
                                {
                                  order.delivery.type !== "no fuel" &&
                                  <><br />{order.delivery.km} km</>
                                }
                              </td>
                            }
                            <td>{title}</td>
                            <td>{v[0]}</td>
                            <td>{v[1]}</td>
                            <td>{v[2]}</td>
                            <td>{v[4]}/{v[5]}</td>
                            <td>{v[6]}</td>
                            <td>{v[7]}</td>
                            <td>{v[8]}</td>
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
            <td colSpan={2}>Total</td>
            <td>{total.thb}</td>
            <td>{total.total_gram}</td>
            <td>{total.non_vegan}</td>
            <td>{total.may_unhealthy}/{total.unhealthy}</td>
            <td>{total.pkg.plastic}</td>
            <td>{total.pkg.paper}</td>
            <td>{total.pkg.glass}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
