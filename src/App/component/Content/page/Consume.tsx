import React from 'react'

import {MyTooltipWithDelay} from "../share/MyTooltip"

export const Consume = (): React.ReactElement =>
  <>
    <p>I usually read blog/forum posts and encyclopedia entries and skim news. The list below contains anything longer than that, like courses, books, comics, documentaries, long talks, etc., each of which I conclude my experience about it.</p>

    <h1>2021</h1>

    <p>
      <b className="bold highlight">Autobiography: </b>
      Book (
        <MyTooltipWithDelay text="A Confession">
          By Leo Tolstoy. It is a book about him not being able to find the meaning of life despite his material success. The strongest message of his book for me is that the meaning of life cannot be found rationally. I rejected his religious solution. Instead, that message made me introspect my own emotional needs and personalities to find my purpose.
        </MyTooltipWithDelay>
      ) — <b className="bold highlight">Fiction: </b>
      Comics (
        <MyTooltipWithDelay text="A Walking Dead">
          I spent 25$ for the whole series from Humble Bundle. I would rate the comics as too violent for the kids with some (human) beheadings and sexual scenes. The story begins with the scene where people turning into zombies that eat people. The biggest takeaway for me is the reminder that many things nowadays that we think we cannot live without are actually superficial as they are completely useless in that situation.
        </MyTooltipWithDelay>
      ) — <b className="bold highlight">Software: </b>
      Book (
        <MyTooltipWithDelay text="Learn You a Haskell for Great Good!">
          [90% completed] I got this book from Humble Bundle, but a free <a href="http://learnyouahaskell.com/">online</a> version also exists. I was pretty much lost in the later half at first. Having written a featureful pomodoro application in Haskell, I later reread it and finally understood it. I skipped two chapters for I did't need the knowledge yet.
        </MyTooltipWithDelay>
        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Learning JavaScript Design Patterns">
          [50% completed] Thanks to the generous author, I read it for free <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book">online</a>. I have used the module pattern extensively in my personal website and perhaps in the future projects as well. I don't use many of the patterns here and require a reread.
        </MyTooltipWithDelay>
      ), Course (
        <MyTooltipWithDelay text="CS240h: Functional Systems in Haskell">
          <p>
            TODO
          </p>
        </MyTooltipWithDelay>
        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="CIS194: Introduction to Haskell">
          <p>
            I read Learn You a Haskell book before but I couldn't quite get it in the later part. I stumbled across the best free introduction Haskell course according to [bitemyapp](https://github.com/bitemyapp/learnhaskell) so I took it. It is the course from University of Pennsylvania by Brent Yorgey in 2013. You can download the material from [GitHub](https://github.com/byorgey/haskell-course).
          </p>
          <p>
            The course content is not very in details; the instructor explains as necessary. Haskell beginners should find the course to be very worth at least a quick look. I gained some more understandings especially monad related ones. However, I didn't do any exercise since that seemed to take much time. You may request the solution from that GitHub link.
          </p>
        </MyTooltipWithDelay>
      )
    </p>

    <h1>2020</h1>

    <b className="bold highlight">Fiction: </b>
    Comics (
      <MyTooltipWithDelay text="The Last Unicorn">
        It cost me 5$ on comiXology. It is a story of a unicorn finding the rest of her species. My key takeaway from the story is that you have to go out of your comfort zone if you want something.
      </MyTooltipWithDelay>
    ) — <b className="bold highlight">Nonfiction: </b>
    Course (
      <MyTooltipWithDelay text="Introduction to Personal Branding">
        <p>
          I was going to build my portfolio site and gaining more perspective about how to put myself out there sounds like a good idea. I, by chance, discovered <a href="https://www.coursera.org/learn/personal-branding">this course</a> and I got the <a href="https://coursera.org/verify/AZD6S5JVYEG8">verified certificate</a> for free because of the coronavirus outbreak giveaway.
        </p>
        <p>
          This coursera is about how to construct personal branding. The course has no practical assignments, just some talks. The instructor talks very casually and relaxing. I would say this is more like a fun short course around 4-10 hours which is not at all in-depth. The course is worth it to me though as I haven't been aware of some of the tips before.
        </p>
      </MyTooltipWithDelay>
      &nbsp;|&nbsp;
      <MyTooltipWithDelay text="Sit less, get active">
        I got the free <a href="https://coursera.org/share/896aa29cfb15efd3a8f0d08de9134c99">verified certificate</a> offer and I sat all day so I took it. I forgot all the thing except the course title itself which should be enough. This <a href="https://www.coursera.org/learn/get-active">course</a> convinces the students to excercise more.
      </MyTooltipWithDelay>
    ) — <b className="bold highlight">Software: </b>
    Course (
      <MyTooltipWithDelay text="Cloud Computing Basics">
        I took this short [course](https://www.coursera.org/learn/cloud-computing-basics) for fun. It is a guide to cloud computing with a brief explanation of related technologies. This is a very short course (probably &lt; 3 hours with some preknowledge). The instructor at times reads what is shown on slides and not explains everything that appears on them so I personally don't recommend this course. You are better off reading Wikipedia in my opinion. At the end, I got the <a href="https://coursera.org/share/7fa417bc8244a27c8ccb08295906fb99">verified certificate</a> for free.
      </MyTooltipWithDelay>
    )
  </>
