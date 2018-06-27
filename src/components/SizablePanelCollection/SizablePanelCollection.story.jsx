import React from 'react';
import autoBind from 'react-autobind';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SizablePanelCollection from './SizablePanelCollection';

class Story extends React.Component {
  constructor({ panels }) {
    super();
    this.state = {
      panels,
    };
    autoBind(this);
  }

  resizePanel(e, panel) {
    e.preventDefault();

    console.log(panel);

    //this.setState(({ panels }) => ({
    //  panels: panels.map(({ id, title }) => ({
    //    id,
    //    title,
    //    size: id === panel.props.id,
    //  })),
    //}));
  }

  render() {
    const { panels } = this.state;
    const { className, style, orientation } = this.props;

    return (
      <SizablePanelCollection
        className={className}
        style={style}
        orientation={orientation}
        onPanelResize={this.resizePanel}
      >
        {
          panels.map(({ id, title, size }) => (
            <SizablePanelCollection.Panel
              key={id}
              title={title}
              id={id}
              size={size}
            >
              { title }
            </SizablePanelCollection.Panel>
          ))
        }
      </SizablePanelCollection>
    );
  }
}

storiesOf('SizablePanelCollection', module)
  .add('default', () => (
    <React.Fragment>
      <div>
        <Story
          style={{
            height: 200,
          }}
          panels={[
            {
              id: 1,
              title: 'One',
              size: 100,
            },
            {
              id: 2,
              title: 'Two',
              size: 150,
            },
            {
              id: 3,
              title: 'Three',
            },
          ]}
        />
      </div>
    </React.Fragment>
  ));
