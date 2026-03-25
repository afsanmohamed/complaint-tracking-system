import axios from 'axios';

const testUserDashboard = async () => {
  try {
    console.log('Attempting to fetch user complaints (requires token)...');
    
    // First register or login to get token (using testuser seeded)
    const loginRes = await axios.post('http://localhost:5000/api/auth/login', {
      username: 'testuser',
      password: 'password123'
    });
    const token = loginRes.data.token;
    console.log('Login successful, token obtained.');

    const response = await axios.get('http://localhost:5000/api/complaints', {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('User complaints successful:', JSON.stringify(response.data, null, 2));
  } catch (err: any) {
    if (err.response) {
      console.log('User complaints failed with status:', err.response.status);
      console.log('Error data:', JSON.stringify(err.response.data, null, 2));
    } else {
      console.error('User complaints request failed:', err.message);
    }
  }
};

testUserDashboard();
