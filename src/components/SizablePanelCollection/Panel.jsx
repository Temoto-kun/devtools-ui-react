import React from 'react';

function Panel({
  children,
  className,
  size,
  style,
}) {
  let renderedStyle = style;
  if (!renderedStyle) {
    renderedStyle = {};
  }
  const {
    flexBasis,
    width,
    height,
    ...styles
  } = renderedStyle;

  return (
    <div
      className={className ? `${className} panel` : 'panel'}
      style={{ ...styles, flexBasis: size }}
    >
      { children }
    </div>
  );
}

export default Panel;
