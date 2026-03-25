import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'soft' | 'medium' | 'hard';
  border?: boolean;
  onClick?: () => void;
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  title?: string;
  subtitle?: string;
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  padding = 'md',
  shadow = 'soft',
  border = true,
  onClick,
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadowClasses = {
    none: '',
    soft: 'shadow-soft',
    medium: 'shadow-medium',
    hard: 'shadow-hard',
  };

  const borderClass = border ? 'border border-functional-stone-200' : '';
  const hoverClass = hoverable ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-hard' : '';

  return (
    <div
      className={`
        bg-white rounded-xl
        ${paddingClasses[padding]}
        ${shadowClasses[shadow]}
        ${borderClass}
        ${hoverClass}
        ${className}
      `}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : undefined}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
  icon: Icon,
  title,
  subtitle,
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      {Icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-lg mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
      )}
      
      {title && (
        <h3 className="text-display-sm font-bold text-functional-stone-900 mb-2">
          {title}
        </h3>
      )}
      
      {subtitle && (
        <p className="text-body-md text-functional-stone-600 mb-4">
          {subtitle}
        </p>
      )}
      
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  align = 'left',
}) => {
  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <div className={`mt-6 flex ${alignClasses[align]} ${className}`}>
      {children}
    </div>
  );
};