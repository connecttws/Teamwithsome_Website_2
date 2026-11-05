# Teamwithsomeone Website 2

A high-performance, modern corporate web application for **Teamwithsomeone (TWS)**, delivering growth engineering, Meta Ads marketing, conversion architecture, and client acquisition pipelines.

## 🚀 Features

- **Multi-Route Next.js Architecture**:
  - Home Page with dynamic Hero, Services, and ROI Calculator
  - Services Overview & Meta Ads Deep Dive
  - Detailed Case Studies & Client Outcomes
  - Thought Leadership Blog
  - About Us & Core Philosophy
  - Interactive Consultation & Audit Request Modal
  - Legal & Compliance Pages (Privacy Policy, Terms, Disclaimer, Refund Policy)
  - Rich Structured Data (JSON-LD) for SEO
- **Modern Interactive Components**:
  - Interactive ROI & Ad Spend Calculator
  - Client Testimonials & Social Proof
  - Animated Workflows & Core Pillars
  - Mobile-Optimized Navigation & Floating Actions

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Animation**: [Framer Motion](https://motion.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
├── public/                # Static assets, branding, and imagery
├── src/
│   ├── app/               # Next.js App Router (Multi-page routes)
│   │   ├── about-us/
│   │   ├── blog/
│   │   ├── case-studies/
│   │   ├── contact-us/
│   │   ├── disclaimer/
│   │   ├── privacy-policy/
│   │   ├── refund-and-cancellation-policy/
│   │   ├── services/
│   │   ├── terms-and-conditions/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/        # Modular UI and interactive components
│   │   ├── ContactModalAndSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowWeWorkSection.tsx
│   │   ├── MetaAdsDeepDiveSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── RoiCalculator.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── StructuredData.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── WhoWeHelpSection.tsx
│   └── data/
│       └── siteData.ts    # Centralized content and case study metrics
```

## 🏁 Getting Started

First, install dependencies:

```bash
pnpm install
# or
npm install
```

Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📦 Production Build

```bash
pnpm build
pnpm start
```
