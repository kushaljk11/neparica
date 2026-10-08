import fs from 'fs';
import path from 'path';

// Let's inspect home.html to find exact logo, exact colors, exact navigation
const home = fs.readFileSync('./audit-data/home.html', 'utf8');

// Find logo
const logoMatches = [...home.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi)]
  .filter(m => m[0].toLowerCase().includes('logo') || m[1].toLowerCase().includes('logo'));

console.log('--- LOGO MATCHES ---');
logoMatches.forEach(m => console.log(m[1], 'ALT:', m[2]));

// Find CSS stylesheet links
const cssLinks = [...home.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('--- CSS LINKS (first 5) ---', cssLinks.slice(0, 5));

// Check navigation menu in home.html
const navMatches = [...home.matchAll(/<nav[^>]*>([\s\S]*?)<\/nav>/gi)];
console.log('--- NAV COUNT ---', navMatches.length);
if (navMatches.length > 0) {
  const menuLinks = [...navMatches[0][1].matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
    .map(m => ({ href: m[1], text: m[2].replace(/<[^>]+>/g, '').trim() }))
    .filter(m => m.text);
  console.log('--- MENU ITEMS ---', menuLinks);
}

// Find colors
const themeColorMatches = [...home.matchAll(/#([a-fA-F0-9]{6})/g)].map(m => m[0].toUpperCase());
const counts = {};
themeColorMatches.forEach(c => counts[c] = (counts[c] || 0) + 1);
const sortedColors = Object.entries(counts).sort((a,b)=>b[1]-a[1]);
console.log('--- TOP 25 HEX COLORS IN HOME ---');
console.table(sortedColors.slice(0, 25));

// Also check all links in home.html that might be contact or services
const allHrefs = [...home.matchAll(/href=["'](https?:\/\/[^"']+|(?:\/[^"']*))["']/gi)].map(m => m[1]);
const uniqueNeparicaHrefs = [...new Set(allHrefs.filter(h => h.includes('neparica.com') || h.startsWith('/')))];
console.log('--- ALL UNIQUE NEPARICA LINKS FOUND IN HOME ---');
console.log(uniqueNeparicaHrefs);
