import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../../../share"

export const Work = (): React.ReactElement =>
  <>
    <h1>Work Experience</h1>

    <ul className="more-gap-list">
      <li>
        <b>Voluntary Employment Gap</b>&ensp;[May 2018 – Aug 2022, Dec 2022 – July 2023]

        <ul>
          <li>Found my life purpose about the philosophy of true meaning. I am working on a book on this topic in my free time.</li>
          <li>Learned a lot about low impact living, philosophy, and computer. I have built this website and some other coding projects.</li>
        </ul>
      </li>

      <li>
        <b>Customer Care Agent</b>&ensp;[Feb 2017 – Jan 2018]
        <br/>
        Arvato Direct Services Potsdam GmbH, Berlin, Germany

        <ul>
          <li>Reviewed social network contents based on client’s live policies.</li>
        </ul>
      </li>

      <li>
        <b>Engineering Internship</b>&ensp;[Feb – Jul 2016]
        <br/>
        National Instruments Dresden GmbH, Dresden, Germany

        <ul>
          <li>Cleared some backlogs about MAC/PHY layers in LabVIEW Communications 802.11 Application Framework.</li>
        </ul>
      </li>

      <li>
        <b>Teaching and Research Assistant</b>&ensp;[Feb 2012 – Apr 2013]
        <br/>
        Sirindhorn International Institute of Technology, Thammasat University, Thailand

        <ul>
          <li>Instructed students in two tutorial classes (ECS 203: Basic Electrical Engineering).</li>
          <li>Assisted students in some laboratory classes.</li>
          <li>Carried out paid research on RFID technology for six months and published an <a href="https://ieeexplore.ieee.org/document/6645830">IEEE paper</a> (3-D localization algorithm using double-planar passive RFID arrays) about it.</li>
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
          <li>Tested satellite dish components and wrote socket programming for test equipment.</li>
        </ul>
      </li>
    </ul>
  </>
