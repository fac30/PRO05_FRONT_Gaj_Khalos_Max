// src/components/Button/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode; // Button text or content
  onClick: () => void; // Button click handler
  className?: string; // Optional className for styling
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`text-midnight-blue font-semibold hover:text-electric-yellow ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;