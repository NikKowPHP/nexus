# Project Architecture Map

| Feature | File Paths | Status |
|---------|------------|--------|
| Button component | project-nexus/apps/web/src/components/Button.tsx | [IMPLEMENTED] |
| TextInput component | project-nexus/apps/web/src/components/TextInput.tsx | [IMPLEMENTED] |
| Card component | project-nexus/apps/web/src/components/Card.tsx | [IMPLEMENTED] |
| Badge component | project-nexus/apps/web/src/components/Badge.tsx | [IMPLEMENTED] |
| Theme provider | project-nexus/apps/web/src/providers/ThemeProvider.tsx | [IMPLEMENTED] |
| Storybook integration | project-nexus/apps/web/.storybook/main.js | [IMPLEMENTED] |
| Assessment submission form | project-nexus/apps/web/src/components/AssessmentSubmission.tsx | [IMPLEMENTED] |
| AI feedback generation | project-nexus/apps/web/src/lib/promptTemplates.ts | [IMPLEMENTED] |
| XP system | project-nexus/apps/web/src/lib/levels.ts | [IMPLEMENTED] |
| Streak tracking | project-nexus/apps/web/src/lib/streak.ts | [IMPLEMENTED] |
| Progress visualization | project-nexus/apps/web/src/components/ProgressBar.tsx<br>project-nexus/apps/web/src/components/ProgressDashboard.tsx | [IMPLEMENTED] |
| Leaderboard | project-nexus/apps/web/src/components/Leaderboard.tsx<br>project-nexus/apps/web/pages/api/leaderboard.ts | [IMPLEMENTED] |
| Stripe subscription integration | prisma/schema.prisma<br>work_breakdown/tasks/3.1_stripe_subscription.md<br>project-nexus/apps/web/src/lib/stripeSync.ts<br>project-nexus/apps/web/pages/api/stripe/checkout.ts<br>project-nexus/apps/web/src/components/CheckoutForm.tsx<br>project-nexus/apps/web/pages/success.tsx<br>project-nexus/apps/web/pages/cancel.tsx<br>project-nexus/apps/web/pages/api/webhooks/stripe.ts<br>project-nexus/apps/web/src/components/SubscriptionPortal.tsx<br>project-nexus/apps/web/pages/api/subscriptions/manage.ts | [IMPLEMENTED] |