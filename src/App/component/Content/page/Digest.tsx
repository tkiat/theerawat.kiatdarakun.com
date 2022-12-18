import React from 'react'

import {MyTooltipWithDelay} from "../share/MyTooltip"

import {Human} from "./Digest/Human"

export const Digest = (): React.ReactElement =>
  <div className="page-digest">
    <p>Note: I list only some digital media that are DRM-free, part of a subscription, or free of charge without any further purchase option with a bit summary each.</p>

    <h1>Nonfiction</h1>

    <ul>
      <li><Human /></li>

      <li>
        <b className="highlight">Organisms and the Earth</b>

        &nbsp;—&nbsp;
        <span>[2022]</span>&nbsp;
        <span className="highlight">Documentary:</span>&nbsp;
        <MyTooltipWithDelay text="Land of Hope and Glory">
          <a href="https://www.youtube.com/watch?v=dvtVkNofcq8"><b>Link</b></a> — A documentary about animal abuse in the UK about which the narrator proceeds from pigs, cows, birds, and finally sheeps. While I believe farms with less cruel conditions than those in the documentary exist, unnecessary killing is never justifiable. This documentary doesn't offer anything particularly new, but the pieces of footage reminds me what can possibly be wrong in the industry.
        </MyTooltipWithDelay>
      </li>

      <li>
        <b className="highlight">Digital</b>

        &nbsp;—&nbsp;
        <span>[2021]</span>&nbsp;
        <span className="highlight">Book:</span>&nbsp;
        <MyTooltipWithDelay text="Learn You a Haskell for Great Good!">
          <a href="http://learnyouahaskell.com/"><b>Link</b></a> — I mostly completed this book. I was pretty much lost in the later half at first. Having written a featureful pomodoro application in Haskell, I later reread it and finally understood it.
        </MyTooltipWithDelay>
        &ensp;
        <MyTooltipWithDelay text="Learning JavaScript Design Patterns">
          <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book"><b>Link</b></a> — I completed probably half of the book, and I will probably forget most of them. I have used the module pattern extensively in my personal website and perhaps in the future projects as well. I might reread it later.
        </MyTooltipWithDelay>
        &ensp;
        <span className="highlight">Course:</span>&nbsp;
        <MyTooltipWithDelay text="CIS194: Introduction to Haskell">
          <a href="https://www.seas.upenn.edu/~cis1940/spring13/lectures.html"><b>Link</b></a> — I read Learn You a Haskell book before but I couldn't quite get much of it. I then stumbled across the best free introduction Haskell course according to <a href="https://github.com/bitemyapp/learnhaskell">bitemyapp</a> so I took it. The instructor explains not very in details, which I found it sufficient. I gained much more understandings especially Monad. However, I didn't do any exercise since that seemed to take much time. You may request the solution from this <a href="https://github.com/byorgey/haskell-course">GitHub</a> link.
        </MyTooltipWithDelay>

        &nbsp;—&nbsp;
        <span>[2020]</span>&nbsp;
        <span className="highlight">Course:</span>&nbsp;
        <MyTooltipWithDelay text="Cloud Computing Basics">
          <a href="https://coursera.org/share/7fa417bc8244a27c8ccb08295906fb99"><b>Coursera</b></a> — I took this short for fun as it offered a free certificate. It is a guide to cloud computing with a brief explanation of related technologies. This is a very short course (probably &lt; 3 hours with some preknowledge). The instructor at times reads what is shown on slides and not explains everything that appears on them so I personally don't recommend this course. You are better off reading Wikipedia in my opinion.
        </MyTooltipWithDelay>

        &nbsp;—&nbsp;
        <span>[2019]</span>&nbsp;
        <span className="highlight">Course:</span>&nbsp;
        <MyTooltipWithDelay text="freeCodeCamp">
          I became aware that the web knowledge offers me significant freedom so I took some 5 web-related courses here. The courses are about basics HTML/CSS/JS, fornt-end/back-end coding, React.js, and a few other libraries. I deleted my account there so the certificate links are gone.
        </MyTooltipWithDelay>
        &ensp;
        <MyTooltipWithDelay text="React - The Complete Guide">
          <b><a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">Udemy</a></b> — A popular course about React.js for beginners. I paid and enrolled in this course as I wanted to build some websites (including my personal website). The basic contents are laid out nicely but the instructor didn't cover all advanced stuff. At the end he did a project that I followed along but I knew unless I did the project from scratch myself I wouldn't be familiar with the language.
        </MyTooltipWithDelay>

        &nbsp;—&nbsp;
        <span>[2018]</span>&nbsp;
        <span className="highlight">Course:</span>&nbsp;
        <MyTooltipWithDelay text="Algorithms">
          <a href="https://coursera.org/verify/specialization/LP2AXJ7TUNRV"><b>Coursera</b></a> — I was unexplainably drawn to computer science just a month after coming back from Germany, and algorithms seemed like the most important basics so I took it. I paid 49 USD for the certificate and finished within a month. This coursera specialization contains 4 algorithm-related courses focusing deeply on theory. I would recommend this course for an aspiring computer scientist, but I was not that drawn much to the theoretical side so I skipped some lectures. I am not impressed with the assignment format since anyone can just put a correct number to pass the assignment.
        </MyTooltipWithDelay>
        &ensp;
        <MyTooltipWithDelay text="Data Structures and Algorithms">
          <p><a href="https://coursera.org/verify/specialization/MHRFWABPYTJU"><b>Coursera</b></a> — I was addicted to the previous algorithm specialization so I took this speciailization also. It contains 6 courses, and the hidden corner cases for the assignments alone made this course already worth it. I paid 49 USD for the certificate and finished within a month. This specialization is, to me, very challenging, especially some tasks in the capstone project. Therefore, I think non full-time learners might take longer than a month.</p>

          <p>This course covered the data structure and algorithms from the basics to more advanced topics. The genome-related courses provide me the insight into how the algorithm can help improve real-life applications. I was impressed by the coding assignments as there are a lot of them and there were a variety of programming languages to choose from. The runtime limit for each submission depends on the programming languages where C++ appeared to be less forgiving.</p>

          <p>Furthermore, there were a lot of hidden cases (inputs and expected outputs) for each assignment so one cannot simply cheat easily. It was sometimes hard to overcome corner cases, but there was a healthy amount of hint from the discussion forum. Code copy/paste activity was strongly discouraged, of course, but pseudocodes were available. I would recommend this course to anyone.</p>
        </MyTooltipWithDelay>
      </li>

      <li>
        <b className="highlight">Others</b>
        &nbsp;—&nbsp;
        N/A
      </li>
    </ul>

    <h1>Fiction</h1>

    <ul>
      <li>
        <b className="highlight">Visual</b>

        &nbsp;—&nbsp;
        <span>[2022]</span>&nbsp;
        <MyTooltipWithDelay text="Incognegro: A Graphic Mystery">
          <b>[Graphic Novel]</b> — It is a part of 1$ Humble Bundle package I bought long ago. It is a story of a black journalist who spied on lyncing of white supremacists against black people. He was about to retired, but fate made it more complicated. It is not light reading as it is full of racism and violence, but those seem necessary to reflect the past.
        </MyTooltipWithDelay>

        &nbsp;—&nbsp;
        <span>[2021]</span>&nbsp;
        <MyTooltipWithDelay text="The Walking Dead">
          <b>[Comic Books]</b> — I spent 25$ for the whole series from Humble Bundle. I would rate the comics as too violent for the kids with some (human) beheadings and sexual scenes. The story begins with the scene where people turning into zombies that eat people. The biggest takeaway for me is the reminder that many things nowadays that we think we cannot live without are actually superficial as they are completely useless in that situation.
        </MyTooltipWithDelay>

        &nbsp;—&nbsp;
        <span>[2020]</span>&nbsp;
        <MyTooltipWithDelay text="The Last Unicorn">
          <b>[Graphic Novel]</b> — It cost me 5$ on comiXology. Too bad, it is not available DRM-free anymore due to the policy change. It is a graphic novel based on a famous written novel by Peter S. Beagle: a story of a unicorn trying to find the rest of her species. My key takeaway from the story is that you have to go out of your comfort zone if you want something.
        </MyTooltipWithDelay>
      </li>

      <li>
        <b className="highlight">Text</b>

        &nbsp;—&nbsp;
        N/A
      </li>
    </ul>
  </div>
