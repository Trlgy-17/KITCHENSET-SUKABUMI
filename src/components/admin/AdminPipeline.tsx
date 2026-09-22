"use client";

import React, { useState, useEffect } from "react";
import { Lead, LeadStatus } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDateIndo } from "@/lib/utils";
import {
  Users,
  Search,
  Filter,
  Phone,
  MessageCircle,
  Calendar,
  DollarSign,
  Award,
  ChevronRight,
  Sparkles,
  TrendingUp,
  MapPin,
  Clock,
  Edit,
  Save,
  X,
  RefreshCw,
  Lock,
  KeyRound,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

const STATUS_LIST: { key: LeadStatus; label: string; color: string }[] = [
  { key: "NEW", label: "Lead Baru", color: "bg-blue-100 text-blue-800" },
  { key: "CONTACTED", label: "Sudah Dikontak", color: "bg-indigo-100 text-indigo-800" },
  { key: "QUALIFIED", label: "Terkualifikasi", color: "bg-cyan-100 text-cyan-800" },
  { key: "CONSULTATION", label: "Konsultasi 3D", color: "bg-amber-100 text-amber-800" },
  { key: "SURVEY_SCHEDULED", label: "Jadwal Survey", color: "bg-purple-100 text-purple-800" },
  { key: "SURVEY_DONE", label: "Survey Selesai", color: "bg-purple-200 text-purple-900" },
  { key: "DESIGN", label: "Proses Desain", color: "bg-pink-100 text-pink-800" },
  { key: "QUOTATION", label: "Pengajuan RAB", color: "bg-yellow-100 text-yellow-800" },
  { key: "DEAL", label: "Deal / SPK", color: "bg-emerald-100 text-emerald-800" },
  { key: "PRODUCTION", label: "Produksi Workshop", color: "bg-teal-100 text-teal-800" },
  { key: "COMPLETED", label: "Selesai Serah Terima", color: "bg-emerald-200 text-emerald-900" },
  { key: "HOLD", label: "Hold / Menunda", color: "bg-stone-200 text-stone-700" },
  { key: "LOST", label: "Batal (Lost)", color: "bg-rose-100 text-rose-800" },
];

export function AdminPipeline() {
  const [adminToken, setAdminToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [editStatus, setEditStatus] = useState<LeadStatus>("NEW");
  const [saving, setSaving] = useState(false);

  const verifyAndLoad = async (token: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        headers: { "x-admin-key": token },
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setLeads(json.data);
        setIsAuthenticated(true);
        setAdminToken(token);
        sessionStorage.setItem("ks_admin_token", token);
        setAuthError("");
      } else {
        setIsAuthenticated(false);
        setAuthError(json.message || "Kunci otorisasi tidak valid.");
      }
    } catch (e) {
      setIsAuthenticated(false);
      setAuthError("Gagal terhubung ke server validasi leads.");
    } finally {
      setLoading(false);
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    const savedToken = sessionStorage.getItem("ks_admin_token");
    if (savedToken) {
      verifyAndLoad(savedToken);
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setAuthError("Masukkan kunci akses admin.");
      return;
    }
    setAuthLoading(true);
    verifyAndLoad(passcode.trim());
  };

  const handleLogout = () => {
    sessionStorage.removeItem("ks_admin_token");
    setAdminToken("");
    setIsAuthenticated(false);
    setLeads([]);
  };

  const fetchLeads = async () => {
    if (!adminToken) return;
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        headers: { "x-admin-key": adminToken },
      });
      const json = await res.json();
      if (json.success) {
        setLeads(json.data);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleOpenLead = (lead: Lead) => {
    setSelectedLead(lead);
    setEditNotes(lead.notes || "");
    setEditStatus(lead.status);
  };

  const handleSaveLead = async () => {
    if (!selectedLead || !adminToken) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/leads/${selectedLead.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminToken,
        },
        body: JSON.stringify({ status: editStatus, notes: editNotes }),
      });
      const json = await res.json();
      if (json.success) {
        setSelectedLead(json.data);
        // update list in state
        setLeads((prev) => prev.map((l) => (l.id === json.data.id ? json.data : l)));
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  // KPI calculations
  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === "NEW").length;
  const surveyScheduled = leads.filter((l) => l.status === "SURVEY_SCHEDULED" || l.status === "SURVEY_DONE").length;
  const dealLeads = leads.filter((l) => l.status === "DEAL" || l.status === "PRODUCTION" || l.status === "COMPLETED").length;
  const avgScore = totalLeads > 0 ? (leads.reduce((acc, cur) => acc + (cur.score || 0), 0) / totalLeads).toFixed(1) : 0;

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-12 bg-white p-8 rounded-2xl border border-editorial-200 shadow-card text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-editorial-100 text-editorial-800 flex items-center justify-center mx-auto">
          <Lock className="w-6 h-6 text-[#181715]" />
        </div>
        <div className="space-y-1">
          <h2 className="font-serif text-2xl font-bold text-editorial-900">
            Akses Terbatas CRM Internal
          </h2>
          <p className="text-xs text-editorial-600">
            Halaman ini khusus untuk manajemen & admin KitchenSet Sukabumi. Masukkan kunci otorisasi untuk membuka data leads pelanggan.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-editorial-800 mb-1">
              Kunci Akses Admin (Passcode)
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-editorial-400" />
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Masukkan Passcode Admin..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-editorial-300 text-sm text-editorial-900 focus:outline-none focus:ring-2 focus:ring-[#181715]/20 focus:border-[#181715]"
                autoFocus
              />
            </div>
          </div>

          {authError && (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
              {authError}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={authLoading}
          >
            {authLoading ? "Memverifikasi..." : "Buka Dashboard CRM"}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Action Bar */}
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-editorial-300 bg-white text-editorial-700 hover:bg-editorial-50 text-xs font-medium transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          Kunci CRM
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-editorial-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-editorial-500 font-medium">Total Masuk</span>
            <Users className="w-4 h-4 text-primary" />
          </div>
          <p className="text-2xl font-bold font-serif text-editorial-900">{totalLeads}</p>
          <span className="text-[10px] text-blue-600 font-semibold">{newLeads} Perlu Follow-Up</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-editorial-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-editorial-500 font-medium">Jadwal Survey</span>
            <Calendar className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-2xl font-bold font-serif text-editorial-900">{surveyScheduled}</p>
          <span className="text-[10px] text-purple-600 font-semibold">Siap Pengukuran Laser</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-editorial-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-editorial-500 font-medium">Deal & Produksi</span>
            <DollarSign className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold font-serif text-editorial-900">{dealLeads}</p>
          <span className="text-[10px] text-emerald-600 font-semibold">Closing & Kontrak SPK</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-editorial-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-editorial-500 font-medium">Rata-rata Skor Lead</span>
            <Award className="w-4 h-4 text-accent" />
          </div>
          <p className="text-2xl font-bold font-serif text-editorial-900">{avgScore} / 10</p>
          <span className="text-[10px] text-editorial-600">Berdasarkan Bobot Kualifikasi</span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-editorial-200 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-editorial-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Cari nama, nomor HP, atau lokasi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 rounded-lg border border-editorial-300 text-xs focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-editorial-500" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 rounded-lg border border-editorial-300 text-xs bg-white text-editorial-800 outline-none w-full sm:w-auto"
          >
            <option value="all">Semua Status Funnel</option>
            {STATUS_LIST.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
          <button
            onClick={fetchLeads}
            className="p-2 rounded-lg border border-editorial-300 hover:bg-editorial-100 text-editorial-700"
            title="Muat Ulang Data"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl border border-editorial-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-editorial-100/70 border-b border-editorial-200 text-editorial-700 uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-3.5">Nama & Kontak</th>
                <th className="p-3.5">Lokasi & Layanan</th>
                <th className="p-3.5">Budget & Timeline</th>
                <th className="p-3.5 text-center">Skor Prospek</th>
                <th className="p-3.5">Status Funnel</th>
                <th className="p-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-editorial-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-editorial-500">
                    Memuat data CRM leads...
                  </td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-editorial-500">
                    Tidak ada data leads yang cocok dengan kriteria pencarian.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => {
                  const statusObj = STATUS_LIST.find((s) => s.key === lead.status) || STATUS_LIST[0];
                  return (
                    <tr key={lead.id} className="hover:bg-editorial-50/50 transition-colors">
                      <td className="p-3.5 space-y-0.5">
                        <span className="font-bold text-editorial-900 block">{lead.name}</span>
                        <div className="flex items-center gap-2 text-[11px] text-editorial-600">
                          <span>{lead.phone}</span>
                          <a
                            href={`https://wa.me/${lead.phone.replace(/^0/, "62")}?text=Halo%20${encodeURIComponent(lead.name)},%20kami%20dari%20Kitchen%20Set%20Sukabumi...`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 hover:text-emerald-700"
                            title="Chat via WA"
                          >
                            <MessageCircle className="w-3.5 h-3.5 inline" />
                          </a>
                        </div>
                      </td>
                      <td className="p-3.5 space-y-0.5">
                        <span className="font-medium text-editorial-800 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-accent shrink-0" />
                          {lead.location}
                        </span>
                        <span className="text-[11px] text-editorial-500 block">{lead.service}</span>
                      </td>
                      <td className="p-3.5 space-y-0.5">
                        <span className="font-semibold text-editorial-800 block">
                          {lead.budgetRange || "-"}
                        </span>
                        <span className="text-[11px] text-editorial-500 block">
                          Target: {lead.timeline || "Santai"}
                        </span>
                      </td>
                      <td className="p-3.5 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                            lead.score >= 8
                              ? "bg-emerald-100 text-emerald-800"
                              : lead.score >= 5
                              ? "bg-amber-100 text-amber-800"
                              : "bg-editorial-200 text-editorial-700"
                          }`}
                        >
                          {lead.score} / 10
                        </span>
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusObj.color}`}>
                          {statusObj.label}
                        </span>
                      </td>
                      <td className="p-3.5 text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleOpenLead(lead)}
                          className="text-xs"
                        >
                          Detail CRM &rarr;
                        </Button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead Detail Drawer / Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl border border-editorial-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between border-b border-editorial-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="accent">{selectedLead.id}</Badge>
                  <span className="text-xs text-editorial-500">
                    Masuk: {formatDateIndo(selectedLead.createdAt)}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-editorial-900 mt-1">
                  {selectedLead.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-1 rounded-lg text-editorial-400 hover:text-editorial-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lead Breakdown Specs */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-editorial-50 space-y-1">
                <span className="text-editorial-500 block">WhatsApp & Telepon:</span>
                <span className="font-bold text-editorial-900">{selectedLead.phone}</span>
              </div>
              <div className="p-3 rounded-lg bg-editorial-50 space-y-1">
                <span className="text-editorial-500 block">Alamat / Lokasi:</span>
                <span className="font-bold text-editorial-900">{selectedLead.location}</span>
              </div>
              <div className="p-3 rounded-lg bg-editorial-50 space-y-1">
                <span className="text-editorial-500 block">Layanan Diminta:</span>
                <span className="font-bold text-editorial-900">{selectedLead.service}</span>
              </div>
              <div className="p-3 rounded-lg bg-editorial-50 space-y-1">
                <span className="text-editorial-500 block">Perkiraan Dimensi:</span>
                <span className="font-bold text-editorial-900">{selectedLead.estimatedSize || "-"}</span>
              </div>
              <div className="p-3 rounded-lg bg-editorial-50 space-y-1">
                <span className="text-editorial-500 block">Rentang Anggaran:</span>
                <span className="font-bold text-editorial-900">{selectedLead.budgetRange || "-"}</span>
              </div>
              <div className="p-3 rounded-lg bg-editorial-50 space-y-1">
                <span className="text-editorial-500 block">Target Waktu:</span>
                <span className="font-bold text-editorial-900">{selectedLead.timeline || "-"}</span>
              </div>
            </div>

            {/* Score Breakdown (PRD Section 17.4) */}
            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-900">
                  Perhitungan Skor Prospek (Lead Score): {selectedLead.score} Poin
                </span>
                <span className="text-[10px] text-emerald-700 font-semibold">Skala 1 - 10</span>
              </div>
              {selectedLead.scoreBreakdown && selectedLead.scoreBreakdown.length > 0 && (
                <ul className="space-y-1 text-[11px] text-emerald-800">
                  {selectedLead.scoreBreakdown.map((b, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span>✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Lead Status Editor */}
            <div className="space-y-3 pt-2 border-t border-editorial-100">
              <label className="block text-xs font-bold text-editorial-900 uppercase tracking-wider">
                Perbarui Tahapan Funnel (Status CRM)
              </label>
              <select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value as LeadStatus)}
                className="w-full p-2.5 rounded-lg border border-editorial-300 text-xs bg-white text-editorial-800 font-medium outline-none focus:ring-2 focus:ring-primary/20"
              >
                {STATUS_LIST.map((st) => (
                  <option key={st.key} value={st.key}>
                    {st.label} ({st.key})
                  </option>
                ))}
              </select>
            </div>

            {/* Admin Notes */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-editorial-900 uppercase tracking-wider">
                Catatan Internal Tim / Follow Up
              </label>
              <textarea
                rows={3}
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                placeholder="Tuliskan catatan hasil obrolan WhatsApp, jam survey, atau penawaran harga..."
                className="w-full p-3 rounded-lg border border-editorial-300 text-xs outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-editorial-100">
              <a
                href={`https://wa.me/${selectedLead.phone.replace(/^0/, "62")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] px-4 py-2.5 rounded-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Chat WhatsApp Klien
              </a>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => setSelectedLead(null)}>
                  Tutup
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  disabled={saving}
                  onClick={handleSaveLead}
                >
                  <Save className="w-4 h-4 mr-1.5" />
                  {saving ? "Menyimpan..." : "Simpan Perubahan"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
