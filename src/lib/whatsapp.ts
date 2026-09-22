import { contact } from "@/config/site";

export interface WhatsAppConsultationPayload {
  name?: string;
  location?: string;
  service?: string;
  size?: string;
  timeline?: string;
  budget?: string;
  customMessage?: string;
}

export interface WhatsAppSurveyPayload {
  name: string;
  phone: string;
  emergencyPhone?: string;
  jobType: string;
  propertyType: string;
  city: string;
  address: string;
  date: string;
  time: string;
}

export function generateWhatsAppLink(payload?: WhatsAppConsultationPayload): string {
  const number = contact.whatsappInternational;

  if (payload?.customMessage) {
    return `https://wa.me/${number}?text=${encodeURIComponent(payload.customMessage)}`;
  }

  const lines = [
    "Halo KitchenSet Sukabumi,",
    "Saya tertarik konsultasi mengenai project interior/kitchen set.",
    `Nama: ${payload?.name || ""}`,
    `Lokasi: ${payload?.location || ""}`,
    `Jenis kebutuhan: ${payload?.service || ""}`,
    `Perkiraan ukuran ruang: ${payload?.size || ""}`,
    `Rencana pengerjaan: ${payload?.timeline || ""}`,
    `Budget range: ${payload?.budget || ""}`,
    "",
    "Mohon dibantu informasi tahap selanjutnya.",
  ];

  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function generateSurveyWhatsAppLink(payload: WhatsAppSurveyPayload): string {
  const number = contact.whatsappInternational;

  const lines = [
    "Halo KitchenSet Sukabumi,",
    "Saya ingin mengajukan jadwal survei.",
    "",
    "DATA DIRI",
    `Nama: ${payload.name}`,
    `WhatsApp: ${payload.phone}`,
  ];

  if (payload.emergencyPhone && payload.emergencyPhone.trim()) {
    lines.push(`No. Darurat: ${payload.emergencyPhone.trim()}`);
  }

  lines.push(
    "",
    "KEBUTUHAN",
    `Jenis Pekerjaan: ${payload.jobType}`,
    `Peruntukan: ${payload.propertyType}`,
    "",
    "LOKASI",
    `Kota/Kabupaten: ${payload.city}`,
    `Alamat: ${payload.address}`,
    "",
    "JADWAL",
    `Tanggal: ${payload.date}`,
    `Jam: ${payload.time}`,
    "",
    "Mohon konfirmasi ketersediaan jadwal survei."
  );

  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
}
