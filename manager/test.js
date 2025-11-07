const axios = require('axios');

// Test the register endpoint
const testRegister = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      position: 'Tester',
      phone: '1234567890'
    });

    console.log('Register response:', response.data);
  } catch (error) {
    console.error('Register error:', error.response ? error.response.data : error.message);
  }
};

// Test the login endpoint
const testLogin = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email: 'test@example.com',
      password: 'password123'
    });

    console.log('Login response:', response.data);
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
  }
};

// Run tests
testRegister();
setTimeout(testLogin, 1000);
