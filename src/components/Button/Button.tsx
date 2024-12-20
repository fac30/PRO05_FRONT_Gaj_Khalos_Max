import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  className = "",
  type = "button",
}) => {
  const baseClass =
    "inline-block py-2 px-6 rounded-lg font-semibold transition-all";
  const defaultButtonClass =
    "bg-electric-yellow text-midnight-blue hover:bg-midnight-blue hover:text-soft-white";
  const childrenText = children ? children.toString() : "Button";

  if (href) {
    return (
      <Link
        to={href}
        className={`${baseClass} ${defaultButtonClass} ${className}`}
        aria-label={childrenText}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClass} ${defaultButtonClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
