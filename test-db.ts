import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Testing DB connection...');
  try {
    const userCount = await prisma.user.count();
    console.log(`Connection successful! User count: ${userCount}`);
  } catch (err) {
    console.error('DB connection failed:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
