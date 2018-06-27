import React from 'react';
import cx from 'classnames';

function Tab({
  active,
  children,
  className,
  ...props
}) {
  let renderedClassnames = cx({ active });

  if (className) {
    renderedClassnames += ` ${className}`;
  }

  renderedClassnames += ' tab';
  renderedClassnames = renderedClassnames.trim();

  return (
    <a
      {...props}
      className={renderedClassnames}
    >
      <span className="charm" />
      { children }
    </a>
  );
}

export default Tab;
