import React from 'react';
import Tab from './Tab';
import Panel from './Panel';

import './TabCollection.scss';

function TabCollection({
  className,
  onTabChange,
  children,
  ...props
}) {
  return (
    <div
      {...props}
      className={className ? `${className} tab-collection` : 'tab-collection'}
    >
      <div className="tabs">
        {
          children.map(child => (
            <Tab
              id={child.props.id}
              active={child.props.active}
              onClick={(e) => { onTabChange(e, child); }}
            >
              {child.props.title}
            </Tab>
          ))
        }
      </div>
      <div className="panels">
        {
          children
            .filter(child => child.props.active)
            .map(({ props: childProps }) => {
              let { style } = childProps;
              const { className: childClassName, children: grandChildren } = childProps;
              if (!style) {
                style = {};
              }
              const {
                flexBasis,
                width,
                height,
                ...panelStyles
              } = style;
              return (
                <Panel
                  style={panelStyles}
                  className={childClassName}
                >
                  {grandChildren}
                </Panel>
              );
            })
        }
      </div>
    </div>
  );
}

TabCollection.Panel = Panel;

export default TabCollection;
