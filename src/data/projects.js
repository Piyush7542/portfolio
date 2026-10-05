// ============================================
// PROJECTS DATA - Featured work with impact
// ============================================
// Each project: name, problem, solution, tech, impact, links

export const projects = [
  {
    id: "autopay-impact",
    name: "AutoPay Impact Analysis",
    company: "SiteMinder",
    tagline: "Analyzed 16,205 properties to validate AutoPay expansion strategy",
    thumbnail: "/images/project-autopay.jpg", // Add to public/images/
    problem: "SiteMinder needed to understand AutoPay adoption drivers across their property base to inform product expansion strategy for SiteMinder Pay. Leadership required data-backed evidence on whether to invest in AutoPay rollout.",
    solution: "Designed and executed a cohort-based analysis across three property segments (adopters, enabled-but-inactive, non-adopters) using data from Mar 2025 – Feb 2026. Tested five hypotheses covering payment adoption, pre-check-in coverage, unpaid stays, automation benefits, and retention impact.",
    technologies: ["SQL", "dbt", "Databricks", "Tableau", "Python", "Cohort Analysis", "Hypothesis Testing"],
    impact: [
      "Adopters showed 2.9x higher SM Pay usage (17.6% vs 6.1%)",
      "5x higher pre-check-in coverage for adopters",
      "59% active rate vs 23% for enabled-but-inactive properties",
      "Delivered executive workbook and stakeholder deck driving expansion decisions"
    ],
    metrics: {
      properties: "16,205",
      hypotheses: 5,
      usageIncrease: "2.9x",
      coverageIncrease: "5x"
    },
    links: {
      github: "[ADD_GITHUB_LINK]", // 🔴 Add if public
      demo: "[ADD_DEMO_LINK]",     // 🔴 Add if available
      caseStudy: "[ADD_CASE_STUDY_LINK]"
    },
    featured: true
  },
  {
    id: "refill-reminder",
    name: "Refill Reminder System",
    company: "Zeno Health",
    tagline: "ML-powered medicine reorder forecasting with CRM integration",
    thumbnail: "/images/project-refill.jpg",
    problem: "Customers frequently forgot to reorder chronic medications, leading to treatment gaps and revenue loss. Manual reminder processes were not scalable or personalized.",
    solution: "Built end-to-end Python predictive modeling pipeline (XGBoost) to forecast individual medicine reorder dates. Integrated with ETL pipelines and CRM systems to trigger personalized, proactive reminders via Tableau dashboards and automated messaging.",
    technologies: ["Python", "XGBoost", "pandas", "scikit-learn", "ETL Pipelines", "Tableau", "CRM Integration", "SQL"],
    impact: [
      "Enabled personalized proactive engagement at scale",
      "Integrated ML predictions directly into CRM workflows",
      "Powered Tableau dashboards for customer success team visibility",
      "Reduced treatment gaps through timely automated reminders"
    ],
    metrics: {
      modelType: "XGBoost",
      integration: "CRM + Tableau",
      automation: "Full pipeline"
    },
    links: {
      github: "[ADD_GITHUB_LINK]",
      demo: "[ADD_DEMO_LINK]",
      caseStudy: "[ADD_CASE_STUDY_LINK]"
    },
    featured: true
  },
  {
    id: "data-accuracy",
    name: "Data Accuracy Improvement",
    company: "MakeMyTrip",
    tagline: "Systematic data cleansing raised accuracy from 80% to 96%",
    thumbnail: "/images/project-accuracy.jpg",
    problem: "Supply chain reporting suffered from 80% data accuracy due to inconsistent sources, missing values, and lack of validation pipelines. This led to unreliable insights for operational decisions.",
    solution: "Implemented systematic data cleansing and preprocessing framework: standardized data ingestion, built validation rules, created automated reconciliation checks, and established data quality monitoring dashboards.",
    technologies: ["SQL", "Python", "Data Validation", "ETL", "Tableau", "Data Quality Framework"],
    impact: [
      "Raised data accuracy from 80% to 96% (+16 percentage points)",
      "Established reusable data quality framework for future pipelines",
      "Reduced manual data correction effort significantly",
      "Enabled trusted reporting for supply chain leadership"
    ],
    metrics: {
      accuracyBefore: "80%",
      accuracyAfter: "96%",
      improvement: "+16 pp"
    },
    links: {
      github: "[ADD_GITHUB_LINK]",
      demo: "[ADD_DEMO_LINK]",
      caseStudy: "[ADD_CASE_STUDY_LINK]"
    },
    featured: true
  }
];