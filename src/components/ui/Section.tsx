import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'brand' | 'gradient' | 'transparent';
  container?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  align?: 'left' | 'center' | 'right';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  padding = 'md',
  background = 'white',
  container = true,
  containerSize = 'lg',
  align = 'center',
}) => {
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-functional-stone-50',
    brand: 'bg-gradient-brand text-white',
    gradient: 'bg-gradient-subtle',
    transparent: 'bg-transparent',
  };

  const containerSizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    full: 'max-w-full',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const content = container ? (
    <div className={`mx-auto px-4 md:px-6 ${containerSizeClasses[containerSize]}`}>
      <div className={alignClasses[align]}>
        {children}
      </div>
    </div>
  ) : (
    <div className={alignClasses[align]}>
      {children}
    </div>
  );

  return (
    <section
      id={id}
      className={`
        ${paddingClasses[padding]}
        ${backgroundClasses[background]}
        ${className}
      `}
    >
      {content}
    </section>
  );
};

export interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  className = '',
  titleAs = 'h2',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const TitleTag = titleAs;

  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center px-3 py-1 bg-brand-light/20 rounded-full text-brand-deep font-semibold text-sm mb-4">
          {eyebrow}
        </div>
      )}
      
      {title && (
        <TitleTag className="text-display-md font-bold text-functional-stone-900 mb-4">
          {title}
        </TitleTag>
      )}
      
      {subtitle && (
        <p className="text-body-lg text-functional-stone-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export const SectionContent: React.FC<SectionContentProps> = ({
  children,
  className = '',
  columns = 1,
  gap = 'md',
}) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-12',
  };

  return (
    <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};