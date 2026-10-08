import fs from 'fs';
import path from 'path';

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractPageData(filename) {
  const html = fs.readFileSync(path.join('./audit-data', filename), 'utf8');

  // Title
  const title = cleanText(html.match(/<title>(.*?)<\/title>/i)?.[1] || '');

  // Extract main content area (WordPress entry-content or vc_row or article or main)
  const headings = [];
  const hRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let hMatch;
  while ((hMatch = hRegex.exec(html)) !== null) {
    const text = cleanText(hMatch[2]);
    if (text && text.length < 200 && !text.includes('Leave a Reply') && !text.includes('Search') && !text.includes('Recent Posts')) {
      headings.push({ level: parseInt(hMatch[1]), text });
    }
  }

  // Extract paragraphs
  const paragraphs = [];
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let pMatch;
  while ((pMatch = pRegex.exec(html)) !== null) {
    const text = cleanText(pMatch[1]);
    if (text && text.length > 20 && !text.includes('Copyright') && !text.includes('Theme:') && !text.includes('cookie') && !text.includes('function(')) {
      paragraphs.push(text);
    }
  }

  // Extract lists/bullets
  const listItems = [];
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let liMatch;
  while ((liMatch = liRegex.exec(html)) !== null) {
    const text = cleanText(liMatch[1]);
    if (text && text.length > 5 && text.length < 300 && !text.includes('WordPress') && !text.includes('Menu')) {
      listItems.push(text);
    }
  }

  return { title, headings, paragraphs, listItems };
}

const files = fs.readdirSync('./audit-data').filter(f => f.endsWith('.html') && !f.includes('feed') && !f.includes('xmlrpc'));
const extracted = {};

files.forEach(f => {
  const key = f.replace('.html', '').replace(/^_/, '');
  extracted[key] = extractPageData(f);
  console.log(`Extracted ${key}: ${extracted[key].headings.length} headings, ${extracted[key].paragraphs.length} paragraphs`);
});

fs.mkdirSync('./src/data', { recursive: true });
fs.writeFileSync('./src/data/raw_content.json', JSON.stringify(extracted, null, 2));
console.log('Saved raw_content.json successfully!');
