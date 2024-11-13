import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 64, className = '' }) => {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/'); 
  };

  return (
    <img
      src={logo}
      alt="Pokemon Logo"
      width={size}
      height={size}
      className={`inline-block ${className}`}
      onClick={handleClick} 
    />
  );
};

export default Logo;