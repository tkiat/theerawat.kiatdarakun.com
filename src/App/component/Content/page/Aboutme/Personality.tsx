import React from 'react'
import ReactTooltip from 'react-tooltip'

export const Personality = (): React.ReactElement =>
  <>
    <ul>
      <li>
        <span className="bold highlight">Personality Test: </span>
        <a href="https://www.16personalities.com/">MBTI</a> - <span className="tooltip-front" data-tip data-for='tooltip-mbti'>Result</span> | <a href="https://openpsychometrics.org/">Big 5</a> - <span className="tooltip-front" data-tip data-for='tooltip-big5'>Result</span>
      </li>
      <li>
        <span className="bold highlight">Personality: </span>Early Riser | Prefer Simple Food | Quiet | Obsessed with Computer | Stable | Calm | Prefer Smaller Form Factor/Openness over Performance | Prefer Less Stuff | Prefer Using My Own Container for Food and Drink | Prefer Bicycle | Like to Think About Meaning of Life | Prefer More Expensive Item that Last Longer | Prefer Worry-Free Gadgets over Quality | Eat Some Meat but Value Veganism | Prefer Growing Edible Plants Rather than Decorative Ones | Value Solitude | Dislike Pointless Argument | Smile Less | Filled with Compassion | Don't Gossip | Prefer Being Single
      </li>
      <li>
        <span className="bold highlight">Inborn: </span>Thai | Thailand | Millenials | Zodiac Sign - Cancer | 177 cm | 57 kg
      </li>
      <li>
        <span className="bold highlight">Interest: </span>Coding | Functional Programming | Linux | Laptop | Sustainability | Philosophy of Freedom | Minimalism | Less Suffering Lifestyle
      </li>

      <ReactTooltip className="tooltip" id='tooltip-mbti'>
        <p>Taken on 31 Mar 2021</p>
        <ul>
          <li>(I)ntroverted (79%) - (E)xtraverted</li>
          <li>I(N)tuitive (52%) - Ob(S)ervant</li>
          <li>(T)hinking (51%) - (F)eeling</li>
          <li>(J)udging(58%) - (P)rospecting</li>
          <li>(A)ssertive (65%) - (T)erbulent</li>
        </ul>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id='tooltip-big5'>
        <p>Taken on 31 Mar 2021</p>
        <ul>
          <li>Extroversion: 11 (percentile)</li>
          <li>Emotional Stability: 57</li>
          <li>Agreeableness: 7</li>
          <li>Conscientiousness: 95</li>
          <li>Intellect/Imagination: 46</li>
        </ul>
      </ReactTooltip>
    </ul>
  </>
