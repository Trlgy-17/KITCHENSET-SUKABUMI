const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const API_KEY = 'AIzaSyAWGrfCCr7albM3lmCc937gx4uIphbpeKQ';
const curation = JSON.parse(fs.readFileSync('curation_plan.json', 'utf8'));

async function fetchImageBuffer(id) {
  // Try high-speed Google User Content CDN
  try {
    const res = await fetch(`https://lh3.googleusercontent.com/d/${id}`);
    if (res.ok) {
      const arrayBuffer = await res.arrayBuffer();
      if (arrayBuffer.byteLength > 1000) {
        return Buffer.from(arrayBuffer);
      }
    }
  } catch (e) {
    // fallback
  }

  // Fallback to Drive API alt=media
  const apiRes = await fetch(`https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${API_KEY}`);
  if (apiRes.ok) {
    const arrayBuffer = await apiRes.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }

  throw new Error(`Failed to download image ${id}`);
}

async function processAll() {
  const resultManifest = {};

  for (const group of curation) {
    console.log(`\nProcessing category: ${group.category} (${group.images.length} images)...`);
    const targetDir = path.join(__dirname, '..', group.outputDir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    resultManifest[group.category] = [];

    for (let i = 0; i < group.images.length; i++) {
      const img = group.images[i];
      const targetName = `${group.category}-${i + 1}.webp`;
      const targetPath = path.join(targetDir, targetName);
      const publicPath = `/portfolio/drive/${group.category}/${targetName}`;

      try {
        console.log(`  Downloading [${i + 1}/${group.images.length}]: ${img.name} (${img.relativePath})...`);
        const buffer = await fetchImageBuffer(img.id);

        // Enhance with Sharp
        await sharp(buffer)
          .rotate() // Auto-orient EXIF
          .resize({ width: 1600, height: 1200, fit: 'inside', withoutEnlargement: true })
          .modulate({
            brightness: 1.03, // Slight boost for well-lit interior
            saturation: 1.04  // Rich warm wood and clean paint finish
          })
          .sharpen({
            sigma: 0.8,
            m1: 0.3,
            m2: 1.2
          })
          .webp({ quality: 86, effort: 4 })
          .toFile(targetPath);

        const stat = fs.statSync(targetPath);
        console.log(`    ✓ Enhanced -> ${targetName} (${(stat.size / 1024).toFixed(0)} KB)`);

        resultManifest[group.category].push({
          id: img.id,
          originalName: img.name,
          sourcePath: img.relativePath,
          publicPath: publicPath,
          sizeKb: Math.round(stat.size / 1024)
        });
      } catch (err) {
        console.error(`    ✗ Error processing ${img.name}:`, err.message);
      }
    }
  }

  fs.writeFileSync('enhanced_drive_manifest.json', JSON.stringify(resultManifest, null, 2));
  console.log('\nAll images downloaded and enhanced successfully!');
}

processAll();
