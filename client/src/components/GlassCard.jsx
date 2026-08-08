import React from 'react';

export const GlassCard = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`glass-panel rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${
      hoverEffect ? 'glass-panel-hover' : ''
    } ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
