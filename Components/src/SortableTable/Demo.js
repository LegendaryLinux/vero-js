import React from 'react';
import {SortableTable} from './SortableTable';

export const Demo = () => (
  <div>
    <span style={{fontWeight: 'bold'}}>Note: Fields are sorted by key reference, not override value.</span>
    <br />
    <SortableTable
      headers={[
        {key: 'name', name: 'Name', sortable: true},
        {key: 'rank', name: 'Rank', center: true},
        {key: 'species', name: 'Species', sortable: true},
        {key: 'position', name: 'Position', sortable: true, center: true},
      ]}
      data={[
        {name: 'kirk', rank: 'Captain', species: 'Human', position: 'Captain', overrides: {name: <span>James T. Kirk</span>}},
        {name: 'spock', rank: 'Commander', species: 'Vulcan/Human', position: 'Science Officer', overrides: {name: 'Spock'}},
        {name: 'mccoy', rank: 'Commander', species: 'Human', position: 'Chief Medical Officer', overrides: {name: 'Leonard McCoy'}},
        {name: 'scott', rank: 'Lieutenant Commander', species: 'Human', position: 'Chief Engineer', overrides: {name: 'Montgomery Scott'}},
        {name: 'sulu', rank: 'Lieutenant', species: 'Human', position: 'Helmsman', overrides: {name: 'Hikaru Sulu'}},
        {name: 'chekov', rank: 'Ensign', species: 'Human', position: 'Navigator', overrides: {name: 'Pavel Chekov'}},
        {name: 'uhura', rank: 'Lieutenant', species: 'Human', position: 'Communications Officer', overrides: {name: 'Nyota Uhura'}},
        {name: 'chapel', rank: 'Lieutenant', species: 'Human', position: 'Head Nurse', overrides: {name: 'Christine Chapel'}},
      ]}
      initialSortKey={null}
      initialSortAsc={true}
    />
  </div>
);
