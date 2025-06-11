import { prisma } from './db';

/**
 * Calculate and update the streak for a user
 * @param userId - The ID of the user
 * @returns The updated streak data
 */
export async function calculateStreak(userId: string) {
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  // Get the user's current streak data
  let streak = await prisma.streak.findUnique({
    where: { userId },
  });

  if (!streak) {
    // Initialize streak if it doesn't exist
    streak = await prisma.streak.create({
      data: {
        userId,
        currentStreak: 0,
        longestStreak: 0,
        lastUpdatedAt: now,
      },
    });
  }

  // Calculate the time difference since the last update
  const timeSinceLastUpdate = now.getTime() - streak.lastUpdatedAt.getTime();
  const hoursSinceLastUpdate = timeSinceLastUpdate / (1000 * 60 * 60);

  if (hoursSinceLastUpdate < 24) {
    // If less than 24 hours have passed, increment the current streak
    streak.currentStreak += 1;
  } else {
    // If more than 24 hours have passed, reset the current streak
    streak.currentStreak = 1;
  }

  // Update the longest streak if necessary
  if (streak.currentStreak > streak.longestStreak) {
    streak.longestStreak = streak.currentStreak;
  }

  // Update the last updated timestamp
  streak.lastUpdatedAt = now;

  // Save the updated streak data
  const updatedStreak = await prisma.streak.update({
    where: { userId },
    data: {
      currentStreak: streak.currentStreak,
      longestStreak: streak.longestStreak,
      lastUpdatedAt: streak.lastUpdatedAt,
    },
  });

  return updatedStreak;
}