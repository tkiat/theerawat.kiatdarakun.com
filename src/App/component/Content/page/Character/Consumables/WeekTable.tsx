import React from "react"

export const WeekTable = ({fields, orders}): React.ReactElement => {
  const total = {thb: 0, gram: 0, nonvegan: 0, plastic: 0, paper: 0, glass: 0}

  return (
    <table className="consumables-table">
      <colgroup span="3"></colgroup>
      <colgroup span="3"></colgroup>
      <colgroup span="3"></colgroup>
      <thead>
        <tr>
          <th rowSpan="2">Delivery</th>
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
          const itemsInOrder = Object.entries(order.items)
            .filter(([x, y]) => fields.has(x))
          const numItems = itemsInOrder.reduce((acc, cur) => {
            return acc + cur[1].length
          }, 0)
          return (
          <React.Fragment key={i}>
            {
              itemsInOrder.map(([, items], j) => {
                return (
                <React.Fragment key={j}>
                  {
                    items.map((item, k) => {
                      const name = Object.keys(item)[0]
                      const dscp = Object.values(item)[0]

                      total.thb += isNaN(dscp[0]) ? 0 : dscp[0]
                      total.gram += isNaN(dscp[1]) ? 0 : dscp[1]
                      total.nonvegan += isNaN(dscp[2]) ? 0 : dscp[2]
                      total.plastic += isNaN(dscp[5]) ? 0 : dscp[5]
                      total.paper += isNaN(dscp[6]) ? 0 : dscp[6]
                      total.glass += isNaN(dscp[7]) ? 0 : dscp[7]

                      const lastIteminOrder = j === itemsInOrder.length - 1 &&
                        k === items.length - 1
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
