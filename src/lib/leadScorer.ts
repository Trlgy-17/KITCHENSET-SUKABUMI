import { SITE_CONFIG } from "@/config/site";

export interface ScoreInput {
  location?: string;
  budgetRange?: string;
  hasPhoto?: boolean;
  timeline?: string;
  readyForSurvey?: boolean;
}

export function calculateLeadScore(input: ScoreInput): { score: number; breakdown: string[] } {
  let score = 0;
  const breakdown: string[] = [];

  // Check service area match (+2)
  const loc = (input.location || "").toLowerCase();
  const matchesServiceArea = SITE_CONFIG.serviceAreas.some(area =>
    loc.includes(area.toLowerCase()) || loc.includes("sukabumi")
  );

  if (matchesServiceArea) {
    score += 2;
    breakdown.push("Area layanan Sukabumi terkonfirmasi (+2)");
  }

  // Budget range defined (+2)
  if (input.budgetRange && input.budgetRange !== "Belum Menentukan Budget" && input.budgetRange.trim() !== "") {
    score += 2;
    breakdown.push("Rentang anggaran teridentifikasi (+2)");
  }

  // Has photo or drawing (+1)
  if (input.hasPhoto) {
    score += 1;
    breakdown.push("Foto/denah lokasi dilampirkan (+1)");
  }

  // Timeline within 3 months (+2)
  if (
    input.timeline === "< 1 Bulan" ||
    input.timeline === "1 - 3 Bulan" ||
    input.timeline?.toLowerCase().includes("segera")
  ) {
    score += 2;
    breakdown.push("Target pengerjaan mendesak / < 3 bulan (+2)");
  }

  // Ready for survey (+3)
  if (input.readyForSurvey) {
    score += 3;
    breakdown.push("Calon klien siap jadwal survey lokasi (+3)");
  }

  return { score, breakdown };
}
