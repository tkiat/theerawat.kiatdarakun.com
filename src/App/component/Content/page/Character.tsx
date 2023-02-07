import React from 'react'
import {TooltipText, TooltipTextWithDelay} from 'component/Content/share'

export const Character = (): React.ReactElement => (
  <div className="no-split">
    <section>
      <h2>Internal</h2>

      <div>
        <b className="highlight">Personality Test</b>

        &nbsp;—&nbsp;
        <TooltipTextWithDelay text="MBTI">
          <span>Taken on 31 Mar 2021 <a href="https://www.16personalities.com/">here</a></span>
          <ul>
            <li>(I)ntroverted (79%) - (E)xtraverted</li>
            <li>I(N)tuitive (52%) - Ob(S)ervant</li>
            <li>(T)hinking (51%) - (F)eeling</li>
            <li>(J)udging(58%) - (P)rospecting</li>
            <li>(A)ssertive (65%) - (T)erbulent</li>
          </ul>
        </TooltipTextWithDelay>
        ,&ensp;
        <TooltipTextWithDelay text="Big 5">
          <span>Taken on 31 Mar 2021 <a href="https://openpsychometrics.org/tests/IPIP-BFFM/">here</a></span>
          <ul>
            <li>Extroversion: 11 (percentile)</li>
            <li>Emotional Stability: 57</li>
            <li>Agreeableness: 7</li>
            <li>Conscientiousness: 95</li>
            <li>Intellect/Imagination: 46</li>
          </ul>
        </TooltipTextWithDelay>
        ,&ensp;
        <TooltipTextWithDelay text="Four Temperaments">
          <span>Taken on 31 Mar 2021 <a href="http://openpsychometrics.org/tests/O4TS/">here</a></span>
          <ul>
            <li>Choleric: 12,</li>
            <li>Melancholic: 12</li>
            <li>Sanguine: 5</li>
            <li>Phlegmatic: 22</li>
          </ul>
        </TooltipTextWithDelay>
      </div>

      <br />

      <div>
        <b className="highlight">Hard Skills</b>

        &nbsp;—&nbsp;
        <TooltipText text="Language">
          <ul>
            <li>English (professional, I used English during the internship and full-time work in Germany at ease)</li>
            <li>German (basic, I could renew documents and shopping using only German)</li>
            <li>Thai (native)</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Coding">
          Basic front-end dev, Git, Vim, Haskell/Python/Typescript/React.js/SCSS/shell scripting, etc.
        </TooltipText>
        ,&ensp;
        <TooltipText text="Computer">
          <ul>
            <li>Basic office software (Microsoft Office, LibreOffice, cloud storage, Graphviz, LaTeX, email hosting, etc.)</li>
            <li>Linux (Debian, Nix, NixOS, QubesOS, etc.)</li>
            <li>Typing speed of 60 WPM</li>
            <li>Desktop computer assembly</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Communications">
          Obtain Bachelor and Master's degrees related to Communications technologies.
        </TooltipText>
        ,&ensp;
        <TooltipText text="Low-Impact Living">
          <ul>
            <li>Know how to save household electrity/water and avoid using unnecessary disposable products.</li>
            <li>Always cook simply for myself like boiled/stir fried vegetables and legumes, brown rice, soy milk, roasted sesame, and smoothie. I usually know how to spot non-vegan and fake organic food.</li>
          </ul>
        </TooltipText>
      </div>

      <br />

      <div>
        <b className="highlight">Soft Skills</b>

        &nbsp;— I never want to cause unnecessary complications and sufferings to myself and others. Furthermore, I am disciplined and naturally inclined to learn something new. With good quantitative and analytical thinking skills, I believe I can handle most jobs.
      </div>

      <br />

      <div>
        <b className="highlight">Hobbies</b>

        &nbsp;—&nbsp;
        <TooltipText text="Low-Impact Living">
          My ideal life based on what truly matter is free of greediness, and thus I value minimalism, sustainability, and veganism. It is a lot of fun and creativity boosting to find a way to make my items (like table, lamp, detergents, food, etc.) less impactful to myself, other beings, and the earth. Oftentimes I need to trade my time and convenience for it. How much should I trade? That's subjective. Hmm.
        </TooltipText>
        ,&ensp;
        <TooltipText text="Increase Awareness">
          I like to consume information to increase my awareness of the world. This should help reinforce my understanding of what truly matter. It can be news, documentaries, discoveries, inventions, opinions, etc.
        </TooltipText>
        ,&ensp;
        <TooltipText text="Philosophy">
          Knowledge of philosophy should make my works of personal life and society based on what truly matter more accessible and acceptable to the general public. I have yet to read a lot of works but I will deinitely do so in free time.
        </TooltipText>
        ,&ensp;
        <TooltipText text="(Free and) Open Source Software">
          Software (for both desktop and web) is crucial to my works as it enables me to create and share my thoughts to the whole world in any creative form that text alone cannot convey.
          <br /><br />
          I advocate FOSS operating systems (since they are very fundamental), the availability of FOSS application software alternatives (for accessibility to the poor), and OSS for entertainment softeware like video games (for the sake of transparency).
        </TooltipText>
        ,&ensp;
        <TooltipText text="Writing">
          Life is too short to die alone without anything to share with others. Because the storage size of text is the lowest (as compared to another form of medium), writing seems to be the most minimalist way to convey thoughts and leave a lot of room for imagination to the reader.
        </TooltipText>
      </div>

      <br />

      <div>
        <b className="highlight">Views</b>

        &nbsp;—&nbsp;
        <TooltipText text="Life Purpose">
          There is no point of my existence since, without any sentient being in the universe, “goodness”, “badness”, and any purpose don't exist. However, this realization cannot be applied to low-level creatures fully, for it cannot reason. Since I share many instincts with those creatures, it cannot be fully applied to me as well. Therefore, my only hope is my subjective self.
          <br /><br />
          Every status is not desirable as everybody has problems. A prime minister faces a prime minister's problems; a civil servant faces a civil servant's problems. As a result, I tried to do nothing. However, I had to breathe after a few seconds and that was the first genuine wisdom I attained. I knew that living by awareness, instead of any made-up purpose, was the only thing that could satisfy me, for it was the truest experience.
        </TooltipText>
      </div>
    </section>

    <br />
    <hr />

    <section>
      <h2>External</h2>

      <div>
        <b className="highlight">Appearance</b>

        &nbsp;—&nbsp;
        <TooltipText text="Body">
          <ul>
            <li>177 cm</li>
            <li>Ectomorphs</li>
            <li>Brown Skin</li>
            <li>Short Black Hair</li>
            <li>Short Bread and Nails</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Clothing and Accessories">
          <ul>
            <li>No Piercings and Tattoos</li>
            <li>Don't Usually Wear Watch</li>
            <li>Wear Prescription Glasses</li>
            <li>Usually Wear Short Pants Without Shirt at Home</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipTextWithDelay text="Other">
          <ul>
            <li>Thai</li>
            <li>Millennials</li>
          </ul>
        </TooltipTextWithDelay>
      </div>

      <br />

      <div>
        <b className="highlight">Behavior</b>

        &nbsp;—&nbsp;
        <TooltipText text="Interaction">
          <ul>
            <li>Calm and Stable</li>
            <li>No Insults, Pointless Arguments, and Gossips</li>
            <li>Quiet and Smile Less (Outside of Work)</li>
            <li>Never Have Sexual or Romantic Relationship</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Routine">
          <ul>
            <li>Early Bird</li>
            <li>Bath One or Two Times a Day if I Go Outside</li>
            <li>Shave in the Morning on Weekdays</li>
            <li>Clean Weekly</li>
            <li>Predictable</li>
          </ul>
        </TooltipText>
      </div>

      <br />

      <div>
        <b className="highlight">Belongings</b>

        &nbsp;—&nbsp;
        Food & Drinks (
        <TooltipText text="Container">
          <ul>
            <li>Rectangular: Glass (0.45L x 7 / 0.75L x4 / 1.25L x2), Plastic (2.8L)</li>
            <li>Cylindrical: Glass (0.3L x 6 / 0.7L x 5)</li>
            <li>Jar: Glass (2L x 2 / 4L / TODO x 2)</li>
            <li>Bottle: Glass (1L x 4), Plastic (1.2L x 3), Aluminium 0.75L</li>
            <li>Bowl: Insulated Stainless Steel (Big, Small)</li>
            <li>Glass: Ceramic (360ml), Stainless (TODO x 2)</li>
            <li>Tea: Gaiwan 150ml (Porcelain), Cup 90ml x 2 (Porcelain)</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Processing">
          <ul>
            <li>Appliance: Rice Cooker, Smoothie Blender (and Two Plastic Bottles)</li>
            <li>Utensil: Pan (Stainless), Pot (Stainless)</li>
            <li>Accessories: Spatula, Cheesecloth (Big x 2, Medium, Small), Silicone Mat x 4, Thermometer, Weighing Machine (&lt;= 5 kg)</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Consuming">
          <ul>
            <li>Cutlery: Spoon (Stainless: Normal x 7, Small x 11)</li>
            <li>Accessories: Bottle Opener, Tea (Wood Clip, Plastic Tray With Wood Top, Aluminium Cup Filter), Wine Opener</li>
          </ul>
        </TooltipText>
        ),&ensp;
        <TooltipText text="Health">
          <ul>
            <li>Exercise: Hand Massager Stick (Wood), Resistance Band</li>
            <li>Protection: Earplug Pair, Eye Cover</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Hygiene">
          Cleaning Cloth x 5, Grooming (Comb, Nail Cliper, Nose Scissors, Safety Razor, Shavette), Spray Bottle (350ml), Towel (Big, Small)
        </TooltipText>
        ,&ensp;
        <TooltipText text="Clothing & Accessories">
          <ul>
            <li>General: Eyeglasses x 2, Handkerchief x 8, Pants (Long, Jeans x 3, Short x 3), Shirt (Jacket x 2, Long x 2, Short x 6), Shoe (Sandals, Sneaker), Sock x 11, Underwear x 6, Wallet, Watches x 2</li>
            <li>Work: Long Pants, Long Shirt x 2, Necktie, Shoe, Suit x 3</li>
            <li>Workout: Shirt x 3, Shoe, Shorts, Sock, Underware x 2</li>
            <li>Very Cold Climate: Leggings, Scarf, Shirt x 6</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Computing">
          <ul>
            <li>
              Computer
              <ul>
                <li>Laptop: Thinkpad X260, Thinkpad X200</li>
                <li>SSD: WD Blue 500GB, Apacer Panther 120GB x 2</li>
                <li>RAM: DDR4 (16GB, 4GB), DDR3 (2GB x 2, 1GB x 3)</li>
                <li>Accessories: Flasher Programmer x 2, Keyboard Brush, USB Flash Drive (32GB, 16GB), Mouse, Camera 720p, Wacom Tablet, AMP/DAC, Cable (HDMI, VGA)</li>
              </ul>
            </li>

            <li>
              Mobile
              <ul>
                <li>Phone: Huawei P10, Nokia 2, True Super Hero 4G Entertainment & Plus</li>
                <li>Internal: Micro SD Card 32GB</li>
                <li>Accessories: Phone Holder x 2</li>
              </ul>
            </li>

            <li>
              Other: Earphone x 2, WiFi Adapter AR9271
            </li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Travel">
          <ul>
            <li>Container: Backpack (Small, Medium), Grocery Bag (Jute Big, Jute Small, Plastic x 2), Luggage (Big x 2)</li>
            <li>Other: Bicycle (Portable Multitool, Helmet), Power Bank</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Tool">
          <ul>
            <li>Measurement: Foldable Ruler (200cm, 50cm), Tape (150cm), Body Weighing Machine</li>
            <li>Paper: Folder x 2, Pen (Red, Blue), Mechanical Pencil , Stapler</li>
            <li>General: Scissor, Screwdriver Set (Medium, Small)</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Household">
          <ul>
            <li>Container: Plastic (Small), Glass (100ml x 4), Stainless Water Bowl (Big, Small)</li>
            <li>Electronics: USB Fan, Air Purifier, LED (12W, 4W x 4, 1.5W x 4), Power Socket Adapter x 2</li>
            <li>Furniture: Chair (and Lumbar Cushion), Portable Table, Portable Lamp Post x 3, Pillow (and Case)</li>
          </ul>
        </TooltipText>
      </div>
    </section>
  </div>
)

