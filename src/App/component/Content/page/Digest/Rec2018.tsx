import React from "react"

import {MyTooltipWithDelay} from "../../share/MyTooltip"

export const Rec2018 = (): React.ReactElement =>
  <p>
    <span className="big-text-inline">[2018] </span>

    <b className="bold highlight">Software: </b>
    Course (
      <MyTooltipWithDelay text="Algorithms">
        <a href="https://coursera.org/verify/specialization/LP2AXJ7TUNRV">Verified Certificate</a> — I was unexplainably drawn to computer science just a month after coming back from Germany, and algorithms seemed like the most important basics so I took it. I paid 49 USD for the certificate and finished within a month. This coursera specialization contains 4 algorithm-related courses focusing deeply on theory. I would recommend this course for an aspiring computer scientist, but I was not that drawn much to the theoretical side so I skipped some lectures. I am not impressed with the assignment format since anyone can just put a correct number to pass the assignment.
      </MyTooltipWithDelay>
      ,&nbsp;
      <MyTooltipWithDelay text="Data Structures and Algorithms">
        <a href="https://coursera.org/verify/specialization/MHRFWABPYTJU">Verified Certificate</a> — I was addicted to the previous algorithm specialization so I took this speciailization also. It contains 6 courses, and the hidden corner cases for the assignments alone made this course already worth it. I paid 49 USD for the certificate and finished within a month. This specialization is, to me, very challenging, especially some tasks in the capstone project. Therefore, I think non full-time learners might take longer than a month.
        <br/><br/>
        This course covered the data structure and algorithms from the basics to more advanced topics. The genome-related courses provide me the insight into how the algorithm can help improve real-life applications. I was impressed by the coding assignments as there are a lot of them and there were a variety of programming languages to choose from. The runtime limit for each submission depends on the programming languages where C++ appeared to be less forgiving.
        <br/><br/>
        Furthermore, there were a lot of hidden cases (inputs and expected outputs) for each assignment so one cannot simply cheat easily. It was sometimes hard to overcome corner cases, but there was a healthy amount of hint from the discussion forum. Code copy/paste activity was strongly discouraged, of course, but pseudocodes were available. I would recommend this course to anyone.
      </MyTooltipWithDelay>
    )
  </p>
