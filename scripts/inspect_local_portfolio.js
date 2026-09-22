const fs = require('fs');
const path = require('path');

const root = 'D:\\KITCHENSET SUKABUMI.ID\\Portofolio';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results.push(...walk(fullPath));
    } else {
      results.push({
        fullPath,
        relativePath: path.relative(root, fullPath),
        size: stat.size,
        ext: path.extname(file).toLowerCase()
      });
    }
  });
  return results;
}

const allFiles = walk(root);
console.log(`Total files in D:\\KITCHENSET SUKABUMI.ID\\Portofolio: ${allFiles.length}`);

const grouped = {};
allFiles.forEach(f => {
  const topFolder = f.relativePath.split(path.sep)[0];
  if (!grouped[topFolder]) grouped[topFolder] = [];
  grouped[topFolder].push(f);
});

for (const [folder, files] of Object.entries(grouped)) {
  console.log(`\n=== Folder: ${folder} (${files.length} files) ===`);
  const imageFiles = files.filter(f => ['.jpg', '.jpeg', '.png', '.webp'].includes(f.ext));
  console.log(`  Images: ${imageFiles.length}`);
  imageFiles.forEach(img => {
    console.log(`    - ${img.relativePath} (${(img.size / 1024).toFixed(0)} KB)`);
  });
}
