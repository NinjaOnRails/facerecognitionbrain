import React from 'react';

const Nav = ({ onRouteChange, isLoggedIn }) => {
  return isLoggedIn ? (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        onClick={() => onRouteChange('logout')}
        className='f3 link dim black underline pa3 pointer'
      >
        Log Out
      </p>
    </nav>
  ) : (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        onClick={() => onRouteChange('login')}
        className='f3 link dim black underline pa3 pointer'
      >
        Log In
      </p>
      <p
        onClick={() => onRouteChange('register')}
        className='f3 link dim black underline pa3 pointer'
      >
        Register
      </p>
    </nav>
  );
};

export default Nav;
