import React from 'react';

/**
 * CategoryFilter Component
 * 
 * Demonstrates:
 * - List rendering with `map()`
 * - Controlled active filter state
 * - Clean pill UI with count badges
 */
function CategoryFilter({
  categories = ['All', 'Technology', 'Programming', 'Design', 'Lifestyle', 'Education'],
  selectedCategory = 'All',
  onSelectCategory,
  categoryCounts = {},
}) {
  return (
    <div className="category-filter-wrapper" role="region" aria-label="Filter articles by category">
      <div className="filter-scroll-container">
        {categories.map((category) => {
          const isSelected = selectedCategory.toLowerCase() === category.toLowerCase();
          const count = categoryCounts[category] || 0;

          return (
            <button
              key={category}
              type="button"
              className={`category-pill ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectCategory(category)}
              aria-pressed={isSelected}
            >
              <span className="pill-name">{category}</span>
              <span className="pill-count">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryFilter;

