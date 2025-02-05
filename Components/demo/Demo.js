import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Demo as AutoComplete} from '../src/AutoComplete/Demo';
import {Demo as InfiniteScrollTable} from '../src/InfiniteScrollTable/Demo';
import {Demo as Modal} from '../src/Modal/Demo';
import {IntegerInput} from '../src/Inputs/IntegerInput';
import {Demo as MultiSelect} from '../src/MultiSelect/Demo';
import {NumericInput} from '../src/Inputs/NumericInput';
import {Demo as Tooltip} from '../src/Tooltip/Demo';
import {Demo as SortableTable} from '../src/SortableTable/Demo';

export const Demo = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <>
      <div>
        <button onClick={() => setActiveComponent(<AutoComplete />)}>
          AutoComplete
        </button>

        <button onClick={() => setActiveComponent(<InfiniteScrollTable />)}>
          InfiniteScrollTable
        </button>

        <button onClick={() => setActiveComponent(<Modal />)}>
          Modal
        </button>

        <button onClick={() => setActiveComponent(<NumericInput />)}>
          NumericInput
        </button>

        <button onClick={() => setActiveComponent(<MultiSelect />)}>
          MultiSelect
        </button>

        <button onClick={() => setActiveComponent(<IntegerInput />)}>
          IntegerInput
        </button>

        <button onClick={() => setActiveComponent(<Tooltip />)}>
          Tooltip
        </button>

        <button onClick={() => setActiveComponent(<SortableTable />)}>
          SortableTable
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
