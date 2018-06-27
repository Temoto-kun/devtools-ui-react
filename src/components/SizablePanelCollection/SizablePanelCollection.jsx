import React from 'react';
import cx from 'classnames';

import Panel from './Panel';
import './SizablePanelCollection.scss';

function SizablePanelCollection({
  children,
  onPanelResize,
  className,
  orientation,
  ...props
}) {
  let renderedClassnames = cx({ vertical: orientation === 'vertical', horizontal: orientation !== 'vertical' });

  if (className) {
    renderedClassnames += ` ${className}`;
  }

  renderedClassnames += ' sizable-panel-collection';
  renderedClassnames = renderedClassnames.trim();

  return (
    <div
      {...props}
      className={renderedClassnames}
    >
      {
        children
          .reverse()
          .map((child, i) => {
            let { style } = child.props;
            const { size } = child.props;
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
              <div className="wrapper" style={{ flexBasis: size }}>
                <Panel
                  style={panelStyles}
                  className={child.props.className}
                >
                  { child.props.children }
                </Panel>
                {
                  i > 0
                  && (
                    <div
                      className="resizer"
                      onDrag={(e) => {
                        const { onResize } = child.props;

                        if (onResize) {
                          onResize.call(child, e);
                        }
                        onPanelResize(e, child);
                      }}
                    />
                  )
                }
              </div>
            );
          })
      }
    </div>
  );
}

SizablePanelCollection.Panel = Panel;

export default SizablePanelCollection;
