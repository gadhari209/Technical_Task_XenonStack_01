// src/components/Home.js
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'; // Import your custom styles

const Home = () => {
  // Use the `useNavigate` hook to programmatically navigate
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Implement your logout logic here
    // For simplicity, let's assume clearing any authentication state or tokens
    // and then redirecting to the login page
    // Replace this with your actual logout logic
    console.log('Logout logic goes here');
    // Redirect to the login page after logout
    navigate('/');
  };

  // State to hold the username
  const [username, setUsername] = React.useState('');

  useEffect(() => {
    // Retrieve username from local storage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <nav style={styles.navbar}>
        {/* Displaying welcome message at the start of the navigation bar */}
        <span style={styles.userGreeting}>
          Welcome, <span style={styles.username}>{username}</span>!
        </span>
        <ul style={styles.navList}>
          <li>
            <Link to="/contact-us" style={styles.navLink}>
              Contact Us
            </Link>
          </li>
          <li>
            {/* Use the `handleLogout` function on click */}
            <span style={styles.navLink} onClick={handleLogout}>
              Logout
            </span>
          </li>
        </ul>
      </nav>

      <div className="container">
        <h1>Welcome to Bike Selling App</h1>
        {/* Add more content or components as needed */}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    background: '#4267B2', // Facebook blue color
    padding: '10px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between', // Align items at start and end of the flex container
    alignItems: 'center', // Center items vertically
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
  },
  userGreeting: {
    fontWeight: 'bold',
  },
  username: {
    marginLeft: '5px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '10px', // Add margin to the left for separation
    cursor: 'pointer', // Change cursor to indicate it's clickable
  },
};

export default Home;
