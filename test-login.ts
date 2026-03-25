import axios from 'axios';

const testLogin = async () => {
  try {
    console.log('Attempting login...');
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      username: 'admin',
      password: 'admin123'
    });
    console.log('Login successful:', response.data);
  } catch (err: any) {
    if (err.response) {
      console.log('Login failed with status:', err.response.status);
      console.log('Error data:', JSON.stringify(err.response.data, null, 2));
    } else {
      console.error('Login request failed:', err.message);
    }
  }
};

testLogin();
