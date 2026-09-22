export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  shortDesc: string;
  oneLineBenefit: string;
  heroImage: string;
  features: string[];
  deliverables: string[];
  pricingNote: string;
  faqList: { q: string; a: string }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-kitchen-set",
    slug: "kitchen-set-custom",
    title: "Kitchen Set Custom",
    subtitle: "Solusi Utama Dapur Presisi",
    shortDesc: "Perencanaan dan produksi kitchen set yang dibuat berdasarkan ukuran aktual ruangan, kebutuhan storage, pola aktivitas pengguna, pilihan material dan karakter visual interior.",
    oneLineBenefit: "Dapur tertata ergonomis, material tahan lembap, dan pengerjaan presisi yang nyaman digunakan setiap hari.",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1400&auto=format&fit=crop",
    features: [
      "Kitchen cabinet & tall cabinet terintegrasi",
      "Upper & lower cabinet dengan kompartemen fungsional",
      "Pantry storage & custom island table",
      "Countertop integration (granit alam / solid surface)",
      "Storage optimization & hardware hidrolik soft-close",
      "Lighting cabinetry & finishing presisi"
    ],
    deliverables: [
      "Survei & pengukuran langsung di lokasi",
      "Layout spasial 2D awal & visualisasi 3D (setelah deposit)",
      "Rincian Anggaran Biaya (RAB) transparan",
      "Produksi modul kabinet presisi di workshop",
      "Instalasi di lokasi & Garansi Pemeliharaan 6 Bulan"
    ],
    pricingNote: "Dihitung transparan mengikuti spesifikasi material, dimensi meter lari, dan RAB yang disepakati.",
    faqList: [
      {
        q: "Berapa estimasi waktu pengerjaan kitchen set custom?",
        a: "Alur standar meliputi konsultasi awal (1–3 hari), survei & pengembangan desain (3–7 hari), produksi di workshop (14–21 hari kerja), dan instalasi di lokasi (1–5 hari).",
      }
    ]
  },
  {
    id: "serv-interior-design",
    slug: "interior-design",
    title: "Interior Design",
    subtitle: "Perencanaan Ruang & Konsep",
    shortDesc: "Perencanaan interior yang mempertimbangkan sirkulasi, proporsi ruang, kebutuhan storage, material, warna dan pencahayaan agar keputusan desain memiliki dasar yang jelas sebelum masuk tahap produksi.",
    oneLineBenefit: "Keputusan desain yang matang dan terencana sebelum investasi produksi dimulai.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
    features: [
      "Studi layout spasial & alur sirkulasi",
      "Konsep visual & material moodboard",
      "Visualisasi render 3D (setelah deposit desain)",
      "Gambar kerja teknis terukur",
      "Lighting & finishing specification"
    ],
    deliverables: [
      "Layout 2D spasial",
      "Moodboard material",
      "Gambar kerja teknis",
      "Spesifikasi pencahayaan & material"
    ],
    pricingNote: "Disesuaikan dengan luas ruangan dan ruang lingkup perencanaan konsep.",
    faqList: [
      {
        q: "Apakah desain 3D otomatis gratis?",
        a: "Layout 2D diberikan setelah survei sebagai gambaran awal ruang. Visualisasi 3D dikembangkan setelah konfirmasi deposit desain.",
      }
    ]
  },
  {
    id: "serv-design-build",
    slug: "design-and-build",
    title: "Design & Build",
    subtitle: "Dari Konsep Hingga Instalasi",
    shortDesc: "Layanan terintegrasi mulai dari pengembangan konsep, perencanaan teknis, pemilihan material, produksi, pengawasan hingga instalasi di lokasi.",
    oneLineBenefit: "Satu tim bertanggung jawab penuh dari gambar denah hingga serah terima di rumah Anda.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    features: [
      "Project coordination terpadu satu pintu",
      "Quality control bertahap di workshop dan lokasi",
      "Detailed RAB tanpa biaya tersembunyi",
      "Produksi custom cabinetry & instalasi profesional",
      "Layanan after sales dengan garansi pemeliharaan 6 bulan"
    ],
    deliverables: [
      "Manajemen proyek terpadu",
      "Pengawasan lapangan berkala",
      "Instalasi tepat waktu",
      "Berita acara serah terima & kartu garansi 6 bulan"
    ],
    pricingNote: "Berdasarkan RAB komprehensif yang dikunci sebelum tahap produksi dimulai.",
    faqList: [
      {
        q: "Bagaimana sistem pembayarannya?",
        a: "Sistem pembayaran menggunakan DP 50% saat masuk produksi, termin berikutnya saat progres mencapai ±40%, dan pelunasan saat serah terima.",
      }
    ]
  },
  {
    id: "serv-renovation",
    slug: "renovasi-dapur",
    title: "Renovation",
    subtitle: "Transformasi Ruang Eksisting",
    shortDesc: "Penyesuaian atau pembaruan ruang yang mempertimbangkan kondisi eksisting, layout baru, finishing, lighting serta kebutuhan utilitas yang terkait dengan desain.",
    oneLineBenefit: "Mengoptimalkan ruang dapur lama agar lebih higienis, lapang, dan fungsional.",
    heroImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1400&auto=format&fit=crop",
    features: [
      "Existing condition review di lokasi",
      "Layout optimization untuk sirkulasi lebih baik",
      "Penyesuaian pencahayaan & finishing dinding",
      "Coordination of utilities (jalur pipa air & stop kontak)",
      "Pilihan renovasi meja cor lama atau penggantian total"
    ],
    deliverables: [
      "Pemeriksaan ruang eksisting",
      "Perencanaan layout baru",
      "Pengerjaan pembongkaran aman",
      "Instalasi kitchen set & utilitas baru"
    ],
    pricingNote: "Tergantung tingkat penyesuaian ruang eksisting dan spesifikasi kabinet baru.",
    faqList: [
      {
        q: "Apakah meja cor dapur lama bisa dimanfaatkan?",
        a: "Bisa. Kami dapat merancang pintu dan ambalan baru yang membungkus meja cor, atau melakukan pembongkaran jika Anda ingin storage laci maksimal.",
      }
    ]
  },
  {
    id: "serv-custom-furniture",
    slug: "custom-furniture",
    title: "Custom Furniture",
    subtitle: "Furniture Dibuat Mengikuti Ruang",
    shortDesc: "Furniture custom dirancang berdasarkan dimensi dan kebutuhan ruang agar penyimpanan, fungsi dan tampilan menyatu dengan interior.",
    oneLineBenefit: "Memanfaatkan setiap sudut ruang hunian tanpa ada celah yang terbuang sia-sia.",
    heroImage: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1400&auto=format&fit=crop",
    features: [
      "Wardrobe & walk-in closet full ceiling",
      "Backdrop TV & panel kisi-kisi estetik",
      "Bedroom cabinet & tempat tidur platform",
      "Vanity wastafel & cermin terintegrasi",
      "Under-stair cabinet (lemari bawah tangga) & storage tersembunyi"
    ],
    deliverables: [
      "Desain dimensi terukur sesuai ruang",
      "Fabrikasi furniture custom dengan material pilihan",
      "Instalasi presisi tanpa merusak dinding",
      "Pemeriksaan fungsi pintu & laci"
    ],
    pricingNote: "Dihitung berdasarkan dimensi aktual, aksesoris, dan material yang dipilih.",
    faqList: [
      {
        q: "Apakah bisa memesan custom furniture tanpa renovasi seluruh ruangan?",
        a: "Bisa. KitchenSet Sukabumi melayani pembuatan custom furniture satuan seperti wardrobe, backdrop TV, maupun lemari bawah tangga.",
      }
    ]
  }
];
