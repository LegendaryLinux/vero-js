import React, {useState} from 'react';
import AutoComplete from './AutoComplete';

export const Demo = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  return (
    <div id="app" style={{margin: '1rem'}}>
      AutoComplete with allowUserValues=false<br/>
      showListOnFocus=true<br/>
      Current value: {value1}
      <br/>
      <br/>
      <AutoComplete
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
        allowUserValues={false}
        showListOnFocus={true}
        placeholder="Star Trek TOS Crew"
        defaultValue="mccoy"
        width="14rem"
      />
      <br/>
      <br/>
      <input placeholder="I'm a normal input for testing."/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      AutoComplete with allowUserValues=true<br/>
      showListOnFocus=false<br/>
      Current value: {value2}
      <br/>
      <br/>
      <AutoComplete
        options={[
          {name: 'Jean Luc Picard', value: 'picard'},
          {name: 'William T. Riker', value: 'riker'},
          {name: 'Data', value: 'data'},
          {name: 'Deanna Troi', value: 'troi'},
          {name: 'Beverley Crusher', value: 'crusher'},
          {name: 'Jeordi LaForge', value: 'laforge'},
          {name: 'Worf, Son of Mogh', value: 'worf'},
        ]}
        onUpdate={(val) => setValue2(val)}
        allowUserValues={true}
        showListOnFocus={false}
        placeholder="Star Trek TNG Crew"
      />
      <br/>
      <br/>
      <input placeholder="I'm a normal input for testing."/>
    </div>
  );
}
