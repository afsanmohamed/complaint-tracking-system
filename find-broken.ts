import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Testing complaints one by one...');
  const allIds = await prisma.complaint.findMany({ select: { id: true } });
  console.log(`Found ${allIds.length} complaint IDs.`);

  for (const { id } of allIds) {
    try {
      await prisma.complaint.findUnique({ where: { id } });
    } catch (err: any) {
      console.error(`Error in complaint ID ${id}:`, err.message);
      // Try to fetch raw data if possible, but Prisma doesn't easily allow that for broken records.
    }
  }
}

main().finally(() => prisma.$disconnect());
