# Academy content sources

Verified on 20 September 2026.

## Confirmed academy identity

- Instagram: https://www.instagram.com/young.explorers.academy/
- The public HTML metadata identifies the account as Young explorers academy and describes it as a “Learning center for kids/ Skill Based Academy”, with location “Balwatar”. Website copy uses the conventional spelling Baluwatar, Kathmandu, Nepal.
- The full Instagram feed and post captions were not accessible to the reader. Programme descriptions are original copy informed by the supplied academy photographs and corroborated public event coverage, not quotations from unseen Instagram posts.
- The source profile HTML was read for its public description only. Follower counts are intentionally not used as website claims.

## Google reference

User-provided Google search for “young explorers”, supplemented by:
https://www.google.com/search?q=Young+Explorers+Academy+Kathmandu

Google returned a loading/redirect page rather than the business panel. A specific street address, direct phone number, email, opening hours, and Google rating could not be verified. The original site linked to Google search and Instagram. Contact details supplied by the user on 22 September 2026 are now included below; details from similarly named academies abroad are not reused. Partner event booking numbers and venues are not treated as academy contact details.

## Public event references

- https://kathmandupost.com/art-culture/2025/08/02/events-august-2-to-august-8-2025
  - Young Explorers Academy organised Kids Carnival at Silver Oak, Gairidhara, on 2 August 2025. Shown as a past event, not an upcoming registration opportunity.
- https://allevents.in/kathmandu/kids-carnival/200028346856807
  - Organiser-labelled event listing describing Mic Drop Mini-Star, a public-speaking contest. Its historical entry fee is not reused as a current programme price.
- https://thejoyhousecollective.com/tag/creative-learning-nepal/
  - The workshop provider lists a “Stuck” storytelling performance and art activity at Young Explorers Academy. The website summarises only the listed session, without asserting unsupported dates or detailed curriculum.
- User-supplied academy photos in `public/images/Gallery/` support photo-journal descriptions of creative work, community activities, and outdoor discovery.

## Fees and availability

No current NPR fee schedule was verified. All `Program.priceNPR` values are `null`, and the UI displays “Contact for fees” with NPR / Nepali rupees. The shared `formatNPR` function formats confirmed numeric amounts as `Rs.` with Nepal-compatible grouping when those values are supplied. No USD-to-NPR conversion, invented prices, monthly/yearly subscriptions, or unsupported annual discounts are published.

Age guidance, programme dates, daily schedules, food, transport, and inclusions must be confirmed with the academy. The enquiry form accepts a wider range of child ages; this is not a claim that every programme serves every listed age.

## Removed template content

The old US phone, invented address/email, specific preschool age bands, capacity figures, graduate counts, satisfaction rate, review score, fictional testimonials, and fixed daily timetable were removed. The existing animated carousel now presents academy experiences instead of fictional customer reviews. Existing programme routes and old article links remain supported.

## User-supplied contact details — 22 September 2026

- Phone: 986-7068663 and 980-8298962, linked with Nepal’s +977 country code.
- Email: info@youngexplorernepal.com.
- The user subsequently supplied the academy's exact Google Maps directions link. Its destination address is 40 Pandol Marga, Kathmandu, Bagmati Province 44600, Nepal; destination coordinates are 27.7278678, 85.3268736. The footer map now pins those coordinates, and shared Google links open business ID `0xc287721b549714cf` (decimal CID `14017297826922829007`): https://www.google.com/maps?cid=14017297826922829007. The map camera coordinates in the supplied URL are not used as the destination.

## Camp journey gallery and testimonial design

- Holiday Camp and Summer Camp galleries are illustrative four-stage journeys using supplied academy photographs. They do not identify one child or claim a dated sequence of events.
- `src/data/campStories.ts` holds gallery captions and three real Google review excerpts. The initial sample testimonials have been removed.

## Google review excerpts — 22 September 2026

Read the public academy listing and its Reviews tab in Chrome:
https://www.google.com/maps?cid=14017297826922829007&hl=en

- Profile snapshot: 4.9 / 5, 14 reviews. The interface displays the date checked; this is not a live Google API feed.
- Apekshya Pradhan: holiday camp enthusiasm and growing confidence.
- Veronica O'Sullivan Freltoft: four weeks of summer activities, variety, and flexibility.
- Smriti Maharjan: caring teachers, a safe environment, and flexible timing.
- Each card uses a brief verbatim excerpt, the public reviewer name, and a source link. Text labelled “Review summary” is an editorial paraphrase. No reviewer photographs, invented programme enrolments, or invented ratings were added.
- Google showed a different phone number; the user-supplied contact numbers remain unchanged.
