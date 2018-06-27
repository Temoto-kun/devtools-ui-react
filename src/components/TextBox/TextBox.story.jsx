import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextBox from './TextBox';

storiesOf('TextBox', module)
  .add('default', () => (
    <React.Fragment>
      <div>
        <TextBox
          onChange={action('changed')}
        />
      </div>
    </React.Fragment>
  ));
