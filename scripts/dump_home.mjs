import fs from 'fs';

function dumpSections(htmlFile) {
  const content = fs.readFileSync(htmlFile, 'utf8');
  // strip scripts and styles
  const clean = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  // Extract all text inside wpb_wrapper or vc_column_text or dt-fancy-title
  const matches = [...clean.matchAll(/<(div|h1|h2|h3|h4|h5|h6|p|span|li)[^>]*class=["'][^"']*(?:vc_column_text|wpb_wrapper|fancy-title|title|desc|content|text)[^"']*["'][^>]*>([\s\S]*?)<\/\1>/gi)];
  console.log(`=== ${htmlFile} ===`);
  const texts = matches.map(m => m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).filter(t => t.length > 20);
  const unique = [...new Set(texts)];
  unique.slice(0, 30).forEach((t, i) => console.log(`${i+1}: ${t.slice(0, 150)}...`));
}

dumpSections('./audit-data/home.html');
