// ============================================
// GLASSMORPHISM CARD COMPONENT
// ============================================

import { motion } from 'framer-motion';
import './GlassCard.css';

export const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'lg',
  border = true,
  blur = 'md',
  ...props 
}) => {
  const paddingClasses = {
    sm: 'glass-p-sm',
    md: 'glass-p-md',
    lg: 'glass-p-lg',
    xl: 'glass-p-xl',
    none: ''
  };

  const blurClasses = {
    sm: 'glass-blur-sm',
    md: 'glass-blur-md',
    lg: 'glass-blur-lg',
    none: ''
  };

  return (
    <motion.div
      className={`glass-card ${paddingClasses[padding]} ${blurClasses[blur]} ${border ? 'glass-border' : ''} ${hover ? 'glass-hover' : ''} ${className}`}
      whileHover={hover ? { y: -8, boxShadow: 'var(--glass-shadow)' } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    >
      {children}
      <div className="glass-shine" aria-hidden="true" />
    </motion.div>
  );
};

export const GlassContainer = ({ children, className = '', ...props }) => (
  <div className={`glass-container ${className}`} {...props}>
    {children}
  </div>
);

// Specialized glass cards
export const GlassProjectCard = ({ project, index }) => (
  <GlassCard className="project-glass-card" style={{ '--item-index': index }}>
    <div className="project-glass-thumbnail">
      {project.thumbnail ? (
        <img src={project.thumbnail} alt="" loading="lazy" />
      ) : (
        <div className="project-glass-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="icon-2xl">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
        </div>
      )}
      {project.featured && <span className="project-badge">Featured</span>}
    </div>
    <div className="project-glass-content">
      <div className="project-glass-meta">
        <span className="project-company">{project.company}</span>
      </div>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-tagline">{project.tagline}</p>
      
      <div className="project-glass-details">
        <div className="project-glass-problem">
          <h4>Problem</h4>
          <p>{project.problem}</p>
        </div>
        <div className="project-glass-solution">
          <h4>Solution</h4>
          <p>{project.solution}</p>
        </div>
      </div>

      {project.impact?.length > 0 && (
        <div className="project-glass-impact">
          <h4>Impact</h4>
          <ul>
            {project.impact.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {project.metrics && (
        <div className="project-glass-metrics">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="metric-item">
              <span className="metric-value">{value}</span>
              <span className="metric-label">{key}</span>
            </div>
          ))}
        </div>
      )}

      <div className="project-glass-tech">
        {project.technologies?.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="project-glass-links">
        {project.links?.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="glass-link">
            <svg viewBox="0 0 24 24" fill="currentColor" className="icon-sm"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            Code
          </a>
        )}
        {project.links?.demo && (
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="glass-link primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  </GlassCard>
);

export const GlassTimelineCard = ({ job, index, isLast }) => (
  <GlassCard className="timeline-glass-card" style={{ '--item-index': index }}>
    <div className="timeline-glass-header">
      <div className="timeline-glass-company">
        {job.logo && (
          <img src={job.logo} alt="" className="timeline-logo" loading="lazy" onError={(e) => e.target.style.display = 'none'} />
        )}
        <div>
          <span className="timeline-company-name">{job.company}</span>
          <span className="timeline-location">{job.location}</span>
        </div>
      </div>
      <div className="timeline-glass-meta">
        <span className="timeline-role">{job.title}</span>
        <time className="timeline-date">{job.startDate} – {job.current ? 'Present' : job.endDate}</time>
        {job.current && <span className="timeline-current">Current</span>}
      </div>
    </div>

    {job.description && <p className="timeline-description">{job.description}</p>}

    <div className="timeline-glass-achievements">
      {job.achievements?.map((achievement, i) => (
        <div key={i} className="achievement-glass-item">
          <div className="achievement-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon-sm">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div className="achievement-content">
            <p>{achievement.text}</p>
            {achievement.metric && <span className="achievement-metric">{achievement.metric}</span>}
          </div>
        </div>
      ))}
    </div>

    {job.technologies?.length > 0 && (
      <div className="timeline-glass-tech">
        {job.technologies.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
    )}
  </GlassCard>
);