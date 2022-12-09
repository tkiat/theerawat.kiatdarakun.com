import React from 'react'

import {MyTooltipWithDelay} from "../share/MyTooltip"

import {Human} from "./Digest/Human"

export const Digest = (): React.ReactElement =>
  <>
    <p> I list only DRM-free or free of charge media for now. I add summary a bit for the sake of memory retention.</p>

    <h1>Nonfiction</h1>

    <Human />

    <h2>Organisms and the Earth</h2>

    <p>
      <span>[2022] </span>
      <MyTooltipWithDelay text="Land of Hope and Glory">
        <a href="https://www.youtube.com/watch?v=dvtVkNofcq8">Link</a> — A documentary about animal abuse in the UK about which the narrator proceeds from pigs, cows, birds, and finally sheeps. While I believe farms with less cruel conditions than those in the documentary exist, unnecessary killing is never justifiable. This documentary doesn't offer anything particularly new, but the pieces of footage reminds me what can possibly be wrong in the industry.
      </MyTooltipWithDelay>
    </p>

    <h2>Digital</h2>

    <p>
      <span>[2021] </span>
      <MyTooltipWithDelay text="Learn You a Haskell ...">
        <a href="http://learnyouahaskell.com/">Link</a> — I mostly completed this book. I was pretty much lost in the later half at first. Having written a featureful pomodoro application in Haskell, I later reread it and finally understood it.
      </MyTooltipWithDelay>
      ,&nbsp;
      <MyTooltipWithDelay text="... JavaScript Design Patterns">
        <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book">Link</a> — I completed probably half of the book, and I will probably forget most of them. I have used the module pattern extensively in my personal website and perhaps in the future projects as well. I might reread it later.
      </MyTooltipWithDelay>
      ,&nbsp;
      <MyTooltipWithDelay text="CIS194: Introduction to Haskell">
        <a href="https://www.seas.upenn.edu/~cis1940/spring13/lectures.html">Link</a> — I read Learn You a Haskell book before but I couldn't quite get much of it. I then stumbled across the best free introduction Haskell course according to <a href="https://github.com/bitemyapp/learnhaskell">bitemyapp</a> so I took it. The instructor explains not very in details, which I found it sufficient. I gained much more understandings especially Monad. However, I didn't do any exercise since that seemed to take much time. You may request the solution from this <a href="https://github.com/byorgey/haskell-course">GitHub</a> link.
      </MyTooltipWithDelay>
      ,&nbsp;
      <span>[2020] </span>
      <MyTooltipWithDelay text="Cloud Computing Basics">
        <a href="https://coursera.org/share/7fa417bc8244a27c8ccb08295906fb99">Verified Certificate</a> — I took this short for fun as it offered a free certificate. It is a guide to cloud computing with a brief explanation of related technologies. This is a very short course (probably &lt; 3 hours with some preknowledge). The instructor at times reads what is shown on slides and not explains everything that appears on them so I personally don't recommend this course. You are better off reading Wikipedia in my opinion.
      </MyTooltipWithDelay>
      ,&nbsp;
      <span>[2019] </span>
      <MyTooltipWithDelay text="freeCodeCamp">
        I became aware that the web knowledge offers me significant freedom so I took some 5 web-related courses here. The courses are about basics HTML/CSS/JS, fornt-end/back-end coding, React.js, and a few other libraries. I deleted my account there so the certificate links are gone.
      </MyTooltipWithDelay>
      ,&nbsp;
      <span>[2018] </span>
      <MyTooltipWithDelay text="Algorithms">
        <a href="https://coursera.org/verify/specialization/LP2AXJ7TUNRV">Verified Certificate</a> — I was unexplainably drawn to computer science just a month after coming back from Germany, and algorithms seemed like the most important basics so I took it. I paid 49 USD for the certificate and finished within a month. This coursera specialization contains 4 algorithm-related courses focusing deeply on theory. I would recommend this course for an aspiring computer scientist, but I was not that drawn much to the theoretical side so I skipped some lectures. I am not impressed with the assignment format since anyone can just put a correct number to pass the assignment.
      </MyTooltipWithDelay>
      ,&nbsp;
      <MyTooltipWithDelay text="Data Structures and Algorithms">
        <a href="https://coursera.org/verify/specialization/MHRFWABPYTJU">Verified Certificate</a> — I was addicted to the previous algorithm specialization so I took this speciailization also. It contains 6 courses, and the hidden corner cases for the assignments alone made this course already worth it. I paid 49 USD for the certificate and finished within a month. This specialization is, to me, very challenging, especially some tasks in the capstone project. Therefore, I think non full-time learners might take longer than a month.
        <br/><br/>
        This course covered the data structure and algorithms from the basics to more advanced topics. The genome-related courses provide me the insight into how the algorithm can help improve real-life applications. I was impressed by the coding assignments as there are a lot of them and there were a variety of programming languages to choose from. The runtime limit for each submission depends on the programming languages where C++ appeared to be less forgiving.
        <br/><br/>
        Furthermore, there were a lot of hidden cases (inputs and expected outputs) for each assignment so one cannot simply cheat easily. It was sometimes hard to overcome corner cases, but there was a healthy amount of hint from the discussion forum. Code copy/paste activity was strongly discouraged, of course, but pseudocodes were available. I would recommend this course to anyone.
      </MyTooltipWithDelay>
    </p>

    <h2>Others</h2>

    <h1>Fiction</h1>

    <ul>
      <li>
        <b>Visual: </b>

        <span>[2022] </span>
        <MyTooltipWithDelay text="Incognegro: A Graphic Mystery">
          <b>[Comics]</b> It is a part of 1$ Humble Bundle package I bought long ago. It is a story of a black journalist who spied on lyncing of white supremacists against black people. He was about to retired, but fate made it more complicated. It is not light reading as it is full of racism and violence, but those seem necessary to reflect the past.
        </MyTooltipWithDelay>
        ,&nbsp;
        <span>[2021] </span>
        <MyTooltipWithDelay text="The Walking Dead">
          I spent 25$ for the whole series from Humble Bundle. I would rate the comics as too violent for the kids with some (human) beheadings and sexual scenes. The story begins with the scene where people turning into zombies that eat people. The biggest takeaway for me is the reminder that many things nowadays that we think we cannot live without are actually superficial as they are completely useless in that situation.
        </MyTooltipWithDelay>
        ,&nbsp;
        <span>[2020] </span>
        <MyTooltipWithDelay text="The Last Unicorn">
          It cost me 5$ on comiXology. Too bad, it is not available DRM-free anymore due to the policy change. It is a graphic novel based on a famous written novel by Peter S. Beagle: a story of a unicorn trying to find the rest of her species. My key takeaway from the story is that you have to go out of your comfort zone if you want something.
        </MyTooltipWithDelay>
      </li>

      <li>
        <b>Text: </b>
      </li>
    </ul>
  </>
