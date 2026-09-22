import { NextResponse } from "next/server";
import { getLeadById, updateLeadStatus } from "@/server/leadStore";
import { isAuthorizedAdmin } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorizedAdmin(request)) {
    return NextResponse.json(
      { success: false, message: "Akses ditolak: Kunci otorisasi admin diperlukan" },
      { status: 401 }
    );
  }

  const { id } = await params;
  const lead = getLeadById(id);

  if (!lead) {
    return NextResponse.json({ success: false, message: "Lead tidak ditemukan" }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: lead });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorizedAdmin(request)) {
    return NextResponse.json(
      { success: false, message: "Akses ditolak: Kunci otorisasi admin diperlukan" },
      { status: 401 }
    );
  }

  try {
    const { id } = await params;
    const body = await request.json();

    if (!body.status) {
      return NextResponse.json(
        { success: false, message: "Status lead wajib ditentukan" },
        { status: 400 }
      );
    }

    const updated = updateLeadStatus(id, body.status, body.notes);

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Lead tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Status lead berhasil diperbarui",
      data: updated,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui status lead" },
      { status: 500 }
    );
  }
}
