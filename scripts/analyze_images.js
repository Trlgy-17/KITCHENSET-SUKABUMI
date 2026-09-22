const fs = require('fs');

const data = JSON.parse(fs.readFileSync('gdrive_manifest.json', 'utf8'));

// Filter for images only
const imageExtensions = ['jpg', 'jpeg', 'png', 'webp'];
const images = data.filter(item => {
  const ext = item.name.split('.').pop().toLowerCase();
  return imageExtensions.includes(ext) && !item.name.toLowerCase().includes('thumbnail');
});

console.log(`Total images found: ${images.length}`);

// Group by top-level category and project folder
const grouped = {};
images.forEach(img => {
  const parts = img.relativePath.split('\\');
  const cat = parts[0];
  const sub = parts[1] || 'root';
  const project = parts.length > 2 ? parts[2] : sub;

  if (!grouped[cat]) grouped[cat] = {};
  if (!grouped[cat][project]) grouped[cat][project] = [];
  grouped[cat][project].push(img);
});

for (const [cat, projects] of Object.entries(grouped)) {
  console.log(`\n=== Category: ${cat} (${Object.keys(projects).length} projects) ===`);
  const sortedProjects = Object.entries(projects).sort((a, b) => b[1].length - a[1].length);
  for (const [projName, projImages] of sortedProjects.slice(0, 5)) {
    console.log(`  - ${projName}: ${projImages.length} images (e.g. ${projImages[0].name})`);
  }
}
