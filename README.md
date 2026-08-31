# Francis Academy Management System

A web-based platform for managing football academies in Nigeria — built as a final year project. It helps academies handle player registrations, track performance stats, schedule training sessions, and communicate with parents, all from a single dashboard.

## Overview

Nigerian youth football academies often manage players, schedules, and parent communication manually — through spreadsheets, phone calls, or paper records. This project explores a simple, practical alternative: a centralized web app tailored to how these academies actually operate.

## Features

- **Player Registration** — Add, view, and manage player profiles and personal details.
- **Performance Tracking** — Record and view stats such as goals, assists, and attendance per player.
- **Training Schedule** — View and manage upcoming training sessions, including date, time, and location.
- **Parent Communication** — A simple announcements feed where coaches can post updates for parents to view.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (TypeScript) |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| Data (current build) | Mock/local data |
| Planned Backend | Supabase (PostgreSQL, Auth, Storage) |
| Deployment | Vercel |

## Project Status

This version of the project is a **frontend-first prototype**. All data shown is mock data used to demonstrate the interface and user flow. The next phase involves connecting the app to a live Supabase backend for real data persistence, authentication (Admin/Coach vs. Parent roles), and file storage.

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Future Work

- Integrate Supabase for authentication, database, and storage.
- Add real-time or notification-based parent communication.
- Add performance analytics/visualizations for player stats.
- Support recurring training schedules and calendar sync.

## Author

Built by Francis as a final year project.
