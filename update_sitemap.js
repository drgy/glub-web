import fs from 'fs';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://glub.drgy.dev/</loc>
		<lastmod>${(new Date()).toISOString()}</lastmod>
		<changefreq>yearly</changefreq>
	</url>
</urlset>`

fs.writeFileSync('build/sitemap.xml', sitemap);
