// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: Design achievement badge system
export type BadgeType = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  unlockCondition: (progress: UserProgress) => boolean;
};

export interface UserProgress {
  completedNodes: string[];
  currentStreak: number;
  totalXP: number;
}

export const BADGE_TYPES: Record<string, BadgeType> = {
  FIRST_STEP: {
    id: 'first_step',
    name: 'First Step',
    description: 'Complete your first node',
    imageUrl: '/badges/first-step.svg',
    unlockCondition: (progress: UserProgress) => progress.completedNodes.length > 0
  },
  WEEKLY_STREAK: {
    id: 'weekly_streak',
    name: 'Weekly Streak',
    description: 'Maintain a 7-day streak',
    imageUrl: '/badges/weekly-streak.svg',
    unlockCondition: (progress: UserProgress) => progress.currentStreak >= 7
  },
  // Add more badge types here
};
// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: END