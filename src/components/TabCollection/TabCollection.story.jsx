import React from 'react';
import autoBind from 'react-autobind';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TabCollection from './TabCollection';

class Story extends React.Component {
  constructor({ panels }) {
    super();
    this.state = {
      panels,
    };
    autoBind(this);
  }

  changeTab(e, panel) {
    e.preventDefault();

    this.setState(({ panels }) => ({
      panels: panels.map(({ id, title }) => ({
        id,
        title,
        active: id === panel.props.id,
      })),
    }));
  }

  render() {
    const { panels } = this.state;
    const { className, style } = this.props;

    return (
      <TabCollection
        className={className}
        style={style}
        onTabChange={this.changeTab}
      >
        {
          panels.map(({ id, title, active }) => (
            <TabCollection.Panel
              key={id}
              title={title}
              id={id}
              active={active}
            >
              { title }
            </TabCollection.Panel>
          ))
        }
      </TabCollection>
    );
  }
}

storiesOf('TabCollection', module)
  .add('with sizing', () => (
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
              active: false,
            },
            {
              id: 2,
              title: 'Two',
              active: true,
            },
            {
              id: 3,
              title: 'Three',
              active: false,
            },
          ]}
          className="large justified"
        />
        <Story
          style={{
            height: 200,
          }}
          panels={[
            {
              id: 1,
              title: 'Inspector',
              active: true,
            },
            {
              id: 2,
              title: 'Console',
              active: false,
            },
            {
              id: 3,
              title: 'Debugger',
              active: false,
            },
          ]}
          className="justified"
        />
      </div>
    </React.Fragment>
  ))
  .add('with styling', () => (
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
              active: false,
            },
            {
              id: 2,
              title: 'Two',
              active: true,
            },
            {
              id: 3,
              title: 'Three',
              active: false,
            },
          ]}
          className="justified"
        />
        <Story
          style={{
            height: 200,
          }}
          panels={[
            {
              id: 1,
              title: 'Inspector',
              active: true,
            },
            {
              id: 2,
              title: 'Console',
              active: false,
            },
            {
              id: 3,
              title: 'Debugger',
              active: false,
            },
          ]}
          className="accent"
        />
      </div>
    </React.Fragment>
  ));
