import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import Form from './components/Form';
import './App.css';

function App() {
  // State 1: Active navigation tab
  const [activeTab, setActiveTab] = useState('home');

  // State 2: Notification message from button / card actions
  const [actionAlert, setActionAlert] = useState({
    visible: false,
    type: 'info',
    message: '',
  });

  // State 3: Interactive metrics / state demonstrating props vs state
  const [studyStreak, setStudyStreak] = useState(7); // days
  const [completedSessions, setCompletedSessions] = useState(14);
  const [selectedFilter, setSelectedFilter] = useState('all');

  // State 4: Recent feedback list received from Form component
  const [feedbackHistory, setFeedbackHistory] = useState([
    {
      id: 1,
      name: 'Amisha Dsouza',
      category: 'Course Feedback',
      message: 'Great component architecture breakdown in module 2!',
      timestamp: '10:30 AM',
    },
  ]);

  // Trigger temporary notification toast
  const triggerNotification = (message, type = 'info') => {
    setActionAlert({ visible: true, type, message });
    setTimeout(() => {
      setActionAlert((prev) => ({ ...prev, visible: false }));
    }, 4500);
  };

  // Card click handlers demonstrating passing functions via props
  const handleContinueCourse = (courseName) => {
    setCompletedSessions((prev) => prev + 1);
    triggerNotification(`Continuing "${courseName}". Session logged! (+1 session)`, 'success');
  };

  const handleViewSyllabus = (courseName) => {
    triggerNotification(`Loaded syllabus and learning objectives for "${courseName}".`, 'info');
  };

  const handleDownloadResources = (courseName) => {
    triggerNotification(`Downloading curated resource package for "${courseName}".`, 'warning');
  };

  // Handler passed to Form component
  const handleFormSubmission = (formData) => {
    const newEntry = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      message: formData.message,
      timestamp: formData.timestamp || 'Just now',
    };
    setFeedbackHistory((prev) => [newEntry, ...prev]);
    triggerNotification(`New inquiry logged from ${formData.name}!`, 'success');
  };

  // Navigation items for Header prop
  const navItems = [
    { id: 'home', label: 'Dashboard' },
    { id: 'courses', label: 'Courses' },
    { id: 'practice', label: 'Button Lab' },
    { id: 'feedback', label: 'Feedback Desk' },
  ];

  // Course cards data demonstrating reusable Card component with unique props
  const courseCards = [
    {
      id: 'react-adv',
      title: 'Full-Stack React & Vite Architecture',
      description: 'Master modular component design, custom hooks, controlled state management, and production-ready bundler tooling.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'React code visual',
      badge: 'Core Track',
      badgeVariant: 'primary',
      instructor: 'Prof. Alex Mercer',
      duration: '6 Weeks · Intermediate',
      progress: 78,
      buttonText: 'Resume Module',
      buttonVariant: 'primary',
      onButtonClick: () => handleContinueCourse('Full-Stack React & Vite Architecture'),
      category: 'active',
    },
    {
      id: 'cloud-aws',
      title: 'Cloud DevOps & Serverless Microservices',
      description: 'Design resilient distributed backends with AWS Lambda, API Gateway, Docker containers, and CI/CD automated test pipelines.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Cloud infrastructure concept',
      badge: 'Cloud Native',
      badgeVariant: 'success',
      instructor: 'Dr. Priya Sharma',
      duration: '8 Weeks · Advanced',
      progress: 45,
      buttonText: 'View Syllabus',
      buttonVariant: 'secondary',
      onButtonClick: () => handleViewSyllabus('Cloud DevOps & Serverless Microservices'),
      category: 'active',
    },
    {
      id: 'ai-agents',
      title: 'AI Systems & Retrieval-Augmented Generation',
      description: 'Build grounded LLM applications, vector search indexes with Azure AI, and intelligent autonomous workflows with evaluation metrics.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Artificial Intelligence neural graphics',
      badge: 'Specialization',
      badgeVariant: 'warning',
      instructor: 'Marcus Vance',
      duration: '4 Weeks · Hands-on',
      progress: 20,
      buttonText: 'Download Pack',
      buttonVariant: 'outline',
      onButtonClick: () => handleDownloadResources('AI Systems & Retrieval-Augmented Generation'),
      category: 'upcoming',
    },
  ];

  const filteredCards = courseCards.filter((card) => {
    if (selectedFilter === 'all') return true;
    return card.category === selectedFilter;
  });

  return (
    <div className="app-layout">
      {/* 1. Header Component (Props: title, subtitle, navItems, activeTab, onNavClick) */}
      <Header
        title="EduPulse"
        subtitle="Week 1 Components Portal"
        navItems={navItems}
        activeTab={activeTab}
        onNavClick={(id) => setActiveTab(id)}
      />

      {/* Floating Action / Toast Notification */}
      {actionAlert.visible && (
        <div className={`action-toast toast-${actionAlert.type}`} role="status">
          <span className="toast-icon">
            {actionAlert.type === 'success' ? '✨' : actionAlert.type === 'warning' ? '⚡' : 'ℹ️'}
          </span>
          <span className="toast-text">{actionAlert.message}</span>
          <button
            className="toast-close"
            onClick={() => setActionAlert((prev) => ({ ...prev, visible: false }))}
          >
            ✕
          </button>
        </div>
      )}

      <main className="main-content">
        {/* 2. Welcome Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-tagline">
              <span className="pill-badge">BeeSkilled Week 1 · Task 2</span>
              <span className="student-badge">Amisha Dsouza (Josna-01)</span>
            </div>
            <h1 className="hero-headline">
              Modern Student Dashboard &amp; <br />
              <span className="gradient-text">React Component Architecture</span>
            </h1>
            <p className="hero-subtext">
              Demonstrating modular React composition, unidirectional prop data flow,
              declarative event callbacks, and controlled state management via the <code>useState</code> hook.
            </p>

            {/* Quick Metrics Bar */}
            <div className="metrics-strip">
              <div className="metric-box">
                <span className="metric-number">3</span>
                <span className="metric-label">Enrolled Tracks</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">{studyStreak} Days</span>
                <span className="metric-label">Active Streak 🔥</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">{completedSessions}</span>
                <span className="metric-label">Completed Sessions</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">94%</span>
                <span className="metric-label">Overall Completion</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Reusable Card Component Showcase */}
        <section id="courses" className="section-block">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">Component 3: Reusable Card</span>
              <h2 className="section-heading">Active Learning Courses</h2>
              <p className="section-description">
                The identical <code>&lt;Card /&gt;</code> component rendered 3 times with unique
                props: images, badges, progress percentages, metadata, and callback actions.
              </p>
            </div>

            {/* Filter buttons demonstrating component control */}
            <div className="filter-pill-bar">
              <Button
                size="sm"
                variant={selectedFilter === 'all' ? 'primary' : 'outline'}
                label="All Courses"
                onClick={() => setSelectedFilter('all')}
              />
              <Button
                size="sm"
                variant={selectedFilter === 'active' ? 'primary' : 'outline'}
                label="In Progress"
                onClick={() => setSelectedFilter('active')}
              />
              <Button
                size="sm"
                variant={selectedFilter === 'upcoming' ? 'primary' : 'outline'}
                label="Upcoming"
                onClick={() => setSelectedFilter('upcoming')}
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="cards-grid">
            {filteredCards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
                imageAlt={card.imageAlt}
                badge={card.badge}
                badgeVariant={card.badgeVariant}
                instructor={card.instructor}
                duration={card.duration}
                progress={card.progress}
                buttonText={card.buttonText}
                buttonVariant={card.buttonVariant}
                onButtonClick={card.onButtonClick}
              />
            ))}
          </div>
        </section>

        {/* 4. Reusable Button Component Showcase */}
        <section id="practice" className="section-block bg-subtle">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">Component 4: Reusable Button</span>
              <h2 className="section-heading">Button Variants &amp; Event Interactions</h2>
              <p className="section-description">
                Interactive demonstration of the <code>&lt;Button /&gt;</code> component with
                variants (<code>primary</code>, <code>secondary</code>, <code>outline</code>, <code>success</code>, <code>danger</code>),
                multiple sizes, icons, and real click event triggers.
              </p>
            </div>
          </div>

          <div className="button-showcase-container">
            {/* Variant Rows */}
            <div className="showcase-card">
              <h3 className="showcase-subheading">Styling Variants</h3>
              <div className="buttons-wrap">
                <Button
                  variant="primary"
                  label="Primary Button"
                  onClick={() => triggerNotification('Primary button clicked: standard call-to-action.', 'info')}
                />
                <Button
                  variant="secondary"
                  label="Secondary Button"
                  onClick={() => triggerNotification('Secondary button clicked: supporting action.', 'info')}
                />
                <Button
                  variant="outline"
                  label="Outline Button"
                  onClick={() => triggerNotification('Outline button clicked: low-emphasis action.', 'info')}
                />
                <Button
                  variant="success"
                  icon="✓"
                  label="Success Variant"
                  onClick={() => triggerNotification('Success button clicked: operation confirmed!', 'success')}
                />
                <Button
                  variant="danger"
                  icon="⚠️"
                  label="Danger Variant"
                  onClick={() => triggerNotification('Danger button clicked: warning alert.', 'warning')}
                />
              </div>
            </div>

            {/* Interactive State Demo */}
            <div className="showcase-card">
              <h3 className="showcase-subheading">Interactive State Management (Props vs State)</h3>
              <p className="showcase-explainer">
                Clicking these buttons updates the local React <code>useState</code> values and demonstrates how
                event callbacks flow upward through props.
              </p>
              <div className="interactive-controls">
                <div className="control-row">
                  <span className="control-label">Study Streak: <strong>{studyStreak} Days</strong></span>
                  <div className="btn-pair">
                    <Button
                      size="sm"
                      variant="success"
                      label="+1 Day Streak"
                      onClick={() => {
                        setStudyStreak((s) => s + 1);
                        triggerNotification('Study streak increased! Keep up the momentum! 🔥', 'success');
                      }}
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      label="Reset Streak"
                      onClick={() => {
                        setStudyStreak(0);
                        triggerNotification('Study streak reset.', 'warning');
                      }}
                    />
                  </div>
                </div>

                <div className="control-row">
                  <span className="control-label">Completed Sessions: <strong>{completedSessions} Sessions</strong></span>
                  <div className="btn-pair">
                    <Button
                      size="sm"
                      variant="primary"
                      label="Log Session (+1)"
                      onClick={() => {
                        setCompletedSessions((c) => c + 1);
                        triggerNotification('New study session recorded.', 'info');
                      }}
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={completedSessions <= 0}
                      label="Decrement (-1)"
                      onClick={() => setCompletedSessions((c) => Math.max(0, c - 1))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Reusable Controlled Form Component */}
        <section id="feedback" className="section-block">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">Component 5: Controlled Form</span>
              <h2 className="section-heading">Student Feedback &amp; Help Desk</h2>
              <p className="section-description">
                Fully controlled form implementing <code>useState</code> for input tracking, field-level validation,
                error messages, clear-on-submit, and submission notification.
              </p>
            </div>
          </div>

          <div className="form-layout-grid">
            {/* Form Component */}
            <div className="form-column">
              <Form
                formTitle="Submit Inquiry or Feedback"
                formSubtitle="Ask a technical question, request assignment reviews, or suggest new course modules."
                onSubmitSuccess={handleFormSubmission}
              />
            </div>

            {/* Real-time Submissions Stream */}
            <div className="submissions-column">
              <div className="submissions-panel">
                <div className="panel-header">
                  <h3 className="panel-title">Recent Inquiries Stream</h3>
                  <span className="panel-count">{feedbackHistory.length} Received</span>
                </div>
                <p className="panel-note">
                  Submissions processed through the Form component update this live dashboard list via parent callback props.
                </p>

                <div className="inquiry-list">
                  {feedbackHistory.map((item) => (
                    <div key={item.id} className="inquiry-card">
                      <div className="inquiry-top">
                        <span className="inquiry-name">{item.name}</span>
                        <span className="inquiry-badge">{item.category}</span>
                      </div>
                      <p className="inquiry-msg">"{item.message}"</p>
                      <span className="inquiry-time">Logged at {item.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer Component (Props: copyright, tagline, links, socialLinks) */}
      <Footer
        copyright="© 2026 EduPulse Student Portal · Designed for BeeSkilled Week 1 Assignment"
        tagline="A demonstration of production-quality component architecture, controlled forms, and state management in React."
      />
    </div>
  );
}

export default App;
