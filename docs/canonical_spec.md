# Canonical Specification: Project Nexus

## 1. High-Level Vision
Project Nexus is an AI-powered learning platform designed to guide users through complex topics using interactive, gamified roadmaps. It features a freemium subscription model, robust progress tracking, and an administrative interface for content management.

## 2. Core MVP Features
- **User Authentication:** Secure signup, login, and session management.
- **Interactive Roadmap Viewer:** A graph-based visualization for learning paths.
- **Flagship Content:** 5-10 pre-built flagship learning roadmaps.
- **Complete Learning Loop:** Users can view content, submit assessments, and receive AI-driven feedback.
- **Freemium Subscription Model:** Integration with Stripe for a "Nexus Pro" subscription tier.
- **Basic Gamification System:** Includes XP, badges, and streak tracking to encourage user engagement.

## 3. Technology Stack
- **Framework:** Next.js (with TypeScript and App Router)
- **Styling:** Tailwind CSS, adhering to Cupertino design principles.
- **Backend-as-a-Service (BaaS):** Supabase (PostgreSQL DB, Auth, Storage).
- **ORM:** Prisma.
- **Local Development:** Docker Compose.
- **Deployment:** Vercel.

## 4. System Architecture
The application uses a client-agnostic API layer built with Next.js API Routes, ensuring readiness for future mobile clients. A multi-layered caching strategy involving Next.js Data Cache and potentially Redis will be used for performance.

## 5. Database Schema
The data model is defined in `prisma/schema.prisma` and includes tables for `User`, `Roadmap`, `Node`, `NodeProgress`, `Streak`, `XP`, `Badge`, `Habit`, and `Subscription`. Row-Level Security (RLS) policies are enforced in Supabase to ensure data privacy.