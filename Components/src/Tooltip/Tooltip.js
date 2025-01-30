import React from 'react';
import './Tooltip.scss';

export const Tooltip = ({text, children, ...props}) => {
  return (
    <div className="vero-tooltip" data-vero-tooltip={text} {...props}>
      {children}
    </div>
  );
};
