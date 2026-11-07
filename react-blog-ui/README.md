# The Daily Journal – Editorial React Blog Platform

> **BeeSkilled Full-Stack Training Program · Week 1 Assignment · Task 3**  
> An editorial-style, responsive React blog platform built with **React** and **Vite**. Demonstrates localized JSON data consumption, component reusability, list rendering with `map()`, combined multi-criteria search and category filtering, and controlled input management.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Key Features](#key-features)
- [Project Folder Structure](#project-folder-structure)
- [JSON Data Architecture (`posts.json`)](#json-data-architecture-postsjson)
- [Reusable Component Architecture](#reusable-component-architecture)
  - [1. Header Component (`Header.jsx`)](#1-header-component-headerjsx)
  - [2. BlogCard Component (`BlogCard.jsx`)](#2-blogcard-component-blogcardjsx)
  - [3. SearchBar Component (`SearchBar.jsx`)](#3-searchbar-component-searchbarjsx)
  - [4. CategoryFilter Component (`CategoryFilter.jsx`)](#4-categoryfilter-component-categoryfilterjsx)
  - [5. Footer Component (`Footer.jsx`)](#5-footer-component-footerjsx)
  - [6. Full Article Reader Modal (Integrated)](#6-full-article-reader-modal-integrated)
- [How Search and Filtering Function](#how-search-and-filtering-function)
  - [Multi-Criteria Search Logic](#multi-criteria-search-logic)
  - [Category Filtering Logic](#category-filtering-logic)
  - [Combined Filtering Pipeline](#combined-filtering-pipeline)
  - [Empty Results State Handling](#empty-results-state-handling)
- [Core React Concepts Demonstrated](#core-react-concepts-demonstrated)
- [Getting Started & Installation](#getting-started--installation)
- [Screenshots & UI Showcase](#screenshots--ui-showcase)
- [Author & Academic Attribution](#author--academic-attribution)

---

## 🌟 Project Overview

**The Daily Journal** is an editorial chronicle covering modern software architecture, frontend engineering, UI/UX restraint, and technology education. Designed with a timeless print-journal aesthetic (Newsprint typography, classic mastheads, warm neutral backgrounds, and high-contrast article cards), it provides a fast, immersive reading experience with instant search and category discovery.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React 19 / 18** | Functional component architecture, declarative rendering, and hooks |
| **Vite** | Modern frontend build tooling and Instant Hot Module Replacement (HMR) |
| **JavaScript (ES Modules & JSX)** | Modern ECMAScript syntax and array manipulation |
| **CSS3 & CSS Custom Properties** | Newsprint layout tokens, typography pacing, and media queries |
| **JSON Data (`posts.json`)** | Structured article dataset loaded directly into React |

---

## ✨ Key Features

1. **Loaded from JSON:** 12 sample articles across 5 distinct categories loaded from `src/data/posts.json` (zero hardcoded JSX post blocks).
2. **Featured Lead Story:** Dedicated cover story banner with prominent typography, author metadata, tags, and reading time.
3. **Combined Multi-Criteria Search & Category Filter:** Search and category filtering operate cooperatively without overwriting one another.
4. **Dynamic Category Counters:** Category pills automatically compute live article distributions from the dataset.
5. **Interactive Full-Article Reader:** Clicking "Read Article" on any card or featured dispatch opens an editorial reader modal with pullquotes, bylines, and tags.
6. **Controlled Newsletter Subscription:** Email form with real-time format validation, error indicators, and a confirmation state.
7. **Responsive Editorial Layout:** Fully adapted for mobile, tablet, and desktop viewports with a collapsible navigation drawer.

---

## 📁 Project Folder Structure

```text
react-blog-ui/
├── public/
│   ├── favicon.svg                # Brand icon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── BlogCard.jsx           # Reusable article card component
│   │   ├── CategoryFilter.jsx     # Reusable category pill filter bar
│   │   ├── Footer.jsx             # Editorial footer with topics & navigation
│   │   ├── Header.jsx             # Masthead header with responsive navigation
│   │   └── SearchBar.jsx          # Controlled search input with clear trigger
│   ├── data/
│   │   └── posts.json             # Structured 12-article sample dataset
│   ├── App.css                    # Comprehensive editorial styling
│   ├── App.jsx                    # Application root & filtering orchestrator
│   ├── index.css                  # Typography, font imports, and theme tokens
│   └── main.jsx                   # Vite React DOM entry point
├── index.html                     # HTML5 template
├── package.json                   # Dependencies and npm scripts
├── vite.config.js                 # Vite bundler configuration
└── README.md                      # Complete assignment documentation
```

---

## 📊 JSON Data Architecture (`posts.json`)

All blog posts are externalized into `src/data/posts.json`. Each article record adheres to a strict schema:

```json
{
  "id": "post-1",
  "title": "The Evolution of Modern Web Architectures: Beyond Monoliths and Microservices",
  "description": "An in-depth exploration of modular monoliths, edge computing, and serverless runtimes powering the next generation of scalable web systems.",
  "author": "Amisha Josna Dsouza",
  "authorRole": "Staff Software Architect",
  "date": "Nov 5, 2026",
  "category": "Technology",
  "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "readTime": "6 min read",
  "featured": true,
  "tags": ["Architecture", "Serverless", "Cloud"]
}
```

### Covered Categories:
- **Technology** (Architecture, Serverless, AI, Quantum Computing)
- **Programming** (React 19, TypeScript Clean Code, Rust for JS Developers)
- **Design** (Editorial Typography, Accessible Design Systems)
- **Lifestyle** (Deep Work Focus Rituals, Developer Sabbatical)
- **Education** (Project-Based Learning, Algorithmic Thinking)

---

## 🧩 Reusable Component Architecture

### 1. Header Component (`Header.jsx`)
- **Props:** `brandName`, `tagline`, `navLinks`, `activeSection`, `onNavClick`.
- **Responsibilities:** Renders top publication issue date, brand masthead, mobile drawer toggle, and navigation ribbon.

### 2. BlogCard Component (`BlogCard.jsx`)
- **Props:** `post` (article object), `onReadArticle` (callback).
- **Responsibilities:** Displays cover imagery, category-colored badge, article headline, excerpt, tags, author avatar, publication date, read time, and "Read Article" action.

### 3. SearchBar Component (`SearchBar.jsx`)
- **Props:** `searchQuery`, `onSearchChange`, `onClearSearch`, `placeholder`, `totalMatches`.
- **Responsibilities:** Controlled text input with search icon, dynamic match counter, and an instant clear button (`✕`).

### 4. CategoryFilter Component (`CategoryFilter.jsx`)
- **Props:** `categories`, `selectedCategory`, `onSelectCategory`, `categoryCounts`.
- **Responsibilities:** Renders a horizontal pill list including "All" and each category, highlighting the active selection and displaying real-time post counts.

### 5. Footer Component (`Footer.jsx`)
- **Props:** `brandName`, `tagline`, `copyright`, `editorialTopics`, `onTopicClick`.
- **Responsibilities:** 4-column layout presenting brand ethos, clickable topic shortcuts that filter the feed, navigation links, and social links.

### 6. Full Article Reader Modal (Integrated in `App.jsx`)
- **State Driven:** Controlled via `readingPost`.
- **Responsibilities:** Provides a distraction-free editorial reader overlay with lead typography, pullquotes, metadata, and accessible keyboard/click dismiss.

---

## 🔍 How Search and Filtering Function

### Multi-Criteria Search Logic
The search engine inspects multiple fields across each article:
- Article **Title**
- Article **Description / Excerpt**
- Article **Author Name**
- Article **Tags** array

Case-insensitive normalization ensures searches like `"react"`, `"REACT"`, or `"React"` match accurately.

### Category Filtering Logic
Selecting a category (e.g. `Programming`) checks whether `selectedCategory === 'All'` or matches `post.category.toLowerCase()`.

### Combined Filtering Pipeline
In `App.jsx`, both constraints are evaluated within a single `useMemo` computation pipeline:

```javascript
const filteredPosts = useMemo(() => {
  const query = searchQuery.trim().toLowerCase();

  return postsData.filter((post) => {
    // 1. Category check
    const matchesCategory =
      selectedCategory.toLowerCase() === 'all' ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    // 2. Multi-field search query check
    const matchesSearch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query) ||
      (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(query)));

    // Must satisfy BOTH conditions simultaneously
    return matchesCategory && matchesSearch;
  });
}, [searchQuery, selectedCategory]);
```

### Empty Results State Handling
When no articles satisfy the combined criteria, an informative empty state displays the current keyword and category, offering a single-click **"Reset All Filters"** button that restores the view.

---

## 💡 Core React Concepts Demonstrated

1. **Importing & Handling JSON Data:** Directly imported as structured objects into React state/memoization pipelines.
2. **List Rendering with `map()`:** All articles, categories, navigation items, and tags render declaratively with stable, unique `key` props.
3. **Controlled Inputs:** Search query and newsletter email are bound directly to React state (`value` + `onChange`).
4. **Conditional Rendering:** Render variations for active filters, newsletter success alerts, empty search states, and the reader modal.
5. **Component Composition:** Higher-level layouts compose smaller building blocks with explicit prop contracts.

---

## 🚀 Getting Started & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+) installed.

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Josna-01/beeskilled-week1.git
   cd beeskilled-week1
   ```

2. **Navigate into the Task 3 directory:**
   ```bash
   cd react-blog-ui
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start local development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:5173](http://localhost:5173).

### Build for Production
```bash
npm run build
npm run preview
```

---

## 📸 Screenshots & UI Showcase

```text
+------------------------------------------------------------------------+
| WEEK 1 EDITION · NOVEMBER 2026                 CURATED BY AMISHA DSOUZA|
+------------------------------------------------------------------------+
|                           ✦ THE DAILY JOURNAL                          |
|         An Independent Chronicle of Ideas, Code & Modern Thought       |
|                                                                        |
|    FEATURED STORY    ALL ARTICLES    TOPICS    NEWSLETTER    [12 Posts]|
+------------------------------------------------------------------------+
|                                                                        |
|  [COVER STORY]                                                         |
|  The Evolution of Modern Web Architectures                             |
|  By Amisha Josna Dsouza · Nov 5, 2026 · 6 min read                     |
|  "An in-depth exploration of modular monoliths, edge computing..."     |
|  [#Architecture] [#Serverless] [#Cloud]      [Read Full Dispatch →]    |
|                                                                        |
+------------------------------------------------------------------------+
|  EXPLORE THE ARCHIVE                                                   |
|  🔍 [ Search articles by title, topic, or keyword...          ] [✕]    |
|                                                                        |
|  [All (12)] [Technology (3)] [Programming (3)] [Design (2)] ...        |
+------------------------------------------------------------------------+
|  +------------------------+  +------------------------+  +-----------+ |
|  | [PROGRAMMING]          |  | [DESIGN]               |  | [LIFESTYLE| |
|  | Mastering React 19     |  | The Art of Restraint   |  | Deep Work | |
|  | By Elena Rostova       |  | By Julian Sterling     |  | Maya Lin  | |
|  | [Read Article →]       |  | [Read Article →]       |  | [Read →]  | |
|  +------------------------+  +------------------------+  +-----------+ |
+------------------------------------------------------------------------+
|  ✦ THE WEEKLY CHRONICLE ✦                                              |
|  Subscribe to The Daily Journal for curated engineering dispatches     |
|  [Enter email address...                  ] [Subscribe Free]           |
+------------------------------------------------------------------------+
| © 2026 The Daily Journal · BeeSkilled Week 1 Assignment · Task 3       |
+------------------------------------------------------------------------+
```

---

## 👩‍💻 Author & Academic Attribution

- **Author:** Amisha Josna Dsouza ([@Josna-01](https://github.com/Josna-01))
- **Course:** BeeSkilled Full-Stack Training Program – Week 1 (Task 3: React Blog UI)
