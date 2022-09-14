import React from "react"

import {MyTooltipWithDelay} from "../../share/MyTooltip"

export const Rec2018 = (): React.ReactElement =>
  <p>
    <span className="big-text-inline">[2018] </span>

    <b className="bold highlight">Software: </b>
    Course (
      <MyTooltipWithDelay text="Data Structures and Algorithms">
        I was addicted to the previous alogorithm specialization so I took another one. This coursera <a href="https://www.coursera.org/specializations/data-structures-algorithms">specialization</a> contains 6 courses. The hidden corner cases for the assignments alone made this course already worth it. I paid 49 USD for the <a href="https://coursera.org/verify/specialization/MHRFWABPYTJU">verified certificate</a>.
        <br/><br/>
        The specialization offers a lot of coding assignments with a variety of programming languages to choose from. The runtime limit for each submission depends on the programming languages where C++ appeared to be less forgiving. So I wrote everything in C++ :) (except one capstone question where I had to use Python instead). This is the hardest MOOC course by far (to me) so non full-time learners might take longer than a month. One question in the capstone project took me a day!
        <br/><br/>
        Content-wise, the specialization (6 courses) is about basic data structure and algorithms from basic to more advanced. The genome-related courses provide me the insight into how the algorithm can help improve real-life applications. It is hard for me but there is a healthy amount of hint from the discussion forum. Code copy/paste activity is strongly discouraged of course, but pseudocodes are available. I would recommend this course to anyone.
      </MyTooltipWithDelay>

      &nbsp;|&nbsp;
      <MyTooltipWithDelay text="Algorithms">
        I was unexplainably drawn to computer science just a month after 4.5 years in Germany. Algorithms seemed like the most important basics so I took it. This coursera <a href="https://www.coursera.org/specializations/algorithms">specialization</a> contains 4 algorithm-related courses focusing on the theory. I paid 49 USD for the <a href="https://coursera.org/verify/specialization/LP2AXJ7TUNRV">verified certificate</a>.
        <br/><br/>
        The specialization focuses deeply on theory, so deep that I skipped some lectures! I would recommend this course for an aspiring computer scientist. By the way, I am not impressed with the assignment format. You can just put a correct number to pass the assignment.
      </MyTooltipWithDelay>
    )
  </p>
