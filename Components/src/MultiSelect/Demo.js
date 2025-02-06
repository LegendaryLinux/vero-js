import React, {useState} from 'react';
import MultiSelect from './MultiSelect';

export const Demo = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  return (
    <div id="app" style={{margin: '1rem'}}>
      Current value: {JSON.stringify(value1)}
      <br/>
      <br/>
      <MultiSelect
        options={[
          {name: 'James T. Kirk', value: 'kirk'},
          {name: 'Spock', value: 'spock'},
          {name: 'Leonard McCoy', value: 'mccoy'},
          {name: 'Nyota Uhura', value: 'uhura'},
          {name: 'Montgomery Scott', value: 'scott'},
          {name: 'Pavel Chekov', value: 'chekov'},
          {name: 'Hikaru Sulu', value: 'sulu'},
        ]}
        onUpdate={(val) => setValue1(val)}
        placeholder="Star Trek TOS Crew"
        defaultValue={["mccoy"]}
        width="16rem"
      />
      <br/>
      <br/>
      Current Value: {JSON.stringify(value2)}
      <br/>
      <MultiSelect
        options={[
          {name: 'James T. Kirk', value: 'kirk'},
          {name: 'Spock', value: 'spock'},
          {name: 'Leonard McCoy', value: 'mccoy'},
          {name: 'Nyota Uhura', value: 'uhura'},
          {name: 'Montgomery Scott', value: 'scott'},
          {name: 'Pavel Chekov', value: 'chekov'},
          {name: 'Hikaru Sulu', value: 'sulu'},
        ]}
        onUpdate={(val) => setValue2(val)}
        placeholder="Star Trek TOS Crew"
        defaultValue={["spock"]}
        disabled
      />
    </div>
  );
}
