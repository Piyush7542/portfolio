// ============================================
// SECTION HEADER COMPONENT
// ============================================

import './SectionHeader.css';

export const SectionHeader = ({
  tag,
  title,
  subtitle,
  className = '',
  tagClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  align = 'center' // 'center' | 'left'
}) => {
  const alignClasses = align === 'left' ? 'text-left' : 'text-center';
  const mxAuto = align === 'center' ? 'mx-auto' : '';

  return (
    <header className={`section-header ${alignClasses} ${mxAuto} ${className}`.trim()}>
      {tag && (
        <span className={`section-tag ${tagClassName}`.trim()}>{tag}</span>
      )}
      {title && (
        <h2 className={`section-title heading-2 ${titleClassName}`.trim()}>{title}</h2>
      )}
      {subtitle && (
        <p className={`section-subtitle body-lg ${subtitleClassName}`.trim()}>{subtitle}</p>
      )}
    </header>
  );
};