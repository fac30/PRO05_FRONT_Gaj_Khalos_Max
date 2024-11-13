import React from 'react';

interface ButtonProps {
  children: React.ReactNode; 
  onClick?: () => void; 
  href?: string;
  className?: string; 
  type?: 'button' | 'submit' | 'reset'; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  className = '',
  type = 'button',
}) => {
  if (href) {
    return (
      <a
        href={href}
        className={`inline-block text-midnight-blue font-semibold hover:text-electric-yellow ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`inline-block bg-electric-yellow text-midnight-blue py-2 px-6 rounded-lg font-semibold hover:bg-midnight-blue hover:text-soft-white transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;