import fs from 'fs';
import path from 'path';
import https from 'https';

const blogDir = path.resolve('public', 'images', 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

const images = [
  {
    name: 'blog-health-check.jpg',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'blog-cloud-solutions.jpg',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'blog-custom-software.jpg',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'blog-digital-marketing.jpg',
    url: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'blog-cybersecurity.jpg',
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'blog-offshore-development.jpg',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading 6 blog featured images...');
  for (const item of images) {
    const dest = path.join(blogDir, item.name);
    try {
      await downloadFile(item.url, dest);
      const stat = fs.statSync(dest);
      console.log(`✓ Downloaded ${item.name} (${Math.round(stat.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
    }
  }
}

main();
