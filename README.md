# Francis Academy Management System

A web-based platform for managing football academies in Nigeria — built as a final year project. It helps academies handle player registrations, track performance stats, schedule training sessions, and communicate with parents, all from a single dashboard.

**Live demo:** https://francis-acad.netlify.app/

## Overview

Nigerian youth football academies often manage players, schedules, and parent communication manually — through spreadsheets, phone calls, or paper records. This project explores a simple, practical alternative: a centralized web app tailored to how these academies actually operate.

## Features

- **Landing Page** — a public-facing homepage introducing the platform, with a hero section and feature highlights.
- **Dashboard** — an at-a-glance overview showing total players, upcoming sessions, and announcements.
- **Player Registration** — add, view, and manage player profiles, including guardian contact details. Includes input validation (required fields, age range, phone format).
- **Performance Tracking** — each player has a detail page showing total goals, assists, sessions attended, and a full per-session stats table.
- **Training Schedule** — view and add upcoming training sessions (date, time, location, group), automatically sorted by date.
- **Parent Communication** — a simple announcements feed where coaches can post updates for parents to view.
- **Collapsible Sidebar** — the navigation sidebar can be collapsed to an icon-only view.
- **Responsive Design** — layout adapts across desktop and mobile screens.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (TypeScript) |
| Build Tool | Vite |
| Styling | Tailwind CSS (v4) |
| Routing | React Router |
| Data (current build) | Mock/local data (in-memory state) |
| Planned Backend | Supabase (PostgreSQL, Auth, Storage) |
| Deployment | Netlify |

## Project Status

This version of the project is a **frontend-first prototype**. All data shown (players, sessions, stats, messages) is mock data defined locally in the codebase, used to demonstrate the full interface and user flow end-to-end. No backend or database is connected yet — this was a deliberate scope decision made to prioritize a fully working, polished demo within the project timeline, rather than a partially working real backend.

## Project Structure

```
francis-acad/
├── public/
│   └── hero.jpg
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Landing.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Players.tsx
│   │   ├── PlayerDetail.tsx
│   │   ├── Schedule.tsx
│   │   └── Messages.tsx
│   ├── data/
│   │   ├── players.ts
│   │   ├── sessions.ts
│   │   ├── stats.ts
│   │   └── messages.ts
│   └── App.tsx
```

## Routes

| Path | Page |
|---|---|
| `/` | Landing page |
| `/app` | Dashboard |
| `/app/players` | Players list & registration |
| `/app/players/:id` | Player detail & stats |
| `/app/schedule` | Training schedule |
| `/app/messages` | Announcements |

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

