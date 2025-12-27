import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
  className?: string; // Allow overriding/extending classes
}

export function Button({ children, to, className = "", ...props }: ButtonProps) {
  const baseClasses = 
    "px-5 py-3 bg-[#858585] hover:bg-[#707070] !text-white rounded-sm font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const combinedClasses = `${baseClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
