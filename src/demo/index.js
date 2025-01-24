import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Demo as AutoCompleteDemo} from '../components/AutoComplete/Demo';

const DemoSite = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        <button onClick={() => setActiveComponent(<AutoCompleteDemo />)}>
          AutoComplete
        </button>

        <button>Bar</button>

        <button>Baz</button>
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
