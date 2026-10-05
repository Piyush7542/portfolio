// ============================================
// SOCIAL LINKS COMPONENT
// ============================================

import { Linkedin, Github, Mail, Phone, ExternalLink } from 'lucide-react';
import { socialLinks } from '../data/profile';
import './SocialLinks.css';

export const SocialLinks = ({ 
  variant = 'default', // 'default' | 'hero' | 'compact'
  className = '' 
}) => {
  const links = socialLinks.filter(s => s.url && !s.url.includes('[ADD_'));

  return (
    <div className={`social-links social-links--${variant} ${className}`.trim()} role="list" aria-label="Social links">
      {links.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={social.label}
          title={social.label}
        >
          {social.icon === 'linkedin' && <Linkedin className="social-icon" />}
          {social.icon === 'github' && <Github className="social-icon" />}
          {social.icon === 'mail' && <Mail className="social-icon" />}
          {social.icon === 'phone' && <Phone className="social-icon" />}
          {variant === 'hero' && <ExternalLink className="social-external" aria-hidden="true" />}
        </a>
      ))}
    </div>
  );
};

export const ContactItem = ({ icon: Icon, label, value, href, variant = 'default' }) => {
  const IconComponent = Icon;
  
  return (
    <div className={`contact-item contact-item--${variant}`}>
      <div className="contact-icon" aria-hidden="true">
        <IconComponent className="icon-lg" />
      </div>
      <div className="contact-info">
        <span className="contact-label">{label}</span>
        {href ? (
          <a href={href} className="contact-value" target="_blank" rel="noopener noreferrer">
            {value}
            <ExternalLink className="icon-xs" aria-hidden="true" />
          </a>
        ) : (
          <span className="contact-value">{value}</span>
        )}
      </div>
    </div>
  );
};