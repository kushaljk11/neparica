import fs from 'fs';

const content = fs.readFileSync('./audit-data/_value-proposition.html', 'utf8');

// Search for mentions of Cost, Delivery, Quality, Convenience, Partnership
const keywords = ['Cost', 'Delivery', 'Quality', 'Convenience', 'Partnership', 'Discover', 'Design', 'Develop', 'Deliver'];

keywords.forEach(kw => {
  const regex = new RegExp(`([^>]{0,100}${kw}[^<]{0,250})`, 'gi');
  const matches = [...content.matchAll(regex)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  const unique = [...new Set(matches)].slice(0, 5);
  console.log(`=== KEYWORD: ${kw} ===`);
  unique.forEach(u => console.log(' - ' + u));
});
