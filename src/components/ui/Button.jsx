import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component that can render as a button or Link
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, outline)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {string} props.to - If provided, button renders as Link to this path
 * @param {string} props.href - If provided, button renders as anchor with this href
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {React.ReactNode} props.children - Button content
 * @param {Object} props.rest - Additional props passed to button/link
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  fullWidth = false,
  children,
  className = '',
  ...rest
}) => {
  // Base classes for all button variants
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-green-600 hover:bg-green-700 text-white',
    secondary: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    outline: 'bg-transparent border border-green-600 text-green-600 hover:bg-green-50',
    text: 'bg-transparent text-green-600 hover:text-green-700 hover:underline px-0',
  };
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...rest}>
        {children}
      </Link>
    );
  }
  
  // Render as anchor if 'href' prop is provided
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...rest}>
        {children}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
