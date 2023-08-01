import React from "react"

import {Consumables} from "./MyLifeRecord/Consumables"
import {MakingFood} from "./MyLifeRecord/Consumables/MakingFood"

export const MyLifeRecord = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h1>The Record of My Life</h1>

    <p>My judgments and interpretations of true meaning has led to relatively less impactful life in all areas, for example, environment, animal welfare, and minimalism. I would like to record all my decisions and my lifestyle according to them. This will be a part of the first book.</p>

    <section>
      <h2>Consumables</h2>

      <Consumables />

      <section>
        <h3 className="highlight">Making</h3>

          <section>
            <h4>Food</h4>

            <MakingFood />
          </section>
      </section>
    </section>


  </section>
