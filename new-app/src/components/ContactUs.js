// src/components/ContactUs.js
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import './styles.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:3001/auth/contact-us', {
        name,
        email,
        message,
      });

      console.log(response.data);

      // Show a success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Contact Us form submitted successfully',
      });

      // Optionally, you can reset the form or perform other actions

    } catch (error) {
      console.error('Error submitting Contact Us form:', error.message);

      // Show an error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
