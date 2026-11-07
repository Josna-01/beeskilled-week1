import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import BlogCard from './components/BlogCard';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import Footer from './components/Footer';

// Load initial blog post dataset from JSON file (Not hardcoded in JSX)
import postsData from './data/posts.json';
import './App.css';

function App() {
  // State 1: Active Navigation Section
  const [activeNav, setActiveNav] = useState('articles');

  // State 2: Search Query
  const [searchQuery, setSearchQuery] = useState('');

  // State 3: Selected Category Filter
  const [selectedCategory, setSelectedCategory] = useState('All');

  // State 4: Newsletter Controlled Form State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // State 5: Active Article Reader Modal (Interactive Reading Experience)
  const [readingPost, setReadingPost] = useState(null);

  // Extract distinct category list dynamically from data
  const categories = useMemo(() => {
    const unique = Array.from(new Set(postsData.map((p) => p.category)));
    return ['All', ...unique];
  }, []);

  // Compute category count distribution for filter badges
  const categoryCounts = useMemo(() => {
    const counts = { All: postsData.length };
    postsData.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Identify Featured Post (First flagged as featured, or fallback to first post)
  const featuredPost = useMemo(() => {
    return postsData.find((post) => post.featured) || postsData[0];
  }, []);

  // COMBINED SEARCH AND FILTERING LOGIC:
  // Must satisfy BOTH the category filter AND the text search simultaneously!
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return postsData.filter((post) => {
      // 1. Category check
      const matchesCategory =
        selectedCategory.toLowerCase() === 'all' ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      // 2. Search query check (Title, Description, or Author)
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Handler: Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  // Handler: Newsletter subscription submit
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!newsletterEmail.trim()) {
      setNewsletterError('Please enter your email address.');
      return;
    }

    if (!emailRegex.test(newsletterEmail.trim())) {
      setNewsletterError('Please enter a valid email address (e.g., student@university.edu).');
      return;
    }

    // Success State
    setNewsletterError('');
    setNewsletterSuccess(true);
    setNewsletterEmail('');
  };

  return (
    <div className="daily-journal-app">
      {/* 1. Header Component */}
      <Header
        brandName="The Daily Journal"
        tagline="An Independent Chronicle of Ideas, Code & Modern Thought"
        activeSection={activeNav}
        onNavClick={(id) => setActiveNav(id)}
      />

      <main className="journal-main">
        {/* 2. Hero Section */}
        <section className="journal-hero">
          <div className="hero-ornament">
            <span className="ornament-line"></span>
            <span className="ornament-text">EST. 2026 · CURATED DISPATCHES</span>
            <span className="ornament-line"></span>
          </div>

          <h2 className="hero-display-title">
            Essays on Modern Software, <br />
            <em>Architectures</em> &amp; Digital Craft.
          </h2>

          <p className="hero-lead">
            Welcome to <strong>The Daily Journal</strong>, an editorial space dedicated to deep-dive
            engineering explorations, design systems, and thoughtful computing by student developers.
          </p>

          <div className="hero-quick-topics">
            <span className="quick-label">Trending Disciplines:</span>
            {['Technology', 'Programming', 'Design', 'Education'].map((topic) => (
              <button
                key={topic}
                type="button"
                className="quick-topic-pill"
                onClick={() => {
                  setSelectedCategory(topic);
                  const target = document.getElementById('articles');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        </section>

        {/* 3. Featured Article Section */}
        {featuredPost && (
          <section id="featured" className="featured-story-section">
            <div className="section-label-bar">
              <span className="label-flag">Featured Lead Story</span>
              <span className="label-issue">Cover Story · Issue No. 01</span>
            </div>

            <article className="featured-card">
              <div className="featured-image-container">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="featured-image"
                  loading="lazy"
                />
                <span className="featured-category-badge">{featuredPost.category}</span>
              </div>

              <div className="featured-content">
                <div className="featured-meta-header">
                  <span className="meta-byline">By {featuredPost.author}</span>
                  <span className="meta-dot">·</span>
                  <span className="meta-date">{featuredPost.date}</span>
                  <span className="meta-dot">·</span>
                  <span className="meta-time">{featuredPost.readTime}</span>
                </div>

                <h3 className="featured-title">
                  <a
                    href={`#${featuredPost.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setReadingPost(featuredPost);
                    }}
                  >
                    {featuredPost.title}
                  </a>
                </h3>

                <p className="featured-excerpt">{featuredPost.description}</p>

                <div className="featured-footer">
                  <div className="featured-tags">
                    {featuredPost.tags &&
                      featuredPost.tags.map((tag) => (
                        <span key={tag} className="tag-bubble">
                          #{tag}
                        </span>
                      ))}
                  </div>

                  <button
                    type="button"
                    className="featured-cta-button"
                    onClick={() => setReadingPost(featuredPost)}
                  >
                    <span>Read Full Dispatch</span>
                    <span className="cta-arrow">→</span>
                  </button>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* 4. Latest Articles Section (Search + Category Filter + Grid) */}
        <section id="articles" className="articles-archive-section">
          <div className="archive-header-row">
            <div>
              <span className="archive-subhead">Explore The Archive</span>
              <h2 className="archive-title">Latest Published Dispatches</h2>
            </div>
            <div className="archive-stats">
              <span className="stats-pill">
                <strong>{filteredPosts.length}</strong> of <strong>{postsData.length}</strong> Articles
              </span>
            </div>
          </div>

          {/* SearchBar Component */}
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={(query) => setSearchQuery(query)}
            onClearSearch={() => setSearchQuery('')}
            totalMatches={filteredPosts.length}
          />

          {/* CategoryFilter Component */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => setSelectedCategory(category)}
            categoryCounts={categoryCounts}
          />

          {/* Filter Status Feedback */}
          {(searchQuery || selectedCategory !== 'All') && (
            <div className="active-filters-strip">
              <span className="filter-summary">
                Filter active:{' '}
                {selectedCategory !== 'All' && (
                  <span className="active-pill">Category: {selectedCategory}</span>
                )}
                {searchQuery && (
                  <span className="active-pill">Keyword: "{searchQuery}"</span>
                )}
              </span>
              <button
                type="button"
                className="reset-all-btn"
                onClick={handleResetFilters}
              >
                Clear all filters ✕
              </button>
            </div>
          )}

          {/* Grid of Reusable BlogCard Components */}
          {filteredPosts.length > 0 ? (
            <div className="articles-grid">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onReadArticle={(selected) => setReadingPost(selected)}
                />
              ))}
            </div>
          ) : (
            /* Empty State when Search or Filter matches zero posts */
            <div className="empty-results-box" role="status">
              <div className="empty-icon">📰</div>
              <h3 className="empty-title">No matching articles found</h3>
              <p className="empty-description">
                We couldn't find any articles matching "<em>{searchQuery}</em>" in the{' '}
                <strong>{selectedCategory}</strong> category. Try broadening your keywords or resetting filters.
              </p>
              <button
                type="button"
                className="empty-reset-button"
                onClick={handleResetFilters}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {/* 5. Newsletter Section */}
        <section id="newsletter" className="newsletter-dispatch-section">
          <div className="newsletter-card">
            <div className="newsletter-ornament">✦ THE WEEKLY CHRONICLE ✦</div>
            <h3 className="newsletter-title">Subscribe to The Daily Journal</h3>
            <p className="newsletter-lead">
              Receive a curated digest of software architecture essays, design tokens, and engineering
              breakthroughs directly in your inbox every Sunday morning. No spam, ever.
            </p>

            {newsletterSuccess ? (
              <div className="newsletter-success-box" role="alert">
                <span className="success-icon">✨</span>
                <div>
                  <h4>Welcome to the readership!</h4>
                  <p>A confirmation email has been dispatched. Thank you for subscribing.</p>
                </div>
                <button
                  type="button"
                  className="subscribe-another-btn"
                  onClick={() => setNewsletterSuccess(false)}
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form" noValidate>
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError('');
                    }}
                    placeholder="Enter your university or work email..."
                    className={`newsletter-input ${newsletterError ? 'input-error' : ''}`}
                    aria-label="Email address for newsletter"
                  />
                  <button type="submit" className="newsletter-submit-btn">
                    Subscribe Free
                  </button>
                </div>
                {newsletterError && (
                  <span className="newsletter-error-msg">{newsletterError}</span>
                )}
                <span className="newsletter-disclaimer">
                  Join 14,000+ engineers, designers, and students reading weekly.
                </span>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* 6. Footer Component */}
      <Footer
        brandName="The Daily Journal"
        copyright="© 2026 The Daily Journal. Built for BeeSkilled Week 1 Assignment by Amisha Josna Dsouza."
        onTopicClick={(topic) => setSelectedCategory(topic)}
      />

      {/* 7. Interactive Full-Article Reader Modal */}
      {readingPost && (
        <div
          className="article-reader-backdrop"
          onClick={() => setReadingPost(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="article-reader-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="reader-close-button"
              onClick={() => setReadingPost(null)}
              aria-label="Close article"
            >
              ✕
            </button>

            <div className="reader-header">
              <span className="reader-category">{readingPost.category}</span>
              <h2 className="reader-title">{readingPost.title}</h2>
              <div className="reader-byline">
                <span>By <strong>{readingPost.author}</strong></span>
                {readingPost.authorRole && <span>({readingPost.authorRole})</span>}
                <span>·</span>
                <span>{readingPost.date}</span>
                <span>·</span>
                <span>{readingPost.readTime}</span>
              </div>
            </div>

            <div className="reader-cover-wrap">
              <img
                src={readingPost.image}
                alt={readingPost.title}
                className="reader-cover-image"
              />
            </div>

            <div className="reader-body">
              <p className="reader-lead-paragraph">{readingPost.description}</p>
              
              <hr className="reader-divider" />
              
              <p>
                In this article, we deconstruct the practical principles that make modern systems resilient, maintainable, and delightful to interact with. When building at scale, simplicity is not merely an aesthetic choice—it is a functional safeguard against accidental complexity.
              </p>
              
              <blockquote className="reader-pullquote">
                "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra
              </blockquote>

              <p>
                Whether applying controlled components in React, refining search heuristics across localized JSON indices, or enforcing strict typographic balance across responsive viewports, thoughtful craftsmanship endures.
              </p>

              <div className="reader-tags-box">
                <span className="tags-label">Tagged:</span>
                {readingPost.tags &&
                  readingPost.tags.map((t) => (
                    <span key={t} className="reader-tag">
                      #{t}
                    </span>
                  ))}
              </div>
            </div>

            <div className="reader-footer">
              <button
                type="button"
                className="reader-done-btn"
                onClick={() => setReadingPost(null)}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
