// src/components/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import './styles.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Password Mismatch',
          text: 'Please make sure the passwords match.',
        });
        return;
      }

      // Make a POST request to the backend API for registration
      const response = await axios.post('http://localhost:3001/auth/register', {
        username,
        password,
      });

      console.log(response.data);

      // Assuming the registration is successful, you can navigate to the home page
      navigate('/');

      // Show SweetAlert for successful registration
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have successfully registered!',
      });
    } catch (error) {
      console.error('Error registering:', error.message);
      // Handle registration error, show error message to the user
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Registration failed. Please try again.',
      });
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>

        {/* Link to the login page */}
        <p>
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
