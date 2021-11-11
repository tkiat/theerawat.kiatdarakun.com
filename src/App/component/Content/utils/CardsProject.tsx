import React from 'react'

type Project = {
  title: string
  description: string
  keyword: string[]
  type: string

  inactive?: boolean
  link?: string
}

type P = {items: Project[]}
export const CardsProject = ({items}: P): React.ReactElement => (
  <div className="cards-projects">
    {items.map((item, i) => (
      <div className="cards-project" key={i}>
        <div className="cards-project__item cards-project__item--type">
          {item.type}
        </div>

        {item.keyword.map((k, i) => (
          <div
            key={i}
            className="cards-project__item cards-project__item--keyword">
            {k}
          </div>
        ))}

        <div
          className={
            'cards-project__item cards-project__item--description' +
            (item.inactive ? ' cards-project__item--description-inactive' : '')
          }
        >
        <h3>
        {
          item.link ? 
            <a href={item.link} aria-label={'source code of ' + item.title}>
              {item.title}
            </a>
          : item.title
        }
        </h3>
          {item.description && <span> - {item.description}</span>}
        </div>
      </div>
    ))}
  </div>
)
