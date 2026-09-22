import { Lead, LeadStatus } from "@/types";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "leads-db.json");

const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-1001",
    name: "Ibu Rina Marlina",
    phone: "081298765432",
    email: "rina.marlina@gmail.com",
    location: "Kecamatan Cikole, Kota Sukabumi",
    service: "Kitchen Set Custom Letter-L",
    propertyType: "Rumah Baru",
    statusProperty: "Sudah Serah Terima",
    estimatedSize: "Panjang 3.2m x 2.4m",
    budgetRange: "Rp 18 - 25 Juta",
    timeline: "< 1 Bulan",
    hasDesign: "Baru Ada Sketsa / Foto Referensi",
    message: "Ingin kitchen set warna kayu Japandi dengan meja granit hitam. Dapur sudah siap diukur.",
    score: 9,
    scoreBreakdown: [
      "Area layanan Sukabumi terkonfirmasi (+2)",
      "Rentang anggaran teridentifikasi (+2)",
      "Target pengerjaan mendesak / < 3 bulan (+2)",
      "Calon klien siap jadwal survey lokasi (+3)"
    ],
    source: "Form Konsultasi Website",
    utmSource: "google",
    utmMedium: "organic",
    landingPage: "/kitchen-set",
    status: "SURVEY_SCHEDULED",
    notes: "Jadwal survey Sabtu pagi jam 10.00 WIB. Sudah dikonfirmasi via WhatsApp.",
    assignedAdmin: "Admin Sukabumi",
    createdAt: "2026-03-18T09:30:00.000Z",
    updatedAt: "2026-03-18T14:15:00.000Z"
  },
  {
    id: "lead-1002",
    name: "Bpk. Dedi Supriyadi",
    phone: "085712345678",
    email: "dedi_sup@yahoo.com",
    location: "Perumahan Cisaat Indah, Sukabumi",
    service: "Kitchen Set Modern with Island Table",
    propertyType: "Rumah Baru",
    statusProperty: "Sedang Dibangun",
    estimatedSize: "Panjang 4 meter + Meja Island",
    budgetRange: "Rp 30 - 45 Juta",
    timeline: "1 - 3 Bulan",
    hasDesign: "Belum Ada (Butuh Dibantu)",
    message: "Rumah sedang tahap acian dinding. Butuh saran posisi pipa air dan stop kontak sebelum pasang keramik.",
    score: 9,
    scoreBreakdown: [
      "Area layanan Sukabumi terkonfirmasi (+2)",
      "Rentang anggaran teridentifikasi (+2)",
      "Target pengerjaan mendesak / < 3 bulan (+2)",
      "Calon klien siap jadwal survey lokasi (+3)"
    ],
    source: "Form Konsultasi Website",
    utmSource: "instagram",
    utmMedium: "cpc",
    landingPage: "/",
    status: "CONSULTATION",
    notes: "Sudah dikirim katalog material HPL & Granit via WA. Tunggu jadwal koordinasi dengan mandor rumah.",
    assignedAdmin: "Admin Sukabumi",
    createdAt: "2026-03-17T11:20:00.000Z",
    updatedAt: "2026-03-17T16:00:00.000Z"
  },
  {
    id: "lead-1003",
    name: "Ibu Sarah Lestari",
    phone: "081387654321",
    email: "sarah.lestari@gmail.com",
    location: "Cibadak, Kab. Sukabumi",
    service: "Renovasi Dapur Lama",
    propertyType: "Renovasi Rumah Lama",
    statusProperty: "Dihuni",
    estimatedSize: "Panjang 2.6 meter lurus",
    budgetRange: "Rp 12 - 18 Juta",
    timeline: "< 1 Bulan",
    hasDesign: "Baru Ada Sketsa / Foto Referensi",
    message: "Mau ganti meja semen lama jadi kabinet kayu bersih warna putih abu.",
    score: 7,
    scoreBreakdown: [
      "Area layanan Sukabumi terkonfirmasi (+2)",
      "Rentang anggaran teridentifikasi (+2)",
      "Target pengerjaan mendesak / < 3 bulan (+2)",
      "Foto/denah lokasi dilampirkan (+1)"
    ],
    source: "WhatsApp Deep Link",
    utmSource: "google",
    utmMedium: "cpc",
    landingPage: "/layanan/renovasi-dapur",
    status: "CONTACTED",
    notes: "Kirim foto dapur lama via WA, tim estimasi sedang review opsi pembongkaran.",
    assignedAdmin: "Admin Sukabumi",
    createdAt: "2026-03-19T08:10:00.000Z",
    updatedAt: "2026-03-19T08:45:00.000Z"
  },
  {
    id: "lead-1004",
    name: "Bpk. Faisal Akbar",
    phone: "081909876543",
    location: "Baros, Kota Sukabumi",
    service: "Kitchen Set Custom Straight",
    propertyType: "Rumah Baru",
    statusProperty: "Sudah Serah Terima",
    estimatedSize: "Panjang 2.2 meter",
    budgetRange: "Rp 10 - 15 Juta",
    timeline: "< 1 Bulan",
    hasDesign: "Belum Ada (Butuh Dibantu)",
    message: "Cari kitchen set minimalis ringkas untuk rumah baru serah terima.",
    score: 6,
    scoreBreakdown: [
      "Area layanan Sukabumi terkonfirmasi (+2)",
      "Rentang anggaran teridentifikasi (+2)",
      "Target pengerjaan mendesak / < 3 bulan (+2)"
    ],
    source: "Website Quick Quote",
    landingPage: "/estimator",
    status: "NEW",
    assignedAdmin: "Unassigned",
    createdAt: "2026-03-19T14:40:00.000Z",
    updatedAt: "2026-03-19T14:40:00.000Z"
  }
];

function getLeadsFromDisk(): Lead[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error reading leads file:", err);
  }
  // Initialize file with default leads
  saveLeadsToDisk(INITIAL_LEADS);
  return INITIAL_LEADS;
}

function saveLeadsToDisk(leads: Lead[]): void {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error writing leads file:", err);
  }
}

export function getAllLeads(): Lead[] {
  return getLeadsFromDisk();
}

export function getLeadById(id: string): Lead | undefined {
  const leads = getLeadsFromDisk();
  return leads.find((l) => l.id === id);
}

export function createLead(leadData: Omit<Lead, "id" | "createdAt" | "updatedAt">): Lead {
  const leads = getLeadsFromDisk();
  const newLead: Lead = {
    ...leadData,
    id: `lead-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  leads.unshift(newLead);
  saveLeadsToDisk(leads);
  return newLead;
}

export function updateLeadStatus(id: string, status: LeadStatus, notes?: string): Lead | null {
  const leads = getLeadsFromDisk();
  const index = leads.findIndex((l) => l.id === id);
  if (index === -1) return null;

  leads[index].status = status;
  leads[index].updatedAt = new Date().toISOString();
  if (notes) {
    leads[index].notes = notes;
  }

  saveLeadsToDisk(leads);
  return leads[index];
}
