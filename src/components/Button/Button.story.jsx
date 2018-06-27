import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

storiesOf('Button', module)
  .add('default', () => (
    <React.Fragment>
      <div>
        <Button onClick={action('clicked')}>
          Start Recording Performance
        </Button>
      </div>
      <div>
        <Button className="primary-button" onClick={action('clicked')}>
          Perform an audit&hellip;
        </Button>
      </div>
    </React.Fragment>
  ));
