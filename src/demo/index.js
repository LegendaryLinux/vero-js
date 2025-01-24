import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Demo as AutoComplete} from '../components/AutoComplete/Demo';
import {Demo as InfiniteScrollTable} from '../components/InfiniteScrollTable/Demo';
import {Demo as Modal} from '../components/Modal/Demo';

const DemoSite = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        <button onClick={() => setActiveComponent(<AutoComplete />)}>
          AutoComplete
        </button>

        <button onClick={() => setActiveComponent(<InfiniteScrollTable />)}>
          InfiniteScrollTable
        </button>

        <button onClick={() => setActiveComponent(<Modal />)}>
          Modal
        </button>
      </div>
      <div style={{margin: '0.5rem', border: '1px solid #000000'}}>
        {activeComponent}
      </div>
    </div>
  );
};

window.addEventListener('load', () => {
  const root = createRoot(document.querySelector('#app'));
  root.render(<DemoSite/>);
});
