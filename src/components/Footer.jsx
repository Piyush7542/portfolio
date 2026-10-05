// ============================================
// FOOTER COMPONENT
// ============================================

import { Heart, Code, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { profile, socialLinks } from '../data/profile';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container container">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-logo">PA</span>
            <p className="footer-tagline">{profile.headline}</p>
          </div>
          
          <div className="footer-links">
            <nav className="footer-nav" aria-label="Footer navigation">
              <ul className="footer-nav-list">
                <li><a href="#about" className="footer-nav-link">About</a></li>
                <li><a href="#experience" className="footer-nav-link">Experience</a></li>
                <li><a href="#skills" className="footer-nav-link">Skills</a></li>
                <li><a href="#projects" className="footer-nav-link">Projects</a></li>
                <li><a href="#education" className="footer-nav-link">Education</a></li>
                <li><a href="#contact" className="footer-nav-link">Contact</a></li>
              </ul>
            </nav>
            
            <div className="footer-social" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  {social.icon === 'linkedin' && <Linkedin className="icon-md" />}
                  {social.icon === 'github' && <Github className="icon-md" />}
                  {social.icon === 'mail' && <Mail className="icon-md" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {profile.name}. Built with
            <Code className="icon-sm footer-heart" aria-hidden="true" />
            <Heart className="icon-sm footer-heart" aria-hidden="true" />
            and React
          </p>
          
          <div className="footer-credits">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="footer-credit-link">
              <Github className="icon-sm" aria-hidden="true" />
              View Source
            </a>
            <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" className="footer-credit-link">
              <ExternalLink className="icon-sm" aria-hidden="true" />
              Powered by Vite
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};