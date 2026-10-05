// ============================================
// HERO SECTION - Enhanced with Particles & Framer Motion
// ============================================

import { motion } from 'framer-motion';
import { PrimaryButton, SecondaryButton, ResumeButton } from '../components/Button';
import { SocialLinks } from '../components/SocialLinks';
import { ParticleBackground } from '../components/ParticleBackground';
import { profile } from '../data/profile';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const metricVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
  })
};

export const Hero = () => {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      {/* Particle Background */}
      <div className="hero-particles" aria-hidden="true">
        <ParticleBackground speed={0.4} opacity={0.5} />
      </div>

      {/* Ambient Glow */}
      <div className="hero-glow" aria-hidden="true" />
      
      {/* Grid Pattern */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-container container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge badge-accent float">Senior Data & Visualisation Analyst</span>
          </motion.div>

          {/* Name */}
          <motion.h1 id="hero-title" className="hero-name heading-1 text-gradient" variants={itemVariants}>
            {profile.name}
          </motion.h1>

          {/* Headline */}
          <motion.p className="hero-headline heading-3" variants={itemVariants}>
            {profile.headline}
          </motion.p>

          {/* Tagline */}
          <motion.p className="hero-tagline body-lg" variants={itemVariants}>
            {profile.heroTagline}
          </motion.p>

          {/* Location */}
          <motion.div className="hero-location" variants={itemVariants}>
            <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{profile.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="hero-cta" variants={itemVariants}>
            <ResumeButton 
              href={profile.resumeUrl}
              download="Piyush_Anand_Resume.pdf"
              size="lg"
              className="magnetic"
            />
            <SecondaryButton 
              size="lg"
              className="magnetic"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </SecondaryButton>
          </motion.div>

          {/* Social Links */}
          <motion.div className="hero-social" variants={itemVariants}>
            <SocialLinks variant="hero" />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="hero-scroll" 
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <svg className="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
            <span className="caption">Scroll to explore</span>
          </motion.div>
        </motion.div>

        {/* Visual Element - Stats Card */}
        <motion.div 
          className="hero-visual" 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          aria-hidden="true"
        >
          <motion.div 
            className="hero-visual-card glass-card glass-p-lg glass-blur-lg glass-border glow-pulse"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="hero-visual-header">
              <div className="hero-visual-dots">
                <span /><span /><span />
              </div>
            </div>
            <div className="hero-visual-content reveal-stagger">
              <motion.div 
                className="visual-metric" 
                variants={metricVariants}
                custom={0}
              >
                <span className="visual-metric-value">4+</span>
                <span className="visual-metric-label">Years Experience</span>
              </motion.div>
              <motion.div 
                className="visual-metric" 
                variants={metricVariants}
                custom={1}
              >
                <span className="visual-metric-value">3</span>
                <span className="visual-metric-label">Companies</span>
              </motion.div>
              <motion.div 
                className="visual-metric" 
                variants={metricVariants}
                custom={2}
              >
                <span className="visual-metric-value">16K+</span>
                <span className="visual-metric-label">Properties Analyzed</span>
              </motion.div>
              <motion.div 
                className="visual-metric" 
                variants={metricVariants}
                custom={3}
              >
                <span className="visual-metric-value">13%</span>
                <span className="visual-metric-label">Retention Improved</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};