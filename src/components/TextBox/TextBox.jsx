import React from 'react';

import './TextBox.scss';

function TextBox({ hasClear, ...props }) {
  return (
    <input
      {...props}
      type="text"
    />
  );
}

export default TextBox;
