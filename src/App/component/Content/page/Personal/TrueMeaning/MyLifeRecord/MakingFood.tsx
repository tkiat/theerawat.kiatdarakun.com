import React from "react"

import {TooltipText} from "../../../../share"

export const MakingFood = (): React.ReactElement =>
  <>
    <ul className="more-gap-list">
      <li>
        <b className="highlight">Main Dish</b>:&nbsp;

        <TooltipText text="Boiled mixed vegetables">
          This is my staple diet (with rice). The recipe is very simple, just cleaning then boiling vegetables of many kinds (roots, stems, leaves, flowers, fruit, etc.) and many colors. I don't usually add any spice, salt, and sugar into it.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Rice">
          I usually cook brown rice mixed with broken blackberry rice. I often soak then for 8-10 hours before cooking.
        </TooltipText>
      </li>

      {/*
      <li>
        <b className="highlight">Side Dish</b>:&nbsp;

        <TooltipText text="Stir fry vegetables with some protein">
          I make this to gain some fat and protein that my staple diet lacks. The vegetable part is usually beansprouts (and scallioand scallion) or cabbages while the protein part is usually tofu dice or textured vegetable protein
        </TooltipText>
      </li>
      */}

      <li>
        <b className="highlight">Snack</b>:&nbsp;

        Fried peanuts,&nbsp;
        <TooltipText text="Boiled/steamed vegetables or grains">
          I eat these as snack between meals. The vegetable is usually corn and sweet potato; the grain is usually legume like green/black/kidney beans and Job's tears
        </TooltipText>
      </li>
    </ul>
  </>
