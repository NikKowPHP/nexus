// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: Level progression system
/**
 * Calculate level based on XP using quadratic progression (100 * level^2 XP per level)
 * @param xp - The user's total XP
 * @returns Object with current level and XP progress to next level
 */
export function calculateLevel(xp: number): {
  level: number;
  currentLevelXp: number;
  nextLevelXp: number;
  progress: number;
} {
  let level = 0;
  let nextLevelXp = 100; // XP needed for level 1
  
  while (xp >= nextLevelXp) {
    level++;
    xp -= nextLevelXp;
    nextLevelXp = 100 * Math.pow(level + 1, 2);
  }

  return {
    level,
    currentLevelXp: xp,
    nextLevelXp,
    progress: (xp / nextLevelXp) * 100,
  };
}
// ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: END