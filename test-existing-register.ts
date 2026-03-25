import axios from 'axios';

const testExistingRegister = async () => {
  try {
    console.log('Attempting registration for EXISTING user "admin"...');
    const response = await axios.post('http://localhost:5000/api/auth/register', {
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin123'
    });
    console.log('Registration unexpected success:', response.data);
  } catch (err: any) {
    if (err.response) {
      console.log('Registration failed with status:', err.response.status);
      console.log('Error data:', JSON.stringify(err.response.data, null, 2));
    } else {
      console.error('Registration request failed:', err.message);
    }
  }
};

testExistingRegister();
