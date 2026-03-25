import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-emerald disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-brand text-white hover:shadow-brand hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-white text-brand-deep border-2 border-brand-light hover:bg-brand-light/10 hover:border-brand-emerald',
    outline: 'bg-transparent text-brand-deep border-2 border-brand-deep hover:bg-brand-deep hover:text-white',
    ghost: 'bg-transparent text-brand-deep hover:bg-brand-light/20',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          {children}
        </div>
      ) : (
        <>
          {Icon && iconPosition === 'left' && (
            <Icon className={`w-4 h-4 ${children ? 'mr-2' : ''}`} />
          )}
          {children}
          {Icon && iconPosition === 'right' && (
            <Icon className={`w-4 h-4 ${children ? 'ml-2' : ''}`} />
          )}
        </>
      )}
    </button>
  );
};

export default Button;