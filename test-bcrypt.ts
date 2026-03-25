import bcrypt from 'bcryptjs';

async function testBcrypt() {
  const password = 'admin123';
  const hash = await bcrypt.hash(password, 10);
  console.log('Hash:', hash);
  const match = await bcrypt.compare(password, hash);
  console.log('Match:', match);
  
  // Test with the specific hash from my DB check earlier if I had it...
  // Oh wait, I saw it in the logs: $2b$10$5vmKMBfjzS2PwUwd.hgGYOXG.F8c0zxVUY8/6hNkvrwR1hLNpXzc6
  const dbHash = '$2b$10$5vmKMBfjzS2PwUwd.hgGYOXG.F8c0zxVUY8/6hNkvrwR1hLNpXzc6';
  const dbMatch = await bcrypt.compare('password123', dbHash);
  console.log('DB Hash Match:', dbMatch);
}

testBcrypt();
