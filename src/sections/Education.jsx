// ============================================
// EDUCATION SECTION - Enhanced with Glass Cards & Framer Motion
// ============================================

import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { education, certifications } from '../data/education';
import { Award, BookOpen, Calendar, MapPin, ChevronDown } from 'lucide-react';
import './Education.css';

export const Education = () => {
  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeader
          tag="Education & Certifications"
          title="Academic Background"
          subtitle="Continuous learning in business analytics, data science, and technology"
        />

        <motion.div 
          className="education-grid" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15 }}
          role="list"
          aria-label="Education"
        >
          {education.map((edu, index) => (
            <motion.div key={edu.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <EducationCard edu={edu} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {certifications.length > 0 && (
          <motion.div 
            className="certifications-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="certifications-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={cert.name} 
                  className="certification-card glass-card glass-p-md glass-blur-md glass-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -4, boxShadow: 'var(--glass-shadow)' }}
                >
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <time className="cert-date" dateTime={cert.date}>{cert.date}</time>
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-link">
                      Verify <ChevronDown className="icon-xs" aria-hidden="true" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Separate EducationCard component for cleaner code
const EducationCard = ({ edu, index }) => {
  const { 
    degree, 
    institution, 
    location, 
    startDate, 
    endDate, 
    current, 
    gpa, 
    honors, 
    relevantCoursework, 
    description 
  } = edu;

  const endLabel = current ? 'Present' : endDate;
  const duration = `${startDate} – ${endLabel}`;

  return (
    <article className="education-card glass-card glass-p-lg glass-blur-lg glass-border" style={{ '--item-index': index }}>
      <div className="education-icon" aria-hidden="true">
        <BookOpen className="icon-xl" />
      </div>
      
      <div className="education-content">
        <header className="education-header">
          <h3 className="education-degree">{degree}</h3>
          <p className="education-institution">{institution}</p>
        </header>

        <div className="education-meta">
          <span className="education-date">
            <Calendar className="icon-sm" aria-hidden="true" />
            {duration}
          </span>
          <span className="education-location">
            <MapPin className="icon-sm" aria-hidden="true" />
            {location}
          </span>
        </div>

        {description && <p className="education-description">{description}</p>}

        <div className="education-details">
          {gpa && (
            <div className="education-detail">
              <span className="education-detail-label">GPA</span>
              <span className="education-detail-value">{gpa}</span>
            </div>
          )}
          {current && (
            <div className="education-detail">
              <span className="education-detail-label">Status</span>
              <span className="education-detail-value current">In Progress</span>
            </div>
          )}
        </div>

        {honors?.length > 0 && (
          <div className="education-honors">
            <span className="education-honors-label">
              <Award className="icon-sm" aria-hidden="true" />
              Honors
            </span>
            <ul className="education-honors-list">
              {honors.map((honor, i) => (
                <li key={i} className="education-honor">{honor}</li>
              ))}
            </ul>
          </div>
        )}

        {relevantCoursework?.length > 0 && (
          <details className="education-coursework">
            <summary className="education-coursework-summary">
              <span>Relevant Coursework</span>
              <ChevronDown className="icon-sm chevron" aria-hidden="true" />
            </summary>
            <ul className="education-coursework-list">
              {relevantCoursework.map((course, i) => (
                <li key={i} className="education-course">{course}</li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </article>
  );
};