// ============================================
// ABOUT SECTION - Enhanced with Framer Motion & Glassmorphism
// ============================================

import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { profile } from '../data/profile';
import { Target, Zap, Brain, BarChart2, Database, Users } from 'lucide-react';
import './About.css';

const strengthItems = [
  { icon: BarChart2, title: 'Product & Customer Analytics', desc: 'Cohort analysis, retention modeling, RFM segmentation' },
  { icon: Brain, title: 'Predictive Modeling (XGBoost, Python)', desc: 'Sales forecasting, inventory optimization, retention prediction' },
  { icon: Database, title: 'Data Visualization (Tableau, Qlik Sense)', desc: 'Executive dashboards, KPI monitoring, data storytelling' },
  { icon: Target, title: 'Modern Data Stack (SQL, dbt, Databricks, Snowflake)', desc: 'Data engineering, ETL pipelines, data quality frameworks' },
  { icon: Zap, title: 'Experimentation & A/B Testing', desc: 'Hypothesis-driven analysis, statistical significance, business impact' },
  { icon: Users, title: 'Stakeholder Communication & Data Storytelling', desc: 'Executive presentations, cross-functional collaboration, actionable insights' }
];

export const About = () => {
  return (
    <section id="about" className="section about reveal-stagger" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          tag="About Me"
          title="Who I Am"
          subtitle={profile.summary}
        />

        <div className="about-content">
          <div className="about-text">
            <motion.p className="about-paragraph" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              {profile.summary}
            </motion.p>
            <motion.p className="about-paragraph" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              I specialize in turning complex data into clear product decisions through advanced analytics, 
              machine learning, and compelling data storytelling. My experience spans SaaS, healthcare, and 
              online travel industries where I've built predictive models, automated reporting pipelines, 
              and executive dashboards that drive measurable business impact.
            </motion.p>
          </div>

          <div className="about-strengths">
            <h3 className="about-strengths-title">Core Strengths</h3>
            <div className="strengths-grid">
              {strengthItems.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="strength-card glass-card glass-p-md glass-blur-md glass-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  whileHover={{ y: -4, boxShadow: 'var(--glass-shadow)' }}
                >
                  <div className="strength-icon">
                    <item.icon className="icon-lg" aria-hidden="true" />
                  </div>
                  <div className="strength-content">
                    <h4 className="strength-title">{item.title}</h4>
                    <p className="strength-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Role Highlight */}
        <motion.div 
          className="about-current glass-card glass-p-lg glass-blur-lg glass-border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="current-badge">
            <span className="current-dot" aria-hidden="true" />
            Currently at <strong>{profile.currentRole.company}</strong> as <strong>{profile.currentRole.title}</strong>
          </div>
          <p className="current-description">
            Based in {profile.currentRole.location}, working on product & payments analytics for SiteMinder's platform. 
            Building dbt gold-layer models on Databricks and Tableau dashboards for senior stakeholders.
          </p>
        </motion.div>
      </div>
    </section>
  );
};