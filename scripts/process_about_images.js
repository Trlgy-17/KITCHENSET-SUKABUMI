const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\d32c0585-2130-4ae7-a385-091f72cd9353';
const targetDir = path.join(__dirname, '..', 'public', 'about');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const mapping = [
  { src: 'workshop_fabrikasi_1790020327699.jpg', dest: 'workshop-fabrikasi.webp' },
  { src: 'instalasi_lokasi_1790020404938.jpg', dest: 'instalasi-lokasi.webp' },
];

async function run() {
  for (const item of mapping) {
    const srcPath = path.join(brainDir, item.src);
    const destPath = path.join(targetDir, item.dest);
    
    console.log(`Processing ${item.src} -> ${item.dest}...`);
    await sharp(srcPath)
      .resize({ width: 800, height: 1000, fit: 'cover' })
      .webp({ quality: 88 })
      .toFile(destPath);
    console.log(`Saved ${destPath}`);
  }
  console.log('All about section images successfully processed!');
}

run().catch(console.error);
