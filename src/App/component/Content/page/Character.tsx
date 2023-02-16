import React from "react"

import {FigureOptionalTooltip, PageWithIconsScrollbar, TooltipText, TooltipTextWithDelay} from "../share"

export const Character = (): React.ReactElement => {
  const data = {
    icons: [
      <i className="fa-solid fa-person"></i>,
      <i className="fa-solid fa-person-hiking"></i>,
      <i className="fa-solid fa-suitcase-rolling"></i>,
    ],
    content: {
      sections: [
        <Trait />,
        <Hobbies />,
        <Belongings />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="about-character" />
}

const Prelude = (): React.ReactElement =>
  <section>
    todo
  </section>

const Trait = (): React.ReactElement =>
  <section>
    <h2>Traits</h2>

    <h3>Internal</h3>

    <ul className="more-gap-list">
      <li>
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
      </li>
      <li>
        <b className="highlight">Hard Skills</b>
        &nbsp;—&nbsp;
        <TooltipText text="Language">
          <ul>
            <li>Thai (native)</li>
            <li>English (professional)</li>
            <li>German (basic, I could renew documents and shopping using only German)</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Computer">
          <ul>
            <li>Basic office software (Microsoft Office, LibreOffice, cloud storage, Graphviz, LaTeX, email hosting, etc.)</li>
            <li>Coding: Basic front-end dev, Git, Vim, Haskell/Python/Typescript/React.js/SCSS/shell scripting, etc.</li>
            <li>Linux (Debian, Nix, NixOS, QubesOS, etc.)</li>
            <li>Typing speed of 60 WPM</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Communications">
          Obtain Bachelor and Master's degrees related to Communications technologies.
        </TooltipText>
      </li>
      <li>
        <b className="highlight">Soft Skills</b>
        &nbsp;—&nbsp;
        <TooltipText text="Workplace">
          <ul>
            <li><b className="highlight">Performance</b>: I am naturally inclined to learn something new, and I possess good quantitative and analytical thinking skills. I believe I can handle most jobs.</li>
            <li><b className="highlight">Teamwork</b>: As a highly conscientious person, I tend to be disciplined. I have been so far abide by the rules in the earlier workplaces.</li>
            <li><b className="highlight">Social</b>: I am a direct and friendly person and I dislike gossip. However, I have a social withdrawal tendency (outside work).</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Personal">
          <ul>
            <li><b className="highlight">Self-Awareness</b>: A long self-reflection period of mine proved fruitful. I now know what truly matter, and align my skills, appearance, preferences, belongings, eating habits, etc., with it.</li>
            <li><b className="highlight">Low-Impact Living</b>: I know how to save household electrity/water, eat simply only vegan food, not disturb others, and frequently avoid creating unnecessary wastes.</li>
          </ul>
        </TooltipText>
      </li>
      <li>
        <b className="highlight">Views</b>

        &nbsp;—&nbsp;
        <TooltipText text="Life Purpose">
          <p>There is no point of my existence since, without any sentient being in the universe, “goodness”, “badness”, and any purpose don't exist. However, this realization cannot be applied to low-level creatures fully, for it cannot reason. Since I share many instincts with those creatures, it cannot be fully applied to me as well. Therefore, my only hope is my subjective self.</p>

          <p>Every status is not desirable as everybody has problems: a prime minister faces a prime minister's problems; a civil servant faces a civil servant's problems. As a result, I tried to do nothing. However, I had to breathe after a few seconds and that was the first genuine wisdom I attained. I was so satisfied that I decided to live by awareness instead of any made-up life purpose.</p>
        </TooltipText>
      </li>
    </ul>

    <h3>External</h3>

    <ul className="more-gap-list">
      <li>
        <b className="highlight">Appearance</b>

        &nbsp;—&nbsp;
        <TooltipText text="Body">
          <ul>
            <li>177 cm</li>
            <li>Ectomorphs</li>
            <li>Brown skin</li>
            <li>Short black hair</li>
            <li>Short bread and nails</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Clothing and Accessories">
          <ul>
            <li>No piercings and tattoos</li>
            <li>Don't usually wear watch</li>
            <li>Wear prescription glasses</li>
            <li>Usually wear short pants without shirt at home</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Other">
          <ul>
            <li>Thai</li>
            <li>Millennials</li>
          </ul>
        </TooltipText>
      </li>
      <li>
        <b className="highlight">Behavior</b>

        &nbsp;—&nbsp;
        <TooltipText text="Interaction">
          <ul>
            <li>Calm and stable</li>
            <li>No insults, pointless arguments, and gossips</li>
            <li>Quiet and smile less (outside of work)</li>
            <li>Never have sexual or romantic relationship</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Routine">
          <ul>
            <li>Early bird</li>
            <li>Bath at least once a day if I go outside</li>
            <li>Shave in the morning before work</li>
            <li>Clean my home weekly</li>
            <li>Predictable</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Sustenance">
          <p>I usually eat bananas with other fruits (raw or smoothie with vegan protein powder) for breakfast. My lunch and dinner are usually boiled, mixed vegetables with brown rice and fried peanuts/tofu. I usually eat fruits, corns, fried peanuts, sweet potatoes, as snacks between meals.</p>

          <p>As for drinks, I currently drink non-chilled plain water, 12 grams of loose leaf tea, and a glass of chilled herbal tea daily.</p>
        </TooltipText>
      </li>
    </ul>
  </section>

const Hobbies = (): React.ReactElement =>
  <section>
    <h2>Hobbies</h2>

    <dl className="more-gap-list">
      <dt><b className="highlight">Low-Impact Living</b></dt>
      <dd>My ideal life based on what truly matter is free of greediness, and thus I value minimalism, sustainability, and veganism. It is a lot of fun and creativity boosting to find a way to make my items (like table, lamp, detergents, food, etc.) less impactful to myself, other beings, and the earth. Oftentimes I need to trade my time and convenience for it. How much should I trade? Hmm.</dd>

      <dt><b className="highlight">Increase Awareness</b></dt>
      <dd>I like to consume information to increase my awareness of the world. This should help reinforce my understanding of what truly matter. It can be news, documentaries, discoveries, inventions, opinions, etc.</dd>

      <dt><b className="highlight">Writing</b></dt>
      <dd>Life is too short to die alone without anything to share with others. Because the storage size of text is the lowest (as compared to another form of medium), writing seems to be the most minimalist way to convey thoughts and leave a lot of room for imagination to a reader.</dd>

      <dt><b className="highlight">(Free and) Open Source Software</b></dt>
      <dd>Software (for both desktop and web) is crucial to my works as it enables me to create and share my thoughts to the whole world in any creative form that text alone cannot convey. I advocate FOSS operating systems (since they are very fundamental), the availability of FOSS application software alternatives (for accessibility to the poor), and OSS for entertainment softeware like video games (for the sake of transparency).</dd>

      <dt><b className="highlight">Philosophy</b></dt>
      <dd>Knowledge of philosophy should make my works of personal life and society based on what truly matter more accessible and acceptable to the general public. I have yet to read a lot of works but I will definitely do so in free time.</dd>
    </dl>
  </section>

const Belongings = (): React.ReactElement =>
  <section>
    <h2>Belongings</h2>

    <p>I constantly edit my belongings to align with what can truly matter (i.e., the flow inside sentient beings). This means I prefer</p>

    <ul>
      <li>vegan and more sustainable items</li>
      <li>all items to
        <ul>
          <li>fit in my car or an average taxi (whatever is smaller) so that I only take one trip when relocating. This reduces environmental footprint.</li>
          <li>fit in 2 big luggages and a carry-on luggage so that they are carriable on a flight. The exceptions are furniture, vehicles, and some containers that can be kept at home.</li>
        </ul>
      </li>
      <li>to keep important items (like some documents) and items that I actually use to keep me from being a slave of my belongings</li>
      <li>items that are safer, more convenient, more durable, smaller, look cheaper (to discourage theft), lighter, more replacable, etc. Of course, some trade-offs have to be made, but I shall use good judgment.</li>
    </ul>

    <p>Below is the list of my belongings. For each item, I begin with the “why” first and then proceed to describe my choice.</p>

    <section>
      <h3 className="highlight">Food & Drinks</h3>

      <dl className="more-gap-list">
        <dt><b>Storage</b></dt>

        <dd>
          <ul>
            <li>
              <p><b className="highlight">Dried Food</b> — I have a strict requirement to see through items in a container to minimize confusion. This gives me two main choices: glasses and plastic. While plastic is more convenient, it's not the safest for human consumption. That's why I usually prefer glass. Since it is easily breakable, I usually bring a cooking utensil near it and make a transfer, not the other way around. I am thinking of buying a cover for them because the penetrative light shortens life of consumables therein.</p>

              <FigureOptionalTooltip src="/character/jar-glass-2L.png" label="4L x 3" width="95px">
                I love herbs, legumes, and grains, and I need airtight containers for them to prevent ants. I need them at different sizes because I sometimes buy food in bulk. I finally chose a glassware from China (Chuangfeng Glass) that is available in many sizes. The handle is more firm than expected and the two-layer lid makes it airtight. I have seen this one often in a random video on Youtube Shorts when it took place in China.
              </FigureOptionalTooltip>
              <FigureOptionalTooltip src="/character/jar-glass-2L.png" label="2L x 4" width="76px" />

              <FigureOptionalTooltip src="/character/jar-glass-1.2L.png" label="1.2L x 2" width="60px">
                I find it convenient to have a continer with wide lid to store baking soda (that I use to wash veggies) and probably sugar (although I almost never use it). Because those consumables often come with 0.5 - 1kg in size, a glass jar like this is suitable.
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/cylindrical-glass-0.7L.png" label="0.7L x 5" width="50px">
                I sometimes get dried food in small amount (like 200g). A small glass container like this is not only suitable for this purpose but also stackable!
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/cylindrical-glass-0.3L.png" label="0.3L x 6" width="45px">
                Unlike its bigger brother, I usually put it in the fridge. Its small size makes it ideal to store grounded seeds and powder that spoil fast, while its stackability utilizes space.
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/rect-plastic-2.8L.png" label="2.8L" width="140px">
                I eat a few bananas daily, and I need to keep it in the fridge to prolong its life. I can use a plastic bag and some other methods but a rectangular container enables me to conveniently stack another container on top of it. That's why I chose this spaceful plastic container (from Super Lock). It's usuaully big enough to store a bunch of bananas. On some occasions, I also bring this container outside to get beansprouts without a plastic bag.
              </FigureOptionalTooltip>
            </li>

            <li>
              <p><b className="highlight">Food</b> — Unlike dried food, I prefer borosilicate glasses as they can withstand more heat (up to 400 Celcius) and coldness (I can put it in a freezer with more peace of mind) as compared to more common soda-lime glasses.</p>

              <FigureOptionalTooltip src="/character/rect-glass-0.75L.png" label="1.25L x 2" width="120px">
                It's an airtight borosilicate glass from Double Lock. I choose it as the lid comes with a thick silicone and it's of good quality. I usally store boiled vegetables in this container and keep it in the fridge.
              </FigureOptionalTooltip>
              <FigureOptionalTooltip src="/character/rect-glass-0.75L.png" label="0.75L x 4" width="100px">
                I usally store boiled vegetables and processed food bought outside (like crispy fried bananas and dessert) in this container.
              </FigureOptionalTooltip>
              <FigureOptionalTooltip src="/character/rect-glass-0.75L.png" label="0.45L x 7" width="80px">
                I usally store fried peanuts and fried beansprouts/cabbages in this container.
              </FigureOptionalTooltip>
            </li>

            <li>
              <p><b className="highlight">Drink</b> — I prefer anything made with glass except when going outside.</p>

              <FigureOptionalTooltip src="/character/bottle-glass-1L.png" label="1L x 4" width="70px">
                I need drink containers made of glass to safely store plain water, soy milk, and herbal drinks for use at home. I ended up with this glass of an unknown brand but any common glass should be food safe. Its shape acts like an anti-slip handle itself, and this should reduce the risk of accidents. The lid is plastic from an unknown brand so I usually set it upright. It's still better to find food-grade replacement and replace it once every 1-2 years or so.
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/bottle-plastic-1.2L.png" label="1.2L x 3" width="60px">
                I needed to find non-glass container for outdoor use, and I finally bought these plastic bottles (Double Lock 33140) that allows a tight grip. Yeah, I know a stainless steel or aluminium bottle is usually considered healthier and more sustainable overall but I already have these bottles. I might replace them in the future.
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/bottle-stainless-0.75L.png" label="0.75L" width="55px">
                My (vastly simplified) gongfu tea ceremony is only possible with something that can keep hot water for about an hour. This insulated stainless steel bottle from Seagull (with some sort of Japanese technology they say) makes this possible.
              </FigureOptionalTooltip>
            </li>
          </ul>
        </dd>

        <dt><b>Preparation</b></dt>
        <dd>
          <ul>
            <li>
              <p><b className="highlight">Main Tools</b></p>

              <FigureOptionalTooltip src="/character/rice-cooker.png" label="1L" width="90px">
                While I can cook rice in a pot, it sticks a lot at bottom (of a stainless stelel pot I have) so I needlessly have to throw it away. Furthermore, it's a waste of time to stay vigilant all the time. That's why I need a non-stick, automatic rice cooker. This one is from Panasonic (SR-JQ105). There is an optional plastic holder for steaming on top. I don't usualy use that since I usually cook the rice full of it and then store it in the fridge.
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/pot-4.5L.png" label="4.5L" width="125px">
                I almost always cook myself so a pot is essential. Such pot should be designed for induction cooking as well since I can use induction cooker (which is more energy efficient than the electric couterpart) when the gas is depleted. The ideal size should be around 4-5 litres since it is enough to cook once and reasonably fuel me (for half a week). After some research, I ended up with a stainless steel pot from Zebra head (Extra Infinity Plus with 22cm lid).
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/pan.png" width="110px">
                In addition to a pot, a pan is also essential (e.g., for frying). As with a pot, I wanted it to be compatible to an induction stove. I ended up with a stainless steel pan from Zebra head (IH vitalux with 24cm width).
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/spatula.png" width="30px">
                Like a wing to a bird, a spatula is essential to a pan. I got a stainless steel one from Zebra head (Image III) as part of a set (that includes a pan and a pot).
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/smoothie-blender.png" width="50px">
                I don't really need a smoothie blender but I got this one from my mother. While it is true that whole fruits are generally better, a blender is ideal for protein powder. That's why I usually mix some fruits with grounded flaxseed and sesame seeds and vegan protein powder with soy milk I made myself in the morning. By the way, this one is from Gokusen (GTS-300).
              </FigureOptionalTooltip>
              <FigureOptionalTooltip src="/character/smoothie-bottle-1.png" label="600ml" width="60px">
                It's a plastic bottle that comes with a smoothie blender.
              </FigureOptionalTooltip>
              <FigureOptionalTooltip src="/character/smoothie-bottle-2.png" label="600ml" width="40px">
                It's another plastic bottle that comes with a smoothie blender.
              </FigureOptionalTooltip>
            </li>

            <li>
              <p><b className="highlight">Accessories</b></p>

              <FigureOptionalTooltip src="/character/weighing-machine-kitchen.png" label="&lt; 5kg" width="80px">
                I am an avid tea drinker and I often need to weight loose leaf tea. On top of that, I need to weight my ingredients when, for example, following a receipe. This one is from Home & Co. I might replace it with a more famous brand but it works fine for now.
              </FigureOptionalTooltip>

              <TooltipText text="Other">
                <ul>
                  <li>Cheesecloth bags x 4 (to filter, e.g., soy milk and herbs)</li>
                  <li>Silicone mat x 4 (to place hot items on it)</li>
                  <li>Thermometer (mainly to practice making tea without a kettle)</li>
                </ul>
              </TooltipText>
            </li>
          </ul>
        </dd>

        <dt><b>Consumption</b></dt>
        <dd>
          <ul>
            <li>
              <p><b className="highlight">Tea Set</b> — What is more classic (and cheaper) than having a small set of tea for a guest? I like young sheng Puer!</p>

              <FigureOptionalTooltip src="/character/tea-gaiwan.png" label="150ml" width="65px" />

              <FigureOptionalTooltip src="/character/tea-cup.png" label="90ml x 2" width="50px" />

              <FigureOptionalTooltip src="/character/tea-tray.png" width="100px" />

              <FigureOptionalTooltip src="/character/tea-clip.png" width="20px" />
            </li>

            <li>
              <p><b className="highlight">Other</b></p>

              <FigureOptionalTooltip src="/character/bowl-stainless-0.9L.png" label="0.9L" width="90px">
                I prefer a two-layer container for my food as it allows me to pour hot food and take it away immediately. I chose a stainless steel bowl from MR. D.I.Y.
              </FigureOptionalTooltip>
              <FigureOptionalTooltip src="/character/bowl-stainless-0.9L.png" label="0.35L" width="70px">
                This one takes care of dessert, lightening its big brother's load.
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/glass-ceramic-360ml.png" label="360ml" width="70px">
                I needed a versatile mug for every drink, and ceramic and glass cups are the equal, top contenders for this (since I don't trust plastic glasses for hot drinks and stainless steel ones aren't good for acidic drinks). I chose this ceramic cup (an ordinary one from Tesco Lotus). It's still in a OK condition after five years of daily use but the outer color at the lip is slightly faded. I hope that doesn't contain lead. Now it's 5-year-old, I wouldn't be unhappy if it breaks!
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/tea-filter-cup.png" width="70px">
                I need a tea filter for daily use. From all the shapes available, I prefer cup-like shape as it is the most convenient: the lid prevents the bottom of the filter from getting dirty, and, while not in use, I put this filter on top of my mug to prevent dust from getting in. I got an expensive stainless filter from Küchenprofi for 16 EUR! It's still in an excellent condition after five years of daily use. You heard it right. Daily use!
              </FigureOptionalTooltip>

              <FigureOptionalTooltip src="/character/glass-stainless-300ml.png" label="300ml x 2" width="55px">
                It's a stainless steel glass from Zebra Head to serve drinks for guests.
              </FigureOptionalTooltip>

              <TooltipText text="Other">
                <ul>
                  <li>Stainless spoon (normal x 7, small x 11)</li>
                  <li>Bottle opener, wine opener</li>
                </ul>
              </TooltipText>
            </li>
          </ul>
        </dd>
      </dl>
    </section>

    <section>
      <h3 className="highlight">Clothing & Accessories</h3>

      <p>I will probably post pictures like the previous section when I have free time.</p>

      <ul>
        <li>General: Eyeglasses x 2, Handkerchief x 8, Pants (Long, Jeans x 3, Short x 3), Shirt (Jacket x 2, Long x 2, Short x 6), Shoe (Sandals, Sneaker), Sock x 11, Underwear x 6, Wallet, Watches x 2</li>
        <li>Work: Long Pants, Long Shirt x 2, Necktie, Shoe, Suit x 3</li>
        <li>Workout: Shirt x 3, Shoe, Shorts, Sock, Underwear x 2</li>
        <li>Very Cold Climate: Leggings, Scarf, Shirt x 6</li>
      </ul>
    </section>

    <section>
      <h3 className="highlight">Computing</h3>

      <ul>
        <li>
          Computer
          <ul>
            <li>Laptop: Thinkpad X260, Thinkpad X200</li>
            <li>Accessories: Flasher Programmer x 2, Keyboard Brush, USB Flash Drive (32GB, 16GB), Mouse, Camera 720p, Wacom Tablet, AMP/DAC</li>
          </ul>
        </li>

        <li>
          Mobile
          <ul>
            <li>Phone: Huawei P10, Nokia 2, True Super Hero 4G Entertainment & Plus</li>
            <li>Accessories: Phone Holder x 2</li>
          </ul>
        </li>

        <li>
          Other: Earphone x 2, WiFi Adapter AR9271
        </li>
      </ul>
    </section>

    <section>
      <h3 className="highlight">Health</h3>

      <ul>
        <li>Exercise: Hand Massager Stick (Wood), Resistance Band</li>
        <li>Protection: Earplug Pair, Eye Cover</li>
      </ul>
    </section>

    <section>
      <h3 className="highlight">Hygiene</h3>

      <p>Cleaning Cloth x 5, Grooming (Comb, Nail Cliper, Nose Scissors, Safety Razor, Shavette), Spray Bottle (350ml), Towel (Big, Small)</p>

      <FigureOptionalTooltip src="/character/bottle-glass-100ml.png" label="100ml x 4" width="50px">
        Zero waste (or less waste) consumables need home. I find this tiny pudding jar ideal to store tooth powder, toothpaste tablets, and alum.
      </FigureOptionalTooltip>
    </section>

    <section>
      <h3 className="highlight">Household &amp; Tools</h3>

      <div>
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
            <li>Container: Plastic (Small), Stainless Water Bowl (Big, Small)</li>
            <li>Electronics: USB Fan, Air Purifier, LED (12W, 4W x 4, 1.5W x 4), Power Socket Adapter x 2</li>
            <li>Furniture: Chair (and Lumbar Cushion), Portable Table, Portable Lamp Post x 3, Pillow (and Case)</li>
          </ul>
        </TooltipText>
      </div>
    </section>

    <section>
      <h3 className="highlight">Travel</h3>

      <ul>
        <li>Container: Backpack (Small, Medium), Grocery Bag (Jute Big, Jute Small, Plastic x 2), Luggage (Big x 2)</li>
        <li>Other: Bicycle (Portable Multitool, Helmet), Power Bank</li>
      </ul>
    </section>
  </section>
