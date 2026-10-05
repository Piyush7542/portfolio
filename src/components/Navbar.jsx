// ============================================
// NAVBAR COMPONENT - Enhanced with Multi-Theme & Framer Motion
// ============================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Droplets, TreePine, Circle, Linkedin, Github, ExternalLink } from 'lucide-react';
import { profile, socialLinks } from '../data/profile';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const themeIcons = {
  dark: Moon,
  light: Sun,
  ocean: Droplets,
  sunset: Circle,
  forest: TreePine
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, availableThemes, isDark, toggleTheme } = useTheme();

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const CurrentThemeIcon = themeIcons[theme] || Moon;

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="scroll-progress" 
        style={{ transformX: scrolled ? 1 : 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />

      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}
        role="navigation" 
        aria-label="Main navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-container container">
          {/* Logo/Brand */}
          <motion.a 
            href="#" 
            className="navbar-brand"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="Go to top"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="navbar-name" 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              PA
            </motion.span>
            <span className="navbar-title">Piyush Anand</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.ul 
            className="navbar-menu" 
            role="menubar"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, height: 0 },
              visible: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.05 } }
            }}
          >
            {NAV_LINKS.map((link) => (
              <motion.li key={link.href} role="none" variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                <motion.a
                  href={link.href}
                  className="navbar-link magnetic"
                  role="menuitem"
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Desktop Actions */}
          <motion.div 
            className="navbar-actions desktop-only" 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Theme Selector */}
            <div className="theme-selector">
              <motion.button
                className="theme-trigger"
                onClick={toggleTheme}
                aria-label={`Switch theme (current: ${theme})`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <CurrentThemeIcon className="icon-md" />
              </motion.button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    className="theme-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {availableThemes.map((t) => (
                      <motion.button
                        key={t.id}
                        className={`theme-option ${theme === t.id ? 'active' : ''}`}
                        onClick={() => setTheme(t.id)}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="theme-option-name">{t.name}</span>
                        {theme === t.id && <span className="theme-option-check">✓</span>}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.a
              href={socialLinks.find(s => s.name === 'LinkedIn')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social magnetic"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="icon-md" />
            </motion.a>
            
            <motion.a
              href={socialLinks.find(s => s.name === 'GitHub')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social magnetic"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="icon-md" />
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                  <X className="icon-lg" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                  <Menu className="icon-lg" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              id="mobile-menu" 
              className="navbar-mobile" 
              role="navigation" 
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul className="navbar-mobile-menu" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }}>
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.href} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                    <motion.a
                      href={link.href}
                      className="navbar-mobile-link"
                      onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
                <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                  <div className="navbar-mobile-divider" />
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                  <div className="navbar-mobile-actions">
                    <div className="theme-selector-mobile">
                      <span className="theme-selector-label">Theme</span>
                      <div className="theme-options-mobile">
                        {availableThemes.map((t) => (
                          <motion.button
                            key={t.id}
                            className={`theme-option-mobile ${theme === t.id ? 'active' : ''}`}
                            onClick={() => { setTheme(t.id); setIsOpen(false); }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="theme-option-name">{t.name}</span>
                            {theme === t.id && <span className="theme-option-check">✓</span>}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                  <div className="navbar-mobile-social">
                    <motion.a href={socialLinks.find(s => s.name === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" whileTap={{ scale: 0.95 }}>
                      <Linkedin className="icon-lg" />
                      <span>LinkedIn</span>
                    </motion.a>
                    <motion.a href={socialLinks.find(s => s.name === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" whileTap={{ scale: 0.95 }}>
                      <Github className="icon-lg" />
                      <span>GitHub</span>
                    </motion.a>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};