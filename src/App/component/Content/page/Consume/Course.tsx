import React from 'react'

import {MyTooltipWithDelay} from "../../share/MyTooltip"

export const Course = (): React.ReactElement =>
  <>
    <p>Available DRM-free only</p>
    <ul>
      <li>
        <span className="bold highlight">2021: </span>
        <MyTooltipWithDelay text="CS240h: Functional Systems in Haskell">
          <p>
            TODO
          </p>
        </MyTooltipWithDelay>
        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="CIS194: Introduction to Haskell">
          <p>
            I read Learn You a Haskell book before but I couldn't quite get it in the later part. I stumbled across the best free introduction Haskell course according to [bitemyapp](https://github.com/bitemyapp/learnhaskell) so I took it. It is the course from University of Pennsylvania by Brent Yorgey in 2013. You can download the material from [GitHub](https://github.com/byorgey/haskell-course).
          </p>
          <p>
            The course content is not very in details; the instructor explains as necessary. Haskell beginners should find the course to be very worth at least a quick look. I gained some more understandings especially monad related ones. However, I didn't do any exercise since that seemed to take much time. You may request the solution from that GitHub link.
          </p>
        </MyTooltipWithDelay>
      </li>
      <li>
        <span className="bold highlight">2020: </span>
        <MyTooltipWithDelay text="Introduction to Personal Branding">
          <p>
            I was going to build my portfolio site and gaining more perspective about how to put myself out there sounds like a good idea. I, by chance, discovered <a href="https://www.coursera.org/learn/personal-branding">this course</a> and I got the <a href="https://coursera.org/verify/AZD6S5JVYEG8">verified certificate</a> for free because of the coronavirus outbreak giveaway.
          </p>
          <p>
            This coursera is about how to construct personal branding. The course has no practical assignments, just some talks. The instructor talks very casually and relaxing. I would say this is more like a fun short course around 4-10 hours which is not at all in-depth. The course is worth it to me though as I haven't been aware of some of the tips before.
          </p>
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Sit less, get active">
          I got the free <a href="https://coursera.org/share/896aa29cfb15efd3a8f0d08de9134c99">verified certificate</a> offer and I sat all day so I took it. I forgot all the thing except the course title itself which should be enough. This <a href="https://www.coursera.org/learn/get-active">course</a> convinces the students to excercise more.
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Cloud Computing Basics">
          I took this short [course](https://www.coursera.org/learn/cloud-computing-basics) for fun. It is a guide to cloud computing with a brief explanation of related technologies. This is a very short course (probably < 3 hours with some preknowledge). The instructor at times reads what is shown on slides and not explains everything that appears on them so I personally don't recommend this course. You are better off reading Wikipedia in my opinion. At the end, I got the <a href="https://coursera.org/share/7fa417bc8244a27c8ccb08295906fb99">verified certificate</a> for free.
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
          <p>
            The specialization offers a lot of coding assignments with a variety of programming languages to choose from. The runtime limit for each submission depends on the programming languages where C++ appeared to be less forgiving. So I wrote everything in C++ :) (except one capstone question where I had to use Python instead). This is the hardest MOOC course by far (to me) so non full-time learners might take longer than a month. One question in the capstone project took me a day!
          </p>
          <p>
            Content-wise, the specialization (6 courses) is about basic data structure and algorithms from basic to more advanced. The genome-related courses provide me the insight into how the algorithm can help improve real-life applications. It is hard for me but there is a healthy amount of hint from the discussion forum. Code copy/paste activity is strongly discouraged of course, but pseudocodes are available. I would recommend this course to anyone.
          </p>
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Algorithms">
          <p>
            I was unexplainably drawn to computer science just a month after 4.5 years in Germany. Algorithms seemed like the most important basics so I took it. This coursera <a href="https://www.coursera.org/specializations/algorithms">specialization</a> contains 4 algorithm-related courses focusing on the theory. I paid 49 USD for the <a href="https://coursera.org/verify/specialization/LP2AXJ7TUNRV">verified certificate</a>.
          </p>
          <p>
            The specialization focuses deeply on theory, so deep that I skipped some lectures! I would recommend this course for an aspiring computer scientist. By the way, I am not impressed with the assignment format. You can just put a correct number to pass the assignment.
          </p>
        </MyTooltipWithDelay>
      </li>
    </ul>
  </>
