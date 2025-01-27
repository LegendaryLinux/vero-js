import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Demo as AutoComplete} from '../src/AutoComplete/Demo';
import {Demo as InfiniteScrollTable} from '../src/InfiniteScrollTable/Demo';
import {Demo as Modal} from '../src/Modal/Demo';

export const Demo = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <>
      <div>
        <button onClick={() => setActiveComponent(<AutoComplete/>)}>
          AutoComplete
        </button>

        <button onClick={() => setActiveComponent(<InfiniteScrollTable/>)}>
          InfiniteScrollTable
        </button>

        <button onClick={() => setActiveComponent(<Modal/>)}>
          Modal
        </button>
      </div>
      <div style={{border: '1px solid #000000', width: '100%', marginTop: '0.5rem'}}>
        {activeComponent}
      </div>
    </>
  );
};

window.addEventListener('load', () => {
  const root = createRoot(document.querySelector('#app'));
  root.render(<Demo />);
});
