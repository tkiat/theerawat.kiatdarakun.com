import React from "react"

import {MyTooltip} from "../../share/MyTooltip"

export const Personality = (): React.ReactElement =>
  <>
    <h1>About Me</h1>
    <ul>
      <li>
        <span className="bold highlight">Personality Test: </span>

        <a href="https://www.16personalities.com/">MBTI</a>
        &nbsp;-&nbsp;
        <MyTooltip text="Result">
          <p>Taken on 31 Mar 2021</p>
          <ul>
            <li>(I)ntroverted (79%) - (E)xtraverted</li>
            <li>I(N)tuitive (52%) - Ob(S)ervant</li>
            <li>(T)hinking (51%) - (F)eeling</li>
            <li>(J)udging(58%) - (P)rospecting</li>
            <li>(A)ssertive (65%) - (T)erbulent</li>
          </ul>
        </MyTooltip>

        &nbsp;|&nbsp;
        <a href="https://openpsychometrics.org/">Big 5</a>
        &nbsp;-&nbsp;
        <MyTooltip text="Result">
          <p>Taken on 31 Mar 2021</p>
          <ul>
            <li>Extroversion: 11 (percentile)</li>
            <li>Emotional Stability: 57</li>
            <li>Agreeableness: 7</li>
            <li>Conscientiousness: 95</li>
            <li>Intellect/Imagination: 46</li>
          </ul>
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Inborn: </span>Thai | Thailand | Millennials | Straight | Zodiac Sign - Cancer
      </li>
      <li>
        <span className="bold highlight">Appearance: </span>177 cm | 57kg | Ectomorphs | Black Hair | Brown to Dark Skin | Hair Reaches Shoulder | Quiet | No Piercings and Tattoos | Wear Prescription Glasses | Usually Wear Pant and No Shirt at Home | Don't Grow Long Bread
      </li>
      <li>
        <span className="bold highlight">Outer Personality: </span>Quiet | Use Computer All Day | Stable | Calm | Like to Ruminate | Dislike Pointless Arguments | Smile Less | Don't Gossip
      </li>
      <li>
        <span className="bold highlight">Interest: </span>Coding | Functional Programming | Linux | Laptop | Sustainability | Philosophy of Freedom | Minimalism
      </li>
      <li>
        <span className="bold highlight">Preference: </span>Rise Early | Tea | Warm Water | Simple Food | Linux | Smaller Form Factor/Openness over Performance | My Own Container for Food and Drink | Bicycle | Repairable Gadgets over Quality | Growing Edible Rather than Decorative Plants | Solitude | Being Single | Compassion over Manner | Brush Teeth Twice Daily | Have Less Stuff in the Room and Clean It Often
      </li>
    </ul>
  </>
