import React from "react"

import {MyReactTooltip} from "../../share/MyReactTooltip"

export const Items = (): React.ReactElement =>
  <>
    <p>What I Have and What I Like</p>
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
        <MyReactTooltip id="tt-it-os" text="OS">
          <ul>
            <li>Desktop: NixOS and Debian</li>
            <li>Mobile: Android 5 and Replicant</li>
          </ul>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-it-desktop" text="Desktop">
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
      </li>
      <li>
        <span className="bold highlight">Hygiene: </span>
        <MyReactTooltip id="tt-it-grooming" text="Grooming">
          <ul>
            <li>Razor: I mainly use a 3$ shavette but I also have a 1$ safety razor</li>
            <li>Blade: I only use DE razor blades, mostly Dorco ST300 and Feather because they all follow the same standard unlike proprietary Gillette razors.</li>
            <li>Foam: A cheap Barbasol does it for me especially the ones with cool sensation</li>
            <li>Nose hair: I use a dove scissor that I got from a bundle in Germany</li>
          </ul>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-it-detergent" text="Detergent">
          <ul>
            <li>Dishwasher: I make myself (from pre-made ingredients)</li>
            <li>Soap: I prefer bar soap like Asepso over a liquid one except for camping</li>
            <li>Shampoo: typical one from supermarket. I would like to try making my ownhair shampoo but everybody else seems to discourage that idea</li>
            <li>Toothpaste: I pretty much prefer tooth powder like Viset-Niyom. </li>
          </ul>
        </MyReactTooltip>
      </li>
      <li>
        <span className="bold highlight">Food & Drink: </span>
        <MyReactTooltip id="tt-it-tea" text="Tea">
          <p>I drink only tea, not coffee. I am actually a tea enthusiast with a tea tasing set at home.</p>
          <p>Any cheap tea would do except any tea bag because I find it hard to control the amount.</p>
          <p>It also has unnecessarily environmental concern. My favourite teas are pu-erh from China and good Sencha.</p>
          <p>My least favourite tea brand is Lipton as I find the taste horrible.</p>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-it-herbal" text="Heabal Tea">
          <p>Red Roibos, Chrysanthemum, Yerba Mate, and anything else adventurous</p>
          <p>The world has so many herbs and I can't wait to try them all! (but I am currently lazy)</p>
        </MyReactTooltip>
      </li>
      <li>
        <span className="bold highlight">Clothing: </span>
        <MyReactTooltip id="tt-it-shoe" text="Shoe">
          <ul>
            <li>One sandal</li>
            <li>One sneaker</li>
          </ul>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-it-accessory" text="Accessory">
          <ul>
            <li>Two Eyeglasses (for myopic person around 300 and 500 degrees)</li>
            <li>One LACOSTE watch that I don't like to wear</li>
          </ul>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-it-bicycle" text="Bicycle">
          <ul>
            <li>Short cycling pant</li>
            <li>uvex bike helmet</li>
          </ul>
        </MyReactTooltip>
      </li>
    </ul>
  </>
