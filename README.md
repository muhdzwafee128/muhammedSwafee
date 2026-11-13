# Muhammed Swafee A V — Personal Portfolio

A distinctive, modern, and minimal monochrome developer portfolio built with **React 18 + Vite**, **Tailwind CSS**, and **Framer Motion**.

Inspired by the oversized display typography and glass-style cards of **Mazin KP** and the clean, minimal monochrome structure and spacing of **Neeraj Rajeev**.

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)
- A code editor (e.g., VS Code)

### Install & Run

```bash
# 1. Open the project folder in your terminal
cd d:\swafee_portfolio

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

```bash
# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

---

## 🎨 Design System

### Monochrome Palette

- **Dark Theme:**
  - Main background: `#050505` (near black)
  - Primary text: `#F5F5F5` (off-white)
  - Secondary text: `#A1A1AA` (muted grey)
  - Card surfaces: `#18181B` (dark grey glass)
  - Borders: `#303036` (subtle dark grey)
  - Secondary surfaces: `#27272A` (charcoal)
- **Light Theme:**
  - Main background: `#F7F5F3` (warm off-white)
  - Primary text: `#111111` (near black)
  - Secondary text: `#71717A` (zinc-500)
  - Card surfaces: `#FFFFFF`
  - Borders: `#E5E5E5`
  - Secondary surfaces: `#EEEEEE`

---

## 📁 Project Structure

```
swafee_portfolio/
├── public/
│   ├── resume.pdf              ← Downloadable résumé (PDF)
│   ├── projects/               ← (Optional) Project screenshots
│   └── favicon.svg             ← "S" Favicon
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           ← Minimal glass navbar with "Swafee." branding & theme toggle
│   │   ├── Hero.jsx             ← Typography-led oversized display hero (no portrait)
│   │   ├── About.jsx            ← Single concise paragraph (Neeraj-inspired)
│   │   ├── WhatIDo.jsx          ← 4 focus-area glass cards (Mazin-inspired)
│   │   ├── Projects.jsx         ← Work section with E-Campus & NetrIQ status cards
│   │   ├── ProjectModal.jsx     ← Accessible details modal (Esc, click outside, scroll lock)
│   │   ├── Experience.jsx       ← Community Lead timeline card with work-mode & skill tags
│   │   ├── Skills.jsx           ← 12 core technologies in a clean minimal grid
│   │   ├── TechIcon.jsx         ← Recognizable SVG vector technology logos
│   │   ├── Recognition.jsx      ← Recognition & Achievements list
│   │   ├── Contact.jsx          ← "LET'S WORK TOGETHER." + Formspree form + Resume download
│   │   └── Footer.jsx           ← "Swafee." brand, copyright, back-to-top button
│   │
│   ├── data/
│   │   └── portfolio.js         ← ✏️ Central source of truth for all content & branding
│   │
│   ├── hooks/
│   │   └── useTheme.js          ← Dark/light theme toggle with localStorage persistence
│   │
│   ├── App.jsx                  ← Main layout with accessibility skip link
│   ├── main.jsx                 ← React entry point
│   └── index.css                ← Monochrome design tokens & glass utilities
│
├── .env.example                 ← Environment template for Formspree
├── .gitignore
├── index.html                   ← HTML template with SEO meta tags & Person schema
├── package.json
├── postcss.config.js
├── tailwind.config.js           ← Monochrome color configuration
├── vite.config.js
└── README.md                    ← Setup & maintenance documentation
```

---

## ✏️ How to Edit Content

All personal content and branding lives in **one file**: [`src/data/portfolio.js`](src/data/portfolio.js).

### 1. Update Personal Branding & Intro
```javascript
brandName: 'Swafee.',
name: 'Muhammed Swafee A V',
role: 'Frontend Web Developer',
supportingRole: 'MERN Stack Developer / Building web experiences and exploring product development.',
```

### 2. Update Focus Areas (What I Do)
Edit the `focusAreas` array in `portfolio.js`:
```javascript
focusAreas: [
  {
    id: '01',
    title: 'Web Development',
    subtitle: 'Responsive, functional and user-focused web applications',
    description: '...',
  },
  // ...
]
```

### 3. Add or Edit Projects (Work)
Each project supports both compact card fields and extended modal fields:
```javascript
{
  title: 'My Project',
  status: 'Completed & Deployed', // or 'In Development'
  subtitle: 'Project Subtitle',
  shortDescription: 'Summary displayed on card...',
  fullDescription: 'Comprehensive overview displayed inside details modal...',
  image: '', // Screenshot path in public/projects/ (or empty for neutral code preview)
  technologies: ['React.js', 'Node.js', 'MongoDB'],
  features: ['Feature 1', 'Feature 2'],
  githubUrl: 'https://github.com/...',
  demoUrl: '',
  additionalDetails: '...',
}
```

### 4. Technical Stack
Configure the `skills` array with standard technology names supported by `TechIcon`:
```javascript
skills: [
  'JavaScript', 'React.js', 'Python', 'Node.js', 'Express.js', 'FastAPI',
  'MongoDB', 'HTML5', 'CSS3', 'Git', 'Docker', 'Figma'
],
```

### 5. Recognition & Achievements
Add or edit entries in the `recognition` array:
```javascript
recognition: [
  {
    title: 'Event Name',
    role: 'Your Role',
    organization: 'Issuing Organization',
    year: '2025',
    description: 'Context and description...',
  },
]
```

---

## 📧 Contact Form Setup (Web3Forms)

1. Visit [https://web3forms.com/](https://web3forms.com/) (free, no sign-up or credit card required).
2. Enter your email address (`mohdzwafee128@gmail.com`) and click **"Create Access Key"**.
3. Check your inbox and copy the access key.
4. Create `.env` locally:
   ```bash
   copy .env.example .env
   ```
5. Set the value in `.env`:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```
6. When deploying to Vercel, add `VITE_WEB3FORMS_ACCESS_KEY` under **Project Settings → Environment Variables**.

---

## 🌐 GitHub Version Control Guide

```bash
cd d:\swafee_portfolio

git init
git add .
git commit -m "Complete portfolio redesign with Web3Forms contact form integration"
git branch -M main
git remote add origin https://github.com/muhdzwafee128/YOUR_REPO_NAME.git
git push -u origin main
```

---

## ▲ Vercel Manual Deployment Guide

1. Log into [vercel.com](https://vercel.com).
2. Click **Add New → Project** and import your GitHub repository.
3. Configure settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Under **Environment Variables**, add `VITE_WEB3FORMS_ACCESS_KEY` with your Web3Forms access key.
5. Click **Deploy**.
