import React from 'react';

/**
 * SearchBar Component
 * 
 * Demonstrates:
 * - Controlled input using props (`searchQuery`, `onSearchChange`)
 * - Dynamic feedback as user types
 * - Keyboard accessibility & quick clear action
 */
function SearchBar({
  searchQuery = '',
  onSearchChange,
  onClearSearch,
  placeholder = 'Search articles by title, topic, or keyword...',
  totalMatches = null,
}) {
  return (
    <div className="search-bar-wrapper">
      <div className="search-input-container">
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="search-input"
          aria-label="Search articles"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={onClearSearch}
            className="search-clear-btn"
            aria-label="Clear search query"
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {searchQuery && typeof totalMatches === 'number' && (
        <div className="search-status-bar">
          <span>
            Showing <strong>{totalMatches}</strong> {totalMatches === 1 ? 'article' : 'articles'} matching "<em>{searchQuery}</em>"
          </span>
          <button type="button" onClick={onClearSearch} className="clear-filter-text-btn">
            Reset search
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
