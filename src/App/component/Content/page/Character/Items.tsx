import React from "react"

import {MyTooltip} from "../../share/MyTooltip"

export const Items = (): React.ReactElement =>
  <>
    <h1>What I Have and What I Like</h1>
    <ul>
      <li>
        <span className="bold highlight">Gadgets: </span>

        <MyTooltip text="Laptop">
          <ul>
            <li>Lenovo X200 (with coreboot) x 2</li>
            <li>Lenovo T400</li>
          </ul>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Mobile">
          <ul>
            <li>HTC One M7</li>
            <li>Samsung Note 2 N7100</li>
            <li>True 4G Superhero x 2</li>
          </ul>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Audio">
          <ul>
            <li>DAC/AMP: FiiO E10K</li>
            <li>Earphone: Cheap No Brand x 2</li>
            <li>Headphone: Beyerdynamic DT770pro 250 Ohm</li>
          </ul>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Storage">
          <ul>
            <li>External HDD: WD Passport 1TB</li>
            <li>Internal SSD: Intenso 120GB + Apacer Panther 120GB x 2</li>
            <li>USB Stick: Intenso Speedline 16GB + Sandisk Cruzer Slice 8GB</li>
          </ul>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Peripheral">
          <ul>
            <li>Controller: Xbox one Wireless Controller</li>
            <li>Drawing Tablet: Wacom Intuos 3D M</li>
            <li>Mouse: Roccat Pure Kone</li>
            <li>Webcam: Logitech c310 720p</li>
            <li>Wireless USB Adapter: Atheros AR9271 x 3</li>
          </ul>
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Software: </span>

        <MyTooltip text="OS">
          <ul>
            <li>Desktop: NixOS and Debian</li>
            <li>Mobile: Android 5 and Replicant</li>
          </ul>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Desktop">
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
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Hygiene: </span>

        <MyTooltip text="Grooming">
          <ul>
            <li>Razor: I mainly use a 3$ shavette but I also have a 1$ safety razor</li>
            <li>Blade: I only use DE razor blades, mostly Dorco ST300 and Feather because they all follow the same standard unlike proprietary Gillette razors.</li>
            <li>Foam: A cheap Barbasol does it for me especially the ones with cool sensation</li>
            <li>Nose hair: I use a dove scissor that I got from a bundle in Germany</li>
          </ul>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Detergent">
          <ul>
            <li>Dishwasher: I make myself (from pre-made ingredients)</li>
            <li>Soap: I prefer bar soap like Asepso over a liquid one except for camping</li>
            <li>Shampoo: typical one from supermarket. I would like to try making my ownhair shampoo but everybody else seems to discourage that idea</li>
            <li>Toothpaste: I pretty much use tooth powder like Viset-Niyom before bed. Since its flavor is quite too strong, I usually use typical toothpaste in the morning.</li>
          </ul>
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Food & Drink: </span>

        <MyTooltip text="Tea">
          <p>I drink only tea, not coffee. I am actually a tea enthusiast with a tea tasing set at home.</p>
          <p>Any cheap tea would do except any tea bag because I find it hard to control the amount.</p>
          <p>It also has unnecessarily environmental concern. My favourite teas are pu-erh from China and good Sencha.</p>
          <p>My least favourite tea brand is Lipton as I find the taste horrible.</p>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Heabal Tea">
          <p>Red Roibos, Chrysanthemum, Yerba Mate, and anything else adventurous</p>
          <p>The world has so many herbs and I can't wait to try them all! (but I am currently lazy)</p>
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Clothing: </span>

        <MyTooltip text="Shoe">
          <ul>
            <li>One sandal</li>
            <li>One sneaker</li>
          </ul>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Accessory">
          <ul>
            <li>Two Eyeglasses (for myopic person around 300 and 500 degrees)</li>
            <li>One LACOSTE watch that I don't like to wear</li>
          </ul>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Bicycle">
          <ul>
            <li>Short cycling pant</li>
            <li>uvex bike helmet</li>
          </ul>
        </MyTooltip>
      </li>
    </ul>
  </>
