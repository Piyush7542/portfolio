// ============================================
// SKILLS DATA - Categorized for easy display
// ============================================
// Add/remove skills here - they automatically appear in Skills section

export const skills = [
  {
    category: "Product & Customer Analytics",
    icon: "barChart2",
    color: "emerald",
    items: [
      "Product Adoption Analysis",
      "Cohort Analysis",
      "Retention & Churn Analysis",
      "Hypothesis Testing",
      "A/B Testing",
      "RFM Segmentation",
      "KPI Monitoring",
      "Business Analysis",
      "Storytelling with Data"
    ]
  },
  {
    category: "Machine Learning & Statistics",
    icon: "brain",
    color: "violet",
    items: [
      "XGBoost",
      "Predictive Modeling",
      "Sales Forecasting",
      "Inventory Optimization Analytics",
      "Retention Modeling",
      "Machine Learning",
      "Statistics",
      "Python (scikit-learn, pandas)"
    ]
  },
  {
    category: "Data Engineering & Platforms",
    icon: "database",
    color: "blue",
    items: [
      "SQL (Advanced)",
      "dbt (Data Build Tool)",
      "Databricks",
      "Snowflake",
      "Amazon Redshift",
      "MySQL",
      "ETL Pipelines",
      "Data Validation & Reconciliation",
      "Data Quality & Root-Cause Analysis"
    ]
  },
  {
    category: "Visualization & BI Tools",
    icon: "pieChart",
    color: "amber",
    items: [
      "Tableau (Advanced)",
      "Qlik Sense",
      "MS Excel (Advanced)",
      "Dashboard Design",
      "Executive Reporting"
    ]
  },
  {
    category: "Version Control & Collaboration",
    icon: "gitBranch",
    color: "gray",
    items: [
      "Git / GitHub",
      "Stakeholder Management",
      "Cross-functional Communication",
      "Agile / Scrum"
    ]
  }
];

// Flattened list for tag clouds or search
export const allSkills = skills.flatMap(c => c.items);