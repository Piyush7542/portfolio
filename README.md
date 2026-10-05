# Piyush Anand - Portfolio Website

A modern, professional portfolio website for **Piyush Anand**, Senior Data & Visualisation Analyst specializing in Product & Customer Analytics.

## 🚀 Tech Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Vanilla CSS with CSS Custom Properties (Design System)
- **Icons**: Lucide React
- **Animations**: CSS @keyframes + IntersectionObserver (zero dependencies)
- **Forms**: Netlify Forms (serverless, no backend needed)
- **Deployment**: Netlify (auto-deploy from GitHub)

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets (served as-is)
│   ├── images/             # Profile photo, project thumbnails, logos
│   ├── resume/             # Resume PDF for download
│   ├── favicon.svg         # Site favicon
│   ├── og-image.svg        # Open Graph social sharing image
│   └── site.webmanifest    # PWA manifest
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.jsx      # Button variants (Primary, Secondary, Ghost)
│   │   ├── Navbar.jsx      # Fixed navigation with theme toggle
│   │   ├── Footer.jsx      # Site footer with links
│   │   ├── SectionHeader.jsx # Consistent section headings
│   │   ├── SkillPill.jsx   # Skill tags & categories
│   │   ├── TimelineCard.jsx # Experience timeline cards
│   │   ├── ProjectCard.jsx # Project showcase cards
│   │   ├── EducationCard.jsx # Education & certification cards
│   │   └── SocialLinks.jsx # Social media link components
│   ├── sections/           # Page sections (composed in App.jsx)
│   │   ├── Hero.jsx        # Landing hero with stats
│   │   ├── About.jsx       # Professional summary & strengths
│   │   ├── Skills.jsx      # Categorized technical skills
│   │   ├── Experience.jsx  # Work history timeline
│   │   ├── Projects.jsx    # Featured projects grid
│   │   ├── Education.jsx   # Degrees & certifications
│   │   └── Contact.jsx     # Contact form + info
│   ├── data/               # 🔑 SINGLE SOURCE OF TRUTH
│   │   ├── profile.js      # Personal info, contacts, summary
│   │   ├── skills.js       # Categorized skills
│   │   ├── experience.js   # Work history
│   │   ├── projects.js     # Portfolio projects
│   │   └── education.js    # Degrees & certifications
│   ├── assets/
│   │   └── main.css        # Global design system (variables, utilities)
│   ├── App.jsx             # Main layout composition
│   └── main.jsx            # React entry point
├── index.html              # HTML template with SEO
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies & scripts
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🛠 Installation

