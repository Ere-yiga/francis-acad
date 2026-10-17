# Francis Academy Management System

A web-based platform for managing football academies in Nigeria — built as a final year project. It helps academies handle player registrations, track performance stats, schedule training sessions, and communicate with parents, all from a single dashboard.

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

This version of the project is a **frontend-first prototype**. All data shown (players, sessions, stats, messages) is mock data.
