// ============================================
// TIMELINE CARD COMPONENT
// ============================================

import { ChevronRight, CheckCircle, Target, TrendingUp, Zap } from 'lucide-react';
import { PrimaryButton } from './Button';
import './TimelineCard.css';

export const TimelineCard = ({ 
  job, 
  index, 
  isLast = false,
  showDetails = true 
}) => {
  const { company, logo, title, location, startDate, endDate, current, description, achievements, technologies } = job;
  const endLabel = current ? 'Present' : endDate;
  const duration = `${startDate} – ${endLabel}`;

  return (
    <article className="timeline-card" style={{ '--item-index': index }}>
      {/* Timeline connector */}
      <div className="timeline-connector" aria-hidden="true">
        <div className="timeline-dot" />
        {!isLast && <div className="timeline-line" />}
      </div>

      {/* Card content */}
      <div className="timeline-content card hover-lift">
        {/* Header */}
        <header className="timeline-header">
          <div className="timeline-company">
            {logo && (
              <img 
                src={logo} 
                alt="" 
                className="timeline-logo" 
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            )}
            <div className="timeline-company-info">
              <span className="timeline-company-name">{company}</span>
              <span className="timeline-location" aria-label="Location">
                <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {location}
              </span>
            </div>
          </div>
          <div className="timeline-meta">
            <span className="timeline-role">{title}</span>
            <time className="timeline-date" dateTime={startDate}>{duration}</time>
            {current && <span className="timeline-current" aria-label="Current position">Current</span>}
          </div>
        </header>

        {/* Description */}
        {description && (
          <p className="timeline-description">{description}</p>
        )}

        {/* Achievements */}
        {showDetails && achievements?.length > 0 && (
          <div className="timeline-achievements">
            {achievements.map((achievement, i) => (
              <div key={i} className="achievement-item">
                <div className="achievement-icon" aria-hidden="true">
                  {achievement.metric ? <TrendingUp className="icon-sm" /> : <CheckCircle className="icon-sm" />}
                </div>
                <div className="achievement-content">
                  <p className="achievement-text">{achievement.text}</p>
                  {achievement.metric && (
                    <span className="achievement-metric">{achievement.metric}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        {technologies?.length > 0 && (
          <div className="timeline-technologies">
            <span className="timeline-tech-label">Tech Stack:</span>
            <div className="timeline-tech-tags">
              {technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        )}

        {/* Expandable details */}
        {showDetails && achievements?.length > 0 && (
          <PrimaryButton 
            className="timeline-expand"
            variant="ghost" 
            size="sm"
            icon={<ChevronRight className="icon-sm" />}
          >
            View Details
          </PrimaryButton>
        )}
      </div>
    </article>
  );
};

export const Timeline = ({ jobs }) => {
  return (
    <div className="timeline" role="list" aria-label="Work experience timeline">
      {jobs.map((job, index) => (
        <TimelineCard 
          key={job.id} 
          job={job} 
          index={index} 
          isLast={index === jobs.length - 1}
        />
      ))}
    </div>
  );
};