import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Checking Users table...');
  try {
    const userCount = await prisma.user.count();
    console.log(`User count: ${userCount}`);

    const allUsers = await prisma.user.findMany();
    console.log(`Successfully fetched ${allUsers.length} users.`);
    
    for (const user of allUsers) {
      console.log(`User ID: ${user.id}, Username: ${user.username}, IsAdmin: ${user.isAdmin}`);
    }
  } catch (err: any) {
    console.error('Error checking Users:', err.message);
    if (err.message.includes('Conversion failed')) {
      console.error('CRITICAL: Found conversion error in Users table!');
    }
  } finally {
    await prisma.$disconnect();
  }
}

main();
