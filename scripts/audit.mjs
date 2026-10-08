import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.neparica.com';

async function fetchPage(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (!res.ok) return { url, status: res.status, text: null };
    const text = await res.text();
    return { url, status: res.status, text };
  } catch (err) {
    return { url, error: err.message };
  }
}

async function audit() {
  console.log('Fetching homepage...');
  const home = await fetchPage(BASE_URL);
  if (!home.text) {
    console.error('Failed to fetch homepage', home);
    return;
  }

  fs.mkdirSync('./audit-data', { recursive: true });
  fs.writeFileSync('./audit-data/home.html', home.text);

  // Extract all links
  const linkRegex = /href=["'](https?:\/\/[^"']+|(?:\/[^"']*))["']/gi;
  const links = new Set();
  let match;
  while ((match = linkRegex.exec(home.text)) !== null) {
    let href = match[1];
    if (href.startsWith('/')) {
      href = BASE_URL + href;
    }
    if (href.includes('neparica.com') && !href.includes('#') && !href.includes('wp-json') && !href.includes('wp-admin') && !href.includes('.css') && !href.includes('.js') && !href.includes('.jpg') && !href.includes('.png')) {
      links.add(href.replace(/\/$/, ''));
    }
  }

  console.log('Discovered internal links:', Array.from(links));

  // Extract logos
  const logoRegex = /src=["']([^"']*(?:logo|Logo)[^"']*)["']/gi;
  const logos = [];
  while ((match = logoRegex.exec(home.text)) !== null) {
    logos.push(match[1]);
  }
  console.log('Discovered logo URLs:', logos);

  // Extract colors from styles or inline CSS
  const hexRegex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g;
  const hexMatches = home.text.match(hexRegex) || [];
  const colorCounts = {};
  for (const c of hexMatches) {
    const upper = c.toUpperCase();
    colorCounts[upper] = (colorCounts[upper] || 0) + 1;
  }
  console.log('Top colors found in HTML:', Object.entries(colorCounts).sort((a,b)=>b[1]-a[1]).slice(0, 20));

  // Fetch each discovered page
  const auditResults = {};
  for (const pageUrl of links) {
    console.log(`Fetching ${pageUrl}...`);
    const pageData = await fetchPage(pageUrl);
    if (pageData.text) {
      const slug = pageUrl.replace(BASE_URL, '').replace(/[^a-zA-Z0-9_-]/g, '_') || 'home';
      fs.writeFileSync(`./audit-data/${slug}.html`, pageData.text);
      auditResults[pageUrl] = {
        title: pageData.text.match(/<title>(.*?)<\/title>/i)?.[1] || '',
        h1: [...pageData.text.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()),
        h2: [...pageData.text.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()),
        h3: [...pageData.text.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()),
      };
    }
  }

  fs.writeFileSync('./audit-data/audit_summary.json', JSON.stringify({ links: Array.from(links), logos, auditResults }, null, 2));
  console.log('Audit completed and summary saved.');
}

audit();
