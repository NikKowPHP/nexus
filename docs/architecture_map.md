# Project Architecture Map

| Feature | Primary File(s) | Status | Description |
|---------|-----------------|--------|-------------|
| User Authentication | project-nexus/apps/web/src/app/api/auth/route.ts<br>project-nexus/apps/web/src/components/auth/LoginForm.tsx<br>project-nexus/apps/web/src/components/auth/SignupForm.tsx | [IMPLEMENTED] | Secure signup, login, and session management |
| Interactive Roadmap Viewer | project-nexus/apps/web/src/components/roadmap/RoadmapViewer.tsx<br>project-nexus/apps/web/src/lib/roadmapUtils.ts | [IMPLEMENTED] | Graph-based visualization for learning paths |
| Flagship Content | project-nexus/apps/web/src/data/roadmaps/flagship.ts<br>project-nexus/apps/web/src/services/contentService.ts | [PLANNED] | 5-10 pre-built flagship learning roadmaps |
| Complete Learning Loop | project-nexus/apps/web/src/components/learning/AssessmentForm.tsx<br>project-nexus/apps/web/src/services/aiFeedbackService.ts | [PLANNED] | View content, submit assessments, receive AI feedback |
| Freemium Subscription Model | project-nexus/apps/web/src/app/api/stripe/route.ts<br>project-nexus/apps/web/src/components/subscription/SubscriptionButton.tsx | [PLANNED] | Stripe integration for "Nexus Pro" tier |
| Basic Gamification System | project-nexus/apps/web/src/services/xpService.ts<br>project-nexus/apps/web/src/services/badgeService.ts<br>project-nexus/apps/web/src/services/streakService.ts | [IMPLEMENTED] | XP, badges, and streak tracking |

*For implementation details, see [Component Map](component_map.md)*
