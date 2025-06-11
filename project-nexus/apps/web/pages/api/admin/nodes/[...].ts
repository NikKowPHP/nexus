import { NextApiRequest, NextApiResponse } from 'next';
import { isAdmin } from '@/lib/auth';
import { prisma } from '@/lib/db';

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
        const newNode = await prisma.node.create({
          data: req.body
        });
        return res.status(201).json(newNode);
      
      case 'PUT':
        // Update node
        const updatedNode = await prisma.node.update({
          where: { id: id as string },
          data: req.body
        });
        return res.status(200).json(updatedNode);
      
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