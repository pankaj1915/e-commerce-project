import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/action/Action';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Welcome, you are logged in!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
