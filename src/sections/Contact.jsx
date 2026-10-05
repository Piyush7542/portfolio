// ============================================
// CONTACT SECTION - Enhanced with Glassmorphism & Framer Motion
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { SocialLinks, ContactItem } from '../components/SocialLinks';
import { profile } from '../data/profile';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const form = e.target;
      const formDataToSend = new FormData(form);
      formDataToSend.append('form-name', 'contact');
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString()
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          tag="Get In Touch"
          title="Let's Connect"
          subtitle="Open to new opportunities, collaborations, or just a quick chat about data & analytics"
        />

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="contact-methods" padding="lg" hover={false}>
              <h3 className="contact-methods-title">Get in touch</h3>
              <div className="contact-methods-list">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                  variant="glass"
                />
                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  variant="glass"
                />
                <ContactItem
                  icon={MapPin}
                  label="Location"
                  value={profile.location}
                  variant="glass"
                />
                <ContactItem
                  icon={Linkedin}
                  label="LinkedIn"
                  value="piyush-anand-senior-data-analyst"
                  href={profile.linkedin}
                  variant="glass"
                />
                <ContactItem
                  icon={Github}
                  label="GitHub"
                  value="[ADD_GITHUB_USERNAME]"
                  href={profile.github}
                  variant="glass"
                />
              </div>
            </GlassCard>

            <SocialLinks variant="default" className="contact-social" />
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="contact-form-card" padding="lg" hover={false}>
              <h3 className="contact-form-title">Send a message</h3>
              <form className="contact-form" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      disabled={status === 'submitting'}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      disabled={status === 'submitting'}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry, collaboration, etc."
                    disabled={status === 'submitting'}
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <motion.textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    disabled={status === 'submitting'}
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  className="form-submit btn btn-primary btn-lg w-full magnetic"
                  disabled={status === 'submitting'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatePresence mode="wait">
                    {status === 'submitting' && (
                      <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Loader className="icon-sm spinner" aria-hidden="true" />
                        Sending...
                      </motion.span>
                    )}
                    {status === 'success' && (
                      <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                        <CheckCircle className="icon-sm" aria-hidden="true" />
                        Sent!
                      </motion.span>
                    )}
                    {status === 'error' && (
                      <motion.span key="error" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                        <AlertCircle className="icon-sm" aria-hidden="true" />
                        Failed. Try again
                      </motion.span>
                    )}
                    {status === 'idle' && (
                      <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Send Message
                        <Send className="icon-sm" aria-hidden="true" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
                
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p 
                      className="form-success" 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }}
                      role="alert"
                    >
                      Thanks for reaching out! I'll get back to you soon.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p 
                      className="form-error" 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }}
                      role="alert"
                    >
                      Something went wrong. Please try again or email me directly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Resume Download */}
        <motion.div 
          className="contact-resume"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href={profile.resumeUrl} 
            download="Piyush_Anand_Resume.pdf"
            className="resume-download glass-card glass-p-lg glass-blur-lg glass-border magnetic"
          >
            <div className="resume-icon" aria-hidden="true">
              <svg className="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <div className="resume-info">
              <h4 className="resume-title">Download Resume</h4>
              <p className="resume-desc">Full professional history, skills, and achievements in PDF format</p>
            </div>
            <svg className="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};