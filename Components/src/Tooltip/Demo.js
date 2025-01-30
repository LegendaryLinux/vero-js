import React from 'react';
import {Tooltip} from './Tooltip';

export const Demo = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '3rem'}}>
      <Tooltip text="I am a tooltip's text!">
        <span>Hover on me!</span>
      </Tooltip>
    </div>
  );
};
