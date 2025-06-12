import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const protectedRoutes = ['/pro', '/premium-content'];

export default async function middleware(req: any, res: any, next: any) {
  const path = req.url;
  
  if (!protectedRoutes.some(route => path.startsWith(route))) {
    return next();
  }

  // TODO: Replace with proper authentication
  const userId = req.cookies.userId;
  if (!userId) {
    res.writeHead(302, { Location: '/login' });
    return res.end();
  }

  const subscription = await prisma.$queryRaw`
    SELECT * FROM "Subscription" 
    WHERE "userId" = ${userId} 
      AND status = 'ACTIVE' 
      AND "currentPeriodEnd" > NOW()
    LIMIT 1
  `;

  if (!subscription) {
    res.writeHead(302, { Location: '/pricing' });
    return res.end();
  }

  next();
}