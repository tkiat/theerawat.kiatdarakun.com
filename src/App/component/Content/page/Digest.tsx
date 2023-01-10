import React from 'react'

import {MyTooltip, MyTooltipImgWithDelay, MyTooltipWithDelay} from "../share/MyTooltip"

import {Religion} from "./Digest/Religion"
import {Software} from "./Digest/Software"

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
        <MyTooltipImgWithDelay src="/book.svg">
          <a href="https://standardebooks.org/ebooks/leo-tolstoy/a-confession/aylmer-maude"><b>Link</b></a> — It is a book about Leo Tolstoy who was not able to find the meaning of life despite his material success. The strongest message of his book I found is that the meaning of life cannot be found rationally. I rejected his religious solution. Instead, that message made me introspect my own emotional needs and personalities to find my purpose.
        </MyTooltipImgWithDelay>
      </li>

      <li>
        <b className="highlight">Well-Being</b>
        &nbsp;—&nbsp;
        <span>[2020] </span>
        Introduction to Personal Branding&nbsp;
        <MyTooltipWithDelay text={'\u{1F393}'}>
          <p><a href="https://coursera.org/verify/AZD6S5JVYEG8"><b>Coursera</b></a> — I was going to build my portfolio site and gaining more perspective about how to put myself out there sounds like a good idea. I, by chance, discovered this course and I got the certificate for free because of the coronavirus outbreak giveaway.</p>

          <p>This course is about how to construct personal branding without any practical assignment. The instructor talks in a casual and relaxing manner. The course is worth it to me though as I haven't been aware of some of the tips before, but the length is only around 4-10 hours and not at all in-depth.</p>
        </MyTooltipWithDelay>
        , Sit Less, Get Active&nbsp;
        <MyTooltipWithDelay text={'\u{1F393}'}>
          <p><a href="https://coursera.org/share/896aa29cfb15efd3a8f0d08de9134c99"><b>Coursera</b></a> — I got a free certificate offer and I sat all day so I took it. I later forgot everything except the course title itself which should be enough.</p>
        </MyTooltipWithDelay>
      </li>

      <li>
        <b className="highlight">Technical Skills</b>
        <ul>
          <Software />
        </ul>
      </li>
    </ul>

    <hr />

    <h2>Nonfiction: Human Society</h2>

    <ul>
      <Religion />
    </ul>

    <hr />

    <h2>Nonfiction: Nonhuman Organisms and the Earth</h2>

    <ul>
      <li>
        <b className="highlight">Animal Ethics</b>
        &nbsp;—&nbsp;
        <span>[2022] </span>
        Land of Hope and Glory&nbsp;
        <MyTooltipWithDelay text={'\u{1F4F9}'}>
          <a href="https://www.youtube.com/watch?v=dvtVkNofcq8"><b>Link</b></a> — A documentary about animal abuse in the UK about which the narrator proceeds from pigs, cows, birds, and finally sheeps. While I believe farms with less cruel conditions than those in the documentary exist, unnecessary killing is never justifiable. This documentary doesn't offer anything particularly new, but the pieces of footage reminds me what can possibly be wrong in the industry.
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
        <span>[2022] </span>
        Incognegro: A Graphic Mystery&nbsp;
        <MyTooltipWithDelay text={'\u{1F6C8}'}>
          <b>[Graphic Novel]</b> — It is a part of 1$ Humble Bundle package I bought long ago. It is a story of a black journalist who spied on lyncing of white supremacists against black people. He was about to retired, but fate made it more complicated. It is not light reading as it is full of racism and violence, but those seem necessary to reflect the past.
        </MyTooltipWithDelay>

        &nbsp;—&nbsp;
        <span>[2021] </span>
        The Walking Dead&nbsp;
        <MyTooltipWithDelay text={'\u{1F6C8}'}>
          <b>[Comic Books]</b> — I spent 25$ for the whole series from Humble Bundle. I would rate the comics as too violent for the kids with some (human) beheadings and sexual scenes. The story begins with the scene where people turning into zombies that eat people. The biggest takeaway for me is the reminder that many things nowadays that we think we cannot live without are actually superficial as they are completely useless in that situation.
        </MyTooltipWithDelay>

        &nbsp;—&nbsp;
        <span>[2020] </span>
        The Last Unicorn&nbsp;
        <MyTooltipWithDelay text={'\u{1F6C8}'}>
          <b>[Graphic Novel]</b> — It cost me 5$ on comiXology. Too bad, it is not available DRM-free anymore due to the policy change. It is a graphic novel based on a famous written novel by Peter S. Beagle: a story of a unicorn trying to find the rest of her species. My key takeaway from the story is that you have to go out of your comfort zone if you want something.
        </MyTooltipWithDelay>
      </li>

      <li>
        <b className="highlight">Video</b>

        &nbsp;—&nbsp;
        N/A
      </li>

      <li>
        <b className="highlight">Video Games</b>

        &nbsp;—&nbsp;
        N/A
      </li>
    </ul>
  </div>
