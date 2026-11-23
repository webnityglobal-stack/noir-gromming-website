# NOIR Grooming Studio — React + Vite + Tailwind CSS

A responsive multi-page salon/barbershop frontend with a premium dark-and-gold visual system, 3D-inspired depth, image gallery, video hero and appointment request UI.

## Pages
- `/` — Home
- `/services` — Service menu
- `/about` — Studio story and values
- `/gallery` — Image gallery
- `/booking` — Appointment request form (frontend demo only)
- `/contact` — Contact details and map link

## Run locally
```bash
npm install
npm run dev
```
Build for production:
```bash
npm run build
npm run preview
```

## Stack
- React 18
- Vite
- Tailwind CSS 3
- React Router
- Lucide React icons

## Customize
- Change studio name, phone, address and hours in `src/components/Footer.jsx`, `src/pages/Contact.jsx` and `src/pages/Booking.jsx`.
- Update services and image URLs in `src/data.js`.
- Main styling and responsive breakpoints are in `src/index.css`.
- The booking form currently shows a local success state. Connect `submit` in `src/pages/Booking.jsx` to your API, email service or WhatsApp flow to receive real appointments.
- Demo photos and video are remotely hosted. Replace with licensed salon photography/video for production.

All text sizes are 16px or larger for body copy; small eyebrow/metadata labels are intentionally smaller.
