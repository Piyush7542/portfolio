// ============================================
// PROJECT CARD COMPONENT
// ============================================

import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { PrimaryButton, GhostButton, ExternalLinkButton } from './Button';
import './ProjectCard.css';

export const ProjectCard = ({ project, index }) => {
  const { 
    name, 
    company, 
    tagline, 
    thumbnail, 
    problem, 
    solution, 
    technologies, 
    impact, 
    metrics,
    links,
    featured 
  } = project;

  const hasLinks = links?.github || links?.demo || links?.caseStudy;

  return (
    <article className={`project-card ${featured ? 'featured' : ''} card hover-lift`} style={{ '--item-index': index }}>
      {/* Thumbnail */}
      <div className="project-thumbnail">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt="" 
            loading="lazy"
            onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }}
          />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <svg className="icon-2xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
          </div>
        )}
        {featured && <span className="project-badge">Featured</span>}
      </div>

      {/* Content */}
      <div className="project-content">
        {/* Header */}
        <header className="project-header">
          <div className="project-meta">
            <span className="project-company">{company}</span>
          </div>
          <h3 className="project-name">{name}</h3>
          <p className="project-tagline">{tagline}</p>
        </header>

        {/* Problem & Solution */}
        <div className="project-details">
          <div className="project-problem">
            <h4 className="project-detail-title">Problem</h4>
            <p className="project-detail-text">{problem}</p>
          </div>
          <div className="project-solution">
            <h4 className="project-detail-title">Solution</h4>
            <p className="project-detail-text">{solution}</p>
          </div>
        </div>

        {/* Impact */}
        {impact?.length > 0 && (
          <div className="project-impact">
            <h4 className="project-detail-title">Impact</h4>
            <ul className="project-impact-list" role="list">
              {impact.map((item, i) => (
                <li key={i} className="project-impact-item">
                  <span className="impact-bullet" aria-hidden="true">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Metrics */}
        {metrics && (
          <div className="project-metrics" aria-label="Key metrics">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="metric-item">
                <span className="metric-value">{value}</span>
                <span className="metric-label">{key}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        {technologies?.length > 0 && (
          <div className="project-tech">
            <span className="project-tech-label">Technologies:</span>
            <div className="project-tech-tags">
              {technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {hasLinks && (
          <div className="project-links">
            {links?.github && (
              <GhostButton 
                icon={<Github className="icon-sm" />}
                iconPosition="left"
                size="sm"
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </GhostButton>
            )}
            {links?.demo && (
              <ExternalLinkButton 
                href={links.demo}
                size="sm"
              >
                Live Demo
              </ExternalLinkButton>
            )}
            {links?.caseStudy && (
              <ExternalLinkButton 
                href={links.caseStudy}
                size="sm"
              >
                Case Study
              </ExternalLinkButton>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export const ProjectGrid = ({ projects }) => {
  return (
    <div className="project-grid grid grid-3" role="list" aria-label="Projects">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};