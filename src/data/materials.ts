import { MaterialGuide } from "@/types";

export const MATERIALS_DATA: MaterialGuide[] = [
  {
    slug: "blockboard-18mm",
    name: "Blockboard 18 mm",
    category: "core",
    shortDesc: "Material dengan inti kayu yang disusun dan dilapisi pada kedua sisi. Relatif ringan, tetap stabil, dan dapat digunakan untuk berbagai kebutuhan kabinet maupun furniture pada area yang sesuai.",
    fullDesc: "Blockboard 18 mm tersusun dari balok-balok kayu lunak yang dipadatkan secara horizontal dan dilapisi veneer kayu tipis di kedua sisi. Karakter utamanya adalah bobot yang relatif ringan dibanding MDF atau partikel, stabilitas dimensi yang baik pada bentang panjang, dan efisiensi biaya yang tepat untuk area interior kering.",
    pros: [
      "Bobot relatif ringan sehingga memudahkan pemasangan",
      "Struktur stabil dan tahan lentur pada bentang panjang",
      "Daya rekat lem dan sekrup cukup baik",
      "Pilihan efisien untuk area kering dan furniture non-beban berat"
    ],
    cons: [
      "Kurang disarankan untuk area basah intensif seperti bawah sink cuci piring",
      "Membutuhkan perlindungan pelapis permukaan yang rapi"
    ],
    bestFor: "Wardrobe, cabinet, built-in furniture, dan area kering hunian.",
    priceLevel: "Standar",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "multipleks-plywood",
    name: "Multipleks / Plywood",
    category: "core",
    shortDesc: "Material kayu lapis dengan susunan silang yang memiliki karakter konstruksi kuat dan daya cengkeram sekrup yang baik.",
    fullDesc: "Multipleks (Plywood) dibuat dari beberapa lembaran veneer kayu alami yang direkatkan dengan arah serat saling bersilangan di bawah tekanan tinggi. Konstruksi silang ini memberikan kekuatan mekanis unggul, ketahanan terhadap deformasi, serta daya cengkeram sekrup hardware engsel yang sangat kokoh.",
    pros: [
      "Kekuatan konstruksi sangat tinggi dan stabil",
      "Daya cengkeram sekrup engsel dan rel laci sangat kuat",
      "Ketahanan terhadap kelembapan tinggi untuk iklim tropis",
      "Pilihan standar utama untuk furniture built-in jangka panjang"
    ],
    cons: [
      "Investasi biaya awal lebih tinggi dari blockboard biasa",
      "Membutuhkan finishing permukaan presisi (HPL atau Cat Duco)"
    ],
    bestFor: "Kitchen set, wardrobe, cabinet, dan furniture built-in.",
    priceLevel: "Menengah",
    imageUrl: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "pvc-board-waterproof",
    name: "PVC Board Waterproof",
    category: "core",
    shortDesc: "Material berbasis PVC yang tahan terhadap air dan kelembapan sehingga cocok digunakan pada area yang membutuhkan resistance lebih tinggi terhadap kondisi basah.",
    fullDesc: "PVC Board adalah papan busa polivinil klorida padat yang 100% tahan air, anti rayap, dan tidak mengalami pembusukan atau pelapukan saat terpapar rembesan air pipa secara terus menerus. Menjadi solusi ideal untuk area paling berisiko di dapur dan utilitas.",
    pros: [
      "100% tahan air dan kelembapan ekstrem",
      "Anti rayap dan tidak dapat lapuk oleh air",
      "Mudah dibersihkan dan higienis",
      "Memberikan rasa tenang pada area pipa pembuangan"
    ],
    cons: [
      "Daya cengkeram sekrup memerlukan baut dan sekrup dengan teknik khusus",
      "Harga material lebih tinggi dibanding kayu olahan biasa"
    ],
    bestFor: "Lower kitchen cabinet, sink area, laundry, utility cabinet, dan area lembap.",
    priceLevel: "Premium",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "aluminium-profile",
    name: "Aluminium Profile",
    category: "hardware",
    shortDesc: "Material aluminium yang digunakan sebagai frame, handle profile, pintu kaca, maupun aksen furniture untuk menghasilkan detail yang rapi dan modern.",
    fullDesc: "Aluminium profile dirancang presisi dengan proses ekstrusi untuk kebutuhan frame pintu kaca tempered, handleless profile (profil gola/J-pull), list pelindung, dan aksen modern arsitektural. Material ini tahan karat, tahan benturan ringan, serta menghasilkan garis-garis desain yang bersih dan kontemporer.",
    pros: [
      "Bebas perawatan (low maintenance) dan anti karat",
      "Menghasilkan visual minimalis yang rapi dan bersih",
      "Detail modern dan kokoh saat dipadukan dengan kaca atau HPL",
      "Memperpanjang usia pakai tepi kabinet"
    ],
    cons: [
      "Memerlukan pemotongan presisi dan perakitan khusus pada sudut miter"
    ],
    bestFor: "Frame pintu kaca, handleless profile, detail aksen modern, dan pintu atas kitchen set.",
    priceLevel: "Menengah",
    imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "finishing-hpl",
    name: "Finishing HPL (High Pressure Laminate)",
    category: "finishing",
    shortDesc: "Pelapis sintetis bermotif serat kayu alami, solid matte, dan tekstur batu dengan ketahanan gores serta kemudahan perawatan harian.",
    fullDesc: "HPL adalah lapisan laminasi tekanan tinggi yang menjadi penutup permukaan paling populer untuk kitchen set modern. Permukaannya tahan terhadap cipratan minyak dan mudah dibersihkan.",
    pros: [
      "Tahan goresan dan benturan ringan",
      "Koleksi motif tekstur kayu dan warna solid sangat lengkap",
      "Mudah dibersihkan dengan lap basah"
    ],
    cons: [
      "Hanya diaplikasikan pada permukaan bidang rata"
    ],
    bestFor: "Pintu kabinet, bodi luar, dan ambalan rak.",
    priceLevel: "Standar",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "top-table-granit-alam",
    name: "Top Table Granit Alam & Solid Surface",
    category: "toptable",
    shortDesc: "Pilihan batu alam granit hitam tahan panas tinggi atau solid surface akrilik higienis dengan sambungan tanpa garis.",
    fullDesc: "Meja kerja (countertop) dapur harus mampu menahan beban kerja harian. Granit alam tahan terhadap wajan panas mendidih, sementara solid surface memberikan sambungan mulus tanpa pori kotor.",
    pros: [
      "Granit: sangat tahan panas langsung",
      "Solid Surface: non-porous dan sambungan tak terlihat",
      "Higienis untuk persiapan bahan makanan"
    ],
    cons: [
      "Membutuhkan pondasi kabinet bawah yang kokoh"
    ],
    bestFor: "Countertop meja dapur, kitchen island, dan meja bar.",
    priceLevel: "Premium",
    imageUrl: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=900&auto=format&fit=crop",
  }
];
