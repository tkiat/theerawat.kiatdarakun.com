import React from "react"

import {TooltipFa, TooltipText} from "../../../share"

export const Making = (): React.ReactElement =>
  <>
    <h3 className="highlight">Making</h3>

    <h4>Food</h4>

    <ul className="more-gap-list">
      <li>
        <b className="highlight">Main Dish</b>:&nbsp;

        <TooltipText text="Boiled mixed vegetables">
          This is my staple diet (I always eat with rice and often with side dishes). — <span className="highlight">Recipe</span>: Mixed vegetables of many kinds (roots, stems, leaves, flowers, fruit, etc.) and many colors (green, yellow, white, orange, etc.), baking soda, water — <span className="highlight">Steps</span>: Cut and wash all vegetables thoroughly (with baking soda), boil until it reachs the boiling point, then simmer for 30 minutes, done.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Rice">
          I usually have brown/riceberry rice mixed with broken ones. I usually cook once and store it in the fridge for several days — <span className="highlight">Recipe</span>: 5 cups brown/riceberry rice, 1 cup broken rice, and some water — <span className="highlight">Steps</span>: Rinse rice 2-3 times, then (optional but recommended) soak rice overnight or a few hours, make sure the water level is suitable (1.75 index finger joints or 1.5 if soaked for some hours), finally put it in a rice cooker
        </TooltipText>
      </li>

      <li>
        <b className="highlight">Side Dish</b>:&nbsp;

        <TooltipText text="Stir fry vegetables with some protein">
          I make this to gain some fat and protein that my staple diet lacks. The vegetable part is usually beansprouts or cabbages while the protein part is usually tofu dice or textured vegetable protein
        </TooltipText>
      </li>

      <li>
        <b className="highlight">Snack</b>:&nbsp;

        <TooltipText text="Fried peanuts">
          My staple diet lacks fat and protein and fried peanuts fill the gaps (partly). I really like it since it doesn't spoil for at least a few weeks so I can cook a lot at a time — <span className="highlight">Recipe</span>: 1kg peanuts, 1 teaspoon salt, and 250ml (palm or coconut) oil — <span className="highlight">Steps</span>: Rinse peanuts, wait until it dries, then fried it with low heat, wait until it changes color to light brown, put it to your container, then fry another batch of peanuts until everything is done.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Boiled vegetable or grains">
          I eat these as snack between meals. The vegetable is usually corn and sweet potato; the grain is usually legume like green/red/kidney beans — <span className="highlight">Recipe</span>: Any of these and water — <span className="highlight">Steps</span>: Rinse, boil, simmer, done
        </TooltipText>
      </li>
    </ul>

    <h4>Drinks</h4>

    <ul className="more-gap-list">
      <li>
        <b className="highlight">Teas</b>:&nbsp;

        <TooltipText text="Thai Assam Green">
          <span className="highlight">Recipe</span>: 6g loose leaves, 350ml water — <span className="highlight">Steps</span>: Rinse the leaves quickly one or two time and then steep it in 90&#8451; water for a minute (first time) and three minutes (second time).
        </TooltipText>
      </li>

      <li>
        <b className="highlight">Boiled Herbal Teas</b>:&nbsp;

        <TooltipText text="Hibiscus">
          Unlike many other herbal teas, I find sugar in hibiscus tea especially tasty as it fixes sourness in the tea — <span className="highlight">Recipe</span>: 10g dried hibiscus leaves, 2.5L water, (optional but recommended) 50g brown/crystalline sugar — <span className="highlight">Steps</span>: Wash the leaves and then put it in the water, boil it until it reaches the boiling point then simmer it for 20 minutes, done.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Lemongrass and Pandan">
          <span className="highlight">Recipe</span>: 50g dried lemongrass and pandan leaves, 2.5L water — <span className="highlight">Steps</span>: Wash the leaves and then put it in the boiling water, simmer it for 20 minutes, done.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Bael Fruit">
          <span className="highlight">Recipe</span>: 80g dried bael fruit, 2.5L water — <span className="highlight">Steps</span>: Wash the fruits and put it in the water, boil it until it reaches the boiling point then simmer it for 20 minutes, done.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Butterfly Pea Flower">
          It's best to consume 2-3 pieces a day (as per doctor recommendation). Since my cup is 350ml, I am going to use 20 pieces per 2.5L water for a 7-day serving — <span className="highlight">Recipe</span>: 20 dried leaves, 2.5L water, 1 Tsp lemon (optional, to make it purple) — <span className="highlight">Steps</span>: Wash the leaves and put it in the boiling water for 10 minutes, then stop boiling water and put limeade into it, done.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Chrysanthemum">
          <span className="highlight">Recipe</span>: 20 dried chrysanthemum leaves, 2-3 pieces gardenia fruit (optional), 2-3 pieces licorice (optional), 2.5L water — <span className="highlight">Steps</span>: Wash all leaves, rince the chrysanthemum leaves using boiled water for 10 seconds then followed by cool water (optional), then stop the boiling water then steep everything for five minutes, done.
        </TooltipText>
      </li>

      <li>
        <b className="highlight">Other</b>:&nbsp;

        <TooltipText text="Soy Milk">
          I usually use soy milk for my smoothie — <span className="highlight">Recipe</span>: 300-400g soybeans (preferably non-GMO) and 2.5L water — <span className="highlight">Steps</span>: Wash soybeans, use blender and filter to get the milk, then use medium heat until some bubbles appear, and finally simmer it for 15 minutes.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Smoothie">
          I sometimes make smoothie with protein powder to prevent protein deficiency — <span className="highlight">Recipe</span>: fruits (my favourites are pineapple, papaya, frozen strawberry, mango, banana, grava, and muskmelon), soy milk, vegan protein powder, chia seeds and/or ground flaxseeds, ground sesame seeds, and (optional) drinking water — <span className="highlight">Steps</span>: Cut, mix, and blend, done
        </TooltipText>
      </li>
    </ul>
  </>
