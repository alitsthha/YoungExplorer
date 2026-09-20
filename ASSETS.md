# Bundled assets

## Young Explorers Academy brand

The supplied `public/images/Logo/Young Explorers Academy LOGO BRAND DESIGN.pdf` is the visual reference. Its palette specifies Adventure Blue `#0077cc`, Exploration Green `#00cc66`, and Sunshine Yellow `#ffcc00`. Darker blue and green text tones and pale background tints provide readable UI contrast.

`public/images/Logo/logo.png` is the supplied horizontal logo, displayed without recoloring on white in the header and footer. The guide names Mic 32 New Rounded; that font was not supplied, so the existing locally bundled Nunito and Poppins fonts are retained.

## Academy photography

All active photographs come from the supplied `public/images/Gallery/` folder. Semantic section assignments and the complete 37-photo tour are defined in `src/data/content.ts`. One duplicate photograph is omitted from the tour. The supplied videos remain available in the folder.

The photo component uses native images with lazy loading. The hero is loaded eagerly. Group and activity photos illustrate teaching teams without assigning invented personal identities to people in the photographs. Testimonials retain the existing illustrative text and use initials instead of stock portraits.

The older `hero-schoolboy.png`, `children-atlas.png`, and `teachers-atlas.png` files are retained but are no longer referenced by the website.

## Fonts

- Nunito, Google Fonts: https://fonts.google.com/specimen/Nunito
- Poppins, Google Fonts: https://fonts.google.com/specimen/Poppins

The TTF files are bundled locally. Both font families use the SIL Open Font License; their notices are included in `public/fonts/`. Google Fonts source repositories: https://github.com/google/fonts/tree/main/ofl/nunito and https://github.com/google/fonts/tree/main/ofl/poppins.

## Icons

Lucide icons are provided by the `lucide-react` dependency, under its ISC license: https://lucide.dev/license. Icon licensing remains with that package. The favicon interprets the supplied sun and mountain mark as SVG geometry. Photo clipping paths are also editable SVG geometry.
