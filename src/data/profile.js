// ============================================
// PROFILE DATA - Single Source of Truth
// ============================================
// Update this file to change your personal info across the entire site

export const profile = {
  name: "Piyush Anand",
  headline: "Senior Data & Visualisation Analyst | Product & Customer Analytics",
  location: "Delhi NCR, India",
  email: "agnohotri8409986813@gmail.com",
  phone: "+91 7542994378",
  linkedin: "https://linkedin.com/in/piyush-anand-senior-data-analyst",
  github: "https://github.com/[ADD_GITHUB_USERNAME]", // 🔴 UPDATE THIS
  resumeUrl: "/resume/Piyush_Anand_Resume.pdf", // Place PDF in public/resume/
  
  // Hero section
  heroTagline: "Turning complex data into clear product decisions through analytics, ML & storytelling",
  
  // About section
  summary: `Senior Data and Visualisation Analyst with 4+ years of experience in product, customer and payments analytics across SaaS, healthcare and online travel (OTA). Measures product adoption, retention and churn through cohort analysis, hypothesis testing and RFM segmentation, builds XGBoost and Python predictive models, and turns findings into Tableau dashboards and recommendations for senior stakeholders. Strong SQL, dbt and Databricks foundation.`,
  
  // Key strengths for About section
  strengths: [
    "Product & Customer Analytics",
    "Predictive Modeling (XGBoost, Python)",
    "Data Visualization (Tableau, Qlik Sense)",
    "Modern Data Stack (SQL, dbt, Databricks, Snowflake)",
    "Experimentation & A/B Testing",
    "Stakeholder Communication & Data Storytelling"
  ],
  
  // Current role highlight
  currentRole: {
    company: "SiteMinder",
    title: "Senior Data & Visualisation Analyst",
    startDate: "Nov 2025",
    location: "Pune"
  }
};

export const socialLinks = [
  { name: "LinkedIn", url: profile.linkedin, icon: "linkedin", label: "Connect on LinkedIn" },
  { name: "GitHub", url: profile.github, icon: "github", label: "View GitHub Profile" },
  { name: "Email", url: `mailto:${profile.email}`, icon: "mail", label: "Send Email" }
];