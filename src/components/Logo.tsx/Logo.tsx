import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 64, className = '' }) => {
  return (
    <img
      src="/assets/logo.png"
      alt="Pokemon Logo"
      width={size}
      height={size}
      className={`inline-block ${className}`}
    />
  );
};

export default Logo;
