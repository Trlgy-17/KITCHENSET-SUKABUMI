const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const prosesDir = 'D:\\KITCHENSET SUKABUMI.ID\\PROSES';
const targetDir = path.join(__dirname, '..', 'public', 'process');

async function run() {
  const srcPath = path.join(prosesDir, 'INSTALASI & SERAH TERIMA.png');
  const destPath = path.join(targetDir, '05-instalasi.webp');
  
  await sharp(srcPath)
    .resize({ width: 900, height: 600, fit: 'cover', position: 'bottom' })
    .webp({ quality: 90 })
    .toFile(destPath);
  console.log('05-instalasi.webp updated with bottom position!');
}

run().catch(console.error);
