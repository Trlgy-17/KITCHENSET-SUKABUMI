import React from "react";
import { Metadata } from "next";
import { AdminPipeline } from "@/components/admin/AdminPipeline";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Database, LayoutDashboard } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin CRM & Lead Pipeline | Kitchen Set Sukabumi",
  description: "Portal CRM dan manajemen alur status prospek konsultasi KitchenSetSukabumi.id.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <div className="bg-editorial-50/60 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumb items={[{ name: "Admin CRM" }]} />

        {/* Dashboard Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-editorial-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="accent">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                Internal System
              </Badge>
              <span className="text-xs text-editorial-500 font-mono">Role: Super Admin / Sales</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-editorial-900">
              Manajemen Leads & Funnel CRM
            </h1>
            <p className="text-xs sm:text-sm text-editorial-600">
              Pantau alur konversi dari form konsultasi website, WhatsApp deep link, hingga tahap deal & produksi workshop.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
              <Database className="w-3.5 h-3.5" />
              Live CRM Database
            </span>
          </div>
        </div>

        {/* The Pipeline Board */}
        <AdminPipeline />
      </div>
    </div>
  );
}
