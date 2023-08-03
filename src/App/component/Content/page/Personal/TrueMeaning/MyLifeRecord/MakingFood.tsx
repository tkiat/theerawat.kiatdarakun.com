import React from "react"

import {TooltipText} from "../../../../share"

export const MakingFood = (): React.ReactElement =>
  <>
    <ul className="more-gap-list">
      <li>
        <b className="highlight">Main Dish</b>:&nbsp;

        <TooltipText text="Boiled mixed vegetables">
          This is my staple diet (I always eat with rice and often with side dishes). — <span className="highlight">Recipe</span>: Mixed vegetables of many kinds (roots, stems, leaves, flowers, fruit, etc.) and many colors (green, yellow, white, orange, etc.), baking soda, water — <span className="highlight">Steps</span>: Cut, soak, and rinse all vegetables thoroughly (with baking soda), boil until it reachs the boiling point, then simmer it for 30 minutes, done.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Rice">
          I usually have brown/riceberry rice mixed with broken ones. I usually cook once and store it in the fridge for several days — <span className="highlight">Recipe</span>: 5 cups brown/riceberry rice, 1 cup broken rice, and some water — <span className="highlight">Steps</span>: Rinse rice 2-3 times, then (optional but recommended) soak rice overnight or a few hours, make sure the water level is suitable (1.75 index finger joints or 1.5 if soaked for some hours), finally put it in a rice cooker
        </TooltipText>
      </li>

      <li>
        <b className="highlight">Side Dish</b>:&nbsp;

        <TooltipText text="Stir fry vegetables with some protein">
          I make this to gain some fat and protein that my staple diet lacks. The vegetable part is usually beansprouts (and scallioand scallion) or cabbages while the protein part is usually tofu dice or textured vegetable protein
        </TooltipText>
      </li>

      <li>
        <b className="highlight">Snack</b>:&nbsp;

        Fried peanuts,&nbsp;
        <TooltipText text="Boiled/steamed vegetables or grains">
          I eat these as snack between meals. The vegetable is usually corn and sweet potato; the grain is usually legume like green/black/kidney beans and Job's tears
        </TooltipText>
      </li>
    </ul>
  </>
