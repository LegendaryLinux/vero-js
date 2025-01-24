import React from 'react';
import {Modal} from './Modal';

export const Demo = () => {
  return (
    <div>
      <Modal trigger={<button>Open Modal</button>} closeClass="close">
        I am some modal content, hooray!
        <button className="close">Close</button>
      </Modal>
    </div>
  );
};
