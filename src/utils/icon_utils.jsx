import React from 'react';

/**
 * Returns font awesome icon according to weather description
 *
 * @param {string} description
 * @returns {icon}
 */
export const getIcon = (description) => {
  if (description.includes('partly'))
    return <i className="fas fa-clouds-sun" />;
  if (description.includes('heavy'))
    return <i className="fas fa-cloud-showers-heavy" />;
  if (description.includes('cloud')) return <i className="fas fa-cloud" />;
  if (description.includes('sun')) return <i className="fas fa-sun" />;
  if (description.includes('snow')) return <i className="fas fa-snowflake" />;
  if (description.includes('rain')) return <i className="fas fa-cloud-rain" />;
  return <i className="fas fa-sun" />;
};
