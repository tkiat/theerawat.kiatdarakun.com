import React from "react"

import {ConsumableType, ItemValue, Weeks} from "./share"
import {TooltipText} from "../../../share"

type I = {
  cur: string,
  fields: Set<ConsumableType>,
  weeks: Weeks,
}
export const WeekTable = ({cur, fields, weeks}: I): React.ReactElement => {
  if(!(cur in weeks)) return <p>Loading ...</p>

  const total = {thb: 0, gram: 0, nonvegan: 0, plastic: 0, paper: 0, glass: 0}

  return (
    <div className="consumables-table-wrapper">
      <table className="consumables-table">
        <colgroup span={3}></colgroup>
        <colgroup span={3}></colgroup>
        <colgroup span={3}></colgroup>
        <thead>
          <tr>
            <th rowSpan={1}>Delivery</th>
            <th rowSpan={1}>Title</th>
            <th rowSpan={1}>THB</th>
            <th rowSpan={1}>Gram</th>
            <th rowSpan={1}>Non-Vegan (g)</th>
            <th rowSpan={1}>
              <TooltipText text="Processed">
                <span className="notbold">
                  Processed (g) / Ultra-processed (g)
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

                        total.thb += isNaN(Number(v[0])) ? 0 : v[0]
                        total.gram += isNaN(Number(v[1])) ? 0 : Number(v[1])
                        total.nonvegan += isNaN(Number(v[2])) ? 0 : Number(v[2])
                        total.plastic += isNaN(Number(v[5])) ? 0 : v[5]
                        total.paper += isNaN(Number(v[6])) ? 0 : v[6]
                        total.glass += isNaN(Number(v[7])) ? 0 : v[7]

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
                            <td>{v[4]}</td>
                            <td>{v[5]}</td>
                            <td>{v[6]}</td>
                            <td>{v[7]}</td>
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
            <td>{total.gram}</td>
            <td>{total.nonvegan}</td>
            <td>{total.thb}</td>
            <td>{total.plastic}</td>
            <td>{total.paper}</td>
            <td>{total.glass}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
