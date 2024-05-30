import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>
        The page you are looking for does not exist. You will be redirected to the homepage shortly.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 75.5px)',
    textAlign: 'center',
    background: '#f7f7f7',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

export default NotFound;