### Prerequisites
- **Node.js** 18+ (download from [nodejs.org](https://nodejs.org/))
- **Git** (download from [git-scm.com](https://git-scm.com/))
- **VS Code** recommended (download from [code.visualstudio.com](https://code.visualstudio.com/))

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

**Where to run commands**: Open VS Code → Terminal → New Terminal (or use Command Prompt / PowerShell / Git Bash)

**What you should see**: 
- `npm install` downloads packages (takes 30-60 seconds)
- `npm run dev` starts Vite dev server at `http://localhost:3000`
- Browser opens automatically showing your portfolio

## 🏃 Run Locally

```bash
# Development server with hot reload
npm run dev

# Production build preview
npm run build && npm run preview
```

## 🏗 Build for Production

```bash
npm run build
```

Outputs optimized files to `dist/` folder ready for deployment.

## 📦 Deploy to Netlify (Easiest Method)

### Option 1: GitHub → Netlify Auto-Deploy (Recommended)

1. **Push to GitHub** (see Git section below)
2. Go to [netlify.com](https://netlify.com) → Sign up/Login with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**
7. Netlify gives you a URL like `https://random-name.netlify.app`
8. **Optional**: Change to custom domain in Site Settings → Domain Management

### Option 2: Drag & Drop (Manual)

```bash
npm run build
# Drag the `dist` folder to netlify.com/drop
```

### Environment Variables (if needed)
None required for this setup. Netlify Forms works automatically.

### Automatic Deploys
Every `git push` to main branch → Netlify auto-builds & deploys ✨

## 🔧 Git & GitHub Setup

### First Time Setup

```bash
# 1. Initialize git (if not already)
git init

# 2. Add all files
git add .

# 3. Create first commit
git commit -m "Initial commit: Portfolio website"

# 4. Rename branch to main (modern standard)
git branch -M main

# 5. Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 6. Push to GitHub
git push -u origin main
```

### Daily Workflow

```bash
# Make changes to code
# Test locally: npm run dev

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update: Added new project to portfolio"

# Push to GitHub (triggers Netlify deploy)
git push
```

### Git Concepts (Beginner-Friendly)

| Term | Meaning |
|------|---------|
| **Repository (repo)** | Your project folder tracked by Git |
| **Commit** | A saved snapshot of your changes |
| **Push** | Upload commits to GitHub |
| **Branch** | Parallel version of your code (main = production) |
| **Remote** | GitHub server URL linked to local repo |

## ✏️ Updating Your Portfolio

All content lives in **`src/data/`** — edit these files to update your site:

| File | What to Update |
|------|----------------|
| `profile.js` | Name, headline, email, phone, LinkedIn, GitHub, hero tagline, summary, strengths |
| `skills.js` | Add/remove skill categories & items |
| `experience.js` | Add jobs, update achievements, metrics |
| `projects.js` | Add projects, update impact, links |
| `education.js` | Add degrees, certifications |

**After editing**: Save → `npm run dev` to preview → `git add . && git commit -m "Update: ..." && git push` → Netlify auto-deploys!

### Adding Images
1. Place files in `public/images/`
2. Reference as `/images/filename.jpg` in data files
3. Recommended: WebP format, max 800px width

### Resume PDF
Place your resume at `public/resume/Piyush_Anand_Resume.pdf` — the download button links here automatically.

## 🎨 Customization

### Change Accent Color
Edit `src/assets/main.css`:
```css
:root {
  --accent: #your-color;        /* Primary accent */
  --accent-light: #lighter;     /* Hover state */
  --accent-dark: #darker;       /* Active state */
}
```

### Toggle Dark/Light Default
In `src/assets/main.css`, swap `:root` and `[data-theme="light"]` values, or change `localStorage.getItem('theme') || 'dark'` in `main.jsx`.

### Fonts
Currently uses **Inter** from Google Fonts. Change in `index.html` and `main.css` `--font-family`.

## ✅ Pre-Launch Checklist

- [ ] Update `profile.js` with your GitHub URL
- [ ] Add profile photo to `public/images/profile.jpg`
- [ ] Add project thumbnails to `public/images/`
- [ ] Place resume PDF at `public/resume/Piyush_Anand_Resume.pdf`
- [ ] Update `og-image.svg` with your info (or generate PNG)
- [ ] Test locally: `npm run dev`
- [ ] Build: `npm run build`
- [ ] Push to GitHub
- [ ] Deploy to Netlify
- [ ] Test live site on mobile & desktop
- [ ] Verify contact form works (check Netlify Forms dashboard)
- [ ] Check SEO: View page source for meta tags

## 📱 Browser Testing

| Platform | Test |
|----------|------|
| Desktop Chrome | ✅ Layout, animations, forms |
| Desktop Firefox | ✅ Layout, animations, forms |
| Desktop Safari | ✅ Layout, animations, forms |
| Mobile Chrome (Android) | ✅ Touch, responsive, scroll |
| Mobile Safari (iOS) | ✅ Touch, responsive, scroll |

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm install` fails | Delete `node_modules` & `package-lock.json`, run again |
| Port 3000 in use | Vite auto-picks next port (3001, 3002...) |
| Styles not updating | Hard refresh (Ctrl+Shift+R), check CSS syntax |
| Contact form not working | Ensure `data-netlify="true"` on form, check Netlify Forms dashboard |
| Images not loading | Check path starts with `/images/`, file exists in `public/images/` |
| Build fails | Run `npm run build` locally first to see errors |

## 📄 License

MIT License — feel free to use as a template for your own portfolio!

---

**Built with ❤️ using React + Vite**