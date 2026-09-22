# 10 - FORMS & WHATSAPP INTEGRATION AUDIT REPORT

**Project:** KitchenSet Sukabumi (`kitchensetsukabumi.id`)  
**Audit Date:** 2026-09-22  
**Integration Points:**
- Survey Booking Form (`/jadwalkan-survei`)
- Consultation Form Component (`ConsultationForm.tsx`)
- WhatsApp Direct Click-to-Chat Buttons (`wa.me`)
- Leads Ingestion API (`/api/leads`)

---

## 1. Executive Summary
The primary conversion funnel relies on WhatsApp click-to-chat and a direct survey booking form that writes leads to `/api/leads`. Both funnels were tested for payload encoding, phone number formatting, validation rules, error handling, and timezone edge cases.

---

## 2. Findings Log

| Finding ID | Severity | File / Component | Issue Description | Impact | Recommendation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **FORM-001** | **P2** | `src/app/jadwalkan-survei/page.tsx`, `ConsultationForm.tsx` | Inputs lack HTML `maxLength` limits on client side. | Potential for malicious or accidental buffer/text flood before payload reaches server. | Add reasonable client-side `maxLength` attributes (e.g., name: 100, phone: 20, address: 250, notes: 500). |
| **UX-001** | **P2** | `src/app/jadwalkan-survei/page.tsx` line 144 | Minimum date restriction uses `new Date().toISOString().split("T")[0]`. `toISOString()` produces UTC date. | In Western Indonesia Time (WIB = UTC+7), between 00:00 and 06:59 WIB, users are allowed to select yesterday's calendar date. | Calculate minimum date using local Indonesian timezone offset (`new Date(Date.now() + 7 * 3600 * 1000)` or standard local format `YYYY-MM-DD`). |
| **FORM-002** | **P3** | `src/app/api/leads/route.ts` | Server-side validation parses payload, but does not sanitize HTML tags from strings before storage. | Potential stored XSS if an admin interface displays lead notes without escaping. | Strip HTML tags or enforce strict regex validation on text inputs. |

---

## 3. WhatsApp Deep Linking Verification

| Location | Link Pattern | Pre-filled Message Sample | Status |
| :--- | :--- | :--- | :--- |
| **Header CTA** | `https://wa.me/6281224977989?text=...` | *"Halo KitchenSet Sukabumi, saya ingin konsultasi mengenai pembuatan kitchen set custom..."* | **VERIFIED** |
| **Floating CTA** | `https://wa.me/6281224977989?text=...` | *"Halo, saya ingin bertanya tentang paket kitchen set..."* | **VERIFIED** |
| **Estimator Tool** | `https://wa.me/6281224977989?text=...` | Formatted budget calculation and chosen layout/material parameters included in URL query. | **VERIFIED** |
| **Service Pages** | `https://wa.me/6281224977989?text=...` | Specific service name embedded into message prompt. | **VERIFIED** |

- All query strings use proper `encodeURIComponent()`.
- Country code `62` without leading zero or special characters (`+`, `-`, spaces) is uniformly implemented, ensuring 100% compatibility with WhatsApp Web, iOS WhatsApp, and Android WhatsApp.
