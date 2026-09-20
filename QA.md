# Young Explorers Academy rebrand validation

Checked on 20 September 2026 in Chromium.

## Build and brand

- TypeScript and Vite production build passed; `git diff --check` passed.
- Verified the supplied logo appears in the header and footer, with a matching sun-and-mountain favicon.
- Verified computed brand tokens match the PDF: `#0077cc`, `#00cc66`, and `#ffcc00`.
- No previous brand names or stock-photo references remain in the rendered pages.

## Browser checks

- Visually inspected the homepage at 1440 px desktop, 820/1024 px tablet, and 390 px mobile widths.
- All 21 content routes checked at 390 px; no horizontal overflow. The homepage also fits at 320 px.
- All 26 homepage image elements and all 37 unique gallery photographs decode successfully.
- All 42 homepage scroll-reveal elements become visible when scrolled into view; floating decorations remain animated.
- Emulated reduced motion: reveal opacity is 1 and decorative animation duration is reduced to 0.01 ms.
- Checked mobile menu expansion, FAQ expansion, teaching-team dialog opening/closing, gallery next/close controls, and testimonial navigation.
- Class filtering returns three enrichment programs; the admissions form preserves the selected program from the URL.
- No application JavaScript exceptions during these checks.

## Existing preview limitations

Contact details, prices, schedules, statistics, and testimonial text remain illustrative. Forms remain in their existing frontend preview mode unless a form endpoint is configured. No live message delivery, booking, payment, or backend integration was tested. This was a focused Chromium review, not a cross-browser or comprehensive accessibility audit.
