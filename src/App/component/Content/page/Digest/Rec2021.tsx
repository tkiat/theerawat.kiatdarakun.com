import React from "react"

import {MyTooltipWithDelay} from "../../share/MyTooltip"

export const Rec2021 = (): React.ReactElement =>
  <p>
    <span className="big-text-inline">[2021] </span>

    <b className="bold highlight">Autobiography: </b>
    Book (
      <MyTooltipWithDelay text="A Confession">
        <a href="https://standardebooks.org/ebooks/leo-tolstoy/a-confession/aylmer-maude">Link</a> — It is a book about Leo Tolstoy who was not able to find the meaning of life despite his material success. The strongest message of his book I found is that the meaning of life cannot be found rationally. I rejected his religious solution. Instead, that message made me introspect my own emotional needs and personalities to find my purpose.
      </MyTooltipWithDelay>
    ) — <b className="bold highlight">Fiction: </b>
    Comics (
      <MyTooltipWithDelay text="A Walking Dead">
        I spent 25$ for the whole series from Humble Bundle. I would rate the comics as too violent for the kids with some (human) beheadings and sexual scenes. The story begins with the scene where people turning into zombies that eat people. The biggest takeaway for me is the reminder that many things nowadays that we think we cannot live without are actually superficial as they are completely useless in that situation.
      </MyTooltipWithDelay>
    ) — <b className="bold highlight">Software: </b>
    Book (
      <MyTooltipWithDelay text="Learn You a Haskell ...">
        <a href="http://learnyouahaskell.com/">Link</a> — I mostly completed this book. I was pretty much lost in the later half at first. Having written a featureful pomodoro application in Haskell, I later reread it and finally understood it.
      </MyTooltipWithDelay>
      ,&nbsp;
      <MyTooltipWithDelay text="... JavaScript Design Patterns">
        <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book">Link</a> — I completed probably half of the book, and I will probably forget most of them. I have used the module pattern extensively in my personal website and perhaps in the future projects as well. I might reread it later.
      </MyTooltipWithDelay>
    ), Course (
      <MyTooltipWithDelay text="CIS1940: Introduction to Haskell">
        <a href="https://www.seas.upenn.edu/~cis1940/spring13/lectures.html">Link</a> — I read Learn You a Haskell book before but I couldn't quite get much of it. I then stumbled across the best free introduction Haskell course according to <a href="https://github.com/bitemyapp/learnhaskell">bitemyapp</a> so I took it. The instructor explains not very in details, which I found it sufficient. I gained much more understandings especially Monad. However, I didn't do any exercise since that seemed to take much time. You may request the solution from this <a href="https://github.com/byorgey/haskell-course">GitHub</a> link.
      </MyTooltipWithDelay>
    )
  </p>
