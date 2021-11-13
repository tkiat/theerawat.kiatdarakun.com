import React from 'react'

type P = {items: React.ReactElement[]}
export const Cards = ({ items }: P): React.ReactElement =>
  <div className="cards">
    {items.map((item, i) => (
      <div key={i} className="cards__item">{item}</div>
    ))}
  </div>
