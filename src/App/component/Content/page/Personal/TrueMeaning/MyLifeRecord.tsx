import React from "react"

import {Spendings} from "./MyLifeRecord/Spendings"
import {MakingFood} from "./MyLifeRecord/MakingFood"

export const MyLifeRecord = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1><u>The Record of My Life</u></h1>

    <p>My judgments and interpretations of true meaning has led to relatively less impactful life in all areas, for example, environment, animal welfare, and minimalism. I would like to record all my decisions and my lifestyle according to them. This will be a part of the first book.</p>

    <section>
      <h2>Consumables</h2>

      <p>These personal records are a part of my work in progress about the true meaning of life. For consumables, the current ideal choice maximizes my health benefits and convenience while minimizing unnecessary environmental impact and suffering upon sentient beings.</p>

      <section>
        <h3 className="highlight">Spendings</h3>

        <Spendings />
      </section>

      <section>
        <h3 className="highlight">Making</h3>

          <section>
            <h4>Food</h4>

            <MakingFood />
          </section>
      </section>
    </section>
  </>
