/* link/schema/meta audit over built pages */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const pages = ['index.html', '404.html', 'about/index.html', 'contact/index.html', 'pricing/index.html',
  ...fs.readdirSync(path.join(ROOT, 'services')).map((s) => `services/${s}/index.html`),
  ...fs.readdirSync(path.join(ROOT, 'service-areas')).map((s) => `service-areas/${s}/index.html`)];
let errs = [];
for (const p of pages) {
  const html = fs.readFileSync(path.join(ROOT, p), 'utf8');
  const dir = path.dirname(path.join(ROOT, p));
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { errs.push(`${p}: bad JSON-LD: ${e.message}`); }
  }
  for (const m of html.matchAll(/(?:href|src|data-base|poster)="([^"]+)"/g)) {
    let u = m[1];
    if (/^(https?:|mailto:|tel:|#|data:)/.test(u)) continue;
    u = u.split('#')[0];
    let f = path.normalize(path.join(dir, u));
    if (u.endsWith('/') || u === '') f = path.join(f, 'index.html');
    if (fs.existsSync(f)) continue;
    if (fs.existsSync(f + '.mp4')) continue; // data-base stem
    errs.push(`${p}: broken ref ${m[1]}`);
  }
  if (!/<link rel="canonical"/.test(html)) errs.push(`${p}: no canonical`);
  if (!/<meta name="description"/.test(html)) errs.push(`${p}: no meta desc`);
  if (!/<html lang="en">/.test(html)) errs.push(`${p}: no lang`);
  if (!/<h1[\s>]/.test(html)) errs.push(`${p}: no h1`);
}
console.log(errs.length ? errs.join('\n') : `ALL CLEAN: ${pages.length} pages — JSON-LD parses, all local refs resolve, canonical/meta/h1/lang present`);
