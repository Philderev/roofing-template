/* NOVARIDGE ROOFING, static site generator */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CSS = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');

const SITE = {
  name: 'NovaRidge Roofing',
  legal: 'NovaRidge Roofing LLC',
  domain: 'https://philderev.github.io/roofing-template',
  phone: '(702) 555-0184',
  phoneHref: 'tel:+17025550184',
  email: 'hello@novaridgeroofing.com',
  street: '7255 S Tenaya Way, Suite 140',
  city: 'Las Vegas', state: 'NV', zip: '89113',
  hours: 'Mon-Sat: 7:00 AM - 6:00 PM',
  license: 'NV Contractor Lic. #0091337',
  geo: { lat: 36.0563, lng: -115.2493 },
  tagline: 'Next-generation roofing for the Vegas Valley',
};

/* ---------- SVG bits ---------- */
let markId = 0;
const MARK = (s = 44) => { const id = `mark-gradient-${++markId}`; return `<svg width="${s}" height="${s}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="${id}" x1="8" y1="34" x2="40" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#8EA58E"/><stop offset="1" stop-color="#8EA58E"/></linearGradient></defs><path d="M24 3.5 41.8 13.75v20.5L24 44.5 6.2 34.25v-20.5Z" stroke="rgba(142,165,142,.55)" stroke-width="1.6"/><path d="M11 30 24 17l13 13" stroke="url(#${id})" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 34.5 24 27l7.5 7.5" stroke="rgba(115,138,110,.55)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="17" r="2.6" fill="#8EA58E"/><circle cx="11" cy="30" r="1.7" fill="#738A6E"/><circle cx="37" cy="30" r="1.7" fill="#738A6E"/></svg>`; };

const LOGO = (home) => `<a class="brand" href="${home}" aria-label="${SITE.name}, home"><img class="brand-logo" src="${home}assets/img/nrr-2.png" width="3231" height="2550" alt="${SITE.name}"></a>`;

const IC = {
  bolt: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="#344C3D" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  shield: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2 20 5.5V11c0 5-3.4 9.2-8 11-4.6-1.8-8-6-8-11V5.5L12 2Z" stroke="#344C3D" stroke-width="1.8" stroke-linejoin="round"/><path d="m8.6 11.6 2.4 2.4 4.4-4.6" stroke="#738A6E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  home: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m3 11 9-8 9 8" stroke="#738A6E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9.5V21h13V9.5" stroke="#344C3D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  wrench: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.5 6.5a4.5 4.5 0 0 0-6 5.6L3 17.6 6.4 21l5.5-5.5a4.5 4.5 0 0 0 5.6-6l-3 3-2.5-.5-.5-2.5 3-3Z" stroke="#344C3D" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  layers: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z" stroke="#344C3D" stroke-width="1.8" stroke-linejoin="round"/><path d="m4.5 12.6 7.5 4.2 7.5-4.2M4.5 16.6 12 20.8l7.5-4.2" stroke="#738A6E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  sun: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4.2" stroke="#738A6E" stroke-width="1.8"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" stroke="#344C3D" stroke-width="1.8" stroke-linecap="round"/></svg>',
  check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="rgba(52,76,61,.4)" stroke-width="1.6"/><path d="m7.8 12.2 2.8 2.8 5.6-6" stroke="#344C3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" stroke="#344C3D" stroke-width="1.8"/><circle cx="12" cy="10" r="2.4" stroke="#738A6E" stroke-width="1.8"/></svg>',
  badge: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="9.5" r="6" stroke="#738A6E" stroke-width="1.7"/><path d="m8.7 14.6-1.5 6 4.8-2.6 4.8 2.6-1.5-6" stroke="#344C3D" stroke-width="1.7" stroke-linejoin="round"/><path d="m9.8 9.4 1.6 1.6 3-3.2" stroke="#738A6E" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  drone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 9 5 5m14 0-4 4m-6 6-4 4m14 0-4-4" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><rect x="9" y="9" width="6" height="6" rx="1.6" stroke="#fff" stroke-width="1.8"/><circle cx="5" cy="5" r="2" stroke="#fff" stroke-width="1.6"/><circle cx="19" cy="5" r="2" stroke="#fff" stroke-width="1.6"/><circle cx="5" cy="19" r="2" stroke="#fff" stroke-width="1.6"/><circle cx="19" cy="19" r="2" stroke="#fff" stroke-width="1.6"/></svg>',
  shieldW: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2 20 5.5V11c0 5-3.4 9.2-8 11-4.6-1.8-8-6-8-11V5.5L12 2Z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="m8.6 11.6 2.4 2.4 4.4-4.6" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  checkW: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const VEGAS_MAP = `<iframe
  title="Interactive map of NovaRidge Roofing's Las Vegas Valley service area"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-115.42%2C35.91%2C-114.94%2C36.35&amp;layer=mapnik&amp;marker=${SITE.geo.lat}%2C${SITE.geo.lng}"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  allowfullscreen></iframe>`;

/* ---------- data ---------- */
const SERVICES = [
  {
    slug: 'roof-replacement', icon: 'home', name: 'Roof Replacement',
    img: 'svc-replacement', imgAlt: 'Row of new metal roofs with dormer windows against a clear desert sky',
    short: 'A complete, code-ready roof system built for extreme heat, high winds, and decades of dependable protection.',
    title: 'Roof Replacement in Las Vegas, NV',
    desc: 'Full roof replacement in Las Vegas with drone inspections, Class-A fire-rated materials engineered for desert heat, and workmanship warranties up to 25 years.',
    hero: 'A brand-new roof, engineered for the desert.',
    lede: 'When repair stops making sense, NovaRidge replaces your entire roof system, decking to ridge, with materials rated for 115°F summers and monsoon winds.',
    body: [
      ['Built for the Mojave, not the Midwest', 'Most roofing failures in the Vegas Valley come from thermal cycling: 40-degree temperature swings that crack underlayment and curl shingles years ahead of schedule. Our replacement systems pair high-temp synthetic underlayment with Class-A fire-rated shingles or concrete tile, ventilated to shed attic heat and cut your cooling bills.'],
      ['What a NovaRidge replacement includes', 'Every project starts with a 4K drone scan and a moisture map of your decking. We tear off to the deck, replace compromised sheathing, and rebuild with ice-and-water shield at penetrations, new flashing and drip edge, and ridge ventilation sized to your attic volume. The site is magnet-swept daily and hauled clean at completion.'],
      ['Warranty that outlives the loan', 'Materials carry manufacturer warranties up to 50 years. Our workmanship warranty runs up to 25 years and is registered, transferable once, and backed by a local company, not a P.O. box.'],
    ],
    bullets: ['4K drone inspection + moisture mapping', 'Tear-off to deck with sheathing replacement', 'High-temp synthetic underlayment', 'Class-A fire-rated shingle, tile, or metal', 'Ridge ventilation engineered for desert attics', 'Up to 25-year transferable workmanship warranty'],
    faqs: [
      ['How long does a full roof replacement take?', 'Most single-family homes in the Vegas Valley are completed in 2-4 days: one day of tear-off and deck repair, then installation. Tile and metal systems can take a few days longer.'],
      ['Do I need a permit in Clark County?', 'Yes, and we pull it for you. Re-roofing in unincorporated Clark County, Las Vegas, North Las Vegas, and Henderson requires a permit and inspection, which we schedule and attend.'],
      ['Can you install over my existing shingles?', 'We don’t recommend overlays in our climate and in most cases code prohibits a second layer over tile. A full tear-off lets us verify the decking, that’s where hidden monsoon damage lives.'],
    ],
  },
  {
    slug: 'roof-repair', icon: 'wrench', name: 'Roof Repair & Leak Detection',
    img: 'svc-repair', imgAlt: 'Hard hats and safety equipment staged on a light-colored metal roof',
    short: 'We trace the true source of leaks, document the damage, and make targeted repairs that last.',
    title: 'Roof Repair & Leak Detection in Las Vegas',
    desc: 'Fast roof leak detection and repair in Las Vegas. Thermal imaging, monsoon storm damage response, and same-day emergency tarping, call (702) 555-0184.',
    hero: 'Find the leak. Fix it once.',
    lede: 'Water travels. The stain on your ceiling is rarely under the hole in your roof. We use thermal imaging and moisture meters to trace leaks to their true source, then repair the cause, not the symptom.',
    body: [
      ['Diagnosis before demolition', 'Our technicians scan the roof plane and attic with FLIR thermal cameras to locate trapped moisture, then verify with pin meters. You get photo documentation of exactly what failed and why, no guesswork, no "replace it all" upsell when a $600 repair solves it.'],
      ['Monsoon season response', 'From July through September, wind-driven rain finds every unsealed penetration in the valley. We run extended crews during monsoon season with same-day tarping and next-day permanent repair on most calls.'],
      ['Common repairs we handle', 'Cracked or slipped tiles, wind-lifted shingles, failed pipe-jack boots, deteriorated flashing at walls and chimneys, punctured flat-roof membranes, and clogged scuppers or drains on parapet roofs.'],
    ],
    bullets: ['FLIR thermal-imaging leak detection', 'Same-day emergency tarping', 'Tile, shingle, and flat-roof repair', 'Flashing, boots, and penetration resealing', 'Photo-documented findings and invoice', 'Repairs warrantied for 5 years'],
    faqs: [
      ['How fast can you get to my house?', 'Emergency calls in Las Vegas, Henderson, North Las Vegas, and Summerlin are typically tarped the same day. Standard repair appointments are usually within 48 hours.'],
      ['Will my insurance cover storm damage?', 'Wind and monsoon damage is covered by most Nevada homeowner policies. We document everything with drone photos and thermal scans, and we’ll walk your adjuster through the findings.'],
      ['Is a repair worth it on an older roof?', 'If the roof has under 5 years of expected life left or the decking is saturated, we’ll tell you straight and price both options. About 60% of the leaks we see are repairable.'],
    ],
  },
  {
    slug: 'tile-roofing', icon: 'layers', name: 'Tile Roofing',
    img: 'svc-tile', imgAlt: 'Aerial view of terracotta tile roofs with dormers across a neighborhood',
    short: 'New tile, underlayment renewal, and careful repairs that preserve the character of your home.',
    title: 'Tile Roofing & Re-Felts in Las Vegas',
    desc: 'Concrete and clay tile roofing in Las Vegas: new installation, underlayment replacement (re-felts), and color-matched tile repair for HOA communities.',
    hero: 'The desert standard, done right.',
    lede: 'Tile is the signature roof of the Vegas Valley, and the most misunderstood. The tile itself lasts 75 years; the felt underneath it doesn’t. We specialize in re-felts that give your existing tile a whole new life.',
    body: [
      ['The re-felt: your tile’s second act', 'On most valley homes built in the 90s and 2000s, the original 30-lb felt under the tile is past its service life even though the tile looks perfect. We lift and rack your existing tile, install modern high-temp synthetic underlayment with new flashings and bird stops, then relay the tile, replacing broken pieces with color-matched stock.'],
      ['New tile installation', 'For new builds and full conversions we install concrete and clay systems from Eagle, Boral, and Westlake, with foam or mechanical attachment engineered for our wind zone, and battens vented to cut attic temperatures.'],
      ['HOA-friendly, color-matched', 'We maintain relationships with valley HOAs and a boneyard of discontinued tile profiles, so repairs blend in, and approvals go through the first time.'],
    ],
    bullets: ['Tile re-felts (underlayment replacement)', 'New concrete & clay tile installation', 'Color-matched repairs from discontinued-tile stock', 'Bird stop, ridge, and mortar rework', 'HOA architectural approval support', 'Wind-zone engineered attachment'],
    faqs: [
      ['How do I know my tile roof needs a re-felt?', 'Age is the best indicator: original felt from before ~2005 is due. Leaks at valleys and penetrations, debris in gutters that looks like felt granules, and slipped tiles are the visible symptoms.'],
      ['Can you reuse my existing tile?', 'Usually yes, 85-90% of tile survives a careful lift-and-relay. We source color-matched replacements for the rest from our discontinued-profile inventory.'],
      ['How much does a re-felt cost versus full replacement?', 'A re-felt typically runs 55-70% of the cost of a comparable new tile roof because the tile, the most expensive component, is reused.'],
    ],
  },
  {
    slug: 'flat-roof-coatings', icon: 'sun', name: 'Flat Roofs & Cool Coatings',
    img: 'svc-flat', imgAlt: 'Aerial view of a reflective white flat roof on a commercial building',
    short: 'Reflective silicone and TPO systems that protect low-slope roofs while reducing heat gain.',
    title: 'Flat Roof & Silicone Coating Systems in Las Vegas',
    desc: 'Flat roof replacement, TPO, and silicone restoration coatings in Las Vegas. Reflective cool-roof systems that cut cooling costs and extend roof life 10-20 years.',
    hero: 'Turn your flat roof into a cool roof.',
    lede: 'Vegas rooftops hit 170°F in July. A reflective silicone coating system drops that by up to 50°F, extends your roof’s life by 10-20 years, and costs a fraction of replacement.',
    body: [
      ['Restoration first, replacement last', 'If your flat or low-slope roof is dry and structurally sound, a fluid-applied silicone system renews it seamlessly: we clean and prime, reinforce seams and penetrations, then apply a monolithic reflective membrane rated for permanent ponding water. No tear-off, no landfill, no weeks of noise.'],
      ['When replacement is the answer', 'Saturated insulation can’t be coated over. Where moisture scans show the roof is past saving, we install 60-mil TPO or modified bitumen systems with tapered insulation to finally solve chronic ponding.'],
      ['The energy math', 'Reflective coatings raise solar reflectance from roughly 0.10 (aged cap sheet) to 0.85+. On valley homes and commercial buildings, that typically translates to 10-20% off summer cooling loads, the roof pays itself down every July.'],
    ],
    bullets: ['Silicone restoration coating systems', '60-mil TPO installation', 'Tapered insulation for ponding correction', 'Moisture scans before we quote', 'Title 24-grade reflectivity (SRI 100+)', '10-20 year renewable warranties'],
    faqs: [
      ['How long does a silicone coating last?', 'Systems are warrantied 10-20 years depending on applied thickness, and they’re renewable: a maintenance recoat at the end of the term restarts the clock without another tear-off.'],
      ['Can you coat over ponding water areas?', 'Silicone is one of the only technologies rated for permanent ponding. We still correct severe ponding with tapered insulation or added drains, because standing water hides other problems.'],
      ['Do coatings work on residential flat roofs?', 'Absolutely, thousands of valley homes have flat or low-slope sections. The same commercial-grade system scales down, and the cooling savings are just as real.'],
    ],
  },
];

const AREAS = [
  {
    slug: 'summerlin', name: 'Summerlin',
    photo: 'area-extra', photoAlt: 'Tile rooftops of a master-planned residential neighborhood',
    title: 'Roofing Company in Summerlin, Las Vegas',
    desc: 'NovaRidge Roofing serves Summerlin, The Ridges, Red Rock Country Club, and Sun City with tile re-felts, roof replacement, and HOA-approved repairs.',
    blurb: 'Tile re-felt specialists for Summerlin’s master-planned communities, from The Ridges to Sun City.',
    body: [
      ['Roofing built for Summerlin homes', 'Summerlin’s housing stock is overwhelmingly concrete tile installed between 1992 and 2008, which means the original underlayment across the community is reaching end-of-life on a schedule. Our crews perform tile lift-and-relay re-felts weekly in The Ridges, Red Rock Country Club, The Paseos, Summerlin Centre, and Sun City Summerlin.'],
      ['HOA approvals, handled', 'Every Summerlin village runs architectural review. We prepare the submittal package, tile profile, color match, and scope, and we’ve yet to have one bounced. Repairs use color-matched tile from our discontinued-profile inventory so patches don’t show.'],
      ['Wind exposure on the west rim', 'Homes along the 215 and against Red Rock take the valley’s strongest gusts. We upgrade ridge attachment and edge metal on every west-side project accordingly.'],
    ],
    zips: '89134, 89135, 89138, 89144, 89145',
  },
  {
    slug: 'henderson', name: 'Henderson',
    photo: 'about2', photoAlt: 'Terracotta tile roof with a wooden dormer window',
    title: 'Roofing Company in Henderson, NV',
    desc: 'Roof replacement, repair, and flat-roof coatings in Henderson: Green Valley, Anthem, Inspirada, Lake Las Vegas, and MacDonald Ranch.',
    blurb: 'From Green Valley originals to new Inspirada builds, full-service roofing across Henderson.',
    body: [
      ['Henderson’s roofing mix', 'Henderson spans thirty years of construction: Green Valley’s early-90s shingle and tile, Anthem and Seven Hills’ early-2000s tile, and new stucco-and-flat-roof product in Inspirada and Cadence. We service all of it, re-felts in Anthem, shingle replacement in Green Valley, and silicone coatings on newer flat sections.'],
      ['Elevation and heat', 'Anthem and Black Mountain sit 800+ feet above the valley floor: more wind, more UV, faster underlayment fatigue on south faces. Our inspections map sun-side wear separately so you replace what’s tired, not the whole roof, when repair still makes sense.'],
      ['Commercial and multi-family', 'Our flat-roof division maintains retail and office roofs along the Eastern and St. Rose corridors with moisture surveys and restoration coatings that avoid tenant-disrupting tear-offs.'],
    ],
    zips: '89002, 89011, 89012, 89014, 89015, 89044, 89052, 89074',
  },
  {
    slug: 'north-las-vegas', name: 'North Las Vegas',
    photo: 'green-roof', photoAlt: 'Newly installed green glazed tile roof under a blue sky',
    title: 'Roofing Company in North Las Vegas, NV',
    desc: 'Roof repair, replacement, and storm damage response in North Las Vegas: Aliante, Eldorado, Craig Ranch, and the Apex industrial corridor.',
    blurb: 'Storm-response and replacement crews covering Aliante, Eldorado, Craig Ranch, and the Apex corridor.',
    body: [
      ['Fast response north of the 215', 'North Las Vegas takes the brunt of summer microbursts rolling off the Sheep Range. When monsoon cells drop wind shear over Aliante and Eldorado, our tarping crews stage from the Craig Road corridor for same-day response.'],
      ['Value without corner-cutting', 'Much of NLV’s housing was built fast in the 2000s boom, builder-grade felt, minimal flashing. Our replacement packages fix the shortcuts: real starter courses, sealed penetrations, and ventilation that was never installed the first time.'],
      ['Industrial & warehouse roofing', 'From Cheyenne to Apex, we survey, coat, and re-membrane large low-slope industrial roofs with scheduled maintenance programs that keep tenants dry and warranties valid.'],
    ],
    zips: '89030, 89031, 89032, 89081, 89084, 89085, 89086',
  },
];

const REVIEWS = [
  ['Marcus T.', 'Summerlin', 'NovaRidge re-felted our tile roof in The Paseos in three days. Drone footage before and after, HOA paperwork handled, yard spotless. It genuinely felt like dealing with a tech company that happens to do roofing.'],
  ['Alicia R.', 'Henderson', 'A monsoon cell ripped up our ridge caps on a Friday night. They tarped Saturday morning and had the roof permanently repaired by Tuesday, insurance photos and all. Can’t recommend them enough.'],
  ['David & June K.', 'North Las Vegas', 'Full replacement on our 2004 build in Aliante. Crew showed up at 6 AM, done in two days, and our upstairs is noticeably cooler with the new ventilation. Worth every penny.'],
  ['Priya S.', 'Spring Valley', 'They coated the flat roof on our office off Durango with the silicone system. July power bill dropped almost 18% versus last year. The thermal scan report they left us was genuinely impressive.'],
];

const PROJECTS = [
  ['proj-replace', 'roof-replacement', 'Replacement', 'Modern', '2026-06-18', 'June 18, 2026', 'Full replacement, modern two-story, Henderson', 'New charcoal tile roof on a modern two-story home'],
  ['proj-tile', 'tile-roofing', 'Tile', 'Re-Felt', '2026-05-30', 'May 30, 2026', 'Tile re-felt & relay, Summerlin', 'Rows of orange concrete tile on steep gables after a re-felt'],
  ['proj-coating', 'flat-roof-coatings', 'Coating', 'Energy', '2026-05-12', 'May 12, 2026', 'Cool-roof tile & skylight package, Centennial Hills', 'Green tile roof with two new skylights'],
  ['proj-repair', 'roof-repair', 'Repair', 'Storm', '2026-04-25', 'April 25, 2026', 'Storm damage rebuild, North Las Vegas', 'Roofers on scaffolding rebuilding a storm-damaged roof edge'],
];

const HOME_FAQS = [
  ['Is the drone inspection really free?', 'Completely free, no strings. You get the full 4K photo report and moisture findings whether you hire us or not, most homeowners use it to make an informed decision, and about 7 in 10 come back to us.'],
  ['How fast can you respond to a leak?', 'Emergency calls across Las Vegas, Henderson, North Las Vegas, and Summerlin are typically tarped the same day. Our 24/7 line, (702) 555-0184, is answered by a person, not a voicemail.'],
  ['Do you handle HOA approvals?', 'Yes. We prepare the full architectural submittal, tile profile, color match, and scope of work, and we maintain a boneyard of discontinued tile so repairs blend invisibly.'],
  ['What warranties do you offer?', 'Manufacturer material warranties up to 50 years, and a NovaRidge workmanship warranty up to 25 years, registered digitally, transferable once, and backed by our Tenaya Way office.'],
];

/* ---------- helpers ---------- */
const esc = (s) => s; // entities are authored correctly in source; never post-process (it corrupts inline JS)

const pic = (base, alt, w, h, eager = false) =>
  `<picture><source srcset="{{rel}}assets/img/${base}.webp" type="image/webp"><img src="{{rel}}assets/img/${base}.jpg" alt="${alt}" width="${w}" height="${h}"${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}></picture>`;

const tick = (html) => `<li>${IC.check}<span>${html}</span></li>`;

function layout({ pathSeg, title, desc, body, schema, current, noindex }) {
  const depth = pathSeg ? pathSeg.split('/').length : 0;
  const rel = depth ? '../'.repeat(depth) : '';
  const home = rel || './';
  const url = SITE.domain + '/' + (pathSeg ? pathSeg + '/' : '');
  const nav = (href, label) => `<a href="${rel}${href}/"${current === href ? ' aria-current="page"' : ''}>${label}</a>`;
  const schemas = [baseSchema(), ...(schema || [])];
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
${noindex ? '<meta name="robots" content="noindex">\n' : ''}<link rel="canonical" href="${url}">
<meta name="theme-color" content="#CFD8CB">
<link rel="icon" href="${rel}assets/img/nrr-2.png" type="image/png">
<link rel="apple-touch-icon" href="${rel}assets/img/nrr.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.domain}/assets/img/nrr.png">
<meta property="og:image:secure_url" content="${SITE.domain}/assets/img/nrr.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="3231">
<meta property="og:image:height" content="2550">
<meta property="og:image:alt" content="${SITE.name} logo">
<meta name="twitter:card" content="summary">
<link rel="preload" href="${rel}assets/fonts/roboto-400.ttf" as="font" type="font/ttf" crossorigin>
${current === 'HOME' ? `<link rel="preload" as="image" href="assets/video/poster.jpg" fetchpriority="high">` : ''}<style>${CSS.replaceAll('{{rel}}', rel)}</style>
<noscript><style>.rv:not(.in){opacity:1;transform:none}</style></noscript>
${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
<!-- GA4: paste gtag.js snippet here (G-XXXXXXXXXX) -->
<!-- GTM: paste container snippet here (GTM-XXXXXXX) -->
<!-- GHL: paste location tracking code here -->
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<aside class="announcement" aria-label="Announcement">
  <div class="wrap announcement-rotator">
    <div class="announcement-item"><strong>Free drone roof inspections across the Las Vegas Valley.</strong><a href="${rel}contact/">Book yours today</a></div>
    <div class="announcement-item"><strong>Roof leak or storm damage? Same-week service is available.</strong><a href="${rel}services/roof-repair/">Get roof help</a></div>
  </div>
</aside>
<header class="site-head">
  <div class="wrap nav-bar">
    ${LOGO(home)}
    <button class="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="mainnav"><span></span><span></span><span></span></button>
    <nav class="main" id="mainnav" aria-label="Main">
      <ul>
        <li><a href="${home}"${current === 'HOME' ? ' aria-current="page"' : ''}>Home</a></li>
        <li class="has-drop"><button class="drop-btn" aria-expanded="false">Services</button>
          <div class="drop">${SERVICES.map((s) => `<a href="${rel}services/${s.slug}/">${s.name}</a>`).join('')}</div>
        </li>
        <li class="has-drop"><button class="drop-btn" aria-expanded="false">Service Areas</button>
          <div class="drop">${AREAS.map((a) => `<a href="${rel}service-areas/${a.slug}/">${a.name}</a>`).join('')}</div>
        </li>
        <li>${nav('pricing', 'Pricing')}</li>
        <li>${nav('about', 'About')}</li>
        <li>${nav('contact', 'Contact')}</li>
      </ul>
    </nav>
    <div class="head-cta">
      <a class="phone-link" href="${SITE.phoneHref}">${SITE.phone}</a>
      <a class="btn btn-primary btn-sm" href="${rel}contact/">Get a Free Quote</a>
    </div>
  </div>
</header>
<main id="main">
${body.replaceAll('{{rel}}', rel)}
</main>
<footer class="site-foot">
  <div class="wrap foot-grid">
    <div class="foot-about">
      ${LOGO(home)}
      <p style="margin-top:18px">${SITE.tagline}. Licensed, bonded, and insured. ${SITE.license}.</p>
    </div>
    <div>
      <h4>Services</h4>
      <ul>${SERVICES.map((s) => `<li><a href="${rel}services/${s.slug}/">${s.name}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h4>Service Areas</h4>
      <ul>${AREAS.map((a) => `<li><a href="${rel}service-areas/${a.slug}/">${a.name}</a></li>`).join('')}
      <li><a href="${rel}contact/">Las Vegas &amp; beyond</a></li></ul>
    </div>
    <div>
      <h4>Contact</h4>
      <address>${SITE.street}<br>${SITE.city}, ${SITE.state} ${SITE.zip}<br>
      <a href="${SITE.phoneHref}">${SITE.phone}</a><br>
      <a href="mailto:${SITE.email}">${SITE.email}</a><br>${SITE.hours}</address>
    </div>
  </div>
  <div class="wrap foot-bottom">
    <span>&copy; <span id="yr">2026</span> ${SITE.legal}. All rights reserved. Fictional demo website.</span>
    <span class="foot-legal"><a href="${rel}privacy/">Privacy Policy</a><a href="${rel}terms/">Terms of Service</a><button class="cookie-settings" type="button">Cookie settings</button><a href="${rel}sitemap.xml">Sitemap</a></span>
  </div>
</footer>
<aside class="contact-float" aria-label="Quick contact">
  <div class="contact-pop" id="contact-pop" hidden>
    <div class="contact-pop-head">
      <span class="contact-status" aria-hidden="true"><img src="${rel}assets/img/nrr-2.png" width="3231" height="2550" alt=""></span>
      <div><strong>Roof help, without the runaround</strong><span>Local team &middot; replies during business hours</span></div>
    </div>
    <div class="contact-pop-body">
      <p>Questions, leaks, or quote requests, choose the easiest way to reach our crew.</p>
      <div class="contact-actions">
        <a href="${SITE.phoneHref}"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7.2 3.5 10 8 8.3 9.8c1.1 2.4 3 4.3 5.4 5.4l1.8-1.7 4.5 2.8-.7 3.3c-.2.8-1 1.3-1.8 1.2C9.8 19.8 4.2 14.2 3.1 6.5 3 5.7 3.5 4.9 4.3 4.7l2.9-1.2Z"/></svg></span><span><b>Call the office</b><small>${SITE.phone}</small></span></a>
        <a href="sms:+17025550184"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5.5h16v11H9l-5 3v-14Z"/><path d="M8 10.8h8M8 8h5"/></svg></span><span><b>Send a text</b><small>Great for photos of damage</small></span></a>
        <a class="contact-email" href="mailto:${SITE.email}"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></span><span><b>Email our team</b><small>${SITE.email}</small></span></a>
      </div>
    </div>
  </div>
  <button class="contact-trigger" type="button" aria-expanded="false" aria-controls="contact-pop">
    <span class="contact-trigger-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5.5h16v11H9l-5 3v-14Z"/><path d="M8 10.8h8M8 8h5"/></svg></span>
    <span class="contact-trigger-copy"><b>Talk to a roofer</b><small>We&rsquo;re here to help</small></span>
    <span class="contact-close" aria-hidden="true"></span>
  </button>
</aside>
<section class="cookie-banner" id="cookie-banner" aria-labelledby="cookie-title" hidden>
  <div class="cookie-copy">
    <h2 id="cookie-title">Your privacy, your choice</h2>
    <p>We use necessary cookies to keep this site working. With your permission, optional analytics can help us improve it. Read our <a href="${rel}privacy/">Privacy Policy</a>.</p>
  </div>
  <div class="cookie-actions">
    <button class="btn btn-primary btn-sm" type="button" data-cookie-choice="acknowledged">Got it</button>
  </div>
</section>
<script>
(function(){
var d=document;
var t=d.querySelector('.nav-toggle'),n=d.getElementById('mainnav');
t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
d.querySelectorAll('.drop-btn').forEach(function(b){b.addEventListener('click',function(){var li=b.parentElement,o=li.classList.toggle('open');b.setAttribute('aria-expanded',o)})});
var y=d.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});d.querySelectorAll('.rv').forEach(function(el){io.observe(el)});}else{d.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}
var v=d.getElementById('heroVid');
if(v){var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,sd=navigator.connection&&navigator.connection.saveData;
if(!rm&&!sd){var load=function(){['webm','mp4'].forEach(function(f){var s=d.createElement('source');s.src=v.dataset.base+'.'+f;s.type='video/'+f;v.appendChild(s)});v.load();var p=v.play();if(p)p.catch(function(){});};
if(d.readyState==='complete'){setTimeout(load,120)}else{addEventListener('load',function(){setTimeout(load,120)})}}}
d.querySelectorAll('.lead-form').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();if(!f.reportValidity())return;f.querySelectorAll('input,select,textarea,button').forEach(function(el){el.disabled=true});window.location.href=f.dataset.ty;});});
var ct=d.querySelector('.contact-trigger'),cp=d.getElementById('contact-pop');
if(ct&&cp){var toggleContact=function(open){cp.hidden=!open;ct.setAttribute('aria-expanded',open);document.querySelector('.contact-float').classList.toggle('is-open',open);if(open)cp.querySelector('a').focus()};ct.addEventListener('click',function(){toggleContact(ct.getAttribute('aria-expanded')!=='true')});d.addEventListener('keydown',function(e){if(e.key==='Escape'&&!cp.hidden){toggleContact(false);ct.focus()}});d.addEventListener('click',function(e){if(!cp.hidden&&!e.target.closest('.contact-float'))toggleContact(false)});}
var cb=d.getElementById('cookie-banner'),cs=d.querySelector('.cookie-settings'),consentKey='novaridge-cookie-consent';
if(cb){var getConsent=function(){try{return localStorage.getItem(consentKey)}catch(e){return null}},showConsent=function(){cb.hidden=false},saveConsent=function(choice){try{localStorage.setItem(consentKey,choice)}catch(e){}cb.hidden=true;window.dispatchEvent(new CustomEvent('novaridge:consent',{detail:{choice:choice}}))};if(!getConsent())showConsent();cb.querySelectorAll('[data-cookie-choice]').forEach(function(b){b.addEventListener('click',function(){saveConsent(b.dataset.cookieChoice)})});if(cs)cs.addEventListener('click',showConsent);}
})();
</script>
</body>
</html>`;
}

function baseSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': SITE.domain + '/#org',
    name: SITE.name,
    legalName: SITE.legal,
    url: SITE.domain + '/',
    logo: SITE.domain + '/assets/img/nrr-2.png',
    image: SITE.domain + '/assets/img/nrr.png',
    telephone: '+1-702-555-0184',
    email: SITE.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: SITE.zip,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00', closes: '18:00',
    }],
    areaServed: ['Las Vegas', 'Summerlin', 'Henderson', 'North Las Vegas', 'Spring Valley', 'Enterprise', 'Paradise'].map((n) => ({ '@type': 'City', name: n })),
    sameAs: [],
  };
}

function crumbsSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, url], i) => ({
      '@type': 'ListItem', position: i + 1, name,
      ...(url ? { item: SITE.domain + url } : {}),
    })),
  };
}

function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

const crumbsHtml = (rel, items) => `<nav class="crumbs" aria-label="Breadcrumb">${items.map(([name, url], i) =>
  url ? `<a href="${rel}${url}">${name}</a>` : `<span aria-current="page">${name}</span>`
).join(' &nbsp;/&nbsp; ')}</nav>`;

const ctaBand = (heading, sub) => `
<section class="cta-band" id="quote">
  <div class="wrap">
    <div class="cta-card rv">
      <div class="inner">
        <div>
          <p class="kicker">Free Inspection &middot; No Obligation</p>
          <h2>${heading}</h2>
          <p class="muted">${sub}</p>
          <a class="big-phone" href="${SITE.phoneHref}">${IC.bolt} ${SITE.phone}</a>
          <p class="muted" style="font-size:.85rem;margin-top:6px">${SITE.hours} &middot; 24/7 emergency line</p>
        </div>
        <form class="lead-form" id="leadform" data-ty="{{rel}}thank-you/">
          <!-- GHL form embed replaces this block in production -->
          <h3>Get your free roof analysis</h3>
          <div class="f-row">
            <div class="f-field"><label for="lf-name">Name</label><input id="lf-name" name="name" autocomplete="name" required></div>
            <div class="f-field"><label for="lf-phone">Phone</label><input id="lf-phone" name="phone" type="tel" autocomplete="tel" required></div>
          </div>
          <div class="f-field"><label for="lf-addr">Property address</label><input id="lf-addr" name="address" autocomplete="street-address"></div>
          <div class="f-field"><label for="lf-svc">What do you need?</label>
            <select id="lf-svc" name="service">
              <option>Roof replacement</option><option>Roof repair / leak</option><option>Tile re-felt</option><option>Flat roof / coating</option><option>Not sure, inspect it</option>
            </select>
          </div>
          <label class="sms-consent">
            <input type="checkbox" name="sms_consent" value="yes">
            <span>I consent to receive SMS notifications, project updates, and occasional marketing communications from ${SITE.name}. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe at any time.</span>
          </label>
          <button class="btn btn-primary" type="submit" style="width:100%">Request Free Quote</button>
          <p class="form-note">Typical response: under 30 minutes during business hours.</p>
          <p class="form-legal"><a href="{{rel}}privacy/">Privacy Policy</a><span aria-hidden="true">|</span><a href="{{rel}}terms/">Terms of Service</a></p>
        </form>
      </div>
    </div>
  </div>
</section>`;

const heroForm = (id = 'heroform') => `
<form class="lead-form hero-form" id="${id}" data-ty="{{rel}}thank-you/">
  <h2>Get a free roof analysis</h2>
  <p>Tell us where to inspect. We typically respond within 30 minutes.</p>
  <div class="f-row">
    <div class="f-field"><label for="${id}-name">Name</label><input id="${id}-name" name="name" autocomplete="name" required></div>
    <div class="f-field"><label for="${id}-phone">Phone</label><input id="${id}-phone" name="phone" type="tel" autocomplete="tel" required></div>
  </div>
  <div class="f-field"><label for="${id}-addr">Property address</label><input id="${id}-addr" name="address" autocomplete="street-address"></div>
  <div class="f-field"><label for="${id}-svc">What do you need?</label><select id="${id}-svc" name="service"><option>Roof replacement</option><option>Roof repair / leak</option><option>Tile re-felt</option><option>Flat roof / coating</option><option>Not sure, inspect it</option></select></div>
  <label class="sms-consent"><input type="checkbox" name="sms_consent" value="yes"><span>I consent to receive SMS notifications, project updates, and occasional marketing communications from ${SITE.name}. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe.</span></label>
  <button class="btn btn-primary" type="submit">Request Free Quote</button>
  <p class="form-legal"><a href="{{rel}}privacy/">Privacy Policy</a><span aria-hidden="true">|</span><a href="{{rel}}terms/">Terms of Service</a></p>
</form>`;

const reviewsHtml = () => `
<section aria-labelledby="rv-h">
  <div class="wrap">
    <div class="section-head split rv">
      <div>
        <p class="kicker">Reviews</p>
        <h2 id="rv-h">The valley vouches for us</h2>
        <p class="muted">Rated 4.9 / 5 across 300+ verified reviews from homeowners and businesses.</p>
      </div>
    </div>
    <div class="grid-2">
      ${REVIEWS.map(([name, area, text], i) => `
      <article class="review-card rv">
        <div class="reviewer"><div class="avatar" aria-hidden="true">${name[0]}</div><div><b>${name}</b><span>${area} &middot; ${['3 weeks ago', '1 month ago', '2 months ago', '3 months ago'][i]}</span></div></div>
        <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p>&ldquo;${text}&rdquo;</p>
        <footer class="review-foot"><span>Posted on Google</span><a href="https://www.google.com/search?q=NovaRidge+Roofing+Las+Vegas+reviews" target="_blank" rel="noopener">Read on Google</a></footer>
      </article>`).join('')}
    </div>
  </div>
</section>`;

const faqDetails = (faqs, open = -1) => faqs.map(([q, a], i) =>
  `<details${i === open ? ' open' : ''}><summary>${q}<span class="plus" aria-hidden="true"></span></summary><div class="faq-a">${a}</div></details>`).join('');

const faqHtml = (faqs) => `
<section aria-labelledby="faq-h">
  <div class="wrap">
    <div class="section-head rv"><p class="kicker">FAQ</p><h2 id="faq-h">Common questions</h2></div>
    <div class="faq rv">
      ${faqDetails(faqs)}
    </div>
  </div>
</section>`;

/* ---------- pages ---------- */
function homePage() {
  const body = `
<section class="hero">
  <div class="hero-media">
    <video id="heroVid" data-base="assets/video/hero" autoplay muted loop playsinline preload="none" poster="assets/video/poster.jpg" width="1280" height="720" aria-hidden="true" tabindex="-1"></video>
  </div>

  <div class="wrap hero-layout">
    <div class="hero-inner">
      <h1>High-Performance Roofing, <span class="grad-text">Engineered Specifying</span> for the Extreme Desert Climate</h1>
      <p class="lede">Drone inspections, thermal diagnostics, and 50-year materials, installed by the most advanced roofing crew in the Vegas Valley.</p>
      <div class="hero-ctas">
        <a class="btn btn-primary" href="contact/">Get a Free Quote</a>
        <a class="btn btn-yellow" href="${SITE.phoneHref}">${SITE.phone}</a>
      </div>
    </div>
    ${heroForm('home-hero-form')}
  </div>
</section>

<div class="trust">
  <div class="trust-track">
    ${Array.from({ length: 4 }, (_, index) => `<div class="trust-row"${index ? ' aria-hidden="true"' : ''}>
      <span class="trust-item">NV Licensed &amp; Bonded</span>
      <span class="trust-item">$2M Liability Insured</span>
      <span class="trust-item">4.9 on Google</span>
      <span class="trust-item">BBB A+ Accredited</span>
      <span class="trust-item">Same-Week Starts</span>
    </div>`).join('')}
  </div>
</div>

<section aria-labelledby="about-h">
  <div class="wrap about-grid">
    <div class="about-media rv">
      ${pic('about', 'NovaRidge crew installing a new roof on a Las Vegas home', 1100, 1400)}
      <div class="float-chip chip-tr">
        <span class="ico" aria-hidden="true">${IC.drone}</span>
        <span><b>4K + FLIR</b><span>every inspection</span></span>
      </div>
      <div class="float-chip chip-bl">
        <span class="ico" aria-hidden="true">${IC.shieldW}</span>
        <span><b>25-yr</b><span>workmanship warranty</span></span>
      </div>
    </div>
    <div class="rv">
      <p class="kicker" id="about-h">Who we are</p>
      <h2>Desert-grade roofing, <span class="grad-text">aerospace precision</span></h2>
      <p class="muted">Founded by a former aerospace QA engineer, NovaRidge applies checklists, sensors, and documentation to a trade that usually runs on guesswork. Every truck carries a drone, a thermal camera, and a moisture meter, so nobody diagnoses your roof from a ladder.</p>
      <ul class="checklist">
        ${tick('<b>Drone-first inspections.</b> 4K aerial scans and thermal imaging on every estimate.')}
        ${tick('<b>Radical documentation.</b> Before/after photo sets, moisture maps, and a signed QA checklist with every invoice.')}
        ${tick('<b>Local &amp; accountable.</b> One office, one license, one warranty, backed from Tenaya Way, not a call center.')}
      </ul>
      <a class="btn btn-ghost" href="about/" style="margin-top:1.6em">More about us</a>
      <div class="mini-stats">
        <div><b>2,400+</b><span>Roofs completed</span></div>
        <div><b>4.9</b><span>Google rating</span></div>
        <div><b>2019</b><span>Founded in Vegas</span></div>
      </div>
    </div>
  </div>
</section>

<section class="alt-band" aria-labelledby="svc-h">
  <div class="wrap">
    <div class="section-head service-intro rv">
      <div>
        <p class="kicker">Roofing solutions</p>
        <h2 id="svc-h">The right solution for every roof</h2>
        <p class="muted">From a stubborn leak to a complete replacement, we start with a thorough inspection and give you a clear recommendation,supported by photos, not pressure.</p>
      </div>
    </div>
    <div class="service-card-grid">
      ${SERVICES.map((s, i) => `
      <a class="service-card rv" href="services/${s.slug}/">
        <span class="service-card-media">${pic(s.img, s.imgAlt, 900, 600)}<span class="service-number">0${i + 1}</span></span>
        <span class="service-card-body">
          <span class="service-label">${IC[s.icon]}<span>${i === 0 ? 'Start fresh' : i === 1 ? 'Stop the damage' : i === 2 ? 'Restore or renew' : 'Protect & cool'}</span></span>
          <h3>${s.name}</h3>
          <p>${s.short}</p>
          <span class="go">View service <span aria-hidden="true">&rarr;</span></span>
        </span>
      </a>`).join('')}
    </div>
  </div>
</section>

<section aria-labelledby="why-h">
  <div class="wrap about-grid">
    <div class="rv">
      <p class="kicker" id="why-h">Why NovaRidge</p>
      <h2>A roofing company that runs like a <span class="grad-text">flight crew</span></h2>
      <p class="muted">Anyone can swap a tile. We engineer roofs: measured decks, verified ventilation math, and every job photographed before, during, and after.</p>
      <ul class="checklist">
        ${tick('<b>Desert-spec materials.</b> High-temp underlayments and Class-A systems chosen for 115&deg;F summers, not national averages.')}
        ${tick('<b>Dedicated crews.</b> Daily magnet sweeps, protected landscaping, permits and inspections handled for you.')}
        ${tick('<b>Warranty that means something.</b> Registered, transferable, and honored from one local office.')}
      </ul>
      <div class="mini-stats">
        <div><b>2.6</b><span>Avg. days per replacement</span></div>
        <div><b>&lt;1%</b><span>Callback rate</span></div>
        <div><b>3,100+</b><span>Drone flight hours</span></div>
      </div>
    </div>
    <div class="why-media rv">
      ${pic('whyus1', 'Triple gable roofs with new brown metal roofing against a blue sky', 1280, 660)}
      ${pic('whyus2', 'Terracotta tile roof with a freshly flashed dormer window', 900, 770)}
      ${pic('whyus3', 'Close-up of layered wooden roof shingles', 900, 770)}
    </div>
  </div>
</section>

<section class="alt-band" aria-labelledby="proj-h">
  <div class="wrap">
    <div class="section-head split rv">
      <div>
        <p class="kicker">Featured projects</p>
        <h2 id="proj-h">Recent work across the valley</h2>
        <p class="muted">Replacement, re-felt, and rescue jobs from Summerlin to the Apex corridor, documented, photographed, and warrantied.</p>
      </div>
    </div>
    <div class="proj-grid">${PROJECTS.map(([img, svc, tag1, tag2, dt, dateLabel, title, alt]) => `
      <a class="proj rv" href="services/${svc}/">
        ${pic(img, alt, 1000, 660)}
        <div class="proj-tags" aria-hidden="true"><span>${tag1}</span><span>${tag2}</span></div>
        <div class="proj-info"><time datetime="${dt}">${dateLabel}</time><h3>${title}</h3></div>
      </a>`).join('')}
    </div>
  </div>
</section>

<section aria-labelledby="proc-h">
  <div class="wrap">
    <div class="section-head rv"><p class="kicker">Process</p><h2 id="proc-h">From scan to signed-off in four steps</h2></div>
    <div class="steps">
      <div class="step rv"><span class="step-num" aria-hidden="true"></span><div><h3>Drone scan</h3><p>Free 4K aerial + thermal inspection with a same-day photo report.</p></div></div>
      <div class="step rv"><span class="step-num" aria-hidden="true"></span><div><h3>Exact quote</h3><p>Line-item pricing from measured data. No allowances, no surprises.</p></div></div>
      <div class="step rv"><span class="step-num" aria-hidden="true"></span><div><h3>Build</h3><p>Dedicated crew, daily cleanup, permits and inspections handled.</p></div></div>
      <div class="step rv"><span class="step-num" aria-hidden="true"></span><div><h3>QA &amp; warranty</h3><p>Signed checklist, final drone pass, and your registered warranty.</p></div></div>
    </div>
  </div>
</section>

<section class="alt-band" aria-labelledby="area-h">
  <div class="wrap area-flex">
    <div class="rv">
      <p class="kicker">Service Areas</p>
      <h2 id="area-h">Covering the entire Vegas Valley</h2>
      <p class="muted">Headquartered in southwest Las Vegas with crews staged across the valley for fast response.</p>
      <div class="area-list">
        ${AREAS.map((a) => `<a class="area-chip" href="service-areas/${a.slug}/"><span class="dot"></span>${a.name}</a>`).join('')}
        <a class="area-chip" href="contact/"><span class="dot"></span>Las Vegas &amp; Spring Valley</a>
      </div>
    </div>
    <div class="map-panel rv">${VEGAS_MAP}</div>
  </div>
</section>

${reviewsHtml()}

<section aria-labelledby="hfaq-h" style="padding-top:0">
  <div class="wrap faq-grid">
    <div class="rv">
      <p class="kicker" id="hfaq-h">FAQ</p>
      <h2>Straight answers, no upsell</h2>
      <p class="muted" style="margin-bottom:1.8rem">The questions valley homeowners ask us most, answered the way we'd want them answered.</p>
      <div class="faq-media">${pic('faq', 'Tile roof and brick chimney of a Las Vegas area home', 900, 1100)}</div>
    </div>
    <div class="rv">
      ${faqDetails(HOME_FAQS, 0)}
    </div>
  </div>
</section>

${ctaBand('Your roof, future-proofed.', 'Book a free drone inspection this week, get the full photo report whether you hire us or not.')}
`;
  return layout({
    pathSeg: '', current: 'HOME',
    title: 'NovaRidge Roofing | Las Vegas Roofing Company, Repair, Replacement & Tile',
    desc: 'Las Vegas roofing done right: drone inspections, roof replacement, tile re-felts, leak repair, and cool-roof coatings. Licensed & insured. Free quotes, (702) 555-0184.',
    body,
    schema: [faqSchema(HOME_FAQS)],
  });
}

