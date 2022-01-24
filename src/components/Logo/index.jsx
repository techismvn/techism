import React from 'react';
import logo from '../../assets/images/TECHISMSolution.svg';

const Logo = ({ width, height }) => {
  return (
    <div>
      <img
        src={logo}
        alt="TECHISM Solution Logo"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;
