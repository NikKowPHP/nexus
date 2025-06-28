import { NextApiRequest, NextApiResponse } from 'next';
import { isAdmin } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { XpService } from '@/services/xpService';
import { BadgeService } from '@/services/badgeService';
import { StreakService } from '@/services/streakService';
import { z } from 'zod';

const nodeSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  type: z.enum(['concept', 'practice', 'project']),
  roadmapId: z.string(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED'])
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!(await isAdmin(null, req))) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const { method } = req;
  const { id } = req.query;

  try {
    switch (method) {
      case 'GET':
        if (id) {
          // Get single node
          const node = await prisma.node.findUnique({
            where: { id: id as string }
          });
          return res.status(200).json(node);
        } else {
          // List all nodes
          const nodes = await prisma.node.findMany();
          return res.status(200).json(nodes);
        }
      
      case 'POST':
        // Create new node
        try {
          const validatedData = nodeSchema.parse(req.body);
          const newNode = await prisma.node.create({
            data: validatedData
          });
          return res.status(201).json(newNode);
        } catch (error) {
          return res.status(400).json({ error: 'Invalid input', details: error });
        }
      
      case 'PUT':
        // Update node
        try {
          const validatedData = nodeSchema.parse(req.body);
          // Get current node state first
          const currentNode = await prisma.node.findUnique({
          where: { id: id as string },
          select: { completed: true, userId: true }
        });

        const updatedNode = await prisma.node.update({
          where: { id: id as string },
          data: req.body
        });

        // Award XP if node was just completed
        if (req.body.completed && !currentNode?.completed) {
          try {
            await XpService.awardXp({
              userId: currentNode?.userId || '',
              amount: 100, // Base XP for completion
              source: 'node_completion'
            });
          } catch (error) {
            console.error('Failed to award XP:', error);
          }
        }

        // Record activity for streak tracking
        if (req.body.completed && !currentNode?.completed) {
          try {
            await StreakService.recordActivity(currentNode?.userId || '');
          } catch (error) {
            console.error('Failed to record streak activity:', error);
          }
        }

        // Check for node completion badges
        if (req.body.completed && !currentNode?.completed) {
          try {
            const userId = currentNode?.userId || '';
            
            // Check total completed nodes
            const { count } = await prisma.node.count({
              where: {
                userId,
                completed: true
              }
            });

            // Award badges based on milestones
            if (count >= 10) {
              await BadgeService.awardBadge(userId, 'node-master');
            }
            if (count >= 5) {
              await BadgeService.awardBadge(userId, 'node-explorer');
            }
            if (count >= 1) {
              await BadgeService.awardBadge(userId, 'node-beginner');
            }
          } catch (error) {
            console.error('Failed to check for badge achievements:', error);
          }
        }

        return res.status(200).json(updatedNode);
        } catch (error) {
          return res.status(400).json({ error: 'Invalid input', details: error });
        }
      
      case 'DELETE':
        // Delete node
        await prisma.node.delete({
          where: { id: id as string }
        });
        return res.status(204).end();
      
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}