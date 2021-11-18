import React from 'react'

import {MyTooltip} from "../../share/MyTooltip"

export const PurposeAndGoals = (): React.ReactElement =>
  <>
    <h1>Purpose</h1>
    <p>I have seen beautiful cities, trains, buildings, roads, and many others. I knew that a road is for vehicles and a bus is for passengers but I was always ignorant to the underlying purpose of things: why everything exists? After some introspection, I found that the purpose only exists on the sentient beings, one has to introspect his values and create the purpose from those.</p>

    <p>I have never been aware of such values until I got tired of power consumption from my self-assembled PC and installed Void linux on my abandoned laptop. It was working well! On that very day, I became appreciated about freedom. I found the philosophy of free software and open source. I became aware about the influence and control, something that also affects the nature and animals.</p>
    <p>I sold my PC and bought two Thinkpad X200. I studied Linux and web myself. They showed me the importance of reproducibility and independence. They link to transparency which, in turn, enables freedom. There were things I never know I wanted. Now I have something to do.</p>
    <h1>Goals</h1>
    <MyTooltip text="My Personalities, Values, and Purpose">
      <p>I want to write a book about how my personalities, values, and purpose link together and the process of creating such links.</p>
      <p>I believe this is a prerequisite for a fulfilled life and I recommend everyone to do it. This cannot be done without an extensive research on basic psychology and philosophy but I would like to take on the challenge.</p>
    </MyTooltip>

    &nbsp;|&nbsp;
    <MyTooltip text="Low Impact Life">
      <p>Life of low impact is life without much damage to environment and others which I believe is a better life to live.</p>
      <p>I would like to experiment and then elaborate the challenges and trade-offs in a book or a website. There are some contents like this online but I have yet to find much content for Thai localization.</p>
    </MyTooltip>

    &nbsp;|&nbsp;
    <MyTooltip text="Become a Software Craftsman">
      <p>My appreciation of free and open-source software for enabling freedom leads me to study software. I acknowledge the type checking capability of Typescript and Haskell, the simplified language like Python, all the markup languages that make documentation simpler, and the ubiquity of Javascript. I study the tool that enables reproduciility like Nix, a configurable editor like Neovim, a source control like Git, and many more.</p>
      <p>There are too many things to learn and I am learning them. Together, these tools enable functional, maintainable and scalable programs. I want to become a craftman of software and contribute my knowledge for a betterment of mankind.</p>
    </MyTooltip>
  </>
