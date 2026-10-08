import fs from 'fs';

function extractMainText(filename) {
  const filepath = `./audit-data/${filename}`;
  if (!fs.existsSync(filepath)) return null;
  const c = fs.readFileSync(filepath, 'utf8');
  const idx = c.indexOf('role="main"');
  if (idx === -1) return null;
  const footerIdx = c.indexOf('<footer');
  const end = footerIdx !== -1 ? footerIdx : idx + 10000;
  const slice = c.substring(idx, end)
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  const lines = slice.replace(/<[^>]+>/g, '\n')
    .split('\n')
    .map(l => l.trim().replace(/&amp;/g, '&').replace(/&#8211;/g, '–').replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'))
    .filter(l => l.length > 15 && !l.includes('Facebook') && !l.includes('Twitter') && !l.includes('CONTINENTAL') && !l.includes('Reserved @ Neparica') && !l.includes('deneme bonusu'));

  return [...new Set(lines)];
}

const servicesMap = {
  'growth-strategy': 'growth-strategy.html',
  'cloud-hosting-and-support': 'cloud-hosting-and-support.html',
  'digital-marketing': 'digital-marketing.html',
  'remote-and-offshore-team-building': 'remote-and-offshore-team-building.html',
  'it-staffing': 'it-staffing.html',
  'other-it-services': 'other-it-services.html',
  'it-consulting': 'it-consulting.html',
  'project-outsourcing': 'project-outsourcing.html'
};

const solutionsMap = {
  'e-commerce': '_e-commerce.html',
  'customized-software': 'customized-software-development.html',
  'customized-web-applications': '_customized-web-applications.html',
  'mobile-apps': '_mobile-apps.html',
  'website-design': '_dynamic-websites-with-integrated-cms.html',
  'affordable-erp': '_affordable-erp-for-midsize-companies.html',
  'accounting-system': 'accounting-system.html'
};

console.log('--- EXTRACTING SERVICES ---');
for (const [k, v] of Object.entries(servicesMap)) {
  const lines = extractMainText(v);
  console.log(`${k}: ${lines ? lines.length : 0} lines`);
  if (lines) console.log(lines.slice(0, 3).join(' | '));
}

console.log('--- EXTRACTING SOLUTIONS ---');
for (const [k, v] of Object.entries(solutionsMap)) {
  const lines = extractMainText(v);
  console.log(`${k}: ${lines ? lines.length : 0} lines`);
  if (lines) console.log(lines.slice(0, 3).join(' | '));
}
