import React from "react"

import {MyTooltip} from "../../share/MyTooltip"

export const General = (): React.ReactElement =>
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
        <span className="bold highlight">Appearance: </span>
        <MyTooltip text="Body">
          <ul>
            <li>177 cm</li>
            <li>57 kg</li>
            <li>Ectomorphs</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;
        <MyTooltip text="Hair">
          <ul>
            <li>Black</li>
            <li>Reaches Shoulder</li>
            <li>Don't Grow Long Bread; shave like two times per week</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;
        <MyTooltip text="Accessory">
          <ul>
            <li>No Piercings and Tattoos</li>
            <li>No Watch</li>
            <li>Wear Prescription Glasses</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;Brown to Dark Skin | Wear Pant and No Shirt at Home
      </li>
      <li>
        <span className="bold highlight">Outer Personality: </span>Quiet | Stable | Calm | Dislike Pointless Arguments | Smile Less | Don't Gossip
      </li>
      <li>
        <span className="bold highlight">Interest: </span>Linux | Open Source | Sustainability | Philosophy of Freedom
      </li>
      <li>
        <span className="bold highlight">Preference: </span>
        <MyTooltip text="Food">
          <ul>
            <li>Simple: processed food is full of unknown ingredients</li>
            <li>Cook Myself: street food is full of Sodium and MSG</li>
            <li>Use My Own Container: a plastic bag is not only wasteful but also invites cockroaches</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;
        <MyTooltip text="Drink">
          <ul>
            <li>Warm Water: I almost always don't drink cold water</li>
            <li>Loose Leaf Tea: I don't frink coffee; loose leaf allows me to put any amount I want</li>
            <li>Hydro Homie: I drink at least 2.5 Litre Daily as lack of water can cause many deceases</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;
        <MyTooltip text="Companion">
          <ul>
            <li>No Pet</li>
            <li>Prefer being single</li>
            <li>Value solitude</li>
            <li>Grow Edible Over Decorative Plants</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;
        <MyTooltip text="Belongings">
          <ul>
            <li>Bicycle</li>
            <li>Small form factor (I am using a 12 inch laptop)</li>
            <li>Have Less Stuff and Clean Often</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;Rise Early | Linux | Compassion over Manner
      </li>
    </ul>
  </>
