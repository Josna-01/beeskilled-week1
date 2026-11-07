import React from 'react';

/**
 * Reusable Button Component
 * 
 * Demonstrates:
 * - Reusable UI component pattern
 * - Props customization (label/children, variant, size, onClick, disabled, type)
 * - Dynamic styling based on variants
 */
function Button({
  label,
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'success' | 'danger'
  size = 'md',        // 'sm' | 'md' | 'lg'
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon = null,
}) {
  const content = label || children;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} btn-${size} ${className}`}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{content}</span>
    </button>
  );
}

export default Button;
