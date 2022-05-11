# My Personal Website

I created this website using Vite and React.js with a lot of freedom given to the user to adjust the appearance.

## Usage

```nix
$ nix-shell
```

<!-- ```bash -->
<!-- $ npm init @vitejs/app tkiat.github.io -- --template react-ts -->
<!-- ``` -->

## Wave

The wave represents my journey. This [Youtube video](https://www.youtube.com/watch?v=LLfhY4eVwDY) gave me inspiration. I modified it so that its properties are adjustable on the fly.

## Themes

I divided a predefined theme into two parts: base and supplement. A custom theme; however, takes the base part of one of predefined themes while its supplemental part is left for a user to customize.

The hsl color system I am using makes it very convenient to make themes and the codebase to be short. One theme has only two values: hue and saturation. I then use these two values to generate almost all colors in my website.

- The colors of three waves are monochromatic. This gives a sense of oneness since there is only one ocean.
- All the interactive elements have complementary color to the main color (wave color) to make it easier to spot.
- The text header is the same as one of the waves to make my website look more unified.
- The 'day' and 'dark' time differ in only lightness. The problem is that the l in hsl is not the same as the [lightness perceived by human](https://lea.verou.me/2021/03/inverted-lightness-variables) so I rely on manual adjustments until it feels right.

## Navbar Water Flow (Desktop Only)

This is perhaps the most time consuming part of making this website.

### Letters

A letter consists of two SVGs: one for displaying border and another acts as a mask to hide water outside the border. I import the Raleway Font (from Google Font) into Inkscape and edit each letter one by one to become a water container. Two pipes are added to the top and bottom of each letter to ensure consistency across different letters.

There was a tiny (seemingly < 1px) unknown space between two adjacent SVGs in both Chrome and Firefox so I add a few spaces at two end of letters and then use negative margin to remove those spaces.

### Water Flow Animation

A total of 12 animations are required. Take a look at [this document](doc/water-animation.md) for details.

## Others

### Accessibility

- Animations are disabled when [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) is set. Alternatively, a user can turn off the movement (zero height or speed) in the website settings.
- Dark theme is available and becomes default if "prefers-color-scheme: dark" is set.

<!-- ### Potential Improvements -->

<!-- - It is more performant to render canvas not in the main thread to not distract the user. [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) + Web Worker already works fine but OffscreenCanvas is currently an experimental feature so NONONO. -->
