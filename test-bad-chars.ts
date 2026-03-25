import axios from 'axios';

const testBadChars = async () => {
  try {
    const username = `user_😊_${Date.now()}`;
    const email = `${username}@example.com`;
    console.log(`Attempting registration for ${username}...`);
    const response = await axios.post('http://localhost:5000/api/auth/register', {
      username,
      email,
      password: 'password123'
    });
    console.log('Registration successful:', response.data);
  } catch (err: any) {
    if (err.response) {
      console.log('Registration failed with status:', err.response.status);
      console.log('Error data:', JSON.stringify(err.response.data, null, 2));
    } else {
      console.error('Registration request failed:', err.message);
    }
  }
};

testBadChars();
