# NobatChi

A Persian-first salon discovery and appointment-booking prototype built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

[Live demo](https://nobatchi-uois.vercel.app)

## What it includes

- Salon discovery with search and filters
- Salon detail pages and service listings
- A multi-step booking flow: service → salon → staff member → date and time → confirmation
- A direct booking widget on the home page
- Salon registration and sign-in screens
- Responsive, right-to-left (RTL) interface with Jalali date support
- Loading, empty, error, and not-found states

## Tech stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- React Context for booking-flow state
- Vazirmatn, self-hosted through `@fontsource/vazirmatn`

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create and run a production build:

```bash
npm run build
npm start
```

## Project structure

```text
src/
├── app/          # Home, search, salon details, booking, login, and registration routes
├── components/   # Layout, booking, salon, home, and shared UI components
├── lib/          # Mock data, Jalali date helpers, booking context, and utilities
└── types/        # Shared TypeScript types
```

## Prototype scope

This project is a front-end prototype. Salon, service, availability, and review data are mock data; there is no production database or booking API. Sign-in and SMS/OTP screens are visual flows and do not send messages.

## Deployment

The project is configured for Vercel. Import this repository and use the default Next.js build settings.
