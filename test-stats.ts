import axios from 'axios';

const testStats = async () => {
  try {
    console.log('Attempting to fetch stats (requires token)...');
    
    // First login to get token
    const loginRes = await axios.post('http://localhost:5000/api/auth/admin-login', {
      username: 'admin',
      password: 'admin123'
    });
    const token = loginRes.data.token;
    console.log('Login successful, token obtained.');

    const response = await axios.get('http://localhost:5000/api/admin/stats', {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Stats successful:', JSON.stringify(response.data, null, 2));
  } catch (err: any) {
    if (err.response) {
      console.log('Stats failed with status:', err.response.status);
      console.log('Error data:', JSON.stringify(err.response.data, null, 2));
    } else {
      console.error('Stats request failed:', err.message);
    }
  }
};

testStats();
