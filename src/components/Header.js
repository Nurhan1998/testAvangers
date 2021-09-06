import React from 'react';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#EDFF21',
      }}
    >
      <div
        style={{
          width: '400px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <p onClick={() => history.push('/list')}>List</p>
        <p onClick={() => history.push('/create')}>Create</p>
        <p onClick={() => history.push('/login')}>Sign Out</p>
      </div>
    </div>
  );
};

export default Header;
