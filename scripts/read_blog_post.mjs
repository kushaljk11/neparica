import fs from 'fs';

const c = fs.readFileSync('./audit-data/importance-of-website-health-check.html', 'utf8');
const idx = c.indexOf('role="main"');
if (idx !== -1) {
  const slice = c.substring(idx, idx + 4000).replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  const lines = slice.replace(/<[^>]+>/g, '\n').split('\n').map(l=>l.trim()).filter(l=>l.length > 20);
  console.log(lines.join('\n\n'));
}
