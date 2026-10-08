import fs from 'fs';

function dumpFile(filePath, start = 0, count = 50) {
  const content = fs.readFileSync(filePath, 'utf8');
  const clean = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  const matches = [...clean.matchAll(/<(?:div|h1|h2|h3|h4|h5|h6|p|span|li)[^>]*class=["'][^"']*(?:vc_column_text|wpb_wrapper|fancy-title|title|desc|content|text)[^"']*["'][^>]*>([\s\S]*?)<\/(?:div|h1|h2|h3|h4|h5|h6|p|span|li)>/gi)];
  const texts = matches.map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).filter(t => t.length > 20);
  const unique = [...new Set(texts)];
  console.log(`=== ${filePath} (Total: ${unique.length}) ===`);
  unique.slice(start, start + count).forEach((t, i) => console.log(`${start + i + 1}: ${t}`));
}

dumpFile('./audit-data/home.html', 25, 40);
dumpFile('./audit-data/_value-proposition.html', 0, 40);
dumpFile('./audit-data/_about-us.html', 0, 30);
dumpFile('./audit-data/growth-strategy.html', 0, 30);
dumpFile('./audit-data/contact-us.html', 0, 30);