//         <li>
//           <b className="highlight">Chosen Apps/Services</b>
// 
//           &nbsp;—&nbsp;
//           <TooltipText text="OS">
//             <ul>
//               <li>Desktop: QubesOS, Debian, NixOS</li>
//               <li>Mobile: Android (Mainly for Shopping and Banking)</li>
//             </ul>
//           </TooltipText>
//           ,&ensp;
//           <TooltipText text="Email">
//             <ul>
//               <li>One Tutanota domain</li>
//               <li>One Custom Domain, Hosted on Zoho</li>
//             </ul>
//           </TooltipText>
//         </li>


//       <TooltipText text="Computing">
//         <ul>
//           <li>DRM in a single-purchased product, unless effective, only punishes customers. DRMs in subscription services, though imperfect, have some merits as it makes products more accessible to poor users.</li>
//           <li>All operating systems and at least one collection of firmware in all computers should be FOSS because people deserve freedom-friendly choices.</li>
//         </ul>
//       </TooltipText>

//       <TooltipText text="Food & Drinks">
//         <ul>
//           <li>Least Processed</li>
//           <li>Cook Myself</li>
//           <li>Stored in Glass Container</li>
//           <li>Chilled Water Only to Preserve It</li>
//           <li>Loose Leaf Tea Over Teabags</li>
//         </ul>
//       </TooltipText>
