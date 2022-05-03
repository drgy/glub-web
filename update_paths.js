const fs = require('fs');

const index = fs.readFileSync('build/index.html', 'utf8');
fs.writeFileSync('build/index.html', index.replaceAll('href="/', 'href="'));
