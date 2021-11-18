import React from 'react'

import {MyTooltipWithDelay} from "../../share/MyTooltip"

export const Book = (): React.ReactElement =>
  <>
    <p>I order the list chronologically. All books here are available DRM-free.</p>
    <ul>
      <li>
        <span className="bold highlight">Technical: </span>
        <MyTooltipWithDelay text="Learn You a Haskell for Great Good!">
          [60% completed] I got this book from Humble Bundle but a free <a href="http://learnyouahaskell.com/">online</a> version exists. I understood it well in the first half not gonna lie but I was pretty much lost and skipped a lot in the later half. Having written a featureful pomodoro application in Haskell, I now have a much better understanding and I am glad to reread it.
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Learning JavaScript Design Patterns">
          [50% completed] Thanks to the generous author, I read it for free <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book">online</a>. I have used the module pattern extensively in my personal website and perhaps in the future projects as well. I don't use many of the patterns here and require a reread.
        </MyTooltipWithDelay>
      </li>
      <li>
        <span className="bold highlight">Non-Fiction: </span>
        <MyTooltipWithDelay text="A Confession">
          By Leo Tolstoy. It is a book about him not being able to find the meaning of life despite his material success. The strongest message of his book for me is that the meaning of life cannot be found rationally. I rejected his religious solution. Instead, that message made me introspect my own emotional needs and personalities to find my purpose.
        </MyTooltipWithDelay>
      </li>
      <li>
        <span className="bold highlight">Fiction: </span>
        <MyTooltipWithDelay text="A Walking Dead">
          I spent 25$ for the whole series from Humble Bundle. I would rate the comics as too violent for the kids with some (human) beheadings and sexual scenes. The story begins with the scene where people turning into zombies that eat people. The biggest takeaway for me is the reminder that many things nowadays that we think we cannot live without are actually superficial as they are completely useless in that situation.
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="The Last Unicorn">
          It cost me 5$ on comiXology. It is a story of a unicorn finding the rest of her species. My key takeaway from the story is that you have to go out of your comfort zone if you want something.
        </MyTooltipWithDelay>
      </li>
    </ul>
  </>
