import fs from 'fs';

const index = fs.readFileSync('build/index.html', 'utf8');
fs.writeFileSync('build/index.html', index.replace(/\/_app/g, './_app'));
