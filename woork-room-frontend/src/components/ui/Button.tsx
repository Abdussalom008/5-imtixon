import React, { type HTMLAttributes } from "react";
import "../../assets/styles/button.css";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "small" | "medium " ;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  variant,
  children,
  className,
  disabled=true,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`btn cursor-pointer font-semibold ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
