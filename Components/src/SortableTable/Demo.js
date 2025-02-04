import React from 'react';
import {SortableTable} from './SortableTable';

export const Demo = () => (
  <div>
    <SortableTable
      headers={[
        {key: 'name', name: 'Name'},
        {key: 'rank', name: 'Rank'},
        {key: 'species', name: 'Species'},
        {key: 'position', name: 'Position'},
      ]}
      data={[
        {name: 'James T. Kirk', value: 'kirk'},
        {name: 'Spock', value: 'spock'},
        {name: 'Leonard McCoy', value: 'mccoy'},
        {name: 'Nyota Uhura', value: 'uhura'},
        {name: 'Montgomery Scott', value: 'scott'},
        {name: 'Pavel Chekov', value: 'chekov'},
        {name: 'Hikaru Sulu', value: 'sulu'},
      ]}
      initialSortKey={null}
      initialSortAsc={true}
    />
  </div>
);
