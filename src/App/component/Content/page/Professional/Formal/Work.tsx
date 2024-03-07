import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../../../share"

export const Work = (): React.ReactElement =>
  <>
    <h1>Work Experience</h1>

    <ul className="more-gap-list">
      <li>
        <b>Freelance Tutor, Reseller, Developer, and Philosopher</b>&ensp;[2019 – Present]

        <ul>
          <li>Tutor some students</li>
          <li>Resell products online</li>
          <li>Developed non-commercial web and Linux desktop applications</li>
          <li>Currently write a serious philosophical book in my free time only</li>
        </ul>
      </li>

      <li>
        <b>Customer Care Agent</b>&ensp;[Feb 2017 – Jan 2018]
        <br/>
        Arvato Direct Services Potsdam GmbH, Berlin, Germany

        <ul>
          <li>Reviewed social network contents, exceeding all targets</li>
        </ul>
      </li>

      <li>
        <b>Engineering Internship</b>&ensp;[Feb – Jul 2016]
        <br/>
        National Instruments Dresden GmbH, Dresden, Germany

        <ul>
          <li>Resolved issues in LabVIEW Communications 802.11 Application Framework</li>
        </ul>
      </li>

      <li>
        <b>Teaching and Research Assistant</b>&ensp;[Feb 2012 – Apr 2013]
        <br/>
        Sirindhorn International Institute of Technology, Thammasat University, Thailand

        <ul>
          <li>Instructed students in tutorial classes while providing support in some laboratory classes. Conducted paid research on RFID technology and translated it into an <a href="https://ieeexplore.ieee.org/document/6645830">IEEE paper</a> (ISCIT2013)</li>
        </ul>
      </li>

      <li>
        <b>Tutor</b>&ensp;[2012]
        <br/>
        EPA Academic Center

        <ul>
          <li>Taught international students for more than 50 hours in total in Math and Physics.</li>
        </ul>
      </li>

      <li>
        <b>Engineering Internship</b>&ensp;[Mar – May 2011]
        <br/>
        Thaicom Public Limited Company, Pathum Thani, Thailand

        <ul>
          <li>Conducted satellite dish components tests and wrote socket programming for test equipment.</li>
        </ul>
      </li>
    </ul>
  </>
