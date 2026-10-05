// ============================================
// SKILL PILL COMPONENT
// ============================================

import './SkillPill.css';

export const SkillPill = ({ skill, color = 'emerald', animated = true, delay = 0 }) => {
  const colorVar = `var(--color-${color})`;
  const style = {
    '--skill-color': colorVar,
    animationDelay: animated ? `${delay}ms` : undefined
  };

  return (
    <span className="skill-pill" style={style}>
      {skill}
    </span>
  );
};

export const SkillCategory = ({ category, index = 0 }) => {
  const { category: title, icon: Icon, color, items } = category;
  
  return (
    <section className="skill-category" aria-labelledby={`skill-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <header className="skill-category-header">
        <Icon className="skill-category-icon" style={{ color: `var(--color-${color})` }} aria-hidden="true" />
        <h3 id={`skill-${title.toLowerCase().replace(/\s+/g, '-')}`} className="skill-category-title">{title}</h3>
      </header>
      <div className="skill-pills" role="list">
        {items.map((skill, i) => (
          <SkillPill key={skill} skill={skill} color={color} delay={i * 50} />
        ))}
      </div>
    </section>
  );
};