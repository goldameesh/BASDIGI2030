# BASDIGI2030 — Complete Project Handover
> Last updated: 18 April 2026 · Dubai, UAE · For use in any new session

---

## 1. WHAT THIS PROJECT IS

**BASDIGI2030** is the official digital platform for **Bhramaastra Advisory Services (BAS)** — an AI-augmented advisory firm led by founder **Amish Shah**, based in Dubai, UAE and serving 12+ countries.

The platform serves three functions:
1. **Corporate advisory showcase** — GRC, ESG, Transformation, Digital (services)
2. **BAS Academy** — a founder-led AI learning portal
3. **DecisionMine** — an early-access AI decision engine (the "Third Brain™")

**The platform is NOT a product store.** It is a premium advisory portal. All CTAs lead to conversations (WhatsApp), external platforms, or waitlists. No prices are shown. All engagements are scope-based.

---

## 2. TECHNICAL STACK

| Property | Value |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS (custom config) |
| **Animation** | Framer Motion |
| **3D / WebGL** | React Three Fiber (used in hero) |
| **Forms** | Formspree (JSON POST) |
| **Dev Server** | `npm run dev` → `localhost:3000` |
| **Location** | `C:\Users\amish\OneDrive\2026\BASDIGI2030` |

**Critical env note:** The project lives on a OneDrive-synced path. OneDrive file-locking causes `EINVAL` errors during `npm run build`. Standard recovery = `rmdir /s /q .next` then rebuild.

---

## 3. BRANDING RULES (NON-NEGOTIABLE)

These rules apply to every page, component, and line of copy. They are called **"Oscar-Grade"** or **"Bhramaastra Elite Branding"**.

| Rule | Spec |
|---|---|
| **Primary colour** | Gold `#C9A84C` |
| **Background** | Royal Navy `#0B1B4D` |
| **Deep Dark** | `#050D2A` |
| **Marble sections** | White divider sections (`marble-section` CSS class) |
| **Heading font** | Playfair Display (`.font-playfair`) |
| **Body font** | Inter (`.font-inter`) |
| **Gold labels** | `.label-gold` class — small caps, tracked |
| **Gold CTA** | `.btn-gold` — filled gold button |
| **Glass CTA** | `.btn-glass` — navy glass with gold border |
| **Glass card** | `.glass-card` — translucent navy card |
| **Input fields** | `.input-glass` — dark glass input |
| **No prices on any page** | All service CTAs say "Request a Scope-Based Quote →" |
| **No placeholder images** | Generate real images or leave sections clean |
| **No cold sales language** | Advisory tone only — commanding, warm, not pushy |
| **Developer text forbidden** | No "TODO", "Component X", "Coming soon" on any frontend |

**WhatsApp contact (all CTAs):** `https://wa.me/971504090727`  
**Phone:** `+971 50 409 0727`  
**Email:** `connect@bhramaastraadvisory.com`

---

## 4. COMPLETE ROUTE MAP — WHAT IS BUILT

Every route below passes `npm run build` with **Exit code: 0** as of 18 April 2026.

### ✅ LIVE — FULLY BUILT

| Route | File | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage — Hero (WebGL mesh + warm shimmer text), services preview, ecosystem teaser, why BAS section, contact teaser |
| `/about` | `src/app/about/page.tsx` | Founder bio (Amish Shah), 5D Framework, philosophy |
| `/services` | `src/app/services/page.tsx` | Services overview grid |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | Dynamic service detail pages (GRC, ESG, Transformation, Digital, AI Strategy, etc.) |
| `/ecosystem` | `src/app/ecosystem/page.tsx` | Digital ecosystem catalog (12 product tiles with tab filtering) — for salon/SME clients |
| `/library` | `src/app/library/page.tsx` | Free Resource Library — 3 resources (GRC Playbook, M365 Copilot, DecisionMine) |
| `/academy` | `src/app/academy/page.tsx` | BAS Academy — hero, philosophy, 4 programme cards, "Why BAS Academy" 4-point grid, waitlist form (Formspree `xrerkgvj`) |
| `/decisionmine` | `src/app/decisionmine/page.tsx` | DecisionMine Third Brain™ — hero, "not a chatbot" explainer, 15-layer analytical grid, early access context, final CTA |
| `/contact` | `src/app/contact/page.tsx` | Contact page — two-column (form + direct contact), Formspree `xbdqonrw`, WhatsApp/Email/Phone/Location cards |
| `/privacy` | `src/app/privacy/page.tsx` | Privacy Policy (UAE Federal Decree-Law No. 45 of 2021 compliant) |
| `/terms` | `src/app/terms/page.tsx` | Terms of Use |
| `/disclaimer` | `src/app/disclaimer/page.tsx` | General Disclaimer (covers Third Brain, Academy, all advisory services) |

**Total: 21 static/dynamic routes. All passing.**

---

## 5. NAVBAR — CURRENT LINK ORDER

```
Logo | Home | About | Services | Ecosystem | Free Library | Academy | DecisionMine | Contact
```

File: `src/components/Navbar.tsx`

---

## 6. FOOTER — CURRENT STATE

File: `src/components/Footer.tsx`

- Left: BAS logo + tagline + social icons (Mail, WhatsApp, YouTube, LinkedIn)
- Centre: Quick Links (all pages listed)
- Right: Connect block (email, phone, UAE · MENA · Global, WhatsApp CTA)
- Bottom bar: `Privacy Policy | Terms of Use | Disclaimer` links + copyright

---

## 7. KEY COMPONENTS

| Component | File | Purpose |
|---|---|---|
| `HeroSection` | `src/components/hero/HeroSection.tsx` | Homepage hero with WebGL mesh + warm-shimmer gold text reveal |
| `WarmShimmerText` | `src/components/hero/WarmShimmerText.tsx` | Gold shimmer text animation (replaced old ScrambleText) |
| `Navbar` | `src/components/Navbar.tsx` | Sticky navbar with mobile menu |
| `Footer` | `src/components/Footer.tsx` | Full-width footer with 3 columns + legal links |
| `ExternalLinkModal` | `src/components/ExternalLinkModal.tsx` | Modal shown when clicking external URLs — frames assets as "Bhramaastra knowledge universe" |
| `FloatingWhatsApp` | `src/components/FloatingWhatsApp.tsx` | Floating WhatsApp button (bottom right, all pages) |
| `CustomCursor` | `src/components/CustomCursor.tsx` | Custom gold cursor |
| `MagneticLink` / `MagneticButton` | `src/components/MagneticElements.tsx` | Magnetic hover effect on CTAs |
| `LoadingScreen` | `src/components/LoadingScreen.tsx` | Initial page load animation |

---

## 8. FORMS — FORMSPREE ENDPOINTS

| Form | Page | Endpoint |
|---|---|---|
| Academy Waitlist | `/academy` | `https://formspree.io/f/xrerkgvj` |
| Contact Form | `/contact` | `https://formspree.io/f/xbdqonrw` |

Both use `Content-Type: application/json`, POST method, with `_subject` and `source` hidden fields. Both have inline success/error states (no page reload).

---

## 9. KEY EXTERNAL LINKS

| Destination | URL |
|---|---|
| WhatsApp (Amish) | `https://wa.me/971504090727` |
| M365 Copilot Course | `https://learn-m365-copilot.bhramaastra.com` |
| DecisionMine Third Brain | `https://firstcircle.bhramaastra.com` |
| YouTube | `https://youtube.com/@bhramaastra` |
| LinkedIn | `https://linkedin.com/company/bhramaastra` |

---

## 10. COMPLIANCE RULES (ALREADY APPLIED)

- ✅ All AED price ranges **removed** site-wide
- ✅ All product/service CTAs reframed as **"Request a Scope-Based Quote →"**  
- ✅ `ExternalLinkModal` copy framed within "Bhramaastra knowledge universe" (not third-party)
- ✅ UAE data protection notice on all forms: *"handled in accordance with UAE Federal Decree-Law No. 45 of 2021"*
- ✅ DecisionMine disclaimer on `/decisionmine` page (advisory outputs, not professional advice)

---

## 11. DATA FILES

| File | Purpose |
|---|---|
| `src/data/library.ts` | 3 library resources (GRC Playbook, M365 Copilot, DecisionMine) |
| `src/data/services.ts` | Service definitions used by `[slug]` dynamic pages |

---

## 12. WHAT IS PENDING — STEP 6

**Step 6: Polish + Deploy** is the only remaining step. It was defined as:

### 6A — Final Polish Pass
- Review all pages on mobile viewport (375px wide)
- Confirm all animations are smooth (no jank on scroll)
- Verify Navbar active link state on each route
- Check all external links open in new tab correctly

### 6B — SEO + Meta Tags
- Add `<title>` and `<meta description>` to every page
- Ensure Open Graph tags are set for social sharing
- File to edit: `src/app/layout.tsx` (global) + individual `page.tsx` files using `export const metadata`

### 6C — Production Deployment
- Platform: **Vercel** (recommended — zero config for Next.js)
- Domain to connect: TBD by Amish
- Deploy command: `vercel --prod` (after `npm install -g vercel`)
- Ensure environment is clean before deploy: `rmdir /s /q .next`

---

## 13. KNOWN GOTCHAS

1. **OneDrive EINVAL error** — If build throws `EINVAL: invalid argument, readlink`, delete `.next` folder and rebuild. This is an OneDrive file-locking issue, not a code bug.

2. **`force-dynamic` on animation-heavy pages** — `/academy`, `/decisionmine`, `/ecosystem`, `/contact` all have `export const dynamic = 'force-dynamic'` to prevent Framer Motion prerender failures.

3. **`'use client'` required** — Any page using hooks, motion, or browser APIs must have `'use client'` as the **first line** of the file.

4. **Unescaped entities** — ESLint will fail on apostrophes in JSX text. Always use `&apos;` instead of `'` inside JSX markup. Same for `&amp;` for `&`.

5. **No unused imports** — ESLint will fail the build. Clean all unused imports before committing or building.

---

## 14. HOW TO RESUME IN A NEW SESSION

1. Open the project: `C:\Users\amish\OneDrive\2026\BASDIGI2030`
2. Start dev server: `npm run dev` (runs on `localhost:3000`)
3. Read this document fully before making any changes
4. Check `GEMINI.md` in the project root for any additional model routing or quality rules
5. The only remaining work is **Step 6: Polish + Deploy** (see section 12 above)
6. Before every build, if `.next` exists from a prior failed build, delete it first

---

*Built by Antigravity AI (Google DeepMind) in collaboration with Amish Shah, Bhramaastra Advisory Services.*
*Session ID for reference: `6340ecb9-028c-4d94-aa87-d09de71401ba`*
