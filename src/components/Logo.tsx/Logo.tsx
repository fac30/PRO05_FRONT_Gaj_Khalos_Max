import React from 'react';
import logo from '../../assets/logo.png';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 64, className = '' }) => {
  return (
    <img
      src={logo}
      alt="Pokemon Logo"
      width={size}
      height={size}
      className={`inline-block ${className}`}
    />
  );
};

export default Logo;
