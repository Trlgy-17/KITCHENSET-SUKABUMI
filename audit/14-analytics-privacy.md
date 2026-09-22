# 14 - PRIVACY, GDPR/UU PDP & ANALYTICS AUDIT REPORT

**Project:** KitchenSet Sukabumi (`kitchensetsukabumi.id`)  
**Audit Date:** 2026-09-22  
**Compliance Standards:** UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP Indonesia), General Privacy Best Practices

---

## 1. Data Collection & Privacy Practices
- **Privacy Policy Page:** Located at `/privacy` (with redirect rule from `/privacy-policy`). Clearly outlines purpose of lead data collection (consultation and survey coordination).
- **Terms of Service:** Located at `/terms`. Outlines custom manufacturing terms, estimation rules, and warranty conditions.
- **Analytics Scripts:** Currently no third-party tracking scripts (Google Tag Manager, Meta Pixel, Hotjar) inject third-party cookies or fingerprint visitors.
- **First-party Cookies:** Zero tracking cookies stored on client devices prior to explicit consent.

---

## 2. Lead Data Handling & Security (Critical Findings)

| Finding ID | Severity | File / Component | Privacy & Compliance Risk | Recommendation |
| :--- | :--- | :--- | :--- | :--- |
| **SEC-001** | **P0** | `src/app/admin/page.tsx`, `src/app/api/leads/route.ts` | **Violation of UU PDP:** Lead names, WhatsApp phone numbers, and home addresses submitted through survey booking are publicly accessible without authentication. | Immediate deployment blocker. Restrict API endpoints and dashboard with strong authentication or token gating before production launch. |
| **PRIV-001** | **P2** | `src/app/jadwalkan-survei/page.tsx` | The survey form collects customer name, phone number, and address without an explicit consent checkbox referencing the Privacy Policy. | Under UU PDP, collecting personal data requires clear basis of processing and explicit notice. Add consent statement with link to `/privacy` before submission button. |

---

## 3. Recommendations
1. Secure the lead management pipeline immediately (Addresses **SEC-001**).
2. Add a consent microcopy checkbox above form submission: *"Dengan mengirimkan form ini, Anda menyetujui Kebijakan Privasi KitchenSet Sukabumi untuk keperluan koordinasi survei & konsultasi."*
