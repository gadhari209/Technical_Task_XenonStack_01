// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:3001/auth/login', {
        username,
        password,
      });
  
      console.log(response.data);
  
      // Assuming the login is successful, you can navigate to the home page
      navigate('/home');
  
      // Store the username in local storage
      localStorage.setItem('username', username);
  
      // Show SweetAlert for successful login
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You are now logged in!',
      });
  
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle login error, show error message to the user
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid username or password. Please try again.',
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="button" onClick={handleLogin} style={styles.button}>
            Login
          </button>
        </form>
        <p style={styles.paragraph}>
          Don't have an account?{' '}
          <Link to="/register" style={styles.link}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  loginBox: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  paragraph: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '14px',
    color: '#666',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Login;



