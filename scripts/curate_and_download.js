const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const API_KEY = 'AIzaSyAWGrfCCr7albM3lmCc937gx4uIphbpeKQ';
const manifest = JSON.parse(fs.readFileSync('gdrive_manifest.json', 'utf8'));

// Helper to find images by folder path substring
function findImages(query, minSize = 100000, limit = 10) {
  const q = query.toLowerCase();
  return manifest.filter(item => {
    const rel = item.relativePath.toLowerCase();
    const isImage = rel.match(/\.(jpg|jpeg|png|webp)$/);
    const matches = rel.includes(q);
    const sizeOk = (!item.size || parseInt(item.size) >= minSize);
    return isImage && matches && sizeOk;
  }).slice(0, limit);
}

// Curation targets
const targets = [
  // 1. Kitchen Set Modern Minimalis
  {
    category: 'kitchen-modern',
    outputDir: 'public/portfolio/drive/kitchen-modern',
    images: [
      ...findImages('KITCHENSET\\MINIMALIS\\1.Ibu diana sukabumi', 200000, 4),
      ...findImages('KITCHENSET\\MINIMALIS\\8.IBU IMAS', 200000, 4),
      ...findImages('KITCHENSET\\MINIMALIS\\9.IBU ASYFAQ', 200000, 4),
    ].slice(0, 6)
  },
  // 2. Kitchen Set Semi Klasik
  {
    category: 'kitchen-classic',
    outputDir: 'public/portfolio/drive/kitchen-classic',
    images: [
      ...findImages('KITCHENSET\\SEMIKLASIK\\16.IBU WITA', 200000, 4),
      ...findImages('KITCHENSET\\SEMIKLASIK\\2.IBU INDIRA', 200000, 4),
      ...findImages('KITCHENSET\\SEMIKLASIK\\Ridwan - banten', 200000, 4),
    ].slice(0, 6)
  },
  // 3. Kitchen Set Klasik & Bawah Tangga
  {
    category: 'kitchen-special',
    outputDir: 'public/portfolio/drive/kitchen-special',
    images: [
      ...findImages('KITCHENSET\\KLASIK\\23.Ibu Lia - Ciwastra', 200000, 3),
      ...findImages('KITCHENSET\\BAWAH TANGGA\\6.BPK DEDI', 200000, 3),
    ].slice(0, 6)
  },
  // 4. Backdrop TV & Living Room
  {
    category: 'backdrop-tv',
    outputDir: 'public/portfolio/drive/backdrop-tv',
    images: [
      ...findImages('21.BPK DHANI - CIMAHI\\BACKDROP TV', 200000, 4),
      ...findImages('LIVINGROOM\\11.ibu Nadia', 200000, 3),
      ...findImages('LIVINGROOM\\18. Bpk Iwan', 200000, 3),
    ].slice(0, 6)
  },
  // 5. Lemari Bawah Tangga
  {
    category: 'understair',
    outputDir: 'public/portfolio/drive/understair',
    images: [
      ...findImages('LEMARI BAWAH TANGGA\\13.BPK SOBIRIN', 150000, 3),
      ...findImages('LEMARI BAWAH TANGGA\\20.IBU UPI', 150000, 3),
      ...findImages('LEMARI BAWAH TANGGA\\10.pak yuki', 150000, 3),
    ].slice(0, 6)
  },
  // 6. Wardrobe
  {
    category: 'wardrobe',
    outputDir: 'public/portfolio/drive/wardrobe',
    images: [
      ...findImages('WARDROBE\\1.Ibu diana sukabumi', 150000, 3),
      ...findImages('WARDROBE\\11.IBU HELEN', 150000, 3),
      ...findImages('WARDROBE\\10.IBU SERLY', 150000, 3),
    ].slice(0, 6)
  },
  // 7. Bedroom
  {
    category: 'bedroom',
    outputDir: 'public/portfolio/drive/bedroom',
    images: [
      ...findImages('BEDROOM\\5.IBU NELY - JAKPUS\\KAMAR UTAMA', 200000, 3),
      ...findImages('BEDROOM\\14.IBU LIA - TANGSEL', 200000, 3),
      ...findImages('BEDROOM\\17.ibu titii', 200000, 3),
    ].slice(0, 6)
  },
  // 8. Apartemen
  {
    category: 'apartemen',
    outputDir: 'public/portfolio/drive/apartemen',
    images: [
      ...findImages('APARTEMEN\\Ibu Finta - Jaksel', 200000, 3),
      ...findImages('APARTEMEN\\23.Pak Yudi jakpus', 200000, 3),
    ].slice(0, 6)
  },
  // 9. Interior Kantor & Komersial
  {
    category: 'commercial',
    outputDir: 'public/portfolio/drive/commercial',
    images: [
      ...findImages('INTERIOR KANTOR\\17,BPK IRUL', 300000, 3),
      ...findImages('INTERIOR SALON\\7.ibu kiki', 200000, 3),
    ].slice(0, 6)
  }
];

console.log('Target curation summary:');
targets.forEach(t => {
  console.log(`- ${t.category}: ${t.images.length} images found`);
});

fs.writeFileSync('curation_plan.json', JSON.stringify(targets, null, 2));
