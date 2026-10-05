// ============================================
// EDUCATION CARD COMPONENT
// ============================================

import { Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import './EducationCard.css';

export const EducationCard = ({ edu, index }) => {
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
    <article className="education-card card hover-lift" style={{ '--item-index': index }}>
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
              <svg className="icon-sm chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
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

export const EducationGrid = ({ education }) => {
  return (
    <div className="education-grid grid grid-2" role="list" aria-label="Education">
      {education.map((edu, index) => (
        <EducationCard key={edu.id} edu={edu} index={index} />
      ))}
    </div>
  );
};