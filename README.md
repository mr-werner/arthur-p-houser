# Arthur P. Houser, Inc. — Blueprint WebStudio Concept

Independent, non-official redesign concept for http://www.aphouser.com/ (Arthur P. Houser, Inc., general contractor, Emmaus, PA).
Preview: https://aph.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom one-page build: content in `src/App.jsx`, styles in `src/styles.css`, concept widget in `src/concept.jsx`.

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deployment
Vercel project `arthur-p-houser` (framework Vite, team mrwerner-s-projects); pushes to `main` deploy automatically. Domain `aph.blueprintwebstudio.com` is a CNAME at Porkbun (use the target Vercel shows).
Optional env vars: `VITE_CONCEPT_END_DATE` (defaults to 2026-12-03), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the bid-request form (`api/contact.js`; demo mode without them).
Add `aph.blueprintwebstudio.com` to `allowedOrigins` in blueprint-digital `api/demo-interest.js`.

## Design
- Logo: their original "Arthur P. Houser · General Contractor" logo with the H medallion, on a charcoal header like the original site so the white lettering reads. Favicon is the H medallion.
- Palette from the original: logo navy #001D52, the old site's charcoal #232323 and silver #C0BAB6, with a drawing-paper off-white and a lifted blueprint blue for labels.
- Fonts: Archivo (condensed, bold italic for the big headings, echoing the logo lettering), IBM Plex Mono (drawing annotations), Public Sans (body).
- Motif: a 1912 builder's blueprint. Drafting-grid navy hero, dimension lines around the hero photo ("114 years of building", "Est. 1912"), an architectural title block for the company facts, sections numbered like drawing sheets, line-drawn elevations of a house, office building and plant for the three markets, a CSI-style "Div. 01–06" scope schedule, and an "Est. 1912" seal.
- Section order: license/hours/phone bar → hero with title block → four delivery methods and project phases → residential / commercial / industrial sheets → project record photo grid → scope of work by division → history and values → contact, personnel and bid request form → footer.

## What changed from the current site
- 2015-era template with demo-slider images and a placeholder footer link (`http://www.`); replaced with a single modern page that reads well on phones.
- Broken and inconsistent emails on the Personnel Resources page and header: the header "info@aphouser.com" link actually opens `shellywatsonl@aphouser.com`, the VP is listed as `roy@aphouser` (no .com), and the administrative assistant is listed at another company's domain (`wendy@valleybuilders.com`). The concept lists only Bill Wall (President) by email and routes everyone else to info@aphouser.com.
- The "Projects" menu item and the Industrial link point at inconsistent paths (`portfolio.html`, `../pages/industrial.html`); everything is now on one page with working anchors.
- Phone, hours and a bid request form are now within one scroll; the old site had no form at all.
- Services list (seven trade groups) condensed into a six-division scope schedule; residential, commercial and industrial pages condensed into three cards.
- Project photos were small collage images with navy borders; the concept crops the individual photos out of the collages and captions each project by name and town.
- Typos fixed ("acheiving", "spcialized", "A.P. Housers's", "A.P. Housers built").
- Checked at 1280px and 390px with no sideways scrolling.

## Photos
All photos are the company's own, downloaded from aphouser.com and cropped from the project collages. They are low resolution (largest 1200px wide); replace with original high-resolution files before launch. A sharper (vector) logo file would also help.

## Owner should confirm
- **Staff emails:** what are the correct addresses for the Vice President (listed as `roy@aphouser`), the Office Manager (header link goes to `shellywatsonl@aphouser.com` but the staff page says `shellywatson@aphouser.com`) and the Administrative Assistant (listed as `wendy@valleybuilders.com`)? Is Valley Builders a related company? Should any of them (and estimator bruce@aphouser.com) be listed on the site?
- Whether Bill Wall is still President and wants his direct email shown.
- The legal name "Arthur P. Houser, Inc." (the current site uses "Arthur P. Houser", "A.P. Houser" and "AP Houser Construction").
- PA License #002909 is still current.
- Whether there is a street address for the office (the site shows only P.O. Box 325, Emmaus) and the map pin location.
- Project captions: that the in-plant excavation photos are from the Mack Trucks Macungie job, that the Bethel Bible Church photos show a new building by Houser, and that the white church is Jerusalem Western Salisbury United Methodist Church. Permission to name Air Products and Mack Trucks as clients.
- "More than 100 years of combined building experience" and the "award-winning facilities" wording from the commercial page (the concept does not repeat "award-winning"; no award names are known).
- The "114 years" figure is calculated from 1912.
- Whether residential new-home and community development is still offered.
- No reviews are shown (none on the current site).
