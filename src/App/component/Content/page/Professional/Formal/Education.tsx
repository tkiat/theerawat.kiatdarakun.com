import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../../../share"

export const Education = (): React.ReactElement =>
  <>
    <h1>Education</h1>

    <ul className="more-gap-list">
      <li>
        <b>Master of Science in Communications Engineering</b>&ensp;[Oct 2013 – Jul 2016]
        <br/>
        RWTH Aachen University, Germany (GPA: 2.0/1.0, 1.0 = Best)

        <ul>
          <li>Thesis: Evaluation of a channel coding scheme in an 802.11 reference design using WARP boards.</li>
        </ul>
      </li>

      <li>
        <b>Bachelor of Engineering in Electronics and Communication</b>&ensp;[Jun 2008 – Apr 2012]
        <br/>
        Sirindhorn International Institute of Technology, Thailand (1st Class Honor)

        <ul>
          <li>Thesis: Analysis of text entropy, published in <a href="https://ieeexplore.ieee.org/document/6215415">IEEE paper</a> (DICTAP2012).</li>
          <li>Received a 4-year full scholarship from the institution</li>
        </ul>
      </li>
    </ul>
  </>
