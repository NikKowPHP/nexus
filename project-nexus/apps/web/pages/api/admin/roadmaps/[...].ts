import { NextApiRequest, NextApiResponse } from 'next';
import { isAdmin } from '../../../../src/lib/auth';
import { prisma } from '../../../../src/lib/db';

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
        const newRoadmap = await prisma.roadmap.create({
          data: req.body
        });
        return res.status(201).json(newRoadmap);
      
      case 'PUT':
        // Update roadmap
        const updatedRoadmap = await prisma.roadmap.update({
          where: { id: id as string },
          data: req.body
        });
        return res.status(200).json(updatedRoadmap);
      
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