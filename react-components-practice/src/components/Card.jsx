import React from 'react';
import Button from './Button';

/**
 * Reusable Card Component
 * 
 * Demonstrates:
 * - Component reusability across varied content
 * - Receiving diverse props (title, description, image, badge, metadata, buttonText, onAction)
 * - Component composition (uses reusable Button component)
 */
function Card({
  title,
  description,
  image,
  imageAlt,
  badge,
  badgeVariant = 'primary', // 'primary' | 'success' | 'warning' | 'info'
  instructor,
  duration,
  progress = null,
  buttonText = 'Learn More',
  buttonVariant = 'primary',
  onButtonClick,
}) {
  return (
    <div className="card-item">
      {/* Card Visual / Image Banner */}
      <div className="card-media">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            className="card-image"
            loading="lazy"
          />
        ) : (
          <div className="card-image-fallback">
            <span>📚</span>
          </div>
        )}
        {badge && (
          <span className={`card-badge badge-${badgeVariant}`}>
            {badge}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        {/* Optional Metadata */}
        {(instructor || duration) && (
          <div className="card-meta">
            {instructor && (
              <span className="meta-item">
                <span className="meta-icon">👤</span> {instructor}
              </span>
            )}
            {duration && (
              <span className="meta-item">
                <span className="meta-icon">⏱️</span> {duration}
              </span>
            )}
          </div>
        )}

        {/* Progress Bar (if course in-progress) */}
        {typeof progress === 'number' && (
          <div className="card-progress-wrapper">
            <div className="progress-labels">
              <span>Course Progress</span>
              <span className="progress-percent">{progress}%</span>
            </div>
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Card Action */}
        <div className="card-footer-action">
          <Button
            label={buttonText}
            variant={buttonVariant}
            size="sm"
            className="card-action-btn"
            onClick={onButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

