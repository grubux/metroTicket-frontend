import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = (): JSX.Element => {
  const test = 0;
  return (
    <div className="header">
      <img
        src={logo}
        alt="gogole"
        className="logo"
        height="100px"
        width="180px"
      />
    </div>
  );
};

export default Header;
