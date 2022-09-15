import React from "react"

import {MyTooltipWithDelay} from "../../share/MyTooltip"

export const Rec2020 = (): React.ReactElement =>
  <p>
    <span className="big-text-inline">[2020] </span>

    <b className="bold highlight">Fiction: </b>
    Comics (
      <MyTooltipWithDelay text="The Last Unicorn">
        It cost me 5$ on comiXology. Too bad, it is not available DRM-free anymore due to the policy change. It is a graphic novel based on a famous written novel by Peter S. Beagle: a story of a unicorn trying to find the rest of her species. My key takeaway from the story is that you have to go out of your comfort zone if you want something.
      </MyTooltipWithDelay>
    ) — <b className="bold highlight">Software: </b>
    Course (
      <MyTooltipWithDelay text="Cloud Computing Basics">
        I took this short <a href="https://www.coursera.org/learn/cloud-computing-basics">course</a> for fun. It is a guide to cloud computing with a brief explanation of related technologies. This is a very short course (probably &lt; 3 hours with some preknowledge). The instructor at times reads what is shown on slides and not explains everything that appears on them so I personally don't recommend this course. You are better off reading Wikipedia in my opinion. At the end, I got the <a href="https://coursera.org/share/7fa417bc8244a27c8ccb08295906fb99">verified certificate</a> for free.
      </MyTooltipWithDelay>
    ) — <b className="bold highlight">Other: </b>
    Course (
      <MyTooltipWithDelay text="Introduction to Personal Branding">
        I was going to build my portfolio site and gaining more perspective about how to put myself out there sounds like a good idea. I, by chance, discovered <a href="https://www.coursera.org/learn/personal-branding">this course</a> and I got the <a href="https://coursera.org/verify/AZD6S5JVYEG8">verified certificate</a> for free because of the coronavirus outbreak giveaway.
        <br/><br/>
        This course is about how to construct personal branding. The course has no practical assignments, just some talks. The instructor talks very casually and relaxing. I would say this is more like a fun short course around 4-10 hours which is not at all in-depth. The course is worth it to me though as I haven't been aware of some of the tips before.
      </MyTooltipWithDelay>
      &nbsp;|&nbsp;
      <MyTooltipWithDelay text="Sit Less, Get Active">
        I got the free <a href="https://coursera.org/share/896aa29cfb15efd3a8f0d08de9134c99">verified certificate</a> offer and I sat all day so I took it. This <a href="https://www.coursera.org/learn/get-active">course</a> encouraged students to set less and get active (thanks!), but I later forgot everything except the course title itself which should be enough.
      </MyTooltipWithDelay>
    )
  </p>
