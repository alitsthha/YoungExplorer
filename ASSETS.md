# Bundled assets

## Design reference

- Kidvero template listing: https://themeforest.net/item/kidvero-kindergarten-child-care-elementor-template-kit/62589092
- Publisher's homepage screenshot: https://s3.envato.com/files/791113495/2.%20Home%20Page.png

The screenshot was used for visual inspection only and is not included in the project. No paid Elementor source, WordPress code, or stock photographs from the kit are redistributed.

## Original generated images

These images were produced using the built-in image-generation tool for this project. All depicted people are synthetic demo imagery; the biographies and reviews are illustrative.

| Asset | Contents and placement |
| --- | --- |
| `public/images/hero-schoolboy.png` | A smiling young schoolboy with glasses, a blue backpack, and orange notebook; homepage hero |
| `public/images/children-atlas.png` | Nine equal panels; reading friends, classroom blocks, painting, outdoor notebook, children running, family reading, shared laptop, reading tent, and puzzle play |
| `public/images/teachers-atlas.png` | Four equal educator portraits used for the teacher section and illustrative avatars |

Panel coordinates in `Shared.tsx` are zero-based `[column, row, atlas]`. The 3×3 image contains:

| Row | Column 0 | Column 1 | Column 2 |
| --- | --- | --- | --- |
| 0 | Reading outdoors | Classroom blocks | Art activity |
| 1 | Child with notebook | Outdoor adventures | Family reading |
| 2 | Children with laptop | Story tent | Puzzle activity |

The 2×2 image contains Daniel and James in the top row, and Aisha and Oliver in the bottom row.

Generation direction: realistic, welcoming educational photography; navy, blue, yellow, and coral accents; compositions similar to the reference; no labels, logos, or watermarks. Atlas prompts requested exact equal grids with no gaps. The hero prompt requested a cheerful child with a notebook and backpack, giving a thumbs-up; its dark background is blended into the hero with CSS.

## Fonts

- Nunito, Google Fonts: https://fonts.google.com/specimen/Nunito
- Poppins, Google Fonts: https://fonts.google.com/specimen/Poppins

The TTF files are bundled locally. Both font families use the SIL Open Font License; their notices are included in `public/fonts/`. Google Fonts source repositories: https://github.com/google/fonts/tree/main/ofl/nunito and https://github.com/google/fonts/tree/main/ofl/poppins.

## Icons

Lucide icons are provided by the `lucide-react` dependency, under its ISC license: https://lucide.dev/license. Icon licensing remains with that package. The small Kidvero lettermark and geometric clipping paths are implemented as editable SVG geometry.
