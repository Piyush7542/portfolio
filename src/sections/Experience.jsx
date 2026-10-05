// ============================================
// EXPERIENCE SECTION - Enhanced with Glass Timeline & Framer Motion
// ============================================

import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { GlassTimelineCard } from '../components/GlassCard';
import { experience } from '../data/experience';
import { ChevronRight, CheckCircle, TrendingUp } from 'lucide-react';
import './Experience.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Experience = () => {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          tag="Work Experience"
          title="Professional Journey"
          subtitle="4+ years driving data-driven decisions across SaaS, Healthcare, and OTA industries"
        />

        <motion.div 
          className="timeline-container" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          role="list"
          aria-label="Work experience timeline"
        >
          {experience.map((job, index) => (
            <motion.div key={job.id} variants={itemVariants} className="timeline-wrapper">
              <GlassTimelineCard job={job} index={index} isLast={index === experience.length - 1} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};