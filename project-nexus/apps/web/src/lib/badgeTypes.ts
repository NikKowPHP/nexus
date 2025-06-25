// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: Design achievement badge system
export type BadgeType = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  unlockCondition: () => boolean;
};

export const BADGE_TYPES: Record<string, BadgeType> = {
  FIRST_STEP: {
    id: 'first_step',
    name: 'First Step',
    description: 'Complete your first node',
    imageUrl: '/badges/first-step.svg',
    unlockCondition: () => false // TODO: Implement condition
  },
  WEEKLY_STREAK: {
    id: 'weekly_streak',
    name: 'Weekly Streak',
    description: 'Maintain a 7-day streak',
    imageUrl: '/badges/weekly-streak.svg',
    unlockCondition: () => false // TODO: Implement condition
  },
  // Add more badge types here
};
// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: END