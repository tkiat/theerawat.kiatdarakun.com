import React from "react"

import {Spendings} from "./MyLifeRecord/Spendings"
import {MakingFood} from "./MyLifeRecord/MakingFood"

export const MyLifeRecord = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>The Record of My Life</h1>

    <p>This is a part of the first book where I record my choices and spendings according to my interpretation and judgments of true meaning. My overall low-impact lifestyle should serve as one possible, concrete manifestation of the philosophy of true meaning.</p>

    <h2><u>Consumables</u></h2>

    <p> My current ideal consumable choices maximize my health benefits and convenience and minimize unnecessary suffering upon sentient beings and adverse environmental impact. Some trade-offs are unavoidable here.</p>

    <h3 className="highlight">Spendings</h3>

    <Spendings />

    <h3 className="highlight">Making</h3>

    <h4>Food</h4>

    <MakingFood />
  </>
