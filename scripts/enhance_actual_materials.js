const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const matDir = 'D:\\KITCHENSET SUKABUMI.ID\\Material';
const targetDir = path.join(__dirname, '..', 'public', 'materials');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function enhanceImages() {
  // 1. BLOCKBOARD
  console.log('Processing BLOCKBOARD.jpg...');
  await sharp(path.join(matDir, 'BLOCKBOARD.jpg'))
    .resize(900, 675, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.03, saturation: 1.05 })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
    .webp({ quality: 90 })
    .toFile(path.join(targetDir, 'blockboard-actual.webp'));

  // 2. MULTIPLEKS
  console.log('Processing MULTIPLEKS.jpg...');
  await sharp(path.join(matDir, 'MULTIPLEKS.jpg'))
    .resize(900, 675, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.02, saturation: 1.04 })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
    .webp({ quality: 90 })
    .toFile(path.join(targetDir, 'multipleks-actual.webp'));

  // 3. PVC
  console.log('Processing PVC.jpg...');
  await sharp(path.join(matDir, 'PVC.jpg'))
    .resize(900, 675, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.02, saturation: 1.02 })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
    .webp({ quality: 90 })
    .toFile(path.join(targetDir, 'pvc-actual.webp'));

  // 4. KITCHEN
  console.log('Processing KITCHEN.jpg...');
  await sharp(path.join(matDir, 'KITCHEN.jpg'))
    .resize(900, 675, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.02, saturation: 1.03 })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 1.5 })
    .webp({ quality: 90 })
    .toFile(path.join(targetDir, 'kitchen-actual.webp'));

  console.log('All 4 images processed and enhanced successfully!');
}

enhanceImages().catch(console.error);
