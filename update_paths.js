import fs from 'fs';

const index = fs.readFileSync('build/index.html', 'utf8');
fs.writeFileSync('build/index.html', index.replace(/href="/g, 'href="'));
