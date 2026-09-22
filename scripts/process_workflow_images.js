const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const prosesDir = 'D:\\KITCHENSET SUKABUMI.ID\\PROSES';
const targetDir = path.join(__dirname, '..', 'public', 'process');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const items = [
  { src: 'KONSULTASI.jpg', dest: '01-konsultasi.webp' },
  { src: 'SURVEY.png', dest: '02-survey.webp' },
  { src: 'DESIGN.png', dest: '03-design.webp' },
  { src: 'PRODUKSI.png', dest: '04-produksi.webp' },
  { src: 'INSTALASI & SERAH TERIMA.png', dest: '05-instalasi.webp' },
];

async function run() {
  for (const item of items) {
    const srcPath = path.join(prosesDir, item.src);
    const destPath = path.join(targetDir, item.dest);
    
    console.log(`Processing ${item.src} -> ${item.dest}...`);
    // Resize to max 1000px width/height while maintaining high quality, 4:3 or 16:10 friendly
    await sharp(srcPath)
      .resize({ width: 900, height: 600, fit: 'cover', position: 'center' })
      .webp({ quality: 88 })
      .toFile(destPath);
    console.log(`Saved ${destPath}`);
  }
  console.log('All process images successfully processed!');
}

run().catch(console.error);
