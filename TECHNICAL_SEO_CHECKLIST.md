# Young Explorers Academy: Technical SEO Checklist

## Files created

- `public/robots.txt` -> deployed URL: `https://www.youngexplorernepal.com/robots.txt`
- `public/sitemap.xml` -> deployed URL: `https://www.youngexplorernepal.com/sitemap.xml`

The domain above is the current deployment assumption. If the final domain differs, update the hostname in both files before publishing.

## Implementation

1. Keep `robots.txt` and `sitemap.xml` in the repository's `public/` directory.
2. Run `npm run build`.
3. Deploy the contents of `dist/` to the web host. Vite copies both files to the root automatically.
4. Confirm these URLs return HTTP 200 and plain text/XML responses:
   - `https://www.youngexplorernepal.com/robots.txt`
   - `https://www.youngexplorernepal.com/sitemap.xml`
5. Confirm the sitemap contains only canonical, public URLs and does not include query strings, admin paths, account pages, cart pages, or preview-only URLs.
6. In Google Search Console, verify the exact domain property or URL-prefix property.
7. Open **Settings > robots.txt** if available for the property, or use the URL Inspection tool to inspect the live `robots.txt` URL.
8. Open **Sitemaps**, enter `sitemap.xml`, and submit it. Google should show a successful fetch after processing.
9. Inspect the homepage, programme pages, activities, admissions, blog, and contact page individually. Use **Test live URL** and request indexing only for final, indexable pages.
10. Recheck after every domain, route, hosting, redirect, or sitemap change.

## Technical checks

- [ ] The production domain uses HTTPS and redirects HTTP to HTTPS.
- [ ] The canonical hostname is selected consistently (`www` or non-`www`).
- [ ] Every public route returns the SPA entry point directly when loaded from a fresh browser request.
- [ ] The host preserves the included SPA fallback from `public/_redirects`.
- [ ] `robots.txt` is served at the domain root, not under `/dist/` or a project subdirectory.
- [ ] `robots.txt` allows `/` and blocks only private, duplicate, or non-search areas.
- [ ] The sitemap URL in `robots.txt` uses the final canonical hostname.
- [ ] Sitemap URLs return 200, use HTTPS, and match canonical URLs.
- [ ] No staging, preview, query-string, account, checkout, or admin URLs are in the sitemap.
- [ ] The site has one descriptive title and meta description per important route.
- [ ] Important content is available in rendered HTML and is not hidden only behind user interaction.
- [ ] Images use descriptive alt text and are compressed appropriately.
- [ ] Core Web Vitals are checked in PageSpeed Insights and Search Console.
- [ ] Mobile layout has no horizontal scrolling and form controls are easy to tap.
- [ ] Contact, programme enquiry, phone, email, Instagram, and Google Maps links work.
- [ ] Form handling and privacy wording are reviewed before collecting real enquiries.
- [ ] Broken links and 404 responses are reviewed monthly.

## Static-site note

This is a React/Vite single-page site, not WordPress, Wix, Squarespace, or Shopify. The `/wp-admin/` and other backend rules are defensive rules for possible legacy or future paths; they do not replace server authentication. Do not place private data in the frontend build.
