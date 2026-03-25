import axios from 'axios';

const testAdminLogin = async () => {
  try {
    console.log('Attempting admin-login...');
    const response = await axios.post('http://localhost:5000/api/auth/admin-login', {
      username: 'admin',
      password: 'admin123'
    });
    console.log('Admin Login successful:', response.data);
  } catch (err: any) {
    if (err.response) {
      console.log('Admin Login failed with status:', err.response.status);
      console.log('Error data:', JSON.stringify(err.response.data, null, 2));
    } else {
      console.error('Admin Login request failed:', err.message);
    }
  }
};

testAdminLogin();