/*
      <li>
        <b className="highlight">Video Game With Ending(s)</b>

        &nbsp;—&nbsp;
        <span>[2020]</span>&nbsp;
        Giana Sisters: Rise of the Owlverlord
        Chasm
        Tower of Time
        Blazing Stars
        Shock Troopers
        Planescape: Torment (Enhanced Edition)

        <span>[2019]</span>&nbsp;
        Lure of the Temptress
        Celeste
        Limbo
        The Way
        Candle
        Beatbuddy: Tale of the Guardians
        Anna's Quest
        140
        Anomaly 2
        Botanicula Brutal Legend
        Hollow Knight
        Ankh - Anniversary Edition
        Cryptark
        Reventure
        Sundered: Eldritch Edition
        Titan Quest Anniversary Edition
        Thronebreaker: The Witcher Tales
        Machinarium Collector's Edition
        Unmechanical: Extended
        Bulb Boy
        Undertale
        Oxenfree

        <span>[2018]</span>&nbsp;
        Jill of the Jungle: The Complete Trilogy
        Stealth Bastard Deluxe Complete Edition

        <span>[2017]</span>&nbsp;
        Inside
        Wuppo
        Never Alone (Kisima Ingitchuna)
        Brothers: A Tale of Two Sons
        stealth inc 2
        tomb raider
        bioshock infinite
        gracamelee 2
        old man's journey
        </li>
*/
