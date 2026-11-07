import React from 'react';

/**
 * Reusable BlogCard Component
 * 
 * Demonstrates:
 * - Receiving structured object props
 * - Reusable article card formatting
 * - Image fallback handling & category styling
 * - Interactive modal/reader invocation callback
 */
function BlogCard({ post, onReadArticle }) {
  if (!post) return null;

  const {
    id,
    title,
    description,
    author,
    authorRole,
    date,
    category,
    image,
    readTime,
    tags = [],
  } = post;

  const categorySlug = category ? category.toLowerCase() : 'general';

  return (
    <article className="blog-card" id={`card-${id}`}>
      {/* Cover Media */}
      <div className="card-media-wrap">
        <img
          src={image}
          alt={title}
          className="card-cover-image"
          loading="lazy"
          onError={(e) => {
            // Elegant fallback if network image fails
            e.target.src = 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <span className={`category-tag tag-${categorySlug}`}>
          {category}
        </span>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <div className="card-meta-top">
          <span className="card-date">{date}</span>
          <span className="meta-separator">·</span>
          <span className="card-read-time">{readTime}</span>
        </div>

        <h3 className="card-headline">
          <a
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              if (onReadArticle) onReadArticle(post);
            }}
          >
            {title}
          </a>
        </h3>

        <p className="card-excerpt">{description}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="card-tags-list">
            {tags.map((tag) => (
              <span key={tag} className="post-tag">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Card Footer: Author & Read CTA */}
        <div className="card-footer">
          <div className="author-info">
            <div className="author-avatar-placeholder">
              {author.charAt(0)}
            </div>
            <div className="author-text">
              <span className="author-name">{author}</span>
              {authorRole && <span className="author-role">{authorRole}</span>}
            </div>
          </div>

          <button
            type="button"
            className="read-more-link"
            onClick={() => onReadArticle && onReadArticle(post)}
            aria-label={`Read full article: ${title}`}
          >
            <span>Read Article</span>
            <span className="link-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;

