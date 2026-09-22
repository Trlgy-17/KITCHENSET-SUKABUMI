const fs = require('fs');

const manifest = JSON.parse(fs.readFileSync('local_portfolio_manifest.json', 'utf8'));

const folderMeta = {
  "kitchenset": {
    name: "Kitchen Set Custom",
    tagline: "Dapur Minimalis, Semi Klasik Duco, & Klasik Profil",
    folderOriginal: "KITCHENSET",
    description: "Koleksi pengerjaan kitchen set custom dengan konfigurasi Letter-L, Straight, Island Table, dan Shaker Duco."
  },
  "bacdrop-tv": {
    name: "Backdrop TV & Living Room",
    tagline: "Panel Dinding Kisi-kisi, Marmer, & Ambalan LED",
    folderOriginal: "BACDROP TV",
    description: "Penataan ruang keluarga estetik dengan hidden wiring cable conduit, wall panel akustik, dan laci console melayang."
  },
  "lemari-bawah-tangga": {
    name: "Lemari Bawah Tangga",
    tagline: "Pemanfaatan Sudut Ruang Mati Menjadi Storage",
    folderOriginal: "LEMARI BAWAH TANGGA",
    description: "Modul lemari miring custom, rak sepatu tarik bertingkat, dan kompartemen koper rapi di bawah sudut tangga."
  },
  "wardrobe": {
    name: "Custom Wardrobe",
    tagline: "Lemari Pakaian Full Ceiling & Walk-In Closet",
    folderOriginal: "WARDROBE",
    description: "Lemari pakaian menyentuh plafon, pintu kaca frame aluminium modern, dan laci aksesori velvet mewah."
  },
  "bedroom": {
    name: "Bedroom Set",
    tagline: "Kamar Tidur Utama, Dipan Melayang & Headboard",
    folderOriginal: "BEDROOM",
    description: "Interior kamar tidur komprehensif: dipan floating bed, headboard kisi-kisi empuk, meja nakas, dan meja rias terpadu."
  },
  "interior-toko": {
    name: "Interior Toko & Komersial",
    tagline: "Desain Ruang Retail, Butik, & Resepsionis",
    folderOriginal: "INTERIOR TOKO",
    description: "Modul display produk komersial dengan material tahan gores, pencahayaan produk, dan meja kasir profesional."
  },
  "apartemen": {
    name: "Interior Apartemen",
    tagline: "Solusi Ruang Compact Studio & 2 Bedroom",
    folderOriginal: "APARTEMEN",
    description: "Desain efisien untuk hunian apartemen: partisi multifungsi, mini kitchen, dan ranjang dengan laci penyimpanan kolong."
  },
  "before-after": {
    name: "Before & After Renovasi",
    tagline: "Perbandingan Kondisi Dapur Sebelum vs Hasil Jadi",
    folderOriginal: "BEFORE-AFTER",
    description: "Dokumentasi transformasi total dapur lama dengan meja cor menjadi kitchen set modern siap pakai."
  }
};

const folderData = [];
for (const [key, data] of Object.entries(manifest)) {
  const meta = folderMeta[key] || {
    name: data.folderName,
    tagline: "Koleksi Portofolio",
    folderOriginal: data.folderName,
    description: "Dokumentasi pengerjaan interior"
  };

  folderData.push({
    slug: key,
    folderName: data.folderName,
    displayName: meta.name,
    tagline: meta.tagline,
    description: meta.description,
    totalImages: data.items.length,
    coverImage: data.items[0]?.publicUrl || '',
    images: data.items.map((item, idx) => ({
      id: item.id,
      title: `${meta.name} #${idx + 1}`,
      publicUrl: item.publicUrl,
      sizeKb: item.sizeKb
    }))
  });
}

const tsContent = `export interface FolderImageItem {
  id: string;
  title: string;
  publicUrl: string;
  sizeKb: number;
}

export interface FolderCatalogItem {
  slug: string;
  folderName: string;
  displayName: string;
  tagline: string;
  description: string;
  totalImages: number;
  coverImage: string;
  images: FolderImageItem[];
}

export const FOLDER_CATALOG: FolderCatalogItem[] = ${JSON.stringify(folderData, null, 2)};
`;

fs.writeFileSync('src/data/folderCatalog.ts', tsContent);
console.log('Generated src/data/folderCatalog.ts successfully!');
