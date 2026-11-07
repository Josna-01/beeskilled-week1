# Beeskilled – Week 1 Assignments

> A multi-project repository showcasing core frontend engineering, modern React architecture, reusable component design, controlled state management, and localized data filtering for the **BeeSkilled Full-Stack Training Program – Week 1**.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Repository Folder Structure](#repository-folder-structure)
- [Assignments Overview & Features](#assignments-overview--features)
  - [Task 1: Developer Portfolio](#task-1-developer-portfolio)
  - [Task 2: React Components Practice](#task-2-react-components-practice)
  - [Task 3: React Blog UI – The Daily Journal](#task-3-react-blog-ui--the-daily-journal)
- [Installation & Execution Instructions](#installation--execution-instructions)
- [Security & Submission Hygiene](#security--submission-hygiene)
- [Live Deployments](#live-deployments)
- [Author & Contributor Information](#author--contributor-information)

---

## 🌟 Overview

This repository contains three independent, production-ready React applications built with **Vite** during **Week 1** of the BeeSkilled Full-Stack Program. Each assignment demonstrates practical software development standards:

1. **Portfolio Application:** Personal branding, responsive layout, and interactive timeline history.
2. **Student Dashboard:** Reusable UI atoms and molecules, props contracts, callbacks, and controlled state.
3. **Editorial Blog Platform:** Localized JSON data ingestion, multi-field search, dynamic category filtering, and modal reader view.

---

## 🛠️ Technologies Used

- **Core Framework:** React 19 / 18, React DOM
- **Bundler & Tooling:** Vite, ES Modules
- **Language:** JavaScript (ES6+), JSX
- **Styling:** Modular CSS, CSS Custom Properties (CSS Variables), Flexbox, CSS Grid
- **Data & State:** JSON Data Collections, React Hooks (`useState`, `useMemo`, `useEffect`)
- **Code Quality & Linting:** Oxlint, Clean Code Architecture

---

## 📁 Repository Folder Structure

```text
beeskilled-week1/
├── portfolio/                   # Task 1: Personal Developer Portfolio
│   ├── src/
│   │   ├── components/images/   # Asset storage & portrait media
│   │   ├── main.jsx             # React portfolio application
│   │   └── styles.css           # Custom styling and layout system
│   ├── AMISHA.pdf               # Downloadable curriculum vitae
│   ├── index.html               # Entry HTML template
│   ├── package.json             # Task 1 dependencies & scripts
│   ├── package-lock.json
│   └── README.md                # Task 1 in-depth documentation
│
├── react-components-practice/   # Task 2: Reusable React Components & Student Dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx       # Responsive header with mobile drawer
│   │   │   ├── Footer.jsx       # Semantic footer with navigation props
│   │   │   ├── Card.jsx         # Multi-variant course card with progress tracking
│   │   │   ├── Button.jsx       # Reusable button with 5 variants & 3 sizes
│   │   │   └── Form.jsx         # Controlled feedback form with real-time validation
│   │   ├── App.jsx              # Dashboard orchestrator & state manager
│   │   ├── App.css              # Dashboard styling, layout & toast feedback
│   │   ├── index.css            # Base resets and typography tokens
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md                # Task 2 in-depth documentation
│
├── react-blog-ui/               # Task 3: The Daily Journal (Editorial Blog)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx       # Editorial masthead with meta bar & nav
│   │   │   ├── BlogCard.jsx     # Reusable card with author metadata & tags
│   │   │   ├── SearchBar.jsx    # Controlled search with live match counters
│   │   │   ├── CategoryFilter.jsx # Category pill filters with dynamic counts
│   │   │   └── Footer.jsx       # Editorial footer with quick topic shortcuts
│   │   ├── data/
│   │   │   └── posts.json       # 12 sample articles across 5 disciplines
│   │   ├── App.jsx              # Combined search & category filtering engine
│   │   ├── App.css              # Newsprint styling, grid pacing & reader modal
│   │   ├── index.css            # Typography tokens & serif imports
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md                # Task 3 in-depth documentation
│
├── .gitignore                   # Global repository security and hygiene rules
└── README.md                    # Root project documentation index
```

---

## 🚀 Assignments Overview & Features

### Task 1: Developer Portfolio
📁 **Location:** [`/portfolio`](./portfolio) | 📄 **Documentation:** [`portfolio/README.md`](./portfolio/README.md)

A responsive, personal developer portfolio showcasing technical background, education, club leadership, and production projects.

- **Key Features:**
  - Responsive navigation with mobile hamburger drawer and direct anchor jumping.
  - Section-by-section breakdown: About, Education, Selected Projects, Experience Timeline, Technical Stack, and Contact.
  - Interactive project cards highlighting achievements (AI for Bharat National 1st Place).
  - Downloadable PDF resume integration (`/AMISHA.pdf`).
  - Production build optimized via Vite.

---

### Task 2: React Components Practice
📁 **Location:** [`/react-components-practice`](./react-components-practice) | 📄 **Documentation:** [`react-components-practice/README.md`](./react-components-practice/README.md)

A modern **Student Dashboard (`EduPulse`)** built around 5 modular, reusable components demonstrating prop delegation, callback events, and reactive state management.

- **Key Features & Components:**
  - **`Header.jsx`**: Responsive masthead with interactive mobile menu toggle.
  - **`Footer.jsx`**: Semantic footer customizable via props with quick links and badges.
  - **`Card.jsx`**: Reusable course card rendered 3 times with unique props, progress bars, and composed action buttons.
  - **`Button.jsx`**: Reusable button supporting 5 variants (`primary`, `secondary`, `outline`, `success`, `danger`), multiple sizes, and event handlers.
  - **`Form.jsx`**: Controlled student help desk inquiry form with validation (name length, valid email regex, min message length), success notifications, and automatic form resets.
  - **Interactive Lab**: Live study streak and session counter controls demonstrating props vs. state.

---

### Task 3: React Blog UI – The Daily Journal
📁 **Location:** [`/react-blog-ui`](./react-blog-ui) | 📄 **Documentation:** [`react-blog-ui/README.md`](./react-blog-ui/README.md)

A publication platform called **The Daily Journal** that pairs classic editorial aesthetics with localized JSON data retrieval and advanced client-side search/filtering.

- **Key Features & Components:**
  - **`posts.json`**: 12 structured articles spanning *Technology*, *Programming*, *Design*, *Lifestyle*, and *Education* (zero hardcoded JSX post markup).
  - **`BlogCard.jsx`**: Reusable article card displaying cover imagery, category badges, author byline, reading time, tags, and read triggers.
  - **`SearchBar.jsx`**: Controlled input searching across titles, excerpts, authors, and tag arrays simultaneously with an instant clear button (`✕`).
  - **`CategoryFilter.jsx`**: Category pills with automatically calculated live post count badges.
  - **Combined Filtering Pipeline**: Search and category filtering operate cooperatively without overwriting one another.
  - **Empty Results State**: Friendly fallback card with one-click filter reset.
  - **Full-Article Reader Modal**: Interactive distraction-free overlay with editorial pullquotes and tags.
  - **Controlled Newsletter Form**: Email validation with instant success confirmation.

---

## 💻 Installation & Execution Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [Git](https://git-scm.com/)

### Clone Repository
```bash
git clone https://github.com/Josna-01/beeskilled-week1.git
cd beeskilled-week1
```

### Running Each Project

Each application is self-contained with its own dependencies and configuration:

#### 1. Run Task 1 (Portfolio):
```bash
cd portfolio
npm install
npm run dev
```

#### 2. Run Task 2 (Student Dashboard):
```bash
cd react-components-practice
npm install
npm run dev
```

#### 3. Run Task 3 (The Daily Journal):
```bash
cd react-blog-ui
npm install
npm run dev
```

### Building for Production
To generate a production-ready bundle in the `dist/` directory for any project:
```bash
cd <project-folder>
npm run build
npm run preview
```

---

## 🔒 Security & Submission Hygiene

This repository follows industry-standard security and repository hygiene guidelines:
- **No Secrets or Credentials:** Verified that zero API keys, tokens, private keys, or passwords exist in code or commit history.
- **Strict `.gitignore`:** Excludes all `.env*` files, `node_modules/`, compiler build artifacts (`dist/`), OS files (`.DS_Store`, `Thumbs.db`), and IDE caches.
- **Reproducible Builds:** All `package-lock.json` files are committed to ensure deterministic dependency trees across environments.

---

## 🌐 Live Deployments

- **Developer Portfolio (Task 1):** *Available in `/portfolio`*
- **Student Dashboard (Task 2):** *Available in `/react-components-practice`*
- **The Daily Journal (Task 3):** *Available in `/react-blog-ui`*

*(Deployments can be published to Vercel, Netlify, or GitHub Pages via the root project subdirectories).*

---

## 👩‍💻 Author & Contributor Information

**Amisha Josna Dsouza**  
- **GitHub:** [@Josna-01](https://github.com/Josna-01)  
- **LinkedIn:** [Amisha Josna Dsouza](https://www.linkedin.com/in/amisha-josna-dsouza)  
- **Program:** BeeSkilled Full-Stack Training Program – Week 1
