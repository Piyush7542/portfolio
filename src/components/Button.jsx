// ============================================
// BUTTON COMPONENT
// ============================================

import { ArrowRight, ExternalLink, Download } from 'lucide-react';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost'
  size = 'md',         // 'sm' | 'md' | 'lg'
  icon,
  iconPosition = 'right', // 'left' | 'right'
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'btn';
  const variantClasses = `btn-${variant}`;
  const sizeClasses = size !== 'md' ? `btn-${size}` : '';
  const widthClass = fullWidth ? 'w-full' : '';
  
  const showIcon = icon && (iconPosition === 'right' ? children : true);
  const showIconLeft = icon && iconPosition === 'left';

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`.trim()}
      {...props}
    >
      {showIconLeft && icon}
      {children}
      {showIcon && icon}
    </button>
  );
};

// Specialized button variants
export const PrimaryButton = ({ children, icon = <ArrowRight className="icon-sm" />, ...props }) => (
  <Button variant="primary" icon={icon} iconPosition="right" {...props}>{children}</Button>
);

export const SecondaryButton = ({ children, icon, ...props }) => (
  <Button variant="secondary" icon={icon} {...props}>{children}</Button>
);

export const GhostButton = ({ children, icon, ...props }) => (
  <Button variant="ghost" icon={icon} {...props}>{children}</Button>
);

export const ResumeButton = ({ ...props }) => (
  <PrimaryButton icon={<Download className="icon-sm" />} {...props}>Download Resume</PrimaryButton>
);

export const ExternalLinkButton = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" {...props}>
    {children}
    <ExternalLink className="icon-sm" />
  </a>
);