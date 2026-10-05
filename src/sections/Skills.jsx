// ============================================
// SKILLS SECTION - Enhanced with Framer Motion
// ============================================

import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { skills } from '../data/skills';
import { BarChart2, Brain, Database, PieChart, GitBranch } from 'lucide-react';
import './Skills.css';

const skillIcons = {
  'Product & Customer Analytics': BarChart2,
  'Machine Learning & Statistics': Brain,
  'Data Engineering & Platforms': Database,
  'Visualization & BI Tools': PieChart,
  'Version Control & Collaboration': GitBranch
};

export const Skills = () => {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          tag="Technical Skills"
          title="Tools & Technologies"
          subtitle="Proficient across the modern data stack — from data engineering to ML modeling and executive visualization"
        />

        <div className="skills-grid reveal-stagger" role="list" aria-label="Skill categories">
          {skills.map((category, index) => {
            const Icon = skillIcons[category.category] || Database;
            return (
              <motion.div key={category.category} className="skill-category glass-card glass-p-lg glass-blur-lg glass-border" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -8, boxShadow: 'var(--glass-shadow)' }}>
                <div className="skill-category-header">
                  <div className="skill-category-icon-wrapper">
                    <Icon className="skill-category-icon" style={{ color: `var(--color-${category.color})` }} aria-hidden="true" />
                  </div>
                  <h3 className="skill-category-title">{category.category}</h3>
                </div>
                <div className="skill-pills" role="list">
                  {category.items.map((skill, i) => (
                    <motion.span 
                      key={skill} 
                      className="skill-pill" 
                      style={{ '--skill-color': `var(--color-${category.color})` }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency Legend */}
        <motion.div 
          className="skills-legend glass-card glass-p-lg glass-blur-lg glass-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="legend-title">Proficiency Levels</h3>
          <div className="legend-items">
            <motion.div className="legend-item" whileHover={{ scale: 1.02 }}>
              <span className="legend-dot expert" aria-hidden="true" />
              <span>Expert — Deep production experience</span>
            </motion.div>
            <motion.div className="legend-item" whileHover={{ scale: 1.02 }}>
              <span className="legend-dot advanced" aria-hidden="true" />
              <span>Advanced — Regular hands-on usage</span>
            </motion.div>
            <motion.div className="legend-item" whileHover={{ scale: 1.02 }}>
              <span className="legend-dot intermediate" aria-hidden="true" />
              <span>Intermediate — Working knowledge</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};