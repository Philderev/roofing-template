/* NOVARIDGE ROOFING — static site generator */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CSS = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');

const SITE = {
  name: 'NovaRidge Roofing',
  legal: 'NovaRidge Roofing LLC',
  domain: 'https://www.novaridgeroofing.com',
  phone: '(702) 555-0184',
  phoneHref: 'tel:+17025550184',
  email: 'hello@novaridgeroofing.com',
  street: '7255 S Tenaya Way, Suite 140',
  city: 'Las Vegas', state: 'NV', zip: '89113',
  hours: 'Mon–Sat: 7:00 AM – 6:00 PM',
  license: 'NV Contractor Lic. #0091337',
  geo: { lat: 36.0563, lng: -115.2493 },
  tagline: 'Next-generation roofing for the Vegas Valley',
};

/* ---------- SVG bits ---------- */
const MARK = (s = 44) => `<svg width="${s}" height="${s}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="g${s}" x1="8" y1="34" x2="40" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#00E5FF"/><stop offset="1" stop-color="#FFB300"/></linearGradient></defs><path d="M24 3.5 41.8 13.75v20.5L24 44.5 6.2 34.25v-20.5Z" stroke="rgba(148,184,255,.4)" stroke-width="1.6"/><path d="M11 30 24 17l13 13" stroke="url(#g${s})" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 34.5 24 27l7.5 7.5" stroke="rgba(0,229,255,.45)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="17" r="2.6" fill="#FFB300"/><circle cx="11" cy="30" r="1.7" fill="#00E5FF"/><circle cx="37" cy="30" r="1.7" fill="#00E5FF"/></svg>`;

const LOGO = `<a class="brand" href="{{home}}" aria-label="${SITE.name} — home">${MARK(44)}<span class="brand-name">NOVA<span class="grad-text">RIDGE</span><small>ROOFING &middot; LAS VEGAS</small></span></a>`;

const IC = {
  bolt: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="#00E5FF" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  shield: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2 20 5.5V11c0 5-3.4 9.2-8 11-4.6-1.8-8-6-8-11V5.5L12 2Z" stroke="#00E5FF" stroke-width="1.8" stroke-linejoin="round"/><path d="m8.6 11.6 2.4 2.4 4.4-4.6" stroke="#FFB300" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  home: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m3 11 9-8 9 8" stroke="#FFB300" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9.5V21h13V9.5" stroke="#00E5FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  wrench: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.5 6.5a4.5 4.5 0 0 0-6 5.6L3 17.6 6.4 21l5.5-5.5a4.5 4.5 0 0 0 5.6-6l-3 3-2.5-.5-.5-2.5 3-3Z" stroke="#00E5FF" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  layers: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z" stroke="#00E5FF" stroke-width="1.8" stroke-linejoin="round"/><path d="m4.5 12.6 7.5 4.2 7.5-4.2M4.5 16.6 12 20.8l7.5-4.2" stroke="#FFB300" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  sun: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4.2" stroke="#FFB300" stroke-width="1.8"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" stroke="#00E5FF" stroke-width="1.8" stroke-linecap="round"/></svg>',
  check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="rgba(0,229,255,.4)" stroke-width="1.6"/><path d="m7.8 12.2 2.8 2.8 5.6-6" stroke="#00E5FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" stroke="#00E5FF" stroke-width="1.8"/><circle cx="12" cy="10" r="2.4" stroke="#FFB300" stroke-width="1.8"/></svg>',
  badge: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="9.5" r="6" stroke="#FFB300" stroke-width="1.7"/><path d="m8.7 14.6-1.5 6 4.8-2.6 4.8 2.6-1.5-6" stroke="#00E5FF" stroke-width="1.7" stroke-linejoin="round"/><path d="m9.8 9.4 1.6 1.6 3-3.2" stroke="#FFB300" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const VEGAS_MAP = `<svg viewBox="0 0 520 400" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stylized map of the Las Vegas Valley showing NovaRidge service areas">
<defs><linearGradient id="mg" x1="0" y1="400" x2="520" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#00E5FF"/><stop offset="1" stop-color="#FFB300"/></linearGradient>
<radialGradient id="mglow" cx="50%" cy="45%" r="60%"><stop stop-color="rgba(0,229,255,.14)"/><stop offset="1" stop-color="rgba(0,229,255,0)"/></radialGradient></defs>
<rect width="520" height="400" rx="14" fill="#0A101E"/><rect width="520" height="400" rx="14" fill="url(#mglow)"/>
<g stroke="rgba(148,184,255,.09)"><path d="M0 80h520M0 160h520M0 240h520M0 320h520M80 0v400M160 0v400M240 0v400M320 0v400M400 0v400"/></g>
<path d="M60 40C90 120 70 210 110 300s150 70 230 60 190-60 160-160S420 40 330 60 120 10 60 40Z" stroke="rgba(0,229,255,.35)" stroke-width="1.6" stroke-dasharray="7 6"/>
<path d="M100 330 250 60M250 60l170 250M130 200h280" stroke="rgba(148,184,255,.14)" stroke-width="1.4"/>
<g font-family="Segoe UI,Arial,sans-serif" font-size="15" font-weight="600" fill="#c7d5ef">
<circle cx="150" cy="130" r="7" fill="url(#mg)"/><circle cx="150" cy="130" r="13" stroke="rgba(0,229,255,.5)"/><text x="170" y="126">Summerlin</text>
<circle cx="255" cy="205" r="9" fill="url(#mg)"/><circle cx="255" cy="205" r="17" stroke="rgba(255,179,0,.6)"/><text x="277" y="200">Las Vegas</text>
<circle cx="272" cy="88" r="6" fill="url(#mg)"/><circle cx="272" cy="88" r="12" stroke="rgba(0,229,255,.5)"/><text x="290" y="84">North LV</text>
<circle cx="352" cy="300" r="7" fill="url(#mg)"/><circle cx="352" cy="300" r="13" stroke="rgba(0,229,255,.5)"/><text x="372" y="296">Henderson</text>
<circle cx="205" cy="280" r="5" fill="url(#mg)"/><text x="220" y="284">Spring Valley</text>
<circle cx="330" cy="170" r="5" fill="url(#mg)"/><text x="345" y="166">Sunrise Manor</text>
</g></svg>`;

/* ---------- data ---------- */
const SERVICES = [
  {
    slug: 'roof-replacement', icon: 'home', name: 'Roof Replacement',
    short: 'Full tear-off and re-roof with drone inspection, 50-year materials, and a same-week start.',
    title: 'Roof Replacement in Las Vegas, NV',
    desc: 'Full roof replacement in Las Vegas with drone inspections, Class-A fire-rated materials engineered for desert heat, and workmanship warranties up to 25 years.',
    hero: 'A brand-new roof, engineered for the desert.',
    lede: 'When repair stops making sense, NovaRidge replaces your entire roof system — decking to ridge — with materials rated for 115°F summers and monsoon winds.',
    body: [
      ['Built for the Mojave, not the Midwest', 'Most roofing failures in the Vegas Valley come from thermal cycling: 40-degree temperature swings that crack underlayment and curl shingles years ahead of schedule. Our replacement systems pair high-temp synthetic underlayment with Class-A fire-rated shingles or concrete tile, ventilated to shed attic heat and cut your cooling bills.'],
      ['What a NovaRidge replacement includes', 'Every project starts with a 4K drone scan and a moisture map of your decking. We tear off to the deck, replace compromised sheathing, and rebuild with ice-and-water shield at penetrations, new flashing and drip edge, and ridge ventilation sized to your attic volume. The site is magnet-swept daily and hauled clean at completion.'],
      ['Warranty that outlives the loan', 'Materials carry manufacturer warranties up to 50 years. Our workmanship warranty runs up to 25 years and is registered, transferable once, and backed by a local company — not a P.O. box.'],
    ],
    bullets: ['4K drone inspection + moisture mapping', 'Tear-off to deck with sheathing replacement', 'High-temp synthetic underlayment', 'Class-A fire-rated shingle, tile, or metal', 'Ridge ventilation engineered for desert attics', 'Up to 25-year transferable workmanship warranty'],
    faqs: [
      ['How long does a full roof replacement take?', 'Most single-family homes in the Vegas Valley are completed in 2–4 days: one day of tear-off and deck repair, then installation. Tile and metal systems can take a few days longer.'],
      ['Do I need a permit in Clark County?', 'Yes — and we pull it for you. Re-roofing in unincorporated Clark County, Las Vegas, North Las Vegas, and Henderson requires a permit and inspection, which we schedule and attend.'],
      ['Can you install over my existing shingles?', 'We don’t recommend overlays in our climate and in most cases code prohibits a second layer over tile. A full tear-off lets us verify the decking — that’s where hidden monsoon damage lives.'],
    ],
  },
  {
    slug: 'roof-repair', icon: 'wrench', name: 'Roof Repair & Leak Detection',
    short: 'Thermal-imaging leak detection and same-day storm repair, with a 24/7 emergency line.',
    title: 'Roof Repair & Leak Detection in Las Vegas',
    desc: 'Fast roof leak detection and repair in Las Vegas. Thermal imaging, monsoon storm damage response, and same-day emergency tarping — call (702) 555-0184.',
    hero: 'Find the leak. Fix it once.',
    lede: 'Water travels. The stain on your ceiling is rarely under the hole in your roof. We use thermal imaging and moisture meters to trace leaks to their true source — then repair the cause, not the symptom.',
    body: [
      ['Diagnosis before demolition', 'Our technicians scan the roof plane and attic with FLIR thermal cameras to locate trapped moisture, then verify with pin meters. You get photo documentation of exactly what failed and why — no guesswork, no "replace it all" upsell when a $600 repair solves it.'],
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
    short: 'Concrete and clay tile installation, re-felts, and color-matched repairs for desert homes.',
    title: 'Tile Roofing & Re-Felts in Las Vegas',
    desc: 'Concrete and clay tile roofing in Las Vegas: new installation, underlayment replacement (re-felts), and color-matched tile repair for HOA communities.',
    hero: 'The desert standard, done right.',
    lede: 'Tile is the signature roof of the Vegas Valley — and the most misunderstood. The tile itself lasts 75 years; the felt underneath it doesn’t. We specialize in re-felts that give your existing tile a whole new life.',
    body: [
      ['The re-felt: your tile’s second act', 'On most valley homes built in the 90s and 2000s, the original 30-lb felt under the tile is past its service life even though the tile looks perfect. We lift and rack your existing tile, install modern high-temp synthetic underlayment with new flashings and bird stops, then relay the tile — replacing broken pieces with color-matched stock.'],
      ['New tile installation', 'For new builds and full conversions we install concrete and clay systems from Eagle, Boral, and Westlake, with foam or mechanical attachment engineered for our wind zone, and battens vented to cut attic temperatures.'],
      ['HOA-friendly, color-matched', 'We maintain relationships with valley HOAs and a boneyard of discontinued tile profiles, so repairs blend in — and approvals go through the first time.'],
    ],
    bullets: ['Tile re-felts (underlayment replacement)', 'New concrete & clay tile installation', 'Color-matched repairs from discontinued-tile stock', 'Bird stop, ridge, and mortar rework', 'HOA architectural approval support', 'Wind-zone engineered attachment'],
    faqs: [
      ['How do I know my tile roof needs a re-felt?', 'Age is the best indicator: original felt from before ~2005 is due. Leaks at valleys and penetrations, debris in gutters that looks like felt granules, and slipped tiles are the visible symptoms.'],
      ['Can you reuse my existing tile?', 'Usually yes — 85–90% of tile survives a careful lift-and-relay. We source color-matched replacements for the rest from our discontinued-profile inventory.'],
      ['How much does a re-felt cost versus full replacement?', 'A re-felt typically runs 55–70% of the cost of a comparable new tile roof because the tile — the most expensive component — is reused.'],
    ],
  },
  {
    slug: 'flat-roof-coatings', icon: 'sun', name: 'Flat Roofs & Cool Coatings',
    short: 'Silicone restoration coatings and TPO systems that drop rooftop temps by up to 50°F.',
    title: 'Flat Roof & Silicone Coating Systems in Las Vegas',
    desc: 'Flat roof replacement, TPO, and silicone restoration coatings in Las Vegas. Reflective cool-roof systems that cut cooling costs and extend roof life 10–20 years.',
    hero: 'Turn your flat roof into a cool roof.',
    lede: 'Vegas rooftops hit 170°F in July. A reflective silicone coating system drops that by up to 50°F, extends your roof’s life by 10–20 years, and costs a fraction of replacement.',
    body: [
      ['Restoration first, replacement last', 'If your flat or low-slope roof is dry and structurally sound, a fluid-applied silicone system renews it seamlessly: we clean and prime, reinforce seams and penetrations, then apply a monolithic reflective membrane rated for permanent ponding water. No tear-off, no landfill, no weeks of noise.'],
      ['When replacement is the answer', 'Saturated insulation can’t be coated over. Where moisture scans show the roof is past saving, we install 60-mil TPO or modified bitumen systems with tapered insulation to finally solve chronic ponding.'],
      ['The energy math', 'Reflective coatings raise solar reflectance from roughly 0.10 (aged cap sheet) to 0.85+. On valley homes and commercial buildings, that typically translates to 10–20% off summer cooling loads — the roof pays itself down every July.'],
    ],
    bullets: ['Silicone restoration coating systems', '60-mil TPO installation', 'Tapered insulation for ponding correction', 'Moisture scans before we quote', 'Title 24-grade reflectivity (SRI 100+)', '10–20 year renewable warranties'],
    faqs: [
      ['How long does a silicone coating last?', 'Systems are warrantied 10–20 years depending on applied thickness, and they’re renewable: a maintenance recoat at the end of the term restarts the clock without another tear-off.'],
      ['Can you coat over ponding water areas?', 'Silicone is one of the only technologies rated for permanent ponding. We still correct severe ponding with tapered insulation or added drains, because standing water hides other problems.'],
      ['Do coatings work on residential flat roofs?', 'Absolutely — thousands of valley homes have flat or low-slope sections. The same commercial-grade system scales down, and the cooling savings are just as real.'],
    ],
  },
];

const AREAS = [
  {
    slug: 'summerlin', name: 'Summerlin',
    title: 'Roofing Company in Summerlin, Las Vegas',
    desc: 'NovaRidge Roofing serves Summerlin, The Ridges, Red Rock Country Club, and Sun City with tile re-felts, roof replacement, and HOA-approved repairs.',
    blurb: 'Tile re-felt specialists for Summerlin’s master-planned communities — from The Ridges to Sun City.',
    body: [
      ['Roofing built for Summerlin homes', 'Summerlin’s housing stock is overwhelmingly concrete tile installed between 1992 and 2008 — which means the original underlayment across the community is reaching end-of-life on a schedule. Our crews perform tile lift-and-relay re-felts weekly in The Ridges, Red Rock Country Club, The Paseos, Summerlin Centre, and Sun City Summerlin.'],
      ['HOA approvals, handled', 'Every Summerlin village runs architectural review. We prepare the submittal package — tile profile, color match, and scope — and we’ve yet to have one bounced. Repairs use color-matched tile from our discontinued-profile inventory so patches don’t show.'],
      ['Wind exposure on the west rim', 'Homes along the 215 and against Red Rock take the valley’s strongest gusts. We upgrade ridge attachment and edge metal on every west-side project accordingly.'],
    ],
    zips: '89134, 89135, 89138, 89144, 89145',
  },
  {
    slug: 'henderson', name: 'Henderson',
    title: 'Roofing Company in Henderson, NV',
    desc: 'Roof replacement, repair, and flat-roof coatings in Henderson: Green Valley, Anthem, Inspirada, Lake Las Vegas, and MacDonald Ranch.',
    blurb: 'From Green Valley originals to new Inspirada builds — full-service roofing across Henderson.',
    body: [
      ['Henderson’s roofing mix', 'Henderson spans thirty years of construction: Green Valley’s early-90s shingle and tile, Anthem and Seven Hills’ early-2000s tile, and new stucco-and-flat-roof product in Inspirada and Cadence. We service all of it — re-felts in Anthem, shingle replacement in Green Valley, and silicone coatings on newer flat sections.'],
      ['Elevation and heat', 'Anthem and Black Mountain sit 800+ feet above the valley floor: more wind, more UV, faster underlayment fatigue on south faces. Our inspections map sun-side wear separately so you replace what’s tired, not the whole roof, when repair still makes sense.'],
      ['Commercial and multi-family', 'Our flat-roof division maintains retail and office roofs along the Eastern and St. Rose corridors with moisture surveys and restoration coatings that avoid tenant-disrupting tear-offs.'],
    ],
    zips: '89002, 89011, 89012, 89014, 89015, 89044, 89052, 89074',
  },
  {
    slug: 'north-las-vegas', name: 'North Las Vegas',
    title: 'Roofing Company in North Las Vegas, NV',
    desc: 'Roof repair, replacement, and storm damage response in North Las Vegas: Aliante, Eldorado, Craig Ranch, and the Apex industrial corridor.',
    blurb: 'Storm-response and replacement crews covering Aliante, Eldorado, Craig Ranch, and the Apex corridor.',
    body: [
      ['Fast response north of the 215', 'North Las Vegas takes the brunt of summer microbursts rolling off the Sheep Range. When monsoon cells drop wind shear over Aliante and Eldorado, our tarping crews stage from the Craig Road corridor for same-day response.'],
      ['Value without corner-cutting', 'Much of NLV’s housing was built fast in the 2000s boom — builder-grade felt, minimal flashing. Our replacement packages fix the shortcuts: real starter courses, sealed penetrations, and ventilation that was never installed the first time.'],
      ['Industrial & warehouse roofing', 'From Cheyenne to Apex, we survey, coat, and re-membrane large low-slope industrial roofs with scheduled maintenance programs that keep tenants dry and warranties valid.'],
    ],
    zips: '89030, 89031, 89032, 89081, 89084, 89085, 89086',
  },
];

const REVIEWS = [
  ['Marcus T.', 'Summerlin', 'NovaRidge re-felted our tile roof in The Paseos in three days. Drone footage before and after, HOA paperwork handled, yard spotless. It genuinely felt like dealing with a tech company that happens to do roofing.'],
  ['Alicia R.', 'Henderson', 'A monsoon cell ripped up our ridge caps on a Friday night. They tarped Saturday morning and had the roof permanently repaired by Tuesday — insurance photos and all. Can’t recommend them enough.'],
  ['David & June K.', 'North Las Vegas', 'Full replacement on our 2004 build in Aliante. Crew showed up at 6 AM, done in two days, and our upstairs is noticeably cooler with the new ventilation. Worth every penny.'],
  ['Priya S.', 'Spring Valley', 'They coated the flat roof on our office off Durango with the silicone system. July power bill dropped almost 18% versus last year. The thermal scan report they left us was genuinely impressive.'],
];

/* ---------- helpers ---------- */
const esc = (s) => s; // entities are authored correctly in source; never post-process (it corrupts inline JS)

function layout({ pathSeg, title, desc, body, schema, current }) {
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
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#060a14">
<link rel="icon" href="${rel}favicon.ico" sizes="32x32">
<link rel="icon" href="${rel}favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${rel}apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.domain}/assets/img/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
${current === 'HOME' ? `<link rel="preload" as="image" href="assets/video/poster.jpg" fetchpriority="high">` : ''}<style>${CSS}</style>
<noscript><style>.rv{opacity:1;transform:none}</style></noscript>
${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
<!-- GA4: paste gtag.js snippet here (G-XXXXXXXXXX) -->
<!-- GTM: paste container snippet here (GTM-XXXXXXX) -->
<!-- GHL: paste location tracking code here -->
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-head">
  <div class="wrap nav-bar">
    ${LOGO.replace('{{home}}', home)}
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
      ${LOGO.replace('{{home}}', home)}
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
    <span><a href="${rel}sitemap.xml">Sitemap</a></span>
  </div>
</footer>
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
var f=d.getElementById('leadform');
if(f){f.addEventListener('submit',function(e){e.preventDefault();f.querySelector('.form-ok').style.display='block';f.querySelectorAll('input,select,textarea,button').forEach(function(el){el.disabled=true});});}
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
    logo: SITE.domain + '/assets/img/logo.svg',
    image: SITE.domain + '/assets/img/og-image.jpg',
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
    <div class="rv">
      <p class="kicker">Free Inspection &middot; No Obligation</p>
      <h2>${heading}</h2>
      <p class="muted">${sub}</p>
      <a class="big-phone" href="${SITE.phoneHref}">${IC.bolt} ${SITE.phone}</a>
      <p class="muted" style="font-size:.85rem;margin-top:6px">${SITE.hours} &middot; 24/7 emergency line</p>
    </div>
    <form class="lead-form rv" id="leadform" novalidate>
      <!-- GHL form embed replaces this block in production -->
      <h3>Get your free roof analysis</h3>
      <div class="f-row">
        <div class="f-field"><label for="lf-name">Name</label><input id="lf-name" name="name" autocomplete="name" required></div>
        <div class="f-field"><label for="lf-phone">Phone</label><input id="lf-phone" name="phone" type="tel" autocomplete="tel" required></div>
      </div>
      <div class="f-field"><label for="lf-addr">Property address</label><input id="lf-addr" name="address" autocomplete="street-address"></div>
      <div class="f-field"><label for="lf-svc">What do you need?</label>
        <select id="lf-svc" name="service">
          <option>Roof replacement</option><option>Roof repair / leak</option><option>Tile re-felt</option><option>Flat roof / coating</option><option>Not sure — inspect it</option>
        </select>
      </div>
      <button class="btn btn-primary" type="submit" style="width:100%">Request Free Quote</button>
      <p class="form-note">Typical response: under 30 minutes during business hours.</p>
      <div class="form-ok" role="status">Thanks — your request is in. A NovaRidge specialist will call you shortly.</div>
    </form>
  </div>
</section>`;

const reviewsHtml = () => `
<section aria-labelledby="rv-h">
  <div class="wrap">
    <div class="section-head rv">
      <p class="kicker">Reviews</p>
      <h2 id="rv-h">The valley vouches for us</h2>
      <p class="muted">Rated 4.9 / 5 across 300+ verified reviews.</p>
    </div>
    <div class="grid-2">
      ${REVIEWS.map(([name, area, text]) => `
      <article class="review-card rv">
        <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p>&ldquo;${text}&rdquo;</p>
        <div class="reviewer"><div class="avatar" aria-hidden="true">${name[0]}</div><div><b>${name}</b><span>${area}</span></div></div>
      </article>`).join('')}
    </div>
  </div>
</section>`;

const faqHtml = (faqs) => `
<section aria-labelledby="faq-h">
  <div class="wrap">
    <div class="section-head rv"><p class="kicker">FAQ</p><h2 id="faq-h">Common questions</h2></div>
    <div class="faq rv">
      ${faqs.map(([q, a]) => `<details><summary>${q}</summary><div class="faq-a">${a}</div></details>`).join('')}
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
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="wrap">
    <div class="hero-inner">
      <p class="kicker">Las Vegas &middot; Licensed &amp; Insured</p>
      <h1>Roofing, <span class="grad-text">engineered</span> for the desert.</h1>
      <p class="lede">Drone inspections, thermal diagnostics, and 50-year materials — installed by the most advanced roofing crew in the Vegas Valley.</p>
      <div class="hero-ctas">
        <a class="btn btn-primary" href="contact/">Get a Free Quote</a>
        <a class="btn btn-ghost" href="${SITE.phoneHref}">${SITE.phone}</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><b>2,400+</b><span>Roofs completed</span></div>
        <div class="stat"><b>4.9&#9733;</b><span>300+ reviews</span></div>
        <div class="stat"><b>25-yr</b><span>Workmanship warranty</span></div>
        <div class="stat"><b>24/7</b><span>Storm response</span></div>
      </div>
    </div>
  </div>
</section>

<div class="trust">
  <div class="wrap trust-row">
    <span class="trust-item">${IC.badge} NV Licensed &amp; Bonded</span>
    <span class="trust-item">${IC.shield} $2M Liability Insured</span>
    <span class="trust-item"><span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 4.9 on Google</span>
    <span class="trust-item">${IC.check} BBB A+ Accredited</span>
    <span class="trust-item">${IC.bolt} Same-Week Starts</span>
  </div>
</div>

<section aria-labelledby="svc-h">
  <div class="wrap">
    <div class="section-head rv">
      <p class="kicker">What we do</p>
      <h2 id="svc-h">Full-stack roofing services</h2>
      <p class="muted">Every project starts with a free drone inspection and a photo-documented report — so you see exactly what we see.</p>
    </div>
    <div class="grid-2" style="grid-template-columns:repeat(auto-fit,minmax(250px,1fr))">
      ${SERVICES.map((s) => `
      <a class="card rv" href="services/${s.slug}/">
        <span class="icon">${IC[s.icon]}</span>
        <h3>${s.name}</h3>
        <p>${s.short}</p>
        <span class="go">Explore ${s.name.split(' ')[0].toLowerCase()} &rarr;</span>
      </a>`).join('')}
    </div>
  </div>
</section>

<section aria-labelledby="why-h" style="padding-top:0">
  <div class="wrap split">
    <div class="rv">
      <p class="kicker">Why NovaRidge</p>
      <h2 id="why-h">A roofing company that runs like a <span class="grad-text">flight crew</span></h2>
      <p class="muted">Founded by a former aerospace QA engineer, NovaRidge applies checklists, sensors, and documentation to a trade that usually runs on guesswork.</p>
      <ul class="checklist">
        <li>${IC.check}<span><b>Drone-first inspections.</b> 4K aerial scans and thermal imaging on every estimate — nobody guesses from a ladder.</span></li>
        <li>${IC.check}<span><b>Desert-spec materials.</b> High-temp underlayments and Class-A systems chosen for 115&deg;F summers, not national averages.</span></li>
        <li>${IC.check}<span><b>Radical documentation.</b> Before/after photo sets, moisture maps, and a signed QA checklist delivered with every invoice.</span></li>
        <li>${IC.check}<span><b>Local &amp; accountable.</b> One office, one license, one warranty — backed from Tenaya Way, not a franchise call center.</span></li>
      </ul>
    </div>
    <div class="tech-panel rv">
      <p class="kicker">Live project telemetry</p>
      <div class="tech-rows">
        <div class="tech-row"><span>Inspection method</span><b>4K drone + FLIR thermal</b></div>
        <div class="tech-row"><span>Avg. replacement time</span><b>2.6 days</b></div>
        <div class="tech-row"><span>Underlayment rating</span><b>265&deg;F high-temp</b></div>
        <div class="tech-row"><span>Jobsite cleanup</span><b>Daily magnet sweep</b></div>
        <div class="tech-row"><span>Warranty registration</span><b>Digital, transferable</b></div>
        <div class="tech-row"><span>Emergency response</span><b>Same-day tarping</b></div>
      </div>
    </div>
  </div>
</section>

<section aria-labelledby="proc-h" style="padding-top:0">
  <div class="wrap">
    <div class="section-head rv"><p class="kicker">Process</p><h2 id="proc-h">From scan to signed-off in four steps</h2></div>
    <div class="steps">
      <div class="step rv"><h3>Drone scan</h3><p>Free 4K aerial + thermal inspection with a same-day photo report.</p></div>
      <div class="step rv"><h3>Exact quote</h3><p>Line-item pricing from measured data. No allowances, no surprises.</p></div>
      <div class="step rv"><h3>Build</h3><p>Dedicated crew, daily cleanup, permits and inspections handled.</p></div>
      <div class="step rv"><h3>QA &amp; warranty</h3><p>Signed checklist, final drone pass, and your registered warranty.</p></div>
    </div>
  </div>
</section>

<section aria-labelledby="area-h" style="padding-top:0">
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
${ctaBand('Your roof, future-proofed.', 'Book a free drone inspection this week — get the full photo report whether you hire us or not.')}
`;
  return layout({
    pathSeg: '', current: 'HOME',
    title: 'NovaRidge Roofing | Las Vegas Roofing Company — Repair, Replacement & Tile',
    desc: 'Las Vegas roofing done right: drone inspections, roof replacement, tile re-felts, leak repair, and cool-roof coatings. Licensed & insured. Free quotes — (702) 555-0184.',
    body,
  });
}

function servicePage(s) {
  const crumbs = [['Home', ''], ['Services', null], [s.name, null]];
  const body = `
<div class="sub-hero">
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="wrap">
    ${crumbsHtml('{{rel}}', [['Home', ''], [s.name, null]])}
    <p class="kicker">Service</p>
    <h1>${s.hero.replace(/^(.+?)([\.\!])$/, '$1$2')}</h1>
    <p class="lede muted" style="max-width:640px;font-size:1.1rem">${s.lede}</p>
    <div class="hero-ctas"><a class="btn btn-primary" href="{{rel}}contact/">Get a Free Quote</a><a class="btn btn-ghost" href="${SITE.phoneHref}">${SITE.phone}</a></div>
  </div>
</div>
<section style="padding-top:clamp(30px,5vw,54px)">
  <div class="wrap split" style="align-items:start">
    <div class="prose rv">
      ${s.body.map(([h, p]) => `<h2>${h}</h2><p>${p}</p>`).join('')}
    </div>
    <div class="tech-panel rv" style="position:sticky;top:96px">
      <h3>What's included</h3>
      <ul class="checklist">${s.bullets.map((b) => `<li>${IC.check}<span>${b}</span></li>`).join('')}</ul>
      <a class="btn btn-primary" href="{{rel}}contact/" style="margin-top:22px;width:100%">Book Free Inspection</a>
    </div>
  </div>
</section>
${faqHtml(s.faqs)}
${ctaBand(`Ready for ${s.name.toLowerCase()}?`, 'Free drone inspection, photo report, and a line-item quote — usually within 48 hours.')}
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
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="wrap">
    ${crumbsHtml('{{rel}}', [['Home', ''], [a.name, null]])}
    <p class="kicker">Service Area</p>
    <h1>Roofing in <span class="grad-text">${a.name}</span></h1>
    <p class="lede muted" style="max-width:640px;font-size:1.1rem">${a.blurb}</p>
    <div class="hero-ctas"><a class="btn btn-primary" href="{{rel}}contact/">Get a Free Quote</a><a class="btn btn-ghost" href="${SITE.phoneHref}">${SITE.phone}</a></div>
  </div>
</div>
<section style="padding-top:clamp(30px,5vw,54px)">
  <div class="wrap split" style="align-items:start">
    <div class="prose rv">
      ${a.body.map(([h, p]) => `<h2>${h}</h2><p>${p}</p>`).join('')}
      <h2>ZIP codes we cover in ${a.name}</h2><p>${a.zips}</p>
    </div>
    <div class="tech-panel rv" style="position:sticky;top:96px">
      <h3>Services in ${a.name}</h3>
      <ul class="checklist">${SERVICES.map((s) => `<li>${IC.check}<span><a href="{{rel}}services/${s.slug}/">${s.name}</a></span></li>`).join('')}</ul>
      <a class="btn btn-primary" href="{{rel}}contact/" style="margin-top:22px;width:100%">Book Free Inspection</a>
    </div>
  </div>
</section>
${ctaBand(`Need a roofer in ${a.name}?`, 'Crews staged nearby — free drone inspection and same-day storm response.')}
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
    ['Why "starting at" prices?', 'Every roof differs in pitch, layers, decking condition, and access. These floors reflect real, recent Vegas Valley jobs — your drone-measured quote is exact and line-itemed.'],
    ['Do you offer financing?', 'Yes — 12-month same-as-cash and longer fixed-rate terms through our lending partners, with instant soft-pull prequalification that doesn’t affect your credit.'],
    ['Is the inspection really free?', 'Completely. You get the full drone photo report and moisture findings whether you hire us or not. No conditions.'],
  ];
  const body = `
<div class="sub-hero">
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="wrap">
    ${crumbsHtml('{{rel}}', [['Home', ''], ['Pricing', null]])}
    <p class="kicker">Pricing</p>
    <h1>Transparent, measured, <span class="grad-text">no surprises</span></h1>
    <p class="lede muted" style="max-width:640px;font-size:1.1rem">Roofing quotes shouldn't be a mystery. Here's where our most common projects start — your exact price comes from drone-measured data.</p>
  </div>
</div>
<section style="padding-top:clamp(30px,5vw,54px)">
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
    <p class="muted rv" style="margin-top:26px;font-size:.9rem">Flat roof &amp; silicone coating systems are quoted per square foot after a moisture scan — typically <b>$3.25–$5.50/sq ft</b> for restoration coatings.</p>
  </div>
</section>
${faqHtml(faqs)}
${ctaBand('Want a real number?', 'Free drone measurement and a line-item quote — most delivered within 48 hours of the scan.')}
`;
  return layout({
    pathSeg: 'pricing', current: 'pricing',
    title: `Roofing Prices in Las Vegas — Transparent Starting Rates | ${SITE.name}`,
    desc: 'See what roofing really costs in Las Vegas: repairs from $349, tile re-felts from $7.50/sq ft, full replacements from $9,800. Free drone-measured quotes.',
    body,
    schema: [crumbsSchema([['Home', '/'], ['Pricing', '/pricing/']]), faqSchema(faqs)],
  });
}

function aboutPage() {
  const body = `
<div class="sub-hero">
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="wrap">
    ${crumbsHtml('{{rel}}', [['Home', ''], ['About', null]])}
    <p class="kicker">About Us</p>
    <h1>The crew rebuilding roofing's <span class="grad-text">reputation</span></h1>
    <p class="lede muted" style="max-width:640px;font-size:1.1rem">NovaRidge was founded on a simple bet: treat roofing like aerospace — measure everything, document everything — and customers will never go back to guesswork.</p>
  </div>
</div>
<section style="padding-top:clamp(30px,5vw,54px)">
  <div class="wrap split" style="align-items:start">
    <div class="prose rv">
      <h2>Our story</h2>
      <p>NovaRidge Roofing was started in 2019 by Adrian Vale, a former aerospace quality-assurance engineer who watched three different contractors misdiagnose the same leak on his mother's Henderson home. The problem wasn't skill — it was process. Nobody measured. Nobody documented. Everybody guessed.</p>
      <p>So he built the roofing company he couldn't hire: drone scans instead of ladder glances, thermal imaging instead of hunches, signed QA checklists instead of "trust me." Six years later, NovaRidge has completed 2,400+ projects across the Vegas Valley with a 4.9-star average — and still photographs every single deck before a shingle goes on.</p>
      <h2>What we believe</h2>
      <ul>
        <li><b>Data beats opinion.</b> Every quote is built from measured, photographed evidence you can see yourself.</li>
        <li><b>The desert is different.</b> Materials and methods are chosen for 115&deg;F heat, UV, and monsoon wind — not national defaults.</li>
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
    title: `About NovaRidge Roofing — Las Vegas' Data-Driven Roofers | ${SITE.name}`,
    desc: 'Founded by an aerospace QA engineer, NovaRidge Roofing brings drone scans, thermal imaging, and documented quality to 2,400+ Las Vegas roofs since 2019.',
    body,
    schema: [crumbsSchema([['Home', '/'], ['About', '/about/']])],
  });
}

function contactPage() {
  const body = `
<div class="sub-hero">
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="wrap">
    ${crumbsHtml('{{rel}}', [['Home', ''], ['Contact', null]])}
    <p class="kicker">Contact</p>
    <h1>Let's look at your <span class="grad-text">roof</span></h1>
    <p class="lede muted" style="max-width:640px;font-size:1.1rem">Call, email, or send the form — a real person from our Tenaya Way office responds within 30 minutes during business hours.</p>
  </div>
</div>
${ctaBand('Talk to a roofing specialist now.', 'Or send the form and we’ll call you — usually in under half an hour.')}
<section style="padding-top:0">
  <div class="wrap area-flex">
    <div class="rv">
      <h2>Visit or reach us</h2>
      <ul class="checklist">
        <li>${IC.pin}<span><b>Office.</b> ${SITE.street}, ${SITE.city}, ${SITE.state} ${SITE.zip}</span></li>
        <li>${IC.bolt}<span><b>Phone.</b> <a href="${SITE.phoneHref}">${SITE.phone}</a> — 24/7 emergency line for active leaks</span></li>
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
    title: `Contact NovaRidge Roofing — Free Quotes in Las Vegas | ${SITE.name}`,
    desc: 'Get a free roof inspection in Las Vegas. Call (702) 555-0184 or send the form — NovaRidge responds within 30 minutes during business hours.',
    body,
    schema: [crumbsSchema([['Home', '/'], ['Contact', '/contact/']])],
  });
}

function notFoundPage() {
  const body = `
<div class="sub-hero" style="min-height:60svh;display:flex;align-items:center">
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="wrap">
    <p class="kicker">404</p>
    <h1>This page blew off in the <span class="grad-text">monsoon</span></h1>
    <p class="lede muted" style="max-width:560px;font-size:1.1rem">The page you're looking for doesn't exist — but your roof still might need us.</p>
    <div class="hero-ctas"><a class="btn btn-primary" href="/">Back to Home</a><a class="btn btn-ghost" href="${SITE.phoneHref}">${SITE.phone}</a></div>
  </div>
</div>`;
  return layout({
    pathSeg: '', current: '',
    title: `Page Not Found | ${SITE.name}`,
    desc: 'The page you requested could not be found. NovaRidge Roofing — Las Vegas roof repair and replacement.',
    body,
  }).replace('<link rel="canonical"', '<meta name="robots" content="noindex">\n<link rel="canonical"');
}

/* ---------- emit ---------- */
const OUT = [
  ['index.html', homePage()],
  ...SERVICES.map((s) => [`services/${s.slug}/index.html`, servicePage(s)]),
  ...AREAS.map((a) => [`service-areas/${a.slug}/index.html`, areaPage(a)]),
  ['pricing/index.html', pricingPage()],
  ['about/index.html', aboutPage()],
  ['contact/index.html', contactPage()],
  ['404.html', notFoundPage()],
];

for (const [rel, html] of OUT) {
  const f = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, esc(html));
}

/* sitemap + robots */
const urls = ['', ...SERVICES.map((s) => `services/${s.slug}/`), ...AREAS.map((a) => `service-areas/${a.slug}/`), 'pricing/', 'about/', 'contact/'];
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

Sitemap: ${SITE.domain}/sitemap.xml
`);
fs.writeFileSync(path.join(ROOT, '.nojekyll'), '');

/* standalone logo + favicon svg */
const LOGO_SVG = `<svg width="360" height="96" viewBox="0 0 360 96" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NovaRidge Roofing logo">
<defs><linearGradient id="lg" x1="16" y1="66" x2="72" y2="26" gradientUnits="userSpaceOnUse"><stop stop-color="#00E5FF"/><stop offset="1" stop-color="#FFB300"/></linearGradient>
<linearGradient id="lt" x1="150" y1="0" x2="290" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#00E5FF"/><stop offset="1" stop-color="#FFB300"/></linearGradient></defs>
<rect width="360" height="96" rx="18" fill="#060A14"/>
<path d="M44 11.5 76.7 30.25v37.5L44 86.5 11.3 67.75v-37.5Z" stroke="rgba(148,184,255,.4)" stroke-width="2.4"/>
<path d="M21 60 44 37l23 23" stroke="url(#lg)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31 68 44 55l13 13" stroke="rgba(0,229,255,.45)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="44" cy="37" r="4.4" fill="#FFB300"/><circle cx="21" cy="60" r="3" fill="#00E5FF"/><circle cx="67" cy="60" r="3" fill="#00E5FF"/>
<text x="96" y="52" font-family="Segoe UI,Arial,sans-serif" font-size="30" font-weight="800" letter-spacing="4" fill="#E8EFFB">NOVA<tspan fill="url(#lt)">RIDGE</tspan></text>
<text x="98" y="74" font-family="Segoe UI,Arial,sans-serif" font-size="11" font-weight="600" letter-spacing="7" fill="#9AABC6">ROOFING &#183; LAS VEGAS</text>
</svg>`;
fs.mkdirSync(path.join(ROOT, 'assets/img'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'assets/img/logo.svg'), LOGO_SVG);

const FAV_SVG = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="g" x1="8" y1="34" x2="40" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#00E5FF"/><stop offset="1" stop-color="#FFB300"/></linearGradient></defs>
<rect width="48" height="48" rx="10" fill="#060A14"/>
<path d="M10 31 24 17l14 14" stroke="url(#g)" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 35.5 24 28l7.5 7.5" stroke="rgba(0,229,255,.5)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="24" cy="17" r="3" fill="#FFB300"/></svg>`;
fs.writeFileSync(path.join(ROOT, 'favicon.svg'), FAV_SVG);

console.log(`Built ${OUT.length} pages + sitemap.xml + robots.txt + logo assets.`);
