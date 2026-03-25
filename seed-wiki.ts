import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Wiki Solutions...');

  const solutions = [
    {
      title: 'Fix a Leaky Faucet (Quick Fix)',
      content: '1. Turn off the water supply under the sink.\n2. Remove the handle and replace the washer.\n3. Reassemble and test.',
      categoryId: 2, // Assuming Plumbing
      keywords: 'leak, faucet, water, plumbing, tap'
    },
    {
      title: 'Reset Electrical Circuit Breaker',
      content: '1. Locate your main service panel.\n2. Find the switch that has moved to the middle or "OFF" position.\n3. Flip it fully to "OFF" then back to "ON".',
      categoryId: 1, // Assuming Electrical
      keywords: 'electricity, power, light, bulb, socket, breaker'
    },
    {
      title: 'Unclog a Drain (Kitchen/Bath)',
      content: '1. Try using a plunger first.\n2. If that fails, use a mixture of baking soda and vinegar.\n3. Pour boiling water down the drain after 15 minutes.',
      categoryId: 2,
      keywords: 'clog, sink, drain, water, plumbing'
    }
  ];

  for (const s of solutions) {
    await prisma.solution.upsert({
      where: { id: 0 }, // Not real, just to use upsert if needed, but we'll use create
      update: {},
      create: s
    } as any).catch(() => {}); // Simple catch for dups in seed
  }

  // Real create
  for (const s of solutions) {
    await prisma.solution.create({ data: s }).catch(() => {});
  }

  console.log('Wiki seeded!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
