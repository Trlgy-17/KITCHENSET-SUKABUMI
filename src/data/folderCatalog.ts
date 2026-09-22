export interface FolderImageItem {
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

export const FOLDER_CATALOG: FolderCatalogItem[] = [
  {
    "slug": "apartemen",
    "folderName": "APARTEMEN",
    "displayName": "Interior Apartemen",
    "tagline": "Solusi Ruang Compact Studio & 2 Bedroom",
    "description": "Desain efisien untuk hunian apartemen: partisi multifungsi, mini kitchen, dan ranjang dengan laci penyimpanan kolong.",
    "totalImages": 4,
    "coverImage": "/portfolio/local/apartemen/apartemen-1-apartemen-23-pak-yudi-jakpus-0.webp",
    "images": [
      {
        "id": "apartemen-1",
        "title": "Interior Apartemen #1",
        "publicUrl": "/portfolio/local/apartemen/apartemen-1-apartemen-23-pak-yudi-jakpus-0.webp",
        "sizeKb": 142
      },
      {
        "id": "apartemen-2",
        "title": "Interior Apartemen #2",
        "publicUrl": "/portfolio/local/apartemen/apartemen-2-apartemen-23-pak-yudi-jakpus-0.webp",
        "sizeKb": 141
      },
      {
        "id": "apartemen-3",
        "title": "Interior Apartemen #3",
        "publicUrl": "/portfolio/local/apartemen/apartemen-3-apartemen-23-pak-yudi-jakpus-0.webp",
        "sizeKb": 133
      },
      {
        "id": "apartemen-4",
        "title": "Interior Apartemen #4",
        "publicUrl": "/portfolio/local/apartemen/apartemen-4-apartemen-ibu-finta-jaksel-03-.webp",
        "sizeKb": 156
      }
    ]
  },
  {
    "slug": "bacdrop-tv",
    "folderName": "BACDROP TV",
    "displayName": "Backdrop TV & Living Room",
    "tagline": "Panel Dinding Kisi-kisi, Marmer, & Ambalan LED",
    "description": "Penataan ruang keluarga estetik dengan hidden wiring cable conduit, wall panel akustik, dan laci console melayang.",
    "totalImages": 9,
    "coverImage": "/portfolio/local/bacdrop-tv/bacdrop-tv-1-10.webp",
    "images": [
      {
        "id": "bacdrop-tv-1",
        "title": "Backdrop TV & Living Room #1",
        "publicUrl": "/portfolio/local/bacdrop-tv/bacdrop-tv-1-10.webp",
        "sizeKb": 93
      },
      {
        "id": "bacdrop-tv-2",
        "title": "Backdrop TV & Living Room #2",
        "publicUrl": "/portfolio/local/bacdrop-tv/bacdrop-tv-2-2-jpg.webp",
        "sizeKb": 246
      },
      {
        "id": "bacdrop-tv-3",
        "title": "Backdrop TV & Living Room #3",
        "publicUrl": "/portfolio/local/bacdrop-tv/bacdrop-tv-3-3-jpg.webp",
        "sizeKb": 190
      },
      {
        "id": "bacdrop-tv-4",
        "title": "Backdrop TV & Living Room #4",
        "publicUrl": "/portfolio/local/bacdrop-tv/bacdrop-tv-4-4-jpg.webp",
        "sizeKb": 184
      },
      {
        "id": "bacdrop-tv-5",
        "title": "Backdrop TV & Living Room #5",
        "publicUrl": "/portfolio/local/bacdrop-tv/bacdrop-tv-5-5-jpg.webp",
        "sizeKb": 190
      },
      {
        "id": "bacdrop-tv-6",
        "title": "Backdrop TV & Living Room #6",
        "publicUrl": "/portfolio/local/bacdrop-tv/bacdrop-tv-6-6-jpg.webp",
        "sizeKb": 172
      },
      {
        "id": "bacdrop-tv-7",
        "title": "Backdrop TV & Living Room #7",
        "publicUrl": "/portfolio/local/bacdrop-tv/bacdrop-tv-7-7-jpg.webp",
        "sizeKb": 159
      },
      {
        "id": "bacdrop-tv-8",
        "title": "Backdrop TV & Living Room #8",
        "publicUrl": "/portfolio/local/bacdrop-tv/bacdrop-tv-8-8.webp",
        "sizeKb": 132
      },
      {
        "id": "bacdrop-tv-9",
        "title": "Backdrop TV & Living Room #9",
        "publicUrl": "/portfolio/local/bacdrop-tv/bacdrop-tv-9-9.webp",
        "sizeKb": 73
      }
    ]
  },
  {
    "slug": "bedroom",
    "folderName": "BEDROOM",
    "displayName": "Bedroom Set",
    "tagline": "Kamar Tidur Utama, Dipan Melayang & Headboard",
    "description": "Interior kamar tidur komprehensif: dipan floating bed, headboard kisi-kisi empuk, meja nakas, dan meja rias terpadu.",
    "totalImages": 8,
    "coverImage": "/portfolio/local/bedroom/bedroom-1-1-jpg.webp",
    "images": [
      {
        "id": "bedroom-1",
        "title": "Bedroom Set #1",
        "publicUrl": "/portfolio/local/bedroom/bedroom-1-1-jpg.webp",
        "sizeKb": 176
      },
      {
        "id": "bedroom-2",
        "title": "Bedroom Set #2",
        "publicUrl": "/portfolio/local/bedroom/bedroom-2-2-jpg.webp",
        "sizeKb": 82
      },
      {
        "id": "bedroom-3",
        "title": "Bedroom Set #3",
        "publicUrl": "/portfolio/local/bedroom/bedroom-3-3.webp",
        "sizeKb": 166
      },
      {
        "id": "bedroom-4",
        "title": "Bedroom Set #4",
        "publicUrl": "/portfolio/local/bedroom/bedroom-4-5-jpg.webp",
        "sizeKb": 102
      },
      {
        "id": "bedroom-5",
        "title": "Bedroom Set #5",
        "publicUrl": "/portfolio/local/bedroom/bedroom-5-6.webp",
        "sizeKb": 69
      },
      {
        "id": "bedroom-6",
        "title": "Bedroom Set #6",
        "publicUrl": "/portfolio/local/bedroom/bedroom-6-7.webp",
        "sizeKb": 145
      },
      {
        "id": "bedroom-7",
        "title": "Bedroom Set #7",
        "publicUrl": "/portfolio/local/bedroom/bedroom-7-8.webp",
        "sizeKb": 91
      },
      {
        "id": "bedroom-8",
        "title": "Bedroom Set #8",
        "publicUrl": "/portfolio/local/bedroom/bedroom-8-9.webp",
        "sizeKb": 131
      }
    ]
  },
  {
    "slug": "before-after",
    "folderName": "BEFORE-AFTER",
    "displayName": "Before & After Renovasi",
    "tagline": "Perbandingan Kondisi Dapur Sebelum vs Hasil Jadi",
    "description": "Dokumentasi transformasi total dapur lama dengan meja cor menjadi kitchen set modern siap pakai.",
    "totalImages": 2,
    "coverImage": "/portfolio/local/before-after/before-after-1-after.webp",
    "images": [
      {
        "id": "before-after-1",
        "title": "Before & After Renovasi #1",
        "publicUrl": "/portfolio/local/before-after/before-after-1-after.webp",
        "sizeKb": 304
      },
      {
        "id": "before-after-2",
        "title": "Before & After Renovasi #2",
        "publicUrl": "/portfolio/local/before-after/before-after-2-before.webp",
        "sizeKb": 114
      }
    ]
  },
  {
    "slug": "interior-toko",
    "folderName": "INTERIOR TOKO",
    "displayName": "Interior Toko & Komersial",
    "tagline": "Desain Ruang Retail, Butik, & Resepsionis",
    "description": "Modul display produk komersial dengan material tahan gores, pencahayaan produk, dan meja kasir profesional.",
    "totalImages": 5,
    "coverImage": "/portfolio/local/interior-toko/interior-toko-1-interior-toko-5-ibu-maya-antap.webp",
    "images": [
      {
        "id": "interior-toko-1",
        "title": "Interior Toko & Komersial #1",
        "publicUrl": "/portfolio/local/interior-toko/interior-toko-1-interior-toko-5-ibu-maya-antap.webp",
        "sizeKb": 128
      },
      {
        "id": "interior-toko-2",
        "title": "Interior Toko & Komersial #2",
        "publicUrl": "/portfolio/local/interior-toko/interior-toko-2-interior-toko-5-ibu-maya-antap.webp",
        "sizeKb": 144
      },
      {
        "id": "interior-toko-3",
        "title": "Interior Toko & Komersial #3",
        "publicUrl": "/portfolio/local/interior-toko/interior-toko-3-interior-toko-5-ibu-maya-antap.webp",
        "sizeKb": 121
      },
      {
        "id": "interior-toko-4",
        "title": "Interior Toko & Komersial #4",
        "publicUrl": "/portfolio/local/interior-toko/interior-toko-4-interior-toko-5-ibu-maya-antap.webp",
        "sizeKb": 136
      },
      {
        "id": "interior-toko-5",
        "title": "Interior Toko & Komersial #5",
        "publicUrl": "/portfolio/local/interior-toko/interior-toko-5-interior-toko-5-ibu-maya-antap.webp",
        "sizeKb": 166
      }
    ]
  },
  {
    "slug": "kitchenset",
    "folderName": "KITCHENSET",
    "displayName": "Kitchen Set Custom",
    "tagline": "Dapur Minimalis, Semi Klasik Duco, & Klasik Profil",
    "description": "Koleksi pengerjaan kitchen set custom dengan konfigurasi Letter-L, Straight, Island Table, dan Shaker Duco.",
    "totalImages": 22,
    "coverImage": "/portfolio/local/kitchenset/kitchenset-1-klasik-18-ibu-widya-prima-amer.webp",
    "images": [
      {
        "id": "kitchenset-1",
        "title": "Kitchen Set Custom #1",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-1-klasik-18-ibu-widya-prima-amer.webp",
        "sizeKb": 163
      },
      {
        "id": "kitchenset-2",
        "title": "Kitchen Set Custom #2",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-2-klasik-18-ibu-widya-prima-amer.webp",
        "sizeKb": 227
      },
      {
        "id": "kitchenset-3",
        "title": "Kitchen Set Custom #3",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-3-2024-07-26-17-26-img-5542-jpg.webp",
        "sizeKb": 209
      },
      {
        "id": "kitchenset-4",
        "title": "Kitchen Set Custom #4",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-4-2024-07-26-18-15-img-5613-jpg.webp",
        "sizeKb": 167
      },
      {
        "id": "kitchenset-5",
        "title": "Kitchen Set Custom #5",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-5-klasik-8-ibu-qisty-soreang-18-.webp",
        "sizeKb": 203
      },
      {
        "id": "kitchenset-6",
        "title": "Kitchen Set Custom #6",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-6-klasik-8-ibu-qisty-soreang-18-.webp",
        "sizeKb": 164
      },
      {
        "id": "kitchenset-7",
        "title": "Kitchen Set Custom #7",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-7-1.webp",
        "sizeKb": 158
      },
      {
        "id": "kitchenset-8",
        "title": "Kitchen Set Custom #8",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-8-10-jpg.webp",
        "sizeKb": 167
      },
      {
        "id": "kitchenset-9",
        "title": "Kitchen Set Custom #9",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-9-11.webp",
        "sizeKb": 144
      },
      {
        "id": "kitchenset-10",
        "title": "Kitchen Set Custom #10",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-10-2.webp",
        "sizeKb": 185
      },
      {
        "id": "kitchenset-11",
        "title": "Kitchen Set Custom #11",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-11-3.webp",
        "sizeKb": 184
      },
      {
        "id": "kitchenset-12",
        "title": "Kitchen Set Custom #12",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-12-5-jpg.webp",
        "sizeKb": 205
      },
      {
        "id": "kitchenset-13",
        "title": "Kitchen Set Custom #13",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-13-6.webp",
        "sizeKb": 152
      },
      {
        "id": "kitchenset-14",
        "title": "Kitchen Set Custom #14",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-14-7.webp",
        "sizeKb": 147
      },
      {
        "id": "kitchenset-15",
        "title": "Kitchen Set Custom #15",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-15-8.webp",
        "sizeKb": 131
      },
      {
        "id": "kitchenset-16",
        "title": "Kitchen Set Custom #16",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-16-9-jpg.webp",
        "sizeKb": 124
      },
      {
        "id": "kitchenset-17",
        "title": "Kitchen Set Custom #17",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-17-1.webp",
        "sizeKb": 266
      },
      {
        "id": "kitchenset-18",
        "title": "Kitchen Set Custom #18",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-18-2-jpg.webp",
        "sizeKb": 118
      },
      {
        "id": "kitchenset-19",
        "title": "Kitchen Set Custom #19",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-19-3-jpg.webp",
        "sizeKb": 157
      },
      {
        "id": "kitchenset-20",
        "title": "Kitchen Set Custom #20",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-20-4.webp",
        "sizeKb": 98
      },
      {
        "id": "kitchenset-21",
        "title": "Kitchen Set Custom #21",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-21-6-jpg.webp",
        "sizeKb": 198
      },
      {
        "id": "kitchenset-22",
        "title": "Kitchen Set Custom #22",
        "publicUrl": "/portfolio/local/kitchenset/kitchenset-22-7.webp",
        "sizeKb": 121
      }
    ]
  },
  {
    "slug": "lemari-bawah-tangga",
    "folderName": "LEMARI BAWAH TANGGA",
    "displayName": "Lemari Bawah Tangga",
    "tagline": "Pemanfaatan Sudut Ruang Mati Menjadi Storage",
    "description": "Modul lemari miring custom, rak sepatu tarik bertingkat, dan kompartemen koper rapi di bawah sudut tangga.",
    "totalImages": 26,
    "coverImage": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-1-lemari-bawah-tangga-1-ibu-asih.webp",
    "images": [
      {
        "id": "lemari-bawah-tangga-1",
        "title": "Lemari Bawah Tangga #1",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-1-lemari-bawah-tangga-1-ibu-asih.webp",
        "sizeKb": 133
      },
      {
        "id": "lemari-bawah-tangga-2",
        "title": "Lemari Bawah Tangga #2",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-2-lemari-bawah-tangga-1-ibu-asih.webp",
        "sizeKb": 198
      },
      {
        "id": "lemari-bawah-tangga-3",
        "title": "Lemari Bawah Tangga #3",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-3-lemari-bawah-tangga-10-pak-yuk.webp",
        "sizeKb": 91
      },
      {
        "id": "lemari-bawah-tangga-4",
        "title": "Lemari Bawah Tangga #4",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-4-lemari-bawah-tangga-10-pak-yuk.webp",
        "sizeKb": 90
      },
      {
        "id": "lemari-bawah-tangga-5",
        "title": "Lemari Bawah Tangga #5",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-5-lemari-bawah-tangga-10-pak-yuk.webp",
        "sizeKb": 120
      },
      {
        "id": "lemari-bawah-tangga-6",
        "title": "Lemari Bawah Tangga #6",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-6-lemari-bawah-tangga-12-ibu-yen.webp",
        "sizeKb": 76
      },
      {
        "id": "lemari-bawah-tangga-7",
        "title": "Lemari Bawah Tangga #7",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-7-lemari-bawah-tangga-12-ibu-yen.webp",
        "sizeKb": 90
      },
      {
        "id": "lemari-bawah-tangga-8",
        "title": "Lemari Bawah Tangga #8",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-8-lemari-bawah-tangga-12-ibu-yen.webp",
        "sizeKb": 81
      },
      {
        "id": "lemari-bawah-tangga-9",
        "title": "Lemari Bawah Tangga #9",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-9-2024-11-29-15-34-img-6839-jpg.webp",
        "sizeKb": 171
      },
      {
        "id": "lemari-bawah-tangga-10",
        "title": "Lemari Bawah Tangga #10",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-10-2024-11-29-15-35-img-6841-jpg.webp",
        "sizeKb": 135
      },
      {
        "id": "lemari-bawah-tangga-11",
        "title": "Lemari Bawah Tangga #11",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-11-lemari-bawah-tangga-22-andri-p.webp",
        "sizeKb": 128
      },
      {
        "id": "lemari-bawah-tangga-12",
        "title": "Lemari Bawah Tangga #12",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-12-lemari-bawah-tangga-22-andri-p.webp",
        "sizeKb": 247
      },
      {
        "id": "lemari-bawah-tangga-13",
        "title": "Lemari Bawah Tangga #13",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-13-finishing-duco-9-herna-batujaj.webp",
        "sizeKb": 146
      },
      {
        "id": "lemari-bawah-tangga-14",
        "title": "Lemari Bawah Tangga #14",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-14-lemari-bawah-tangga-14-dara-ar.webp",
        "sizeKb": 97
      },
      {
        "id": "lemari-bawah-tangga-15",
        "title": "Lemari Bawah Tangga #15",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-15-lemari-bawah-tangga-14-dara-ar.webp",
        "sizeKb": 90
      },
      {
        "id": "lemari-bawah-tangga-16",
        "title": "Lemari Bawah Tangga #16",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-16-lemari-bawah-tangga-14-dara-ar.webp",
        "sizeKb": 99
      },
      {
        "id": "lemari-bawah-tangga-17",
        "title": "Lemari Bawah Tangga #17",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-17-lemari-bawah-tangga-14-dara-ar.webp",
        "sizeKb": 99
      },
      {
        "id": "lemari-bawah-tangga-18",
        "title": "Lemari Bawah Tangga #18",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-18-lemari-bawah-tangga-5-ibu-icha.webp",
        "sizeKb": 226
      },
      {
        "id": "lemari-bawah-tangga-19",
        "title": "Lemari Bawah Tangga #19",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-19-lemari-bawah-tangga-5-ibu-icha.webp",
        "sizeKb": 243
      },
      {
        "id": "lemari-bawah-tangga-20",
        "title": "Lemari Bawah Tangga #20",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-20-lemari-bawah-tangga-5-ibu-icha.webp",
        "sizeKb": 253
      },
      {
        "id": "lemari-bawah-tangga-21",
        "title": "Lemari Bawah Tangga #21",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-21-lemari-bawah-tangga-new-folder.webp",
        "sizeKb": 78
      },
      {
        "id": "lemari-bawah-tangga-22",
        "title": "Lemari Bawah Tangga #22",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-22-lemari-bawah-tangga-new-folder.webp",
        "sizeKb": 80
      },
      {
        "id": "lemari-bawah-tangga-23",
        "title": "Lemari Bawah Tangga #23",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-23-minimalis-11-bpk-nofal-perum-t.webp",
        "sizeKb": 108
      },
      {
        "id": "lemari-bawah-tangga-24",
        "title": "Lemari Bawah Tangga #24",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-24-lemari-bawah-tangga-nining-cik.webp",
        "sizeKb": 76
      },
      {
        "id": "lemari-bawah-tangga-25",
        "title": "Lemari Bawah Tangga #25",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-25-lemari-bawah-tangga-nining-cik.webp",
        "sizeKb": 78
      },
      {
        "id": "lemari-bawah-tangga-26",
        "title": "Lemari Bawah Tangga #26",
        "publicUrl": "/portfolio/local/lemari-bawah-tangga/lemari-bawah-tangga-26-semiklasik-6-ibu-mega-cihanjua.webp",
        "sizeKb": 150
      }
    ]
  },
  {
    "slug": "wardrobe",
    "folderName": "WARDROBE",
    "displayName": "Custom Wardrobe",
    "tagline": "Lemari Pakaian Full Ceiling & Walk-In Closet",
    "description": "Lemari pakaian menyentuh plafon, pintu kaca frame aluminium modern, dan laci aksesori velvet mewah.",
    "totalImages": 31,
    "coverImage": "/portfolio/local/wardrobe/wardrobe-1-2023-09-17-13-38-img-8046-jpg.webp",
    "images": [
      {
        "id": "wardrobe-1",
        "title": "Custom Wardrobe #1",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-1-2023-09-17-13-38-img-8046-jpg.webp",
        "sizeKb": 77
      },
      {
        "id": "wardrobe-2",
        "title": "Custom Wardrobe #2",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-2-2023-09-17-13-39-img-8047-jpg.webp",
        "sizeKb": 117
      },
      {
        "id": "wardrobe-3",
        "title": "Custom Wardrobe #3",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-3-2023-09-17-13-41-img-8052-jpg.webp",
        "sizeKb": 154
      },
      {
        "id": "wardrobe-4",
        "title": "Custom Wardrobe #4",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-4-2024-07-23-12-25-img-5229-jpg.webp",
        "sizeKb": 123
      },
      {
        "id": "wardrobe-5",
        "title": "Custom Wardrobe #5",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-5-2024-07-23-12-31-img-5267-jpg.webp",
        "sizeKb": 87
      },
      {
        "id": "wardrobe-6",
        "title": "Custom Wardrobe #6",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-6-2024-07-23-12-35-img-5300-jpg.webp",
        "sizeKb": 109
      },
      {
        "id": "wardrobe-7",
        "title": "Custom Wardrobe #7",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-7-2026-03-12-14-39-img-0250.webp",
        "sizeKb": 137
      },
      {
        "id": "wardrobe-8",
        "title": "Custom Wardrobe #8",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-8-2026-03-12-14-39-img-0251.webp",
        "sizeKb": 130
      },
      {
        "id": "wardrobe-9",
        "title": "Custom Wardrobe #9",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-9-2026-03-12-14-39-img-0252.webp",
        "sizeKb": 76
      },
      {
        "id": "wardrobe-10",
        "title": "Custom Wardrobe #10",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-10-2026-03-12-14-40-img-0254.webp",
        "sizeKb": 158
      },
      {
        "id": "wardrobe-11",
        "title": "Custom Wardrobe #11",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-11-bedroom-4-bpk-tiar-banjarnegar.webp",
        "sizeKb": 131
      },
      {
        "id": "wardrobe-12",
        "title": "Custom Wardrobe #12",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-12-bedroom-4-bpk-tiar-banjarnegar.webp",
        "sizeKb": 146
      },
      {
        "id": "wardrobe-13",
        "title": "Custom Wardrobe #13",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-13-semi-fullhome-1-ibu-via-subang.webp",
        "sizeKb": 198
      },
      {
        "id": "wardrobe-14",
        "title": "Custom Wardrobe #14",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-14-semi-fullhome-1-ibu-via-subang.webp",
        "sizeKb": 225
      },
      {
        "id": "wardrobe-15",
        "title": "Custom Wardrobe #15",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-15-semi-fullhome-1-ibu-via-subang.webp",
        "sizeKb": 202
      },
      {
        "id": "wardrobe-16",
        "title": "Custom Wardrobe #16",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-16-semi-fullhome-1-ibu-via-subang.webp",
        "sizeKb": 185
      },
      {
        "id": "wardrobe-17",
        "title": "Custom Wardrobe #17",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-17-semi-fullhome-1-ibu-via-subang.webp",
        "sizeKb": 167
      },
      {
        "id": "wardrobe-18",
        "title": "Custom Wardrobe #18",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-18-semi-fullhome-2-ibu-astuti-bua.webp",
        "sizeKb": 80
      },
      {
        "id": "wardrobe-19",
        "title": "Custom Wardrobe #19",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-19-wardrobe-10-ibu-lely-ciskul-16.webp",
        "sizeKb": 166
      },
      {
        "id": "wardrobe-20",
        "title": "Custom Wardrobe #20",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-20-wardrobe-10-ibu-lely-ciskul-16.webp",
        "sizeKb": 191
      },
      {
        "id": "wardrobe-21",
        "title": "Custom Wardrobe #21",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-21-wardrobe-10-ibu-lely-ciskul-16.webp",
        "sizeKb": 144
      },
      {
        "id": "wardrobe-22",
        "title": "Custom Wardrobe #22",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-22-wardrobe-10-bpk-darwin-padalar.webp",
        "sizeKb": 91
      },
      {
        "id": "wardrobe-23",
        "title": "Custom Wardrobe #23",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-23-wardrobe-10-bpk-darwin-padalar.webp",
        "sizeKb": 134
      },
      {
        "id": "wardrobe-24",
        "title": "Custom Wardrobe #24",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-24-wardrobe-10-bpk-darwin-padalar.webp",
        "sizeKb": 57
      },
      {
        "id": "wardrobe-25",
        "title": "Custom Wardrobe #25",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-25-wardrobe-13-amie-cimahi-22-05-.webp",
        "sizeKb": 188
      },
      {
        "id": "wardrobe-26",
        "title": "Custom Wardrobe #26",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-26-wardrobe-13-amie-cimahi-22-05-.webp",
        "sizeKb": 198
      },
      {
        "id": "wardrobe-27",
        "title": "Custom Wardrobe #27",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-27-wardrobe-13-amie-cimahi-22-05-.webp",
        "sizeKb": 183
      },
      {
        "id": "wardrobe-28",
        "title": "Custom Wardrobe #28",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-28-wardrobe-13-amie-cimahi-22-05-.webp",
        "sizeKb": 146
      },
      {
        "id": "wardrobe-29",
        "title": "Custom Wardrobe #29",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-29-wardrobe-7-ira-ciwastra-19-10-.webp",
        "sizeKb": 229
      },
      {
        "id": "wardrobe-30",
        "title": "Custom Wardrobe #30",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-30-wardrobe-7-ira-ciwastra-19-10-.webp",
        "sizeKb": 240
      },
      {
        "id": "wardrobe-31",
        "title": "Custom Wardrobe #31",
        "publicUrl": "/portfolio/local/wardrobe/wardrobe-31-wardrobe-7-ira-ciwastra-19-10-.webp",
        "sizeKb": 237
      }
    ]
  }
];
