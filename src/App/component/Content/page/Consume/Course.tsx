import React from 'react'

import {MyTooltipWithDelay} from "../../share/MyTooltip"

export const Course = (): React.ReactElement =>
  <>
    <p>Available DRM-free only</p>
    <ul>
      <li>
        <span className="bold highlight">2020: </span>
        <MyTooltipWithDelay text="Introduction to Personal Branding">
          This coursera <a href="https://www.coursera.org/learn/personal-branding">course</a> is about how to construct personal branding. I recommend this course because a good personal branding can be life-changing for some people. I got the <a href="https://coursera.org/verify/AZD6S5JVYEG8">verified certificate</a> for free.
          <p>
          </p>
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Sit less, get active">
          I got the <a href="https://coursera.org/share/896aa29cfb15efd3a8f0d08de9134c99">verified certificate</a> for free and I sat all day so I took it. I forgot all the thing except the course title itself which should be enough. This <a href="https://www.coursera.org/learn/get-active">course</a> convinces the students to excercise more.
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Cloud Computing Basics">
          I got the <a href="https://coursera.org/share/7fa417bc8244a27c8ccb08295906fb99">verified certificate</a> for free so I took it. This coursera <a href="https://www.coursera.org/learn/cloud-computing-basics">course</a> is too basic. You are better off reading Wikipedia in my opinion.
        </MyTooltipWithDelay>
      </li>
      <li>
        <span className="bold highlight">2019: </span>
        <MyTooltipWithDelay text="freeCodeCamp">
          I became aware that web knowledge offers a significant advantage so I took some 5 web-related courses here. The courses are about basics HTML/CSS/JS and React.js. I deleted my account there so the certificate links are gone.
        </MyTooltipWithDelay>
      </li>
      <li>
        <span className="bold highlight">2018: </span>
        <MyTooltipWithDelay text="Data Structures and Algorithms">
          <p>
            I was addicted to the previous alogorithm specialization so I took another one. This coursera <a href="https://www.coursera.org/specializations/data-structures-algorithms">specialization</a> contains 6 courses. The hidden corner cases for the assignments alone made this course already worth it. I paid 49 USD for the <a href="https://coursera.org/verify/specialization/MHRFWABPYTJU">verified certificate</a>.
          </p>
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Algorithms">
          <p>
            I was unexplainably drawn to computer science just a month after 4.5 years in Germany. Algorithms seemed like the most important basics so I took it. This coursera <a href="https://www.coursera.org/specializations/algorithms">specialization</a> contains 4 algorithm-related courses focusing on the theory. I paid 49 USD for the <a href="https://coursera.org/verify/specialization/LP2AXJ7TUNRV">verified certificate</a>.
          </p>
          <p>
          </p>
        </MyTooltipWithDelay>
      </li>
    </ul>
  </>