function servicePage(s) {
  const body = `
<div class="sub-hero">

  <div class="wrap sub-hero-layout">
    <div>
    ${crumbsHtml('{{rel}}', [['Home', ''], [s.name, null]])}
    <p class="kicker">Service</p>
    <h1>${s.hero.replace(/^(.+?)([\.\!])$/, '$1$2')}</h1>
    <p class="lede muted" style="max-width:640px;font-size:1.1rem">${s.lede}</p>
    <div class="hero-ctas" style="display:flex;gap:14px;flex-wrap:wrap;margin:1.6em 0 2.6em"><a class="btn btn-yellow" href="{{rel}}contact/">Get a Free Quote</a><a class="btn btn-ghost" href="${SITE.phoneHref}">${SITE.phone}</a></div>
    </div>
    ${heroForm(`service-${s.slug}-hero-form`)}
  </div>
</div>
<div class="wrap svc-hero-img rv">${pic(s.img, s.imgAlt, 1600, 700, true)}</div>
<section style="padding-top:clamp(30px,5vw,54px)">
  <div class="wrap about-grid" style="align-items:start">
    <div class="prose rv">
      ${s.body.map(([h, p]) => `<h2>${h}</h2><p>${p}</p>`).join('')}
    </div>
    <div class="tech-panel rv" style="position:sticky;top:96px">
      <h3>What's included</h3>
      <ul class="checklist">${s.bullets.map((b) => tick(b)).join('')}</ul>
      <a class="btn btn-primary" href="{{rel}}contact/" style="margin-top:22px;width:100%">Book Free Inspection</a>
    </div>
  </div>
</section>
${faqHtml(s.faqs)}
${ctaBand(`Ready for ${s.name.toLowerCase()}?`, 'Free drone inspection, photo report, and a line-item quote, usually within 48 hours.')}
`;
  return layout({
    pathSeg: 'services/' + s.slug, current: '',
    title: `${s.title} | ${SITE.name}`,
    desc: s.desc,
    body,
    schema: [
      crumbsSchema([['Home', '/'], ['Services', null], [s.name, '/services/' + s.slug + '/']]),
      faqSchema(s.faqs),
      {
        '@context': 'https://schema.org', '@type': 'Service',
        name: s.name, serviceType: s.name,
        provider: { '@id': SITE.domain + '/#org' },
        areaServed: { '@type': 'City', name: 'Las Vegas' },
        description: s.desc,
      },
    ],
  });
}

function areaPage(a) {
  const body = `
<div class="sub-hero">

  <div class="wrap sub-hero-layout">
    <div>
    ${crumbsHtml('{{rel}}', [['Home', ''], [a.name, null]])}
    <p class="kicker">Service Area</p>
    <h1>Roofing in <span class="grad-text">${a.name}</span></h1>
    <p class="lede muted" style="max-width:640px;font-size:1.1rem">${a.blurb}</p>
    <div class="hero-ctas" style="display:flex;gap:14px;flex-wrap:wrap;margin:1.6em 0 2.6em"><a class="btn btn-yellow" href="{{rel}}contact/">Get a Free Quote</a><a class="btn btn-ghost" href="${SITE.phoneHref}">${SITE.phone}</a></div>
    </div>
    ${heroForm(`area-${a.slug}-hero-form`)}
  </div>
</div>
<div class="wrap svc-hero-img rv">${pic(a.photo, a.photoAlt, 1000, 660, true)}</div>
<section style="padding-top:clamp(30px,5vw,54px)">
  <div class="wrap about-grid" style="align-items:start">
    <div class="prose rv">
      ${a.body.map(([h, p]) => `<h2>${h}</h2><p>${p}</p>`).join('')}
      <h2>ZIP codes we cover in ${a.name}</h2><p>${a.zips}</p>
    </div>
    <div class="tech-panel rv" style="position:sticky;top:96px">
      <h3>Services in ${a.name}</h3>
      <ul class="checklist">${SERVICES.map((s) => tick(`<a href="{{rel}}services/${s.slug}/">${s.name}</a>`)).join('')}</ul>
      <a class="btn btn-primary" href="{{rel}}contact/" style="margin-top:22px;width:100%">Book Free Inspection</a>
    </div>
  </div>
</section>
${ctaBand(`Need a roofer in ${a.name}?`, 'Crews staged nearby, free drone inspection and same-day storm response.')}
`;
  return layout({
    pathSeg: 'service-areas/' + a.slug, current: '',
    title: `${a.title} | ${SITE.name}`,
    desc: a.desc,
    body,
    schema: [crumbsSchema([['Home', '/'], ['Service Areas', null], [a.name, '/service-areas/' + a.slug + '/']])],
  });
}

function pricingPage() {
  const faqs = [
    ['Why "starting at" prices?', 'Every roof differs in pitch, layers, decking condition, and access. These floors reflect real, recent Vegas Valley jobs, your drone-measured quote is exact and line-itemed.'],
    ['Do you offer financing?', 'Yes, 12-month same-as-cash and longer fixed-rate terms through our lending partners, with instant soft-pull prequalification that doesn’t affect your credit.'],
    ['Is the inspection really free?', 'Completely. You get the full drone photo report and moisture findings whether you hire us or not. No conditions.'],
  ];
  const body = `
<div class="sub-hero">

  <div class="wrap">
    ${crumbsHtml('{{rel}}', [['Home', ''], ['Pricing', null]])}
    <p class="kicker">Pricing</p>
    <h1>Transparent, measured, <span class="grad-text">no surprises</span></h1>
    <p class="lede muted" style="max-width:640px;font-size:1.1rem">Roofing quotes shouldn't be a mystery. Here's where our most common projects start, your exact price comes from drone-measured data.</p>
  </div>
</div>
<section style="padding-top:clamp(44px,6vw,64px)">
  <div class="wrap">
    <div class="grid-3" style="align-items:stretch">
      <div class="price-card rv">
        <h3>Roof Repair</h3>
        <div class="price">from $349<small> / visit</small></div>
        <p class="muted" style="font-size:.9rem">Leak detection &amp; permanent repair</p>
        <ul><li>Thermal-imaging diagnosis</li><li>Photo-documented findings</li><li>Tile, shingle &amp; flat repairs</li><li>5-year repair warranty</li></ul>
        <a class="btn btn-ghost" href="{{rel}}contact/">Book a Repair</a>
      </div>
      <div class="price-card hot rv">
        <span class="tag">Most Popular</span>
        <h3>Tile Re-Felt</h3>
        <div class="price">from $7.50<small> / sq ft</small></div>
        <p class="muted" style="font-size:.9rem">Reuse your tile, replace what's under it</p>
        <ul><li>Lift &amp; relay existing tile</li><li>High-temp synthetic underlayment</li><li>New flashings &amp; bird stops</li><li>Color-matched tile replacement</li><li>Up to 25-year workmanship warranty</li></ul>
        <a class="btn btn-primary" href="{{rel}}contact/">Get Exact Quote</a>
      </div>
      <div class="price-card rv">
        <h3>Full Replacement</h3>
        <div class="price">from $9,800<small> / avg. home</small></div>
        <p class="muted" style="font-size:.9rem">Complete tear-off &amp; new system</p>
        <ul><li>Tear-off to deck + sheathing repair</li><li>Class-A shingle, tile or metal</li><li>Engineered ridge ventilation</li><li>Permits &amp; inspections included</li><li>Financing from $164/mo</li></ul>
        <a class="btn btn-ghost" href="{{rel}}contact/">Get Exact Quote</a>
      </div>
    </div>
    <p class="muted rv" style="margin-top:26px;font-size:.9rem">Flat roof &amp; silicone coating systems are quoted per square foot after a moisture scan, typically <b>$3.25-$5.50/sq ft</b> for restoration coatings.</p>
  </div>
</section>
${faqHtml(faqs)}
${ctaBand('Want a real number?', 'Free drone measurement and a line-item quote, most delivered within 48 hours of the scan.')}
`;
  return layout({
    pathSeg: 'pricing', current: 'pricing',
    title: `Roofing Prices in Las Vegas, Transparent Starting Rates | ${SITE.name}`,
    desc: 'See what roofing really costs in Las Vegas: repairs from $349, tile re-felts from $7.50/sq ft, full replacements from $9,800. Free drone-measured quotes.',
    body,
    schema: [crumbsSchema([['Home', '/'], ['Pricing', '/pricing/']]), faqSchema(faqs)],
  });
}

