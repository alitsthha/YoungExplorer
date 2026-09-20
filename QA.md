# Validation record

Checked on 19 September 2026.

## Build

- Dependencies installed successfully from the included package manifest and lockfile.
- TypeScript validation and Vite production build passed.
- ZIP contains source code, local assets, documentation, and the production build. Dependencies are installed separately with `npm install`.

## Browser checks

- Desktop homepage visually inspected against the available publisher screenshot.
- Desktop, 820 px tablet, and 390 px mobile layouts inspected.
- Corrected horizontal overflow from scroll-reveal transforms and verified the mobile document width equals its scroll width.
- Corrected responsive atlas cropping and verified square source crop dimensions match the displayed photo.
- Checked mobile menu open/close and About navigation, desktop dropdown navigation, class filters, class detail links, and enrollment program preselection.
- Checked FAQ expansion, teacher-profile dialogs, testimonial navigation, and photo-tour next/close controls.
- Checked required enrollment inputs and frontend preview response using synthetic contact data. Input values persist after preview submission.
- Checked monthly/yearly pricing: $150/$280/$180 monthly changes to $1,620/$3,024/$1,944 annually.
- Verified animated decorations change transforms over time; scroll reveal progresses from partial opacity to 1 and finishes with no transform. See ANIMATIONS.md.

## Limits

The original live preview presented a security challenge, preventing inspection of the original animation sequence and exact timings. The implementation follows the publisher screenshot's homepage structure and visual style, with independently written animations and original generated imagery. Inner pages follow the same design system.

Browser observations included extension-generated metadata errors unrelated to the application. These are not application test failures.

Forms run in frontend demo mode by default. No real email delivery, booking, payment, or backend integration was tested. Reduced-motion CSS and component fallbacks were reviewed in source, without simulating operating-system settings. This is focused manual QA, not a cross-browser certification or comprehensive accessibility audit.
