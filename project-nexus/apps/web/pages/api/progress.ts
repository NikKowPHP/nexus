import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/db';
import { calculateStreak } from '@/lib/streak';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    // ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: XP calculation implementation
    // Calculate the user's streak
    const streak = await calculateStreak(userId);

    // Get the user's completed nodes and XP
    const [completedNodes, user] = await Promise.all([
      prisma.nodeProgress.findMany({
        where: { userId, completed: true },
      }),
      prisma.user.findUnique({
        where: { id: userId },
        select: { xp: true },
      }),
    ]);

    // Calculate progress percentage
    const totalNodes = await prisma.node.count();
    const progressPercentage = totalNodes > 0 ? (completedNodes.length / totalNodes) * 100 : 0;

    // Calculate XP - 10 per node + streak bonus
    const baseXP = completedNodes.length * 10;
    const streakBonus = streak.currentStreak >= 7 ? 50 : 0;
    const totalXP = (user?.xp || 0) + baseXP + streakBonus;

    // Return the progress data
    res.status(200).json({
      progressPercentage,
      streak: streak.currentStreak,
      xp: totalXP,
    });
    // ROO-AUDIT-TAG :: 2.4_gamification_progress_tracking.md :: END
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}