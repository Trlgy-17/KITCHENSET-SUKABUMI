const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = 'D:\\KITCHENSET SUKABUMI.ID\\TENTANG KAMI';
const targetDir = path.join(__dirname, '..', 'public', 'about');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function run() {
  // 1. PRODUKSI.png -> workshop-fabrikasi.webp
  console.log('Processing PRODUKSI.png...');
  await sharp(path.join(sourceDir, 'PRODUKSI.png'))
    .resize(800, 1000, { fit: 'cover', position: 'center' })
    .webp({ quality: 90 })
    .toFile(path.join(targetDir, 'workshop-fabrikasi.webp'));
  console.log('Saved workshop-fabrikasi.webp');

  // 2. INSTALASI & SERAH TERIMA.png -> instalasi-lokasi.webp
  console.log('Processing INSTALASI & SERAH TERIMA.png...');
  await sharp(path.join(sourceDir, 'INSTALASI & SERAH TERIMA.png'))
    .resize(800, 1000, { fit: 'cover', position: 'center' })
    .webp({ quality: 90 })
    .toFile(path.join(targetDir, 'instalasi-lokasi.webp'));
  console.log('Saved instalasi-lokasi.webp');

  console.log('TENTANG KAMI images successfully processed!');
}

run().catch(console.error);
