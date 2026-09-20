# Young Explorers Academy — React + TypeScript

A complete, responsive kindergarten website branded using the supplied Young Explorers Academy logo, brand guide, and academy photographs. Built with **React 19, TypeScript, Vite 8, Lucide icons, and custom CSS**. No WordPress, Elementor, paid plugin, or backend is required to run it.

## Start the project

Install **Node.js 22.13 or newer** (Node 24 LTS is also suitable), then open the project folder in VS Code.

In the VS Code terminal:

```bash
npm install
npm run dev
```

Open the local address printed by Vite, normally `http://localhost:5173`.

The ZIP excludes `node_modules`; `npm install` recreates it using the included lockfile. Internet is needed for that installation. Afterward, the website's images and fonts are local assets.

## Build and preview

```bash
npm run typecheck
npm run build
npm run preview
```

The production website is created in `dist/`. A prebuilt `dist/` is also included for convenience. Use a web server instead of double-clicking `index.html`.

## Pages included

| Page | Route |
| --- | --- |
| Home | `/` |
| About | `/about` |
| Classes with category filters | `/classes` |
| Six individual class pages | `/classes/early-learners`, `/classes/preschool-foundations`, `/classes/pre-k-preparation`, `/classes/creative-arts`, `/classes/music-movement`, `/classes/little-explorers` |
| Activities and daily schedule | `/activities` |
| Admissions and enrollment | `/admissions` |
| Teachers | `/teachers` |
| Monthly/yearly pricing | `/pricing` |
| FAQs | `/faqs` |
| Blog archive | `/blog` |
| Three article pages | `/blog/building-your-childs-confidence`, `/blog/happy-daily-routines`, `/blog/playful-early-learning` |
| Contact | `/contact` |
| Preview privacy and terms | `/privacy`, `/terms` |
| Custom 404 | Any unknown route |

## Design and interactions

- Adventure Blue hero, Sunshine Yellow buttons, Exploration Green accents, light section backgrounds, and the existing wavy separators.
- Rounded Nunito headings and Poppins body text, bundled locally.
- Scroll reveals, staggered cards, animated number counters, floating decorative icons, image hover transitions, and reduced-motion support.
- Sticky navigation with dropdowns and a mobile menu.
- Working class filters, program detail links, and preselected enrollment programs.
- Teaching-team dialogs, parent-story carousel with swipe support, and a 37-photo academy gallery.
- Expandable FAQ accordions and monthly/yearly pricing controls.
- Keyboard-friendly controls, labeled forms, native dialog focus management, skip navigation, and a back-to-top button.

See `ANIMATIONS.md` for effect timings, reusable components, and verification details.

## Where to edit

| File | Purpose |
| --- | --- |
| `src/styles.css` | All styling, colors, responsive breakpoints, and animations |
| `src/data/content.ts` | Programs, prices, teachers, FAQs, testimonials, articles, and image names |
| `src/components/Sections.tsx` | Homepage sections, shared forms, and interactive content |
| `src/components/Layout.tsx` | Logo, header, navigation, and footer |
| `src/components/Shared.tsx` | Photo renderer, buttons, headings, and geometric photo masks |
| `src/components/ui/Reveal.tsx` | Reusable reveal and counter animations |
| `src/components/ui/Modal.tsx` | Accessible native-dialog wrapper |
| `src/pages/Pages.tsx` | Inner-page layouts |
| `src/lib/router.tsx` | Lightweight History API navigation with normal link behavior |
| `src/App.tsx` | Route selection, page titles, focus, and scroll handling |

The color palette is defined in `:root` near the top of `src/styles.css`. Change the school name and contact details in `Layout.tsx` and `Pages.tsx`, then update the content and metadata in `index.html`.

## Images

The site uses the supplied academy logo and photographs from `public/images/Logo/` and `public/images/Gallery/`. Section image assignments and the complete photo tour are defined in `src/data/content.ts`. The existing image animations and geometric photo masks are preserved.

To replace an image, add a JPG, PNG, or WebP to `public/images/` and update its path in `src/data/content.ts`. See `ASSETS.md` for brand colors, image provenance, and font notices.

## Forms and backend connection

**The default forms are frontend demos.** They validate required fields and email addresses, then let the visitor download a request as a text file. They do not send email, book visits, save personal information, or create subscriptions. The interface states this clearly.

To connect enrollment and contact forms:

1. Copy `.env.example` to `.env.local`.
2. Set `VITE_FORM_ENDPOINT` to your own HTTPS form endpoint.
3. Restart the development server, or rebuild the production site.

The endpoint must accept JSON via `POST` and return a successful `2xx` response after handling the request. Include appropriate CORS headers if it is on another domain. The `form` field is `enrollment` or `contact`; the other fields use their visible form labels. The UI handles successful responses, failed responses, and a 15-second timeout.

Do not put secret keys in a `VITE_` variable: these values are visible in browser code. Email delivery, spam protection, authentication, payments, and storage belong in your own backend. The newsletter needs its own integration in `Shared.tsx`.

## Hosting

Upload the output of `npm run build` to a static website host. Configure the host to serve `index.html` for non-file requests so direct links to inner pages work. The included `_redirects` provides the standard SPA fallback for Netlify-style hosts. If deploying under a subdirectory, configure the Vite `base` and adapt root-relative routes and asset paths accordingly.

## Reference and scope

The supplied academy brand guide, logo, and gallery are the references for this rebrand. The existing React page structure, interactive components, and animation timings are retained.

Program descriptions, reviews, statistics, addresses, prices, and schedules remain demonstration content. Replace these and the preview policy pages with confirmed school details before launch.

## Verification

The project was type-checked and production-built. Browser checks covered desktop, tablet, and mobile layouts; image crops; horizontal overflow; FAQ expansion; teacher dialogs; the parent-story carousel; the school tour; navigation; and form validation/preview behavior. See `QA.md` for the final check record.
