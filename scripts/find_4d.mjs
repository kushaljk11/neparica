import fs from 'fs';

const home = fs.readFileSync('./audit-data/home.html', 'utf8');

// Find 4D approach section
const idx4d = home.toLowerCase().indexOf('4d');
console.log('4D index:', idx4d);
if (idx4d !== -1) {
  console.log(home.substring(idx4d - 200, idx4d + 2000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

// Also search for "Discover" in home.html
const matches = [...home.matchAll(/Discover[\s\S]{10,200}?Deliver/gi)];
matches.forEach(m => console.log('Match:', m[0].replace(/<[^>]+>/g, ' ')));

// Check sections in home.html
const headingMatches = [...home.matchAll(/<(?:h[1-6])[^>]*>([\s\S]*?)<\/(?:h[1-6])>/gi)]
  .map(m => m[1].replace(/<[^>]+>/g, '').trim())
  .filter(Boolean);
console.log('--- ALL HEADINGS IN HOME ---', headingMatches);
