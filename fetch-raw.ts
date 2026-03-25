import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Fetching raw complaints...');
  try {
    const rawComplaints: any[] = await prisma.$queryRaw`SELECT * FROM complaint LIMIT 10`;
    console.log('Raw Complaints:', JSON.stringify(rawComplaints, null, 2));
  } catch (err: any) {
    console.error('Error fetching raw complaints:', err.message);
  }
}

main().finally(() => prisma.$disconnect());
