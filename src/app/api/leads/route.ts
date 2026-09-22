import { NextResponse } from "next/server";
import { getAllLeads, createLead } from "@/server/leadStore";
import { calculateLeadScore } from "@/lib/leadScorer";
import { isAuthorizedAdmin, sanitizeInput } from "@/lib/auth";

export async function GET(request: Request) {
  if (!isAuthorizedAdmin(request)) {
    return NextResponse.json(
      { success: false, message: "Akses ditolak: Kunci otorisasi admin diperlukan" },
      { status: 401 }
    );
  }

  try {
    const leads = getAllLeads();
    return NextResponse.json({ success: true, data: leads });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data leads" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();

    const name = sanitizeInput(rawBody.name);
    const phone = sanitizeInput(rawBody.phone);
    const email = rawBody.email ? sanitizeInput(rawBody.email) : undefined;
    const location = sanitizeInput(rawBody.location) || "Sukabumi";
    const message = rawBody.message ? sanitizeInput(rawBody.message) : undefined;

    // Server-side validation (PRD Section 31, 32)
    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, message: "Nama wajib diisi (minimal 2 karakter)" },
        { status: 400 }
      );
    }

    if (!phone || phone.length < 8) {
      return NextResponse.json(
        { success: false, message: "Nomor WhatsApp aktif wajib diisi" },
        { status: 400 }
      );
    }

    // Lead scoring calculation (PRD Section 17.4)
    const { score, breakdown } = calculateLeadScore({
      location,
      budgetRange: rawBody.budgetRange,
      hasPhoto: Boolean(rawBody.hasPhoto),
      timeline: rawBody.timeline,
      readyForSurvey: rawBody.readyForSurvey || rawBody.timeline === "< 1 Bulan",
    });

    const newLead = createLead({
      name,
      phone,
      email,
      location,
      service: rawBody.service || "Kitchen Set Custom",
      propertyType: rawBody.propertyType,
      statusProperty: rawBody.statusProperty,
      estimatedSize: rawBody.estimatedSize,
      budgetRange: rawBody.budgetRange,
      timeline: rawBody.timeline,
      hasDesign: rawBody.hasDesign,
      message,
      score,
      scoreBreakdown: breakdown,
      source: rawBody.source || "Website Consultation Form",
      utmSource: rawBody.utmSource ? sanitizeInput(rawBody.utmSource) : undefined,
      utmMedium: rawBody.utmMedium ? sanitizeInput(rawBody.utmMedium) : undefined,
      utmCampaign: rawBody.utmCampaign ? sanitizeInput(rawBody.utmCampaign) : undefined,
      landingPage: rawBody.landingPage ? sanitizeInput(rawBody.landingPage) : undefined,
      status: "NEW",
      assignedAdmin: "Admin Sukabumi",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Konsultasi berhasil terkirim. Tim kami akan segera menghubungi Anda!",
        data: newLead,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server saat memproses formulir" },
      { status: 500 }
    );
  }
}
