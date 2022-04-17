import React from 'react';

const Logout = (props) => {
  localStorage.removeItem('auth');
  return (window.location = '/login');
};

export default Logout;
