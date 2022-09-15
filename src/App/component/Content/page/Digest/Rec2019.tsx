import React from "react"

import {MyTooltipWithDelay} from "../../share/MyTooltip"

export const Rec2019 = (): React.ReactElement =>
  <p>
    <span className="big-text-inline">[2019] </span>

    <b className="bold highlight">Software: </b>
    Course (
      <MyTooltipWithDelay text="freeCodeCamp">
        I became aware that web knowledge offers a significant advantage so I took some 5 web-related courses here. The courses are about basics HTML/CSS/JS and React.js. I deleted my account there so the certificate links are gone.
      </MyTooltipWithDelay>
    )
  </p>
