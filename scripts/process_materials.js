const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\d32c0585-2130-4ae7-a385-091f72cd9353';
const targetDir = path.join(__dirname, '..', 'public', 'materials');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const mapping = [
  { src: 'mat_blockboard_1790015138129.jpg', dest: 'blockboard-18mm.webp' },
  { src: 'mat_plywood_1790015187186.jpg', dest: 'multipleks-plywood.webp' },
  { src: 'mat_pvc_board_1790015256991.jpg', dest: 'pvc-board-waterproof.webp' },
  { src: 'mat_aluminium_1790015286981.jpg', dest: 'aluminium-profile.webp' },
];

async function run() {
  for (const item of mapping) {
    const srcPath = path.join(brainDir, item.src);
    const destPath = path.join(targetDir, item.dest);
    
    console.log(`Processing ${item.src} -> ${item.dest}...`);
    await sharp(srcPath)
      .resize({ width: 900, height: 675, fit: 'cover' })
      .webp({ quality: 88 })
      .toFile(destPath);
    console.log(`Saved ${destPath}`);
  }
  console.log('All material images successfully processed!');
}

run().catch(console.error);
