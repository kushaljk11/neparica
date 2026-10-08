import fs from 'fs';

['./audit-data/_news.html', './audit-data/blog.html'].forEach(f => {
  if (!fs.existsSync(f)) return;
  const c = fs.readFileSync(f, 'utf8');
  const articles = [...c.matchAll(/<article[^>]*>([\s\S]*?)<\/article>/gi)];
  console.log(`=== Articles in ${f} (Count: ${articles.length}) ===`);
  articles.forEach((a, i) => {
    const title = a[1].match(/<h\d[^>]*>([\s\S]*?)<\/h\d>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
    const date = a[1].match(/<time[^>]*>([\s\S]*?)<\/time>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() ||
                 a[1].match(/class=["'][^"']*date[^"']*["'][^>]*>([\s\S]*?)<\/[a-z]+>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
    const excerpt = a[1].match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
    const link = a[1].match(/href=["']([^"']+)["']/i)?.[1];
    console.log(`${i+1}: ${title} (${date}) -> Link: ${link}`);
    console.log(`   Excerpt: ${excerpt}`);
  });
});
