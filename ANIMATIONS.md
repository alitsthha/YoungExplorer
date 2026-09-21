# Animation guide

The project includes the reference-style animation components below. They are independently implemented: the original live preview blocked inspection, so exact original settings and frame-by-frame equivalence could not be verified.

| Effect | Implementation | Timing |
| --- | --- | --- |
| Hero entrance | Fade and upward movement; headline, copy, and button are staggered | 900 ms; delays 100/200/300 ms |
| Hero portrait | Fade and upward movement | 1100 ms, 120 ms delay |
| Scroll reveal | `Reveal` component: up, left, right, scale, or fade; plays once upon entering the viewport | 850 ms desktop / 650 ms mobile |
| Staggered content | Headings, about copy, banner copy, academy intro, and FAQ rows appear in sequence | 100 ms steps desktop / 60 ms mobile; capped after the fifth child |
| Landing-page coverage | Hero features, about, programmes, reasons, adventure banner, activities, teachers, academy highlights, FAQ, enrollment, journal, and footer | Per-card delays of 0–300 ms |
| Number counters | `Counter` component with cubic ease-out; starts when visible | 1400 ms |
| Floating doodles | Gentle vertical movement and rotation | 7 s loop |
| Rotating decoration | Gentle alternating rotation | 12 s loop |
| Class hover | Card lifts and image zooms | 300 / 700 ms |
| Teacher hover/focus | Portrait tilts and enlarges; name panel appears | 600 / 250 ms |
| Photo-tour button | Expanding soft ring | 2.6 s loop |
| Testimonial and gallery changes | Fade with a small upward movement | 400 ms |
| FAQ accordion | Smooth expansion and rotating plus icon | 300 ms |
| Dialog opening | Fade and upward movement | 300 ms |
| Mobile navigation | Animated height and padding | 300 ms |

## Use a reveal

```tsx
import { Reveal, Counter } from './components/ui/Reveal';

<Reveal direction="left" delay={100} stagger>
  <h2>A happy place to grow</h2>
</Reveal>
<Counter value={550} suffix="+" />
```

`delay` is in milliseconds. Directions are `up`, `left`, `right`, `scale`, and `fade`. Set `stagger` to animate the direct children in sequence without adding layout wrappers. Reveals disconnect their observers after appearing, and counters cancel pending animation frames when unmounted. Mobile reveals use shorter vertical movement. Keyboard focus makes the target group visible immediately.

Content is visible by default; the component adds `reveal-ready` only after checking support and motion preferences. A zero intersection threshold allows tall content to reveal as soon as it enters the viewport, with a 36 px inset at the bottom. Reveals play once per mount and reset when a page is remounted through navigation.

Edit timing, distance, easing, and hover transforms in `src/styles.css`. Edit the counter duration in `src/components/ui/Reveal.tsx`.

## Reduced motion

The CSS respects `prefers-reduced-motion: reduce`, disabling looping effects and transitions. The React components show the final state immediately when reduced motion is enabled at mount. Reveals also react to preference changes while the page is open, removing animation delays and showing the content. Unsupported IntersectionObserver environments and print output also show complete content instead of hiding it.

## Verification

Checked in headless Chrome on 21 September 2026:

- Production TypeScript/Vite build and `git diff --check` passed.
- All 11 landing-page sections contain reveals; 56 reveal groups include the footer.
- Scrolling at 1440, 390, and 320 px widths reveals every displayed group, with no horizontal overflow. Two decorative hero feature tiles remain intentionally hidden by the existing mobile layout.
- Reveals stay visible when scrolling back up. FAQ expansion still works.
- Focusing an offscreen enrollment input makes its containing reveal visible immediately.
- Reduced-motion emulation works on initial load and when switched on while the page is open.
- Print emulation and an unavailable IntersectionObserver both leave content visible.
- No application runtime exceptions occurred during these checks.

## Camp gallery and parent stories

`src/components/CampStories.tsx` adds two homepage sections, styled in `CampStories.css`:

- `CampGallerySection`: Holiday Camp / Summer Camp selectors, four clickable photo milestones per journey, previous/next controls, and an enlarged photo dialog.
- `ParentTestimonialsSection`: a manual testimonial carousel with previous/next buttons, position buttons, and selectable story themes.
- Both sections reuse `Reveal` for entrances. Content changes animate for 500–600 ms only when `prefers-reduced-motion: no-preference` is active. There is no automatic slide advance.
- Edit images, captions, and attributed review excerpts in `src/data/campStories.ts`. The gallery is an illustrative journey; parent testimonials use real Google excerpts and clearly labelled summaries. The rating and review count are a dated snapshot, not a live feed.
