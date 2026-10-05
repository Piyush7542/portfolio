// ============================================
// EXPERIENCE DATA - Reverse chronological order
// ============================================
// Each job: company, title, dates, location, achievements (with metrics)

export const experience = [
  {
    id: "siteminder",
    company: "SiteMinder",
    logo: "/images/siteminder-logo.svg", // Add logo to public/images/
    title: "Senior Data & Visualisation Analyst",
    location: "Pune, India",
    startDate: "Nov 2025",
    endDate: "Present",
    current: true,
    description: "Product & payments analytics for SiteMinder Pay, Channel Manager, and Little Hotelier platforms. Building dbt gold-layer models on Databricks and Tableau dashboards for senior stakeholders.",
    achievements: [
      {
        text: "Tested 5 hypotheses on AutoPay adoption across 3 property cohorts and 16,205 properties, informing product expansion strategy for SiteMinder Pay",
        metric: "16,205 properties analyzed"
      },
      {
        text: "Built PMS Partner Wrap data layer behind Connectivity Tableau dashboard, reconciling to legacy source and flagging double-counting of multi-PMS hotels in partner metrics",
        metric: "Data quality fix"
      },
      {
        text: "Develop and maintain dbt gold-layer models on Databricks for reservation and payments data, migrating reporting from legacy Snowflake layers to Tableau-ready marts",
        metric: "Modern data stack migration"
      },
      {
        text: "Reconciled Little Hotelier mart across 334 region-month rows to within 0.1% of Snowflake and validated 18 SiteMinder Pay dashboard KPIs over a 5-year window",
        metric: "0.1% reconciliation accuracy"
      }
    ],
    technologies: ["Databricks", "dbt", "SQL", "Tableau", "Snowflake", "Python"]
  },
  {
    id: "zeno-health",
    company: "Zeno Health",
    logo: "/images/zeno-logo.svg",
    title: "Data Analyst",
    location: "Mumbai, India",
    startDate: "Nov 2023",
    endDate: "Oct 2025",
    current: false,
    description: "Led customer analytics, predictive modeling, and supply chain reporting for a healthcare/pharmacy platform. Drove retention improvements through RFM segmentation and ML-powered personalization.",
    achievements: [
      {
        text: "Led RFM-based rewards project (Zeno Coins), designing customer segments and tailored offers that improved retention by 13% and boosted engagement",
        metric: "+13% retention"
      },
      {
        text: "Built XGBoost models in Python for inventory management and sales prediction, and predictive models to forecast medicine reorder dates for personalized, proactive engagement",
        metric: "ML models in production"
      },
      {
        text: "Built analytics and dashboards that improved OTIF (on-time, in-full) performance by 7%",
        metric: "+7% OTIF"
      },
      {
        text: "Ran hypothesis-driven analyses and A/B tests to identify opportunities, maintained interactive Tableau dashboards monitoring KPIs for retention strategy",
        metric: "A/B testing & KPI dashboards"
      }
    ],
    technologies: ["Python", "XGBoost", "Tableau", "SQL", "RFM Segmentation", "A/B Testing", "CRM Integration"]
  },
  {
    id: "makemytrip",
    company: "MakeMyTrip",
    logo: "/images/mmt-logo.svg",
    title: "Data Analyst",
    location: "Gurgaon, India",
    startDate: "May 2022",
    endDate: "Nov 2023",
    current: false,
    description: "OTA supply chain analytics and reporting automation. Delivered actionable insights to senior leadership and automated manual reporting processes.",
    achievements: [
      {
        text: "Automated 50+ reports, saving 15+ hours per week and improving supply chain operational efficiency",
        metric: "15+ hrs/week saved"
      },
      {
        text: "Presented actionable insights to senior leadership, informing strategic OTA supply chain decisions",
        metric: "Executive stakeholder impact"
      },
      {
        text: "Raised data accuracy from 80% to 96% through systematic data cleansing and preprocessing (Data Accuracy Improvement project)",
        metric: "80% → 96% accuracy"
      }
    ],
    technologies: ["SQL", "Python", "Tableau", "Excel", "Automation", "Supply Chain Analytics"]
  }
];