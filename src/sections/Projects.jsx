// ============================================
// PROJECTS SECTION - Enhanced with Glass Cards & Framer Motion
// ============================================

import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { GlassProjectCard } from '../components/GlassCard';
import { projects } from '../data/projects';
import { PrimaryButton } from '../components/Button';
import './Projects.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Projects = () => {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          tag="Featured Projects"
          title="Selected Work"
          subtitle="Real-world impact through data science, analytics, and engineering"
        />

        <motion.div 
          className="projects-grid" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          role="list"
          aria-label="Projects"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <GlassProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="projects-cta-text">Want to see more projects?</p>
          <PrimaryButton 
            className="magnetic"
            onClick={() => window.open(projects[0]?.links?.github || '#', '_blank')}
          >
            View All on GitHub
            <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
};