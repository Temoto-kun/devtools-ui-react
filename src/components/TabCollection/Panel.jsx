import React from 'react';

function Panel({ className, children }) {
  return (
    <div
      className={className ? `${className} panel` : 'panel'}
    >
      { children }
    </div>
  );
}

export default Panel;
