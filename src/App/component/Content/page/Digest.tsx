import React from 'react'

import {MyTooltip, MyTooltipWithDelay} from "../share/MyTooltip"

import {Religion} from "./Digest/Religion"

export const Digest = (): React.ReactElement =>
  <div className="page-digest">
    <br />

    <div>
      I list only some items that follow my requirements for&nbsp;
      <MyTooltip text="media">
        <ol>
          <li>Available digitally</li>
          <li>Available DRM-free or free of charge</li>
          <li>Compatible with FOSS operating systems (like Linux)</li>
        </ol>
      </MyTooltip> and&nbsp;
      <MyTooltip text="video games">
        <ol>
          <li>Open-source</li>
          <li>Available DRM-free</li>
          <li>Compatible with FOSS operating systems (like Linux)</li>
        </ol>
      </MyTooltip>.
    </div>

    <hr />

    <h2>Nonfiction: Individual</h2>

    <ul>
      <li>
        <b className="highlight">(Auto)biography</b>
        &nbsp;—&nbsp;
        <span>[2021] </span>
        A Confession&nbsp;
        <MyTooltipWithDelay text={'\u{1F56E}'}>
          <a href="https://standardebooks.org/ebooks/leo-tolstoy/a-confession/aylmer-maude"><b>Link</b></a> — It is a book about Leo Tolstoy who was not able to find the meaning of life despite his material success. The strongest message of his book I found is that the meaning of life cannot be found rationally. I rejected his religious solution. Instead, that message made me introspect my own emotional needs and personalities to find my purpose.
        </MyTooltipWithDelay>
      </li>

      <li>
        <b className="highlight">Job/Career</b>
        &nbsp;—&nbsp;
        <span>[2020] </span>
        Introduction to Personal Branding&nbsp;
        <MyTooltipWithDelay text={'\u{1F393}'}>
          <p><a href="https://coursera.org/verify/AZD6S5JVYEG8"><b>Coursera</b></a> — I was going to build my portfolio site and gaining more perspective about how to put myself out there sounds like a good idea. I, by chance, discovered this course and I got the certificate for free because of the coronavirus outbreak giveaway.</p>

          <p>This course is about how to construct personal branding without any practical assignment. The instructor talks in a casual and relaxing manner. The course is worth it to me though as I haven't been aware of some of the tips before, but the length is only around 4-10 hours and not at all in-depth.</p>
        </MyTooltipWithDelay>
      </li>

      <li>
        <b className="highlight">Well-Being</b>
        &nbsp;—&nbsp;
        <span>[2020] </span>
        Sit Less, Get Active&nbsp;
        <MyTooltipWithDelay text={'\u{1F393}'}>
          <p><a href="https://coursera.org/share/896aa29cfb15efd3a8f0d08de9134c99"><b>Coursera</b></a> — I got a free certificate offer and I sat all day so I took it. I later forgot everything except the course title itself which should be enough.</p>
        </MyTooltipWithDelay>
      </li>
    </ul>

    <hr />

    <h2>Nonfiction: Human Society</h2>

    <ul>
      <li><Religion /></li>
    </ul>

    <hr />

    <h2>Nonfiction: Nonhuman Organisms and the Earth</h2>

    <ul>
      <li>
        <b className="highlight">Animal Ethics</b>
        &nbsp;—&nbsp;
        <span>[2022] </span>
        Land of Hope and Glory (
        <MyTooltipWithDelay text={'\u{1F4F9}'}>
          <a href="https://www.youtube.com/watch?v=dvtVkNofcq8"><b>Link</b></a> — A documentary about animal abuse in the UK about which the narrator proceeds from pigs, cows, birds, and finally sheeps. While I believe farms with less cruel conditions than those in the documentary exist, unnecessary killing is never justifiable. This documentary doesn't offer anything particularly new, but the pieces of footage reminds me what can possibly be wrong in the industry.
        </MyTooltipWithDelay>)
      </li>
    </ul>

    <hr />

    <ul>
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
    </ul>

    <hr />

    <h2>Fiction</h2>

    <ul>
      <li>
        <b className="highlight">Text</b>

        &nbsp;—&nbsp;
        N/A
      </li>

      <li>
        <b className="highlight">Image</b>

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
        <b className="highlight">Video</b>

        &nbsp;—&nbsp;
        N/A
      </li>
    </ul>
  </div>
