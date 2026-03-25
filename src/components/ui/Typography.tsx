import React from 'react';

export interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export interface HeadingProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface TextProps extends TypographyProps {
  variant?: 'body' | 'lead' | 'small' | 'caption';
  color?: 'default' | 'muted' | 'brand' | 'success' | 'warning' | 'error';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  className = '',
  level = 1,
  as,
}) => {
  const Component = as || (`h${level}` as keyof JSX.IntrinsicElements);
  
  const sizeClasses = {
    1: 'text-display-lg font-bold',
    2: 'text-display-md font-bold',
    3: 'text-display-sm font-bold',
    4: 'text-2xl font-bold',
    5: 'text-xl font-semibold',
    6: 'text-lg font-semibold',
  };

  const colorClass = 'text-functional-stone-900';

  return (
    <Component className={`${sizeClasses[level]} ${colorClass} ${className}`}>
      {children}
    </Component>
  );
};

export const Text: React.FC<TextProps> = ({
  children,
  className = '',
  variant = 'body',
  color = 'default',
  weight = 'normal',
  align = 'left',
  as = 'p',
}) => {
  const Component = as;
  
  const variantClasses = {
    body: 'text-body-md',
    lead: 'text-body-lg',
    small: 'text-body-sm',
    caption: 'text-xs',
  };

  const colorClasses = {
    default: 'text-functional-stone-700',
    muted: 'text-functional-stone-500',
    brand: 'text-brand-deep',
    success: 'text-green-600',
    warning: 'text-amber-600',
    error: 'text-red-600',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  return (
    <Component
      className={`
        ${variantClasses[variant]}
        ${colorClasses[color]}
        ${weightClasses[weight]}
        ${alignClasses[align]}
        ${className}
      `}
    >
      {children}
    </Component>
  );
};

export const Paragraph: React.FC<TextProps> = (props) => {
  return <Text as="p" {...props} />;
};

export const Span: React.FC<TextProps> = (props) => {
  return <Text as="span" {...props} />;
};

export const Blockquote: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return (
    <blockquote
      className={`
        border-l-4 border-brand-emerald
        pl-4 py-2
        italic text-functional-stone-600
        ${className}
      `}
    >
      {children}
    </blockquote>
  );
};