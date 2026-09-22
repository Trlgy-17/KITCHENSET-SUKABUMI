export type ProjectType = 'kitchen_set' | 'renovation' | 'interior' | 'custom_furniture';
export type KitchenStyle = 'minimalis' | 'modern' | 'japandi' | 'scandinavian' | 'industrial' | 'classic';
export type KitchenLayout = 'straight' | 'letter_l' | 'letter_u' | 'island' | 'parallel';
export type FolderCategory =
  | 'kitchenset'
  | 'bacdrop-tv'
  | 'lemari-bawah-tangga'
  | 'wardrobe'
  | 'bedroom'
  | 'interior-toko'
  | 'apartemen'
  | 'before-after';

export interface ProjectImage {
  id: string;
  imageUrl: string;
  altText: string;
  caption?: string;
  isCover?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  execution: string;
  result: string;
  coverImage: string;
  gallery: ProjectImage[];
  location: string;
  city: string; // e.g. "Kota Sukabumi", "Cisaat", "Cibadak"
  area: string;
  projectType: ProjectType;
  folderCategory?: FolderCategory;
  folderName?: string;
  style: KitchenStyle;
  layout: KitchenLayout;
  materials: string[]; // e.g. ["Plywood / Multiplek 18mm", "HPL Taco Woodgrain"]
  finishes: string[];
  hardware: string; // e.g. "Slow-motion soft close & hidrolik lift"
  topTable?: string; // e.g. "Granit Hitam Nero Absoluto"
  year: number;
  duration?: string;
  scope: string[];
  status: 'published' | 'draft';
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
  createdAt: string;
}

export type LeadStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'QUALIFIED'
  | 'CONSULTATION'
  | 'SURVEY_SCHEDULED'
  | 'SURVEY_DONE'
  | 'DESIGN'
  | 'QUOTATION'
  | 'NEGOTIATION'
  | 'DEAL'
  | 'PRODUCTION'
  | 'INSTALLATION'
  | 'COMPLETED'
  | 'HOLD'
  | 'LOST';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  location: string; // e.g. "Baros, Kota Sukabumi"
  service: string;
  propertyType?: 'Rumah Baru' | 'Renovasi Rumah Lama' | 'Apartemen' | 'Ruko / Komersial';
  statusProperty?: 'Sudah Serah Terima' | 'Sedang Dibangun' | 'Dihuni';
  estimatedSize?: string; // e.g. "Panjang ~3.5m L-Shape"
  budgetRange?: string; // e.g. "Rp 15 - 25 Juta"
  timeline?: '< 1 Bulan' | '1 - 3 Bulan' | '> 3 Bulan' | 'Masih Rencana / Survey Dulu';
  hasDesign?: 'Sudah Punya Desain 3D' | 'Baru Ada Sketsa / Foto Referensi' | 'Belum Ada (Butuh Dibantu)';
  message?: string;
  score: number; // Internal calculated lead score
  scoreBreakdown?: string[];
  source: string; // e.g. "Website Consultation Form", "Direct WhatsApp"
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  landingPage?: string;
  status: LeadStatus;
  notes?: string;
  assignedAdmin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MaterialGuide {
  slug: string;
  name: string;
  category: 'core' | 'finishing' | 'toptable' | 'hardware';
  shortDesc: string;
  fullDesc: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  priceLevel: 'Ekonomis' | 'Standar' | 'Menengah' | 'Premium';
  imageUrl: string;
}

export interface ServiceArea {
  slug: string;
  name: string;
  badge: string;
  intro: string;
  description: string;
  coverageDetail: string[];
  projectHighlights: string[];
  localFaq: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'harga' | 'proses' | 'material' | 'garansi' | 'umum' | 'wilayah' | 'desain' | 'pembayaran' | 'layanan' | 'survei';
}

export interface Testimonial {
  id: string;
  clientName: string;
  area: string; // e.g. "Cisaat, Sukabumi"
  projectType: string;
  content: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: string;
  publishedAt: string;
  author: string;
  coverImage: string;
}
