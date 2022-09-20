import React from "react"

import {MyTooltipWithDelay} from "../../share/MyTooltip"

export const Rec2019 = (): React.ReactElement =>
  <p>
    <span className="big-text-inline">[2019] </span>

    <b className="bold highlight">Software: </b>
    Course (
      <MyTooltipWithDelay text="freeCodeCamp">
        I became aware that the web knowledge offers me significant freedom so I took some 5 web-related courses here. The courses are about basics HTML/CSS/JS, fornt-end/back-end coding, React.js, and a few other libraries. I deleted my account there so the certificate links are gone.
      </MyTooltipWithDelay>
    )
  </p>