function aboutPage() {
  const body = `
<div class="sub-hero">

  <div class="wrap">
    ${crumbsHtml('{{rel}}', [['Home', ''], ['About', null]])}
    <p class="kicker">About Us</p>
    <h1>The crew rebuilding roofing's <span class="grad-text">reputation</span></h1>
    <p class="lede muted" style="max-width:640px;font-size:1.1rem">NovaRidge was founded on a simple bet: treat roofing like aerospace, measure everything, document everything, and customers will never go back to guesswork.</p>
  </div>
</div>
<div class="wrap svc-hero-img rv">${pic('about', 'NovaRidge roofers installing a new roof system', 1100, 1400, true)}</div>
<section style="padding-top:clamp(30px,5vw,54px)">
  <div class="wrap about-grid" style="align-items:start">
    <div class="prose rv">
      <h2>Our story</h2>
      <p>NovaRidge Roofing was started in 2019 by Adrian Vale, a former aerospace quality-assurance engineer who watched three different contractors misdiagnose the same leak on his mother's Henderson home. The problem wasn't skill, it was process. Nobody measured. Nobody documented. Everybody guessed.</p>
      <p>So he built the roofing company he couldn't hire: drone scans instead of ladder glances, thermal imaging instead of hunches, signed QA checklists instead of "trust me." Six years later, NovaRidge has completed 2,400+ projects across the Vegas Valley with a 4.9-star average, and still photographs every single deck before a shingle goes on.</p>
      ${pic('about2', 'Terracotta tile roof with a restored wooden dormer, a recent NovaRidge tile project', 1000, 700)}
      <h2>What we believe</h2>
      <ul>
        <li><b>Data beats opinion.</b> Every quote is built from measured, photographed evidence you can see yourself.</li>
        <li><b>The desert is different.</b> Materials and methods are chosen for 115&deg;F heat, UV, and monsoon wind, not national defaults.</li>
        <li><b>Local means accountable.</b> One office on Tenaya Way, one Nevada license, and warranties we'll still be here to honor.</li>
        <li><b>Leave it cleaner.</b> Daily magnet sweeps, protected landscaping, and a jobsite your HOA will never email you about.</li>
      </ul>
      <h2>Licensed, bonded, insured</h2>
      <p>${SITE.legal} holds ${SITE.license}, carries $2M in general liability, and covers every crew member with workers' comp. Certificates are attached to every contract automatically.</p>
    </div>
    <div class="tech-panel rv" style="position:sticky;top:96px">
      <p class="kicker">NovaRidge by the numbers</p>
      <div class="tech-rows">
        <div class="tech-row"><span>Founded</span><b>2019</b></div>
        <div class="tech-row"><span>Projects completed</span><b>2,400+</b></div>
        <div class="tech-row"><span>Google rating</span><b>4.9 / 5</b></div>
        <div class="tech-row"><span>Team members</span><b>38</b></div>
        <div class="tech-row"><span>Drone flight hours</span><b>3,100+</b></div>
        <div class="tech-row"><span>Callback rate</span><b>&lt; 1%</b></div>
      </div>
      <a class="btn btn-primary" href="{{rel}}contact/" style="margin-top:22px;width:100%">Work With Us</a>
    </div>
  </div>
</section>
${reviewsHtml()}
${ctaBand('Meet us on your roof.', 'Book a free inspection and see the NovaRidge difference in the first ten minutes.')}
`;
  return layout({
    pathSeg: 'about', current: 'about',
    title: `About NovaRidge Roofing, Las Vegas' Data-Driven Roofers | ${SITE.name}`,
    desc: 'Founded by an aerospace QA engineer, NovaRidge Roofing brings drone scans, thermal imaging, and documented quality to 2,400+ Las Vegas roofs since 2019.',
    body,
    schema: [crumbsSchema([['Home', '/'], ['About', '/about/']])],
  });
}

function contactPage() {
  const body = `
<div class="sub-hero">

  <div class="wrap">
    ${crumbsHtml('{{rel}}', [['Home', ''], ['Contact', null]])}
    <p class="kicker">Contact</p>
    <h1>Let's look at your <span class="grad-text">roof</span></h1>
    <p class="lede muted" style="max-width:640px;font-size:1.1rem">Call, email, or send the form, a real person from our Tenaya Way office responds within 30 minutes during business hours.</p>
  </div>
</div>
${ctaBand('Talk to a roofing specialist now.', 'Or send the form and we’ll call you, usually in under half an hour.')}
<section style="padding-top:0">
  <div class="wrap area-flex">
    <div class="rv">
      <h2>Visit or reach us</h2>
      <ul class="checklist">
        <li>${IC.pin}<span><b>Office.</b> ${SITE.street}, ${SITE.city}, ${SITE.state} ${SITE.zip}</span></li>
        <li>${IC.bolt}<span><b>Phone.</b> <a href="${SITE.phoneHref}">${SITE.phone}</a>, 24/7 emergency line for active leaks</span></li>
        <li>${IC.check}<span><b>Email.</b> <a href="mailto:${SITE.email}">${SITE.email}</a></span></li>
        <li>${IC.shield}<span><b>Hours.</b> ${SITE.hours}</span></li>
      </ul>
      <p class="muted" style="margin-top:1.4em;font-size:.92rem">Serving Las Vegas, Summerlin, Henderson, North Las Vegas, Spring Valley, Enterprise, and Paradise. ${SITE.license}.</p>
    </div>
    <div class="map-panel rv">${VEGAS_MAP}</div>
  </div>
</section>
`;
  return layout({
    pathSeg: 'contact', current: 'contact',
    title: `Contact NovaRidge Roofing, Free Quotes in Las Vegas | ${SITE.name}`,
    desc: 'Get a free roof inspection in Las Vegas. Call (702) 555-0184 or send the form, NovaRidge responds within 30 minutes during business hours.',
    body,
    schema: [crumbsSchema([['Home', '/'], ['Contact', '/contact/']])],
  });
}

/* ---------- legal pages ---------- */
const LEGAL_UPDATED = 'July 10, 2026';

function privacyPage() {
  const body = `
<div class="sub-hero">

  <div class="wrap">
    ${crumbsHtml('{{rel}}', [['Home', ''], ['Privacy Policy', null]])}
    <p class="kicker">Legal</p>
    <h1>Privacy <span class="grad-text">Policy</span></h1>
    <p class="lede muted" style="max-width:640px;font-size:1.05rem">How ${SITE.legal} collects, uses, and protects your information.</p>
  </div>
</div>
<section class="legal">
  <div class="wrap">
    <div class="prose rv">
      <p class="updated">Last updated: ${LEGAL_UPDATED}</p>
      <h2>1. Who we are</h2>
      <p>${SITE.legal} ("NovaRidge," "we," "us") operates this website and provides roofing services in the Las Vegas Valley. Our office is located at ${SITE.street}, ${SITE.city}, ${SITE.state} ${SITE.zip}. For any privacy question, contact <a href="mailto:${SITE.email}">${SITE.email}</a> or call ${SITE.phone}.</p>
      <h2>2. Information we collect</h2>
      <p>When you request a quote, call us, or fill out a form, we collect the information you provide: your name, phone number, email address, property address, and details about your roofing project. Our website also collects standard technical data, IP address, browser type, pages visited, and referring site, through cookies and analytics tools.</p>
      <h2>3. How we use your information</h2>
      <ul>
        <li>To respond to your inquiry, schedule inspections, and prepare quotes.</li>
        <li>To perform and document contracted work, including permits and warranty registration.</li>
        <li>To send appointment reminders and service follow-ups you'd reasonably expect.</li>
        <li>To measure and improve our website and advertising with aggregated analytics.</li>
      </ul>
      <p>We do not sell your personal information, and we do not share it with third parties for their own marketing.</p>
      <h2>4. Cookies &amp; analytics</h2>
      <p>This site uses cookies and similar technologies (such as Google Analytics and advertising pixels) to understand site traffic and measure campaigns. You can block cookies in your browser settings; the site will continue to work. Analytics data is aggregated and does not identify you personally.</p>
      <h2>5. SMS &amp; phone communications</h2>
      <p>By submitting your phone number, you agree that we may call or text you about your project. Message and data rates may apply. Reply STOP to any text to opt out at any time, opting out will not affect your service.</p>
      <h2>6. Sharing with service providers</h2>
      <p>We share information only with vendors who help us operate: our CRM and scheduling platform, payment processors, financing partners you ask to be connected with, and permitting authorities. Each is bound to use your data only to deliver their service to us.</p>
      <h2>7. Data retention &amp; security</h2>
      <p>Project records, photos, and warranty registrations are retained for the life of the warranty plus applicable legal periods. Data is stored on access-controlled systems; only staff who need your information to do their job can view it.</p>
      <h2>8. Your rights</h2>
      <p>You may request a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it (subject to records we must keep by law, such as invoices and warranty documents). Email <a href="mailto:${SITE.email}">${SITE.email}</a> and we'll respond within 30 days.</p>
      <h2>9. Children's privacy</h2>
      <p>Our services and website are directed to adults. We do not knowingly collect information from anyone under 16.</p>
      <h2>10. Changes to this policy</h2>
      <p>If we make material changes, we'll update this page and revise the "last updated" date above. Continued use of the site after changes means you accept the updated policy.</p>
    </div>
  </div>
</section>
`;
  return layout({
    pathSeg: 'privacy', current: '',
    title: `Privacy Policy | ${SITE.name}`,
    desc: 'How NovaRidge Roofing collects, uses, and protects your personal information, including cookies, analytics, and your data rights.',
    body,
    schema: [crumbsSchema([['Home', '/'], ['Privacy Policy', '/privacy/']])],
  });
}

function termsPage() {
  const body = `
<div class="sub-hero">

  <div class="wrap">
    ${crumbsHtml('{{rel}}', [['Home', ''], ['Terms of Service', null]])}
    <p class="kicker">Legal</p>
    <h1>Terms of <span class="grad-text">Service</span></h1>
    <p class="lede muted" style="max-width:640px;font-size:1.05rem">The ground rules for using this website and working with ${SITE.legal}.</p>
  </div>
</div>
<section class="legal">
  <div class="wrap">
    <div class="prose rv">
      <p class="updated">Last updated: ${LEGAL_UPDATED}</p>
      <h2>1. Agreement</h2>
      <p>By using this website or requesting services from ${SITE.legal} ("NovaRidge," "we," "us"), you agree to these terms. If you sign a written service contract with us, that contract governs the work itself; these terms cover the website and pre-contract interactions like quotes and inspections.</p>
      <h2>2. Estimates &amp; quotes</h2>
      <p>Free inspections and drone reports are provided without obligation. Written quotes are valid for 30 days and are based on conditions observable at the time of inspection. Hidden conditions discovered during work, such as rotted decking beneath tile, are documented with photos and priced by change order before we proceed.</p>
      <h2>3. Scheduling &amp; weather</h2>
      <p>Roofing is weather-dependent. High winds, rain, or extreme heat advisories can shift start dates; we'll communicate schedule changes as soon as we know them, and we never leave a roof exposed overnight without weatherproofing.</p>
      <h2>4. Warranties</h2>
      <p>Workmanship warranties (up to 25 years, by project type) are registered digitally at completion and are transferable once to a subsequent homeowner. Manufacturer material warranties are separate and subject to the manufacturer's terms. Warranty claims require reasonable access to the roof and are void where third parties have altered our work.</p>
      <h2>5. Payment</h2>
      <p>Residential projects are typically invoiced with a deposit at scheduling and balance on completion. We accept major cards, checks, ACH, and financing through our lending partners. Late balances may accrue interest at the maximum rate allowed by Nevada law.</p>
      <h2>6. Website content</h2>
      <p>Content on this site, text, photos, graphics, and pricing indications, is provided for general information and may change without notice. "Starting at" prices are floors from recent representative projects, not binding offers; your quote is the binding document.</p>
      <h2>7. Limitation of liability</h2>
      <p>To the fullest extent permitted by law, NovaRidge's liability arising from use of this website is limited to direct damages and capped at $100. This does not limit liability under a signed service contract, which contains its own terms, or any liability that cannot be limited under Nevada law.</p>
      <h2>8. Disputes</h2>
      <p>These terms are governed by the laws of the State of Nevada. Any dispute arising from website use will be resolved in the state or federal courts of Clark County, Nevada, and both parties waive trial by jury to the extent permitted.</p>
      <h2>9. Contact</h2>
      <p>Questions about these terms: <a href="mailto:${SITE.email}">${SITE.email}</a>, ${SITE.phone}, or ${SITE.street}, ${SITE.city}, ${SITE.state} ${SITE.zip}. ${SITE.license}.</p>
    </div>
  </div>
</section>
`;
  return layout({
    pathSeg: 'terms', current: '',
    title: `Terms of Service | ${SITE.name}`,
    desc: 'Terms of service for the NovaRidge Roofing website: estimates, scheduling, warranties, payment, and dispute resolution.',
    body,
    schema: [crumbsSchema([['Home', '/'], ['Terms of Service', '/terms/']])],
  });
}

function thankYouPage() {
  const body = `
<section class="ty-hero">
  <div class="wrap">
    <div class="rv" style="max-width:640px">
      <span class="ty-check">${IC.checkW}</span>
      <p class="kicker">Request received</p>
      <h1>Thank you, <span class="grad-text">we're on it</span></h1>
      <p class="lede muted" style="font-size:1.1rem">Your request just landed at our Tenaya Way office. During business hours, a NovaRidge specialist typically calls back within <b>30 minutes</b>.</p>
      <div class="steps" style="margin:2em 0">
        <div class="step"><span class="step-num" aria-hidden="true"></span><div><h3>We call you</h3><p>A specialist confirms your address and what you're seeing.</p></div></div>
        <div class="step"><span class="step-num" aria-hidden="true"></span><div><h3>Drone scan</h3><p>We schedule your free 4K aerial + thermal inspection.</p></div></div>
        <div class="step"><span class="step-num" aria-hidden="true"></span><div><h3>Your report</h3><p>Photo report and line-item quote, yours to keep either way.</p></div></div>
      </div>
      <p class="muted">Active leak right now? Don't wait for the callback:</p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:1em">
        <a class="btn btn-yellow" href="${SITE.phoneHref}">${IC.bolt} ${SITE.phone}</a>
        <a class="btn btn-ghost" href="{{rel}}">Back to Home</a>
      </div>
    </div>
  </div>
</section>
`;
  return layout({
    pathSeg: 'thank-you', current: '', noindex: true,
    title: `Thank You, Request Received | ${SITE.name}`,
    desc: 'Your request has been received. A NovaRidge Roofing specialist will call you back shortly.',
    body,
  });
}

function notFoundPage() {
  const body = `
<div class="sub-hero" style="min-height:60svh;display:flex;align-items:center">

  <div class="wrap">
    <p class="kicker">404</p>
    <h1>This page blew off in the <span class="grad-text">monsoon</span></h1>
    <p class="lede muted" style="max-width:560px;font-size:1.1rem">The page you're looking for doesn't exist, but your roof still might need us.</p>
    <div class="hero-ctas" style="display:flex;gap:14px;flex-wrap:wrap;margin-top:1.6em"><a class="btn btn-yellow" href="/">Back to Home</a><a class="btn btn-ghost" href="${SITE.phoneHref}">${SITE.phone}</a></div>
  </div>
</div>`;
  return layout({
    pathSeg: '', current: '', noindex: true,
    title: `Page Not Found | ${SITE.name}`,
    desc: 'The page you requested could not be found. NovaRidge Roofing, Las Vegas roof repair and replacement.',
    body,
  });
}

/* ---------- emit ---------- */
const OUT = [
  ['index.html', homePage()],
  ...SERVICES.map((s) => [`services/${s.slug}/index.html`, servicePage(s)]),
  ...AREAS.map((a) => [`service-areas/${a.slug}/index.html`, areaPage(a)]),
  ['pricing/index.html', pricingPage()],
  ['about/index.html', aboutPage()],
  ['contact/index.html', contactPage()],
  ['privacy/index.html', privacyPage()],
  ['terms/index.html', termsPage()],
  ['thank-you/index.html', thankYouPage()],
  ['404.html', notFoundPage()],
];

for (const [rel, html] of OUT) {
  const f = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, esc(html));
}

/* sitemap + robots */
const urls = ['', ...SERVICES.map((s) => `services/${s.slug}/`), ...AREAS.map((a) => `service-areas/${a.slug}/`), 'pricing/', 'about/', 'contact/', 'privacy/', 'terms/'];
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE.domain}/${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(ROOT, 'robots.txt'),
`User-agent: *
Allow: /
Disallow: /thank-you/

Sitemap: ${SITE.domain}/sitemap.xml
`);
fs.writeFileSync(path.join(ROOT, '.nojekyll'), '');

fs.mkdirSync(path.join(ROOT, 'assets/img'), { recursive: true });

console.log(`Built ${OUT.length} pages + sitemap.xml + robots.txt.`);
