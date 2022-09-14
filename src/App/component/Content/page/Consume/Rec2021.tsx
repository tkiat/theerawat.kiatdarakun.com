import React from "react"

import {MyTooltipWithDelay} from "../../share/MyTooltip"

export const Rec2021 = (): React.ReactElement =>
  <p>
    <span className="big-text-inline">[2021] </span>

    <b className="bold highlight">Autobiography: </b>
    Book (
      <MyTooltipWithDelay text="A Confession">
        It is a book about Leo Tolstoy who was not able to find the meaning of life despite his material success. The strongest message of his book for me is that the meaning of life cannot be found rationally. I rejected his religious solution. Instead, that message made me introspect my own emotional needs and personalities to find my purpose.
      </MyTooltipWithDelay>
    ) — <b className="bold highlight">Fiction: </b>
    Comics (
      <MyTooltipWithDelay text="A Walking Dead">
        I spent 25$ for the whole series from Humble Bundle. I would rate the comics as too violent for the kids with some (human) beheadings and sexual scenes. The story begins with the scene where people turning into zombies that eat people. The biggest takeaway for me is the reminder that many things nowadays that we think we cannot live without are actually superficial as they are completely useless in that situation.
      </MyTooltipWithDelay>
    ) — <b className="bold highlight">Software: </b>
    Book (
      <MyTooltipWithDelay text="Learn You a Haskell for Great Good!">
        [80% completed] I got this book from Humble Bundle, but a free <a href="http://learnyouahaskell.com/">online</a> version also exists. I was pretty much lost in the later half at first. Having written a featureful pomodoro application in Haskell, I later reread it and finally understood (most of) it.
      </MyTooltipWithDelay>
      &nbsp;|&nbsp;
      <MyTooltipWithDelay text="Learning JavaScript Design Patterns">
        [50% completed] Thanks to the generous author, I read it for free <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book">online</a>. I have used the module pattern extensively in my personal website and perhaps in the future projects as well. I don't use many of the patterns here and require a reread.
      </MyTooltipWithDelay>
    ), Course (
      <MyTooltipWithDelay text="CIS194: Introduction to Haskell">
        I read Learn You a Haskell book before but I couldn't quite get it in the later part. I stumbled across the best free introduction Haskell course according to <a href="https://github.com/bitemyapp/learnhaskell">bitemyapp</a> so I took it. It is the course from University of Pennsylvania by Brent Yorgey in 2013. You can download the material from <a href="https://github.com/byorgey/haskell-course">GitHub</a>.
        <br/><br/>
        The course content is not very in details; the instructor explains as necessary. Haskell beginners should find the course to be very worth at least a quick look. I gained some more understandings especially monad related ones. However, I didn't do any exercise since that seemed to take much time. You may request the solution from that GitHub link.
      </MyTooltipWithDelay>
    )
  </p>
