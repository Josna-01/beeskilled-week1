# EduPulse – Student Dashboard (React Components Practice)

> **BeeSkilled Week 1 Assignment · Task 2**  
> A modular, responsive, and production-ready **Student Dashboard** web application built with **React** and **Vite**. Demonstrates foundational and advanced component-driven development, unidirectional data flow (props), custom event dispatching, controlled form inputs, and reactive state management with the `useState` hook.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Folder Structure](#project-folder-structure)
- [Component Breakdown](#component-breakdown)
  - [1. Header Component (`Header.jsx`)](#1-header-component-headerjsx)
  - [2. Footer Component (`Footer.jsx`)](#2-footer-component-footerjsx)
  - [3. Card Component (`Card.jsx`)](#3-card-component-cardjsx)
  - [4. Button Component (`Button.jsx`)](#4-button-component-buttonjsx)
  - [5. Form Component (`Form.jsx`)](#5-form-component-formjsx)
- [Core React Concepts Demonstrated](#core-react-concepts-demonstrated)
  - [Props vs State](#props-vs-state)
  - [Managing State with `useState`](#managing-state-with-usestate)
  - [Controlled Components Pattern](#controlled-components-pattern)
  - [Component Composition](#component-composition)
- [Getting Started & Installation](#getting-started--installation)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
  - [Available Scripts](#available-scripts)
- [Screenshots & UI Showcase](#screenshots--ui-showcase)
- [Author & Acknowledgements](#author--acknowledgements)

---

## 🌟 Project Overview

**EduPulse** is designed as a clean, modern student portal where learners can track their active course curriculum, monitor real-time study streaks, test interactive UI button components, and submit structured feedback or mentor inquiries.

### Key Highlights:
- **Zero Unnecessary External UI Libraries:** Crafted entirely with semantic React, custom CSS variables, and modern web standards.
- **5 Highly Reusable Components:** `Header`, `Footer`, `Card`, `Button`, and `Form` designed with clean prop contracts and reusability in mind.
- **Full Form Validation:** Name, email (regex), category, and message validation with instant visual feedback, clear error states, and submission banner reset.
- **Component Composition:** Complex components (like `Card` and `Form`) internally compose the foundational `Button` component.
- **Interactive Feedback System:** Action triggers from buttons and cards display dynamic notifications and update live dashboard metrics in parent state.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React 19 / 18** | Declarative Component-Based User Interface |
| **Vite** | Next-generation frontend build tooling and lightning-fast HMR |
| **JavaScript (ES Modules & JSX)** | Modern ECMAScript syntax and component logic |
| **CSS3 & CSS Custom Properties** | Responsive grid/flexbox layouts, fluid typography, and transitions |
| **React Hooks (`useState`, `useEffect`)** | Local state, controlled forms, and side-effect handling |

---

## 📁 Project Folder Structure

```text
react-components-practice/
├── public/
│   ├── favicon.svg                # Application icon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Button.jsx             # Reusable button with variants & sizes
│   │   ├── Card.jsx               # Reusable course & student info card
│   │   ├── Footer.jsx             # Reusable semantic footer with links
│   │   ├── Form.jsx               # Controlled feedback form with validation
│   │   └── Header.jsx             # Responsive navigation header with mobile toggle
│   ├── App.css                    # Polished dashboard styling & responsive rules
│   ├── App.jsx                    # Root composition & state coordination
│   ├── index.css                  # Global resets, fonts, and theme tokens
│   └── main.jsx                   # Vite React DOM entry point
├── index.html                     # HTML root template
├── package.json                   # Project dependencies and run scripts
├── vite.config.js                 # Vite bundler configuration
└── README.md                      # Complete assignment documentation
```

---

## 🧩 Component Breakdown

### 1. Header Component (`Header.jsx`)
- **File:** `src/components/Header.jsx`
- **Purpose:** Top-level navigation bar for the student dashboard.
- **Props Accepted:**
  - `title` *(String)*: Name of the application / brand.
  - `subtitle` *(String)*: Supporting descriptor (e.g., "Student Portal").
  - `navItems` *(Array)*: Navigation link objects (`[{ id, label }]`).
  - `activeTab` *(String)*: Current active route / section identifier.
  - `onNavClick` *(Function)*: Callback invoked when a navigation link is clicked.
- **Features:** Responsive hamburger toggle for mobile devices using local `useState(mobileMenuOpen)`.

### 2. Footer Component (`Footer.jsx`)
- **File:** `src/components/Footer.jsx`
- **Purpose:** Global semantic footer with copyright notices, quick links, and social links.
- **Props Accepted:**
  - `copyright` *(String)*: Custom copyright notice text.
  - `tagline` *(String)*: Supporting brand mission statement.
  - `links` *(Array)*: Array of navigation objects with label and URL.
  - `socialLinks` *(Array)*: Array of external links with icons and URLs.
- **Features:** Responsive 3-column desktop layout collapsing cleanly into 1 column on mobile.

### 3. Card Component (`Card.jsx`)
- **File:** `src/components/Card.jsx`
- **Purpose:** Modular container displaying course curricula, progress, metadata, and actions.
- **Props Accepted:**
  - `title` *(String)*: Course or item title.
  - `description` *(String)*: Detailed course summary.
  - `image` *(String)*: URL path to visual banner.
  - `imageAlt` *(String)*: Accessible image alternative text.
  - `badge` *(String)*: Pill badge text (e.g. "Core Track", "Cloud Native").
  - `badgeVariant` *(String)*: Style variant for badge (`primary`, `success`, `warning`).
  - `instructor` *(String)*: Name of course mentor / instructor.
  - `duration` *(String)*: Estimated time commitment.
  - `progress` *(Number)*: Percentage (0-100) rendering an animated progress bar.
  - `buttonText` *(String)*: Call-to-action text on card button.
  - `buttonVariant` *(String)*: Style variant for internal button.
  - `onButtonClick` *(Function)*: Callback invoked upon clicking the action button.
- **Demonstration:** Rendered **3 distinct times** in `App.jsx` with completely different props and content (Full-Stack React, Cloud DevOps, AI & RAG).

### 4. Button Component (`Button.jsx`)
- **File:** `src/components/Button.jsx`
- **Purpose:** Highly configurable button component used throughout the application.
- **Props Accepted:**
  - `label` / `children` *(Node)*: Display text or child elements.
  - `variant` *(String)*: `primary`, `secondary`, `outline`, `success`, `danger`.
  - `size` *(String)*: `sm`, `md`, `lg`.
  - `onClick` *(Function)*: Event listener callback.
  - `type` *(String)*: `button`, `submit`, `reset`.
  - `disabled` *(Boolean)*: Toggles button disabled state.
  - `icon` *(String/Node)*: Optional icon prepended to button text.
- **Demonstration:** Showcased in a dedicated **Interactive Component Lab** with stateful counters and notification triggers.

### 5. Form Component (`Form.jsx`)
- **File:** `src/components/Form.jsx`
- **Purpose:** Student feedback and help desk inquiry submission form.
- **Props Accepted:**
  - `formTitle` *(String)*: Custom title header.
  - `formSubtitle` *(String)*: Contextual help text.
  - `onSubmitSuccess` *(Function)*: Callback passing validated form payload up to parent state.
- **Features:**
  - Fully controlled inputs using `useState`.
  - Inline error validation (required fields, name length, valid email regex, min message length).
  - Clear-on-submit functionality.
  - Success banner with user greeting and timestamp.

---

## 💡 Core React Concepts Demonstrated

### Props vs State

| Feature | Props | State |
|---|---|---|
| **Definition** | Data passed into a component from its parent | Data managed internally within a component |
| **Mutability** | **Read-only (Immutable)** from child's perspective | **Mutable** via setter functions (`setState`) |
| **Flow** | Top-down (Unidirectional from parent to child) | Localized to component or shared via lifting state |
| **Example in App** | Passing `title="Full-Stack React"` to `<Card />` | Managing `[studyStreak, setStudyStreak]` in `<App />` |

### Managing State with `useState`

The `useState` hook allows functional components to retain and update dynamic data between renders:

```jsx
// Declaring state with an initial value
const [studyStreak, setStudyStreak] = useState(7);

// Updating state using a functional update pattern
const incrementStreak = () => {
  setStudyStreak((prevStreak) => prevStreak + 1);
};
```

When `setStudyStreak` is called, React schedules a re-render of the component with the new value, updating the UI predictably.

### Controlled Components Pattern

In standard HTML, form inputs maintain their own internal state. In React, a **controlled component** delegates input state management entirely to React:

```jsx
const [formData, setFormData] = useState({ name: '', email: '', message: '' });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

return (
  <input
    name="name"
    value={formData.name}      // 1. Value driven by state
    onChange={handleChange}    // 2. Changes update state
  />
);
```

This guarantees that the input's displayed value is always synchronized with React's state, enabling instant validation, conditional rendering, and programmatic resets.

### Component Composition

Instead of building massive monolithic components, smaller, focused components are combined to form richer interfaces.
- The `<Card />` component embeds the `<Button />` component.
- The `<Form />` component embeds multiple `<Button />` components for submission and reset.
- The `<App />` component coordinates `<Header />`, `<Card />`, `<Button />`, `<Form />`, and `<Footer />`.

---

## 🚀 Getting Started & Installation

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed.

### Installation Steps

1. **Clone the repository (if not already done):**
   ```bash
   git clone https://github.com/Josna-01/beeskilled-week1.git
   cd beeskilled-week1
   ```

2. **Navigate to the Task 2 project directory:**
   ```bash
   cd react-components-practice
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Launch the local development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Open [http://localhost:5173](http://localhost:5173) in your web browser.

### Available Scripts

- `npm run dev`: Starts the Vite development server with Hot Module Replacement.
- `npm run build`: Compiles production-ready bundle into the `dist/` directory.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs code analysis via `oxlint`.

---

## 📸 Screenshots & UI Showcase

```text
+------------------------------------------------------------------------+
| 🎓 EduPulse Student Portal               Dashboard  Courses  Lab  Desk  |
+------------------------------------------------------------------------+
|  [BeeSkilled Week 1 · Task 2]                                          |
|  Modern Student Dashboard & React Component Architecture               |
|                                                                        |
|  [ 3 Enrolled Tracks ]   [ 7 Days Streak 🔥 ]   [ 14 Sessions Logged ] |
+------------------------------------------------------------------------+
|  REUSABLE CARD COMPONENTS (Rendered 3x with dynamic props)             |
|  +--------------------+  +--------------------+  +-------------------+ |
|  | [Core Track]       |  | [Cloud Native]     |  | [Specialization]  | |
|  | Full-Stack React   |  | Cloud DevOps AWS   |  | AI Systems & RAG  | |
|  | Progress: [===  ]  |  | Progress: [==   ]  |  | Progress: [=   ]  | |
|  | [Resume Module]    |  | [View Syllabus]    |  | [Download Pack]   | |
|  +--------------------+  +--------------------+  +-------------------+ |
+------------------------------------------------------------------------+
|  REUSABLE BUTTON SHOWCASE (Variants & State Handlers)                  |
|  [Primary] [Secondary] [Outline] [Success ✓] [Danger ⚠️]               |
+------------------------------------------------------------------------+
|  CONTROLLED FORM COMPONENT (useState, validation, reset)               |
|  Name: [_______________]        Live Submissions Stream:              |
|  Email: [______________]        - Amisha Dsouza (Course Feedback)     |
|  Msg: [________________]                                               |
|  [✉️ Send Message] [Reset Form]                                        |
+------------------------------------------------------------------------+
| © 2026 EduPulse Student Portal · Designed for BeeSkilled Week 1         |
+------------------------------------------------------------------------+
```

---

## 👩‍💻 Author & Acknowledgements

- **Developer:** Amisha Josna Dsouza ([@Josna-01](https://github.com/Josna-01))
- **Program:** BeeSkilled Full-Stack Training Program – Week 1
