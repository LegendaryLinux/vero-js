import React from 'react';
import {createRoot} from 'react-dom/client';
import {getStateOptions} from '../src/States';
import {getMiniStateOptions} from '../src/States';

const Demo = () => {
  return (
    <div>
      Full: <select>{getStateOptions()}</select>
      <br /><br />
      Mini: <select>{getMiniStateOptions()}</select>
    </div>
  );
};

window.addEventListener('load', () => {
  const root = createRoot(document.querySelector('#app'));
  root.render(<Demo />);
});
