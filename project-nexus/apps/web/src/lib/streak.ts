import { prisma } from './db';

// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: Streak counter implementation
/**
 * Update and return the streak for a user based on daily activity
 * @param userId - The ID of the user
 * @returns The updated streak data with milestone information
 */
export async function updateStreak(userId: string) {
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  // Get or create the user's streak record
  const streak = await prisma.streak.findUnique({
    where: { userId },
  }) || await prisma.streak.create({
    data: {
      userId,
      currentStreak: 0,
      longestStreak: 0,
      lastUpdatedAt: now,
    },
  });

  // Calculate time since last update
  const timeSinceLastUpdate = now.getTime() - streak.lastUpdatedAt.getTime();
  const daysSinceLastUpdate = timeSinceLastUpdate / (1000 * 60 * 60 * 24);

  // Update streak based on activity timing
  if (daysSinceLastUpdate < 1) {
    // Already updated today - no change
    return streak;
  } else if (daysSinceLastUpdate < 2) {
    // Consecutive day - increment streak
    streak.currentStreak += 1;
  } else {
    // Broken streak - reset to 1
    streak.currentStreak = 1;
  }

  // Update longest streak if needed
  if (streak.currentStreak > streak.longestStreak) {
    streak.longestStreak = streak.currentStreak;
  }

  // Update last updated timestamp
  streak.lastUpdatedAt = now;

  // Save and return updated streak with milestone info
  const updatedStreak = await prisma.streak.update({
    where: { userId },
    data: {
      currentStreak: streak.currentStreak,
      longestStreak: streak.longestStreak,
      lastUpdatedAt: streak.lastUpdatedAt,
    },
  });

  return {
    ...updatedStreak,
    isMilestone: isStreakMilestone(updatedStreak.currentStreak),
  };
}

/**
 * Check if streak count reaches a milestone
 * @param streakCount - Current streak count
 * @returns True if streak is a milestone (7, 14, 30 days etc)
 */
function isStreakMilestone(streakCount: number): boolean {
  return streakCount > 0 && (streakCount % 7 === 0);
}
// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: END