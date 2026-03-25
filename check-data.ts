import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Checking database content...');
  try {
    const userCount = await prisma.user.count();
    const complaintCount = await prisma.complaint.count();
    const categoryCount = await prisma.category.count();
    const workerCount = await prisma.worker.count();
    
    console.log(`Users: ${userCount}`);
    console.log(`Complaints: ${complaintCount}`);
    console.log(`Categories: ${categoryCount}`);
    console.log(`Workers: ${workerCount}`);

    if (complaintCount > 0) {
        const sampleComplaints = await prisma.complaint.findMany({
            take: 5,
            include: { category: true, author: true }
        });
        console.log('Sample Complaints:', JSON.stringify(sampleComplaints, null, 2));
    } else {
        console.log('No complaints found in the database.');
    }
  } catch (err) {
    console.error('Error checking DB:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
