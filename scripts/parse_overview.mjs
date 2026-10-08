import fs from 'fs';

['./audit-data/_company-overview.html', './audit-data/_vision-and-mission.html', './audit-data/_news.html', './audit-data/accounting-system.html'].forEach(f => {
  if (!fs.existsSync(f)) return;
  const c = fs.readFileSync(f, 'utf8');
  const idx = c.indexOf('role="main"');
  if (idx !== -1) {
    console.log('=== CONTENT OF ' + f + ' ===');
    const slice = c.substring(idx, idx + 4000).replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    console.log(slice.replace(/<[^>]+>/g, '\n').split('\n').map(l=>l.trim()).filter(l=>l.length > 20).slice(0, 15).join('\n---\n'));
  }
});
