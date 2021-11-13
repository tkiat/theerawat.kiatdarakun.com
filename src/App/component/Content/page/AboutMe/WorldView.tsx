import React from 'react'
import ReactTooltip from 'react-tooltip'

// TODO finish myreacttooltip
export const WorldView = (): React.ReactElement =>
  <>
    <ul>
      <li>
        <span className="bold highlight">Ethics: </span>
        <span className="tooltip-front" data-tip data-for='tt-wv-software'>Ethical Software</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-food'>Ethical Food</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-abortion'>abortion</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-abortion'>Online Privacy</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-abortion'>Porn</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-abortion'>Violence in Media</span>&nbsp;|&nbsp;
      </li>
      <li>
        <span className="bold highlight">Society: </span>
      </li>
      <li>
        <span className="bold highlight">Economy: </span>
        <span className="tooltip-front" data-tip data-for='tt-wv-equality'>Equality</span>&nbsp;|&nbsp;
      </li>
      <li>
        <span className="bold highlight">Lifestyle: </span>
        <span className="tooltip-front" data-tip data-for='tt-wv-'>Food</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-'>Meaning of Life</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-'>The Best Possible Life</span>&nbsp;|&nbsp;
      </li>

      <ReactTooltip className="tooltip" id='tt-wv-software'>
        <p>TODO</p>
      </ReactTooltip>
    </ul>
  </>
