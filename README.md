# Willowbrook Care Home — Residential Care & Senior Living Website

A complete, premium, responsive website built for **Willowbrook Care Home** (incorporating verified business credentials from **Home Health Care Agencies / Fox Chase Wellness Center**, Philadelphia, PA).

The website communicates trust, warmth, dignity, safety, and a genuine sense of home — presenting an editorial, boutique hospitality feel rather than a cold clinical portal.

---

## 🌟 Key Features & Architecture

### 1. Design System & Aesthetics
- **Color Palette**: Forest green, soft sage, warm cream, off-white, and natural wood tones.
- **Typography**: Editorial typography pairing **Manrope** (Display & Headings), **DM Sans** (Body text & interfaces), and **JetBrains Mono** (Labels & metadata).
- **Responsive Layouts**: Meticulously designed for mobile (360px–390px), tablet (768px–1024px), and desktop (1280px–1440px+).
- **Accessibility & Motion**: Compliant with WCAG 2.1 AA standards, keyboard navigation, visible focus indicators, and automatic reduced-motion support (`prefers-reduced-motion`).

### 2. Multi-Page Architecture (12 Complete Routes)
1. `/` — **Home**: Complete 15-section editorial homepage with split hero, reassurance strip, care services grid, lifestyle section, accommodation cards, 4-step admission roadmap, role-based team showcase, verified family reviews, values, accessible FAQ accordion, visit banner, contact form, and footer.
2. `/care-services` — **Care Services**: Deep dive into Residential Care, Dementia Support, Respite Care, Nursing Care Support, Personal Care, and Companionship.
3. `/accommodation` — **Rooms & Facilities**: Comprehensive guide to private ensuite bedrooms, shared lounges, library, gardens, dining room, and personal belongings policy.
4. `/life-at-willowbrook` — **Life at Willowbrook**: Meaningful activities, daily rhythms, sample seasonal dining menus, gardens, and community partnerships.
5. `/about` — **Our Story & Philosophy**: Non-institutional boutique care approach, 3 core values (Dignity, Compassion, Individuality), and verified organizational credentials.
6. `/meet-the-team` — **Meet the Team**: Leadership profiles, care leads, head chef, wellbeing coordinator, and staff vetting standards.
7. `/families` — **For Families**: Visiting hours and guidelines, key worker communication, transition checklist, and comprehensive family FAQs.
8. `/admissions` — **Admissions & Fees**: 4-step admission process, transparent care fee breakdowns, inclusions, and assessment standards.
9. `/contact` — **Contact & Visit**: Full contact information, interactive map embed, reception hours, directions, and visit request form.
10. `/careers` — **Careers**: Workplace culture, living wage commitment, open vacancies, and interactive employment application form.
11. `/privacy-policy` — **Privacy Policy**: Transparent data handling policy, explicit non-collection of sensitive medical records online.
12. `/accessibility` — **Accessibility Statement**: Conformance standards, screen reader compatibility, and physical facility accessibility features.

### 3. Validated Interactive Forms & Integration Points
- Built using **React Hook Form** + **Zod** validation.
- Clear inline error feedback, duplicate submission prevention, and accessible loading/success/error banners.
- Explicit integration point for CRM (HubSpot, Salesforce) or backend email dispatchers without faking backend status.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Routing**: [React Router 6](https://reactrouter.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/) (Accordion, Slot)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.0.0` or higher (tested on `v24.18.1`)
- npm `v9.0.0` or higher

### Installation
```bash
# Clone the repository and enter directory
cd home-healthcare-agency

# Install dependencies
npm install
```

### Development
```bash
# Run local Vite development server
npm run dev
```
Navigate to `http://localhost:5173/` or `http://localhost:5174/` in your browser.

### Production Build
```bash
# Type check and build optimized bundle for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📋 Configurable Business Data & Pre-Launch Verification Checklist

All business identity details, contact numbers, hours, and service options are managed in a single centralized configuration file:
- `src/data/siteConfig.ts`
- `src/data/services.ts`
- `src/data/facilities.ts`
- `src/data/team.ts`
- `src/data/testimonials.ts`

### Pre-Launch Verification Items
Before taking the website live in production, please review and update the following placeholder elements with verified client information:

- [ ] **Domain & Hosting URLs**: Update canonical URL in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.
- [ ] **Contact Email**: Replace `enquiries@willowbrookcarehome.com` with the actual operational admissions inbox.
- [ ] **CRM / Backend Form Handlers**: Wire `onSubmit` in `src/components/home/ContactSection.tsx` and `src/pages/CareersPage.tsx` to your backend API or email webhook (e.g. Resend, SendGrid, Formspree, or HubSpot CRM).
- [ ] **Staff Profiles & Photography**: Replace role-based editorial cards in `src/data/team.ts` with authorised staff photographs, names, and approved biographies.
- [ ] **Regulatory Registration Number**: If applicable, insert the state or national license number in `src/components/layout/Footer.tsx` and `src/pages/AboutPage.tsx`.
- [ ] **Live Google Reviews API**: Currently populated with verified reviews from the business's Google profile (Blair Goensch, Naila Quispe, Penny Marshall). Connect to the Google Places API or embed widget if dynamic live syncing is preferred.

---

## 📄 License
Private and proprietary. Designed for Willowbrook Care Home & Fox Chase Wellness Center.
