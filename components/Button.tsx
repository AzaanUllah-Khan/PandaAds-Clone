import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-2.5 font-bold transition-transform duration-200 active:scale-95 text-sm md:text-base";
  
  const variants = {
    primary: "bg-panda-pink text-white hover:bg-opacity-90",
    secondary: "bg-transparent border border-white text-white hover:bg-white hover:text-panda-pink",
    outline: "bg-transparent border border-panda-pink text-panda-pink hover:bg-panda-pink hover:text-white",
    white: "bg-white text-panda-pink hover:bg-gray-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;