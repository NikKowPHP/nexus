import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/db';
import { calculateStreak } from '@/lib/streak';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    // Calculate the user's streak
    const streak = await calculateStreak(userId);

    // Get the user's completed nodes
    const completedNodes = await prisma.nodeProgress.findMany({
      where: { userId, completed: true },
    });

    // Calculate progress percentage
    const totalNodes = await prisma.node.count();
    const progressPercentage = totalNodes > 0 ? (completedNodes.length / totalNodes) * 100 : 0;

    // Return the progress data
    res.status(200).json({
      progressPercentage,
      streak,
    });
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}