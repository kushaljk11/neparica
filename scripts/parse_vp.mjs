import fs from 'fs';

const html = fs.readFileSync('./audit-data/_value-proposition.html', 'utf8');

// Find all vc_column or wpb_text_column or text blocks
const regex = /<(?:div|p|h[1-6])[^>]*class=["'][^"']*(?:vc_column_text|wpb_text_column|aio-icon-description|aio-icon-title)[^"']*["'][^>]*>([\s\S]*?)<\/(?:div|p|h[1-6])>/gi;
let m;
const blocks = [];
while ((m = regex.exec(html)) !== null) {
  const text = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text && text.length > 15) {
    blocks.push(text);
  }
}
console.log('Value proposition blocks:');
blocks.forEach((b, i) => console.log(`${i+1}: ${b}`));
