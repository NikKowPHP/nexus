// ROO-AUDIT-TAG :: 1.3_local_development_environment.md :: Create seed script for development data
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create test users
  const testUser1 = await prisma.user.create({
    data: {
      email: 'test1@example.com',
      name: 'Test User 1',
      password: await hash('password123', 12),
    }
  })

  const testUser2 = await prisma.user.create({
    data: {
      email: 'test2@example.com',
      name: 'Test User 2',
      password: await hash('password123', 12),
    }
  })

  // Create sample roadmaps
  const roadmap1 = await prisma.roadmap.create({
    data: {
      title: 'Getting Started with Project Nexus',
      description: 'Beginner roadmap for new users',
      userId: testUser1.id
    }
  })

  const roadmap2 = await prisma.roadmap.create({
    data: {
      title: 'Advanced Features',
      description: 'Learn advanced project features',
      userId: testUser2.id
    }
  })

  console.log('Seeded database with 2 users and 2 roadmaps')
}
// ROO-AUDIT-TAG :: 1.3_local_development_environment.md :: END

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })