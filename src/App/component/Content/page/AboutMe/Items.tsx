import React from "react"

import {MyReactTooltip} from "../../share/MyReactTooltip"

// TODO finish myreacttooltip
export const Items = (): React.ReactElement =>
  <>
    <p>Possesions are one of the strongest hints of a person's value. I shall include them here.</p>
    <ul>
      <li>
        <span className="bold highlight">Gadgets: </span>

        <MyReactTooltip id="tt-it-laptop" text="Laptop">
          <ul>
            <li>Lenovo X200 (with coreboot) x 2</li>
            <li>Lenovo T400</li>
          </ul>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-it-mobile" text="Mobile">
          <ul>
            <li>HTC One M7</li>
            <li>Samsung Note 2 N7100</li>
            <li>True 4G Superhero x 2</li>
          </ul>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-it-audio" text="Audio">
          <ul>
            <li>DAC/AMP: FiiO E10K</li>
            <li>Earphone: Cheap No Brand x 2</li>
            <li>Headphone: Beyerdynamic DT770pro 250 Ohm</li>
          </ul>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-it-storage" text="Storage">
          <ul>
            <li>External HDD: WD Passport 1TB</li>
            <li>Internal SSD: Intenso 120GB + Apacer Panther 120GB x 2</li>
            <li>USB Stick: Intenso Speedline 16GB + Sandisk Cruzer Slice 8GB</li>
          </ul>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-it-peripheral" text="Peripheral">
          <ul>
            <li>Controller: Xbox one Wireless Controller</li>
            <li>Drawing Tablet: Wacom Intuos 3D M</li>
            <li>Mouse: Roccat Pure Kone</li>
            <li>Webcam: Logitech c310 720p</li>
            <li>Wireless USB Adapter: Atheros AR9271 x 3</li>
          </ul>
        </MyReactTooltip>
      </li>
      <li>
        <span className="bold highlight">Software: </span>
        <span className="tooltip-front" data-tip data-for="tt-it-os">OS</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for="tt-it-desktop">Desktop</span>
      </li>
      <li>
        <span className="bold highlight">Hygiene: </span>
        <span className="tooltip-front" data-tip data-for="tt-it-grooming">Grooming</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for="tt-it-detergent">Detergent</span>
      </li>
      <li>
        <span className="bold highlight">Food & Drink: </span>
        <span className="tooltip-front" data-tip data-for="tt-it-tea">Tea</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for="tt-it-herbal">Herbal Tea</span>
      </li>

      <MyReactTooltip id="tt-it-os">
        <ul>
          <li>Desktop: NixOS and Debian</li>
          <li>Mobile: Android 5 and Replicant</li>
        </ul>
      </MyReactTooltip>

      <MyReactTooltip id="tt-it-desktop">
        <ul>
          <li>Editor: Neovim</li>
          <li>Email Client: Web-Based Only</li>
          <li>File Manager: Neovim, mc, ranger</li>
          <li>Multimedia (Create): GIMP, Inkscape, Kdenlive, simplescreenrecorder</li>
          <li>Multimedia (Consume): MuPDF, Okular, VLC, cmus</li>
          <li>Password Manager: password-store</li>
          <li>Shell: Bash</li>
          <li>Terminal Emulator: st, xterm</li>
          <li>Web Browser: Firefox/Icecat, Ungoogled Chromium, w3m</li>
          <li>Window Manager: xmonad, dwm</li>
        </ul>
      </MyReactTooltip>

      <MyReactTooltip id="tt-it-grooming">
          I mainly use a 3$ shavette but I also have a 1$ safety razor. I use DE razor blades, mostly Dorco ST300 and Feather. A cheap Barbasol does it for me especially the one with cool sensation. For nose hair, I use a dove scissor that I got from a bundle in Germany.
      </MyReactTooltip>

      <MyReactTooltip id="tt-it-detergent">
        I made dishwasher detergents myself (from pre-made ingredients). I prefer bar soap like Asepso over a liquid one. Of course, I would rather bring a small liquid bottle for camping. I would like to try making my ownhair shampoo but everybody else seems to discourage that idea.
      </MyReactTooltip>

      <MyReactTooltip id="tt-it-tea">
        I drink only tea, not coffee. I am actually a tea enthusiast with a tea tasing set at home. Any cheap tea would do except any tea bag because I find it hard to control the amount. It also has unnecessarily environmental concern. My favourite teas are pu-erh from China and good Sencha. My least favourite tea brand is Lipton as I find the taste horrible. I value single origin tea like Dilmah but I don't like their packaging.
      </MyReactTooltip>

      <MyReactTooltip id="tt-it-herbal">
          Red Roibos, Chrysanthemum, Yerba Mate, and anything else adventurous. The world has so many herbs and I can't wait to try them all! (but I am currently lazy).
      </MyReactTooltip>
    </ul>
  </>

