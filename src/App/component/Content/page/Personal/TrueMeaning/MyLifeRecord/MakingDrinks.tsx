import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../../../../share"

export const MakingDrinks = (): React.ReactElement =>
  <>
    <ul className="more-gap-list">
      <li>
        <b className="highlight">Teas</b>:&nbsp;

        <TooltipText text="Thai assam green">
          <span className="highlight">Recipe</span>: 6g loose leaves, 350ml water — <span className="highlight">Steps</span>: Rinse the leaves quickly one or two time and then steep it in 90&#8451; water for a minute (first time) and three minutes (second time).
        </TooltipText>
      </li>

      <li>
        <b className="highlight">Boiled Herbal Teas</b>:&nbsp;

        <TooltipText text="Hibiscus">
          Unlike many other herbal teas, I find sugar in hibiscus tea especially tasty as it fixes sourness in the tea — <span className="highlight">Recipe</span>: 10g dried hibiscus leaves, 2.5L water, (optional but recommended) 50g brown/crystalline sugar — <span className="highlight">Steps</span>: Wash the leaves and then put it in the water, boil it until it reaches the boiling point then simmer it for 20 minutes, done.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Lemongrass and pandan">
          <span className="highlight">Recipe</span>: 50g dried lemongrass and pandan leaves, 2.5L water — <span className="highlight">Steps</span>: Wash the leaves and then put it in the boiling water, simmer it for 20 minutes, done.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Bael Fruit">
          <span className="highlight">Recipe</span>: 80g dried bael fruit, 2.5L water — <span className="highlight">Steps</span>: Wash the fruits and put it in the water, boil it until it reaches the boiling point then simmer it for 20 minutes, done.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Butterfly pea flower">
          <span className="highlight">Recipe</span>: 20 dried leaves, 2.5L water, 1 Tsp lemon (optional, to make it purple) — <span className="highlight">Steps</span>: Wash the leaves and put it in the boiling water for 10 minutes, then stop boiling water and put limeade into it, done.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Chrysanthemum">
          <span className="highlight">Recipe</span>: 20 dried chrysanthemum leaves, 2-3 pieces gardenia fruit (optional), 2-3 pieces licorice (optional), 2.5L water — <span className="highlight">Steps</span>: Wash all leaves, rince the chrysanthemum leaves using boiled water for 10 seconds then followed by cool water (optional), then stop the boiling water then steep everything for five minutes, done.
        </TooltipText>
      </li>

      <li>
        <b className="highlight">Other</b>:&nbsp;

        <TooltipText text="Soy milk">
          I usually use soy milk for my smoothie — <span className="highlight">Recipe</span>: 300-400g soybeans and 2.5L water — <span className="highlight">Steps</span>: Wash soybeans, use blender and filter to get the milk, then use medium heat until some bubbles appear, and finally simmer it for 15 minutes.
        </TooltipText>
        ,&nbsp;
        <TooltipText text="Smoothie">
          I sometimes make smoothie with protein powder to prevent protein deficiency — <span className="highlight">Recipe</span>: fruits (my favourites are pineapple, papaya, frozen strawberry, mango, banana, grava, and muskmelon), soy milk, vegan protein powder, chia seeds and/or ground flaxseeds, ground sesame seeds, and (optional) drinking water — <span className="highlight">Steps</span>: Cut, mix, and blend, done
        </TooltipText>
      </li>
    </ul>

    <h4>Nonedibles</h4>

    <ul className="more-gap-list">
      <li>
        <b className="highlight">Detergent</b>:&nbsp;

        <TooltipTextWithDelay text="Laundry">
          <ul>
            <li>
              Savon de Marseille (<a href="https://www.savon-de-marseille.com/en/content/49-my-homemade-laundry-with-marseille-soap">source</a>) — <span className="highlight">Recipe</span>: 20g soap chips, 1L boiling water, 20g baking soda, 7g soda crystal — <span className="highlight">Steps</span>: mix them, done — <span className="highlight">Usage</span>: 100ml per machine
            </li>
          </ul>
        </TooltipTextWithDelay>
      </li>
    </ul>
  </>
