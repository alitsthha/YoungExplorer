# Animation guide

The project includes the reference-style animation components below. They are independently implemented: the original live preview blocked inspection, so exact original settings and frame-by-frame equivalence could not be verified.

| Effect | Implementation | Timing |
| --- | --- | --- |
| Hero entrance | Fade and upward movement; headline, copy, and button are staggered | 900 ms; delays 100/200/300 ms |
| Hero portrait | Fade and upward movement | 1100 ms, 120 ms delay |
| Scroll reveal | `Reveal` component: up, left, right, or scale; plays once upon entering the viewport | 800 ms, per-card stagger |
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

<Reveal direction="left" delay={100}>
  <h2>A happy place to grow</h2>
</Reveal>
<Counter value={550} suffix="+" />
```

`delay` is in milliseconds. Directions are `up`, `left`, `right`, and `scale`. Reveals disconnect their observers after appearing, and counters cancel pending animation frames when unmounted.

Edit timing, distance, easing, and hover transforms in `src/styles.css`. Edit the counter duration in `src/components/ui/Reveal.tsx`.

## Reduced motion

The CSS respects `prefers-reduced-motion: reduce`, disabling looping effects and transitions. The React components show the final state immediately when reduced motion is enabled at mount. Unsupported IntersectionObserver environments also show complete content instead of hiding it.

## Verification

Browser checks confirmed running float/rotation animations, changing decorative transforms over time, scroll reveal opacity progressing from approximately 0.07 to 1, and its final transform resolving to none. Existing interaction checks covered FAQ expansion, dialogs, carousel changes, and mobile navigation. Reduced-motion rules were reviewed in source; an operating-system preference switch was not simulated.
