import React from 'react'

import {MyTooltipWithDelay} from "../../share/MyTooltip"

export const Course = (): React.ReactElement =>
  <>
    <ul>
      <li>
        <span className="bold highlight">2020: </span>
        <MyTooltipWithDelay text="Introduction to Personal Branding">
          <p>This coursera <a href="https://www.coursera.org/learn/personal-branding">course</a> is about how to construct personal branding. I got the <a href="https://coursera.org/verify/AZD6S5JVYEG8">Verified Certificate</a> for free.
          </p>
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Sit less, get active">
          <p>This coursera <a href="https://www.coursera.org/learn/get-active">course</a> convinces the students to excercise more. I got the <a href="https://coursera.org/share/896aa29cfb15efd3a8f0d08de9134c99">Verified Certificate</a> for free.
          </p>
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Cloud Computing Basics">
          <p>This coursera <a href="https://www.coursera.org/learn/cloud-computing-basics">course</a> is about the very basics of cloud computing. I got the <a href="https://coursera.org/share/7fa417bc8244a27c8ccb08295906fb99">Verified Certificate</a> for free.
          </p>
        </MyTooltipWithDelay>
      </li>
      <li>
        <span className="bold highlight">2019: </span>
        <MyTooltipWithDelay text="FreeCodeCamp">
          Some 5 web-related courses. I deleted my account there so the certificate links are gone.
        </MyTooltipWithDelay>
      </li>
      <li>
        <span className="bold highlight">2018: </span>
        <MyTooltipWithDelay text="Data Structures and Algorithms">
          <p>This coursera <a href="https://www.coursera.org/specializations/data-structures-algorithms">specialization</a> contains 6 courses related to data structures and algorithms. The hidden corner cases for the assignments alone made this course already worth it. I paid 49 USD for the <a href="https://coursera.org/verify/specialization/MHRFWABPYTJU">Verified Certificate</a>.
          </p>
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Algorithms">
          <p>This coursera <a href="https://www.coursera.org/specializations/algorithms">specialization</a> contains 4 algorithm-related courses focusing on the theory. I paid 49 USD for the <a href="https://coursera.org/verify/specialization/LP2AXJ7TUNRV">Verified Certificate</a>.
          </p>
        </MyTooltipWithDelay>
      </li>
    </ul>
  </>
