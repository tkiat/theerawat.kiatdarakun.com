import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../../../share"

export const Education = (): React.ReactElement =>
  <section>
    <h2>Education</h2>

    <section>
      <b><u>Master of Science in Communications Engineering</u></b>&ensp;[Oct 2013 – Jul 2016]
      <br/>
      RWTH Aachen University, Germany (GPA: 2.0/1.0, 1.0 = Best)

      <ul>
        <li>My thesis (Practical Evaluation of Entangled Packet Repetition) is about the evaluation of a channel coding scheme based on 802.11 reference design using WARP boards.</li>
      </ul>
    </section>

    <section>
      <b><u>Bachelor of Engineering in Electronics and Communication</u></b>&ensp;[Jun 2008 – Apr 2012]
      <br/>
      Sirindhorn International Institute of Technology, Thailand (1st Class Honor)

      <ul>
        <li>I published the thesis (Entropy Rate of Thai Text and Testing Author Authenticity Using Character Combination Distribution) in an <a href="https://ieeexplore.ieee.org/document/6215415">IEEE paper</a>.</li>
        <li>I was awarded 4-year full scholarships.</li>
      </ul>
    </section>
  </section>
