# My Personal Website

I created this (colorful) website using Vite and React.js.

## Usage

```nix
$ nix-shell
$ npm run dev
```

<!-- ```bash -->
<!-- $ npm init @vitejs/app tkiat.github.io -- --template react-ts -->
<!-- ``` -->

## Wave

The wave represents my journey. This [Youtube video](https://www.youtube.com/watch?v=LLfhY4eVwDY) gave me inspiration. I modified it so that its properties are adjustable on the fly. For example, a user can stop the wave movement or change its colors in the settings.

<!-- ## Themes -->

<!-- I divided a predefined theme into two parts: base and supplement. A custom theme; however, takes the base part of one of predefined themes while its supplemental part is left for a user to customize. -->
<!--  -->
<!-- The hsl color system I am using makes it very convenient to make themes and the codebase to be short. One theme has only two values: hue and saturation. I then use these two values to generate almost all colors in my website. -->
<!--  -->
<!-- - The colors of three waves are monochromatic. This gives a sense of oneness since there is only one ocean. -->
<!-- - All the interactive elements have complementary color to the main color (wave color) to make it easier to spot. -->
<!-- - The 'day' and 'dark' time differ in only lightness. The problem is that the l in hsl is not the same as the [lightness perceived by human](https://lea.verou.me/2021/03/inverted-lightness-variables) so I rely on manual adjustments until it feels right. -->

## Navbar Water Flow (Desktop Only)

A letter consists of two SVGs: a display border and a mask to hide water outside the border. For each Raleway letter (from Google font), I import it into Inkscape and generate these 2 SVGs. Two pipes are added to the top and bottom of each letter to make the flow realistic.

There was a tiny (around 1px) unknown space between two adjacent SVGs in both Chrome and Firefox so I add extra space at two end of each letter and then use negative margin to remove that. As for the animation, a total of 12 animations are required. Take a look at [this document](doc/water-animation.md) for details.

## Other

- I take into account [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) (no wave movement for some users) and prefers-color-scheme.

<!-- ### Potential Improvements -->

<!-- - It is more performant to render canvas not in the main thread to not distract the user. [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) + Web Worker already works fine but OffscreenCanvas is currently an experimental feature so NONONO. -->
