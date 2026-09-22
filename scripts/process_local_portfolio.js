const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = 'D:\\KITCHENSET SUKABUMI.ID\\Portofolio';
const publicBase = path.join(__dirname, '..', 'public', 'portfolio', 'local');

function sanitizeSlug(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function getImagesRecursive(dir) {
  let list = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      list.push(...getImagesRecursive(full));
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(e.name)) {
      list.push({
        fullPath: full,
        filename: e.name,
        relativeToFolder: path.relative(dir, full)
      });
    }
  }
  return list;
}

async function processAll() {
  const folders = fs.readdirSync(root).filter(f => fs.statSync(path.join(root, f)).isDirectory());
  const manifest = {};

  for (const folder of folders) {
    const folderSlug = sanitizeSlug(folder);
    const targetDir = path.join(publicBase, folderSlug);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const images = getImagesRecursive(path.join(root, folder));
    console.log(`\nProcessing folder: ${folder} (${images.length} images) -> ${folderSlug}`);
    manifest[folderSlug] = {
      folderName: folder,
      slug: folderSlug,
      items: []
    };

    let index = 1;
    for (const img of images) {
      const ext = path.extname(img.filename).toLowerCase();
      // Clean target name
      let baseName = path.basename(img.filename, ext);
      baseName = sanitizeSlug(baseName) || `img-${index}`;
      const targetFilename = `${folderSlug}-${index}-${baseName.slice(0, 30)}.webp`;
      const targetPath = path.join(targetDir, targetFilename);
      const publicUrl = `/portfolio/local/${folderSlug}/${targetFilename}`;

      try {
        await sharp(img.fullPath)
          .rotate() // auto-orient EXIF
          .resize({ width: 1600, height: 1200, fit: 'inside', withoutEnlargement: true })
          .modulate({
            brightness: 1.03,
            saturation: 1.04
          })
          .sharpen({
            sigma: 0.8,
            m1: 0.3,
            m2: 1.2
          })
          .webp({ quality: 86, effort: 4 })
          .toFile(targetPath);

        const stat = fs.statSync(targetPath);
        console.log(`  ✓ [${index}/${images.length}] ${targetFilename} (${Math.round(stat.size / 1024)} KB)`);

        manifest[folderSlug].items.push({
          id: `${folderSlug}-${index}`,
          originalPath: img.fullPath,
          originalName: img.filename,
          publicUrl: publicUrl,
          sizeKb: Math.round(stat.size / 1024)
        });
      } catch (err) {
        console.error(`  ✗ Error on ${img.fullPath}:`, err.message);
      }
      index++;
    }
  }

  fs.writeFileSync('local_portfolio_manifest.json', JSON.stringify(manifest, null, 2));
  console.log('\nAll local folder images processed and saved to local_portfolio_manifest.json!');
}

processAll();
