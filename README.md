# SENTRIX SECURITY — CCTV & Surveillance Homepage Theme

A commercial-grade, responsive website theme built for CCTV installation and security solutions companies.

## Tech Stack
- **Next.js 16 (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide Icons** & **Font Awesome Brands**
- **Swiper** (Carousel for Client Reviews)
- **Lenis** (Smooth Scrolling)

## 9 Core Sections
1. **Navbar**: Transparent-to-solid on scroll with quick phone access and mobile drawer menu.
2. **Hero**: Cinematic dark navy hero with high-resolution CCTV photography, trust indicators, and dual CTAs.
3. **Services**: 6 tailored service cards (CCTV Installation, IP Cameras, DVR/NVR, Video Door Phones, Remote Monitoring, Maintenance).
4. **About Us**: Professional 2-column narrative with equipment testing value points.
5. **Why Choose Us**: Benefit cards with icons and surveillance control imagery.
6. **Testimonials**: Interactive Swiper carousel with 5-star verified review cards.
7. **FAQ**: Accessible animated accordion answering key pricing, camera selection, and DVR vs NVR questions.
8. **Contact & Quote**: Property type selector with direct WhatsApp enquiry message compilation.
9. **Footer**: Navigation links, direct contact details, and copyright notice.

## Quick Customization
All business details, phone numbers, WhatsApp numbers, services, and content are centralized in:
`lib/site-config.ts`

To customize the company details for a new client:
1. Open `lib/site-config.ts`.
2. Update `name`, `phoneDisplay`, `phoneRaw`, `whatsappNumber`, `email`, and `address`.
3. Modify or add services in `services` array if needed.

## Running Locally
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
