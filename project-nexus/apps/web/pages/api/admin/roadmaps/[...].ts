import { NextApiRequest, NextApiResponse } from 'next';
import { isAdmin } from '../../../../src/lib/auth';
import { prisma } from '../../../../src/lib/db';
import { z } from 'zod';

const roadmapSchema = z.object({
  title: z.string().min(1)
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
          // Get single roadmap
          const roadmap = await prisma.roadmap.findUnique({
            where: { id: id as string }
          });
          return res.status(200).json(roadmap);
        } else {
          // List all roadmaps
          const roadmaps = await prisma.roadmap.findMany();
          return res.status(200).json(roadmaps);
        }
      
      case 'POST':
        // Create new roadmap
        try {
          const validatedData = roadmapSchema.parse(req.body);
          const newRoadmap = await prisma.roadmap.create({
            data: validatedData
          });
          return res.status(201).json(newRoadmap);
        } catch (error) {
          return res.status(400).json({ error: 'Invalid input', details: error });
        }
      
      case 'PUT':
        // Update roadmap
        try {
          const validatedData = roadmapSchema.parse(req.body);
          const updatedRoadmap = await prisma.roadmap.update({
            where: { id: id as string },
            data: validatedData
          });
          return res.status(200).json(updatedRoadmap);
        } catch (error) {
          return res.status(400).json({ error: 'Invalid input', details: error });
        }
      
      case 'DELETE':
        // Delete roadmap
        await prisma.roadmap.delete({
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