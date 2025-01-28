import React, {useState, useRef, useEffect} from 'react';
import './AutoComplete.scss';

/**
 * Stub function to act as a placeholder if no onUpdate prop is passed to the AutoComplete component
 */
const noOp = () => {};

/**
 * @param options {Array}
 * @param onUpdate {Function}
 * @param defaultValue {String|null}
 * @param allowUserValues {Boolean}
 * @param showListOnFocus {Boolean}
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const AutoComplete = ({options=[], onUpdate=noOp, defaultValue=null, allowUserValues=true,
                               showListOnFocus=true, ...props}) => {
  const wrapperRef = useRef(null);
  const optionBoxRef = useRef(null);
  const inputRef = useRef(null);
  const [displayOptions, setDisplayOptions] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(options);
  const [highlightedKey, setHighlightedKey] = useState(0);
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    if (defaultValue) {
      let matchFound = false;
      for (let option of currentOptions) {
        if (defaultValue === option.value || defaultValue === option.name) {
          inputRef.current.value = option.name;
          setHighlightedKey(currentOptions.indexOf(option.name));
          setInputValue(option.name);
          onUpdate(option.value);
          matchFound = true;
          break;
        }
      }

      if (!matchFound && allowUserValues) {
        inputRef.current.value = defaultValue;
        setInputValue(defaultValue);
        onUpdate(defaultValue);
      }
    }
  }, []);

  useEffect(() => {
    if (displayOptions) {
      document.addEventListener('click', handleGlobalClick);
    } else {
      document.removeEventListener('click', handleGlobalClick);
    }
  }, [displayOptions]);

  const handleInputFocusOrClick = () => {
    if (!inputRef.current.value) {
      setCurrentOptions(options);
    }
    setDisplayOptions(showListOnFocus);
  };

  const handleInputBlur = () => {
    // On blur, ensure the value displayed in the text box matches the currently selected value
    inputRef.current.value = inputValue || '';
  };

  const handleGlobalClick = (e) => {
    // If the user clicks inside the input box, do nothing
    if (e.target === inputRef.current) { return; }

    // If the user clicks an option, let the option's event handler run
    if (e.target.classList.contains('autocomplete-option')) { return; }

    // Close the currentOptions box
    setDisplayOptions(false);
  };

  const handleOptionClick = (e) => {
    onUpdate(e.target.getAttribute('data-value'));
    inputRef.current.value = e.target.innerText;
    setDisplayOptions(false);
    setHighlightedKey(parseInt(e.target.getAttribute('data-key'), 10));
    setInputValue(e.target.innerText);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      // If the user presses escape, blank the input field and hide the list
      inputRef.current.value = '';
      onUpdate(null);
      setDisplayOptions(false);
      setHighlightedKey(0);
      setInputValue('');
      return;
    }

    // If the currentOptions list is not currently shown, there is nothing else to do
    if (!displayOptions) { return; }

    // If the user tabs out of the field, blank or fill the input box as appropriate
    if (e.key === 'Tab') {
      // If custom values are allowed, do nothing
      if (allowUserValues || inputRef.current.value === '') { return; }

      // If the input field contains a string which matches no option values, clear all fields
      if (currentOptions.length === 0) {
        inputRef.current.value = '';
        onUpdate(null);
        setInputValue('');
      } else {
        // If the input value at least partially matches an option, assume the user wants the highlighted option
        inputRef.current.value = currentOptions[highlightedKey].name;
        onUpdate(currentOptions[highlightedKey].value);
        setInputValue(currentOptions[highlightedKey].name);
      }

      setDisplayOptions(false);
      setHighlightedKey(0);
      return;
    }

    // If the user presses enter, they probably want to use the highlighted value in the list
    if (e.key === 'Enter') {
      // If the options list is open, use the currently highlighted option
      if (displayOptions && currentOptions.length > 0) {
        inputRef.current.value = currentOptions[highlightedKey].name;
        onUpdate(currentOptions[highlightedKey].value);
        setInputValue(currentOptions[highlightedKey].name);
      } else if (!allowUserValues) {
        inputRef.current.value = '';
        onUpdate(null);
        setInputValue('');
      }

      setDisplayOptions(false);
      setHighlightedKey(0);
      return;
    }

    // Handle up and down arrow key presses if the option box is visible
    if (displayOptions && optionBoxRef.current) {
      let newKey = highlightedKey;
      if (e.key === 'ArrowUp') {
        // Scroll up the list, or cycle to the bottom
        if (highlightedKey === 0) { newKey = currentOptions.length - 1; }
        else { --newKey; }
      }

      if (e.key === 'ArrowDown') {
        // Scroll down the list, or cycle to the top
        if (highlightedKey === (currentOptions.length - 1)) { newKey = 0; }
        else { ++newKey; }
      }

      if (newKey !== highlightedKey) {
        // Set the highlighted key and scroll the option into view
        setHighlightedKey(newKey);
        optionBoxRef.current.childNodes[newKey].scrollIntoView();
      }
    }
  };

  const handleInput = (e) => {
    const filteredOptions = [];

    // If a value is present in the input field, use it to filter currentOptions
    if (e.target.value) {
      for (let opt of options) {
        // Do not render currentOptions which do not match the filter
        if (opt.name.toLowerCase().search(e.target.value.toLowerCase()) === -1) {
          continue;
        }

        // Include option in currentOptions array
        filteredOptions.push(opt);
      }
    }

    setCurrentOptions(filteredOptions);
    setHighlightedKey(0);
    if (!displayOptions) {
      setDisplayOptions(true);
    }

    if (allowUserValues || e.target.value === '') {
      onUpdate(e.target.value || null);
      setInputValue(e.target.value);
    }
  }

  const handleOptionMouseIn = (e) => {
    setHighlightedKey(parseInt(e.target.getAttribute('data-key'), 10));
  };

  const buildOptionsBox = () => {
    const optionBoxStyle = {
      width: `${wrapperRef.current.offsetWidth - 2}px`,
    };

    const renderOpts = [];
    currentOptions.forEach((opt) => {
      const key = currentOptions.indexOf(opt);
      const isHighlighted = ((highlightedKey === key) ? 'highlighted' : '');
      renderOpts.push(
        <div
          key={key}
          className={`autocomplete-option ${isHighlighted}`}
          data-value={opt.value}
          data-key={key}
          onMouseEnter={handleOptionMouseIn}
          onClick={handleOptionClick}
        >{opt.name}
        </div>
      );
    });

    return renderOpts.length > 0 ?
      <div className="autocomplete-options" style={optionBoxStyle} ref={optionBoxRef}>{renderOpts}</div> :
      null;
  };

  const buildProps = () => {
    // Clone props and remove custom props which should not appear in DOM
    const cleanProps = {...structuredClone(props)};
    delete cleanProps.onUpdate;
    delete cleanProps.options;
    delete cleanProps.allowUserValues;
    delete cleanProps.showListOnFocus;
    delete cleanProps.key;

    // defaultValue is handled in componentDidMount
    delete cleanProps.defaultValue;

    // Overwrite props assigned to input element with our own handlers, then run user-defined handlers afterward
    cleanProps.onClick = (e) => {handleInputFocusOrClick(); props.onclick ? props.onclick(e) : null};
    cleanProps.onFocus = (e) => {handleInputFocusOrClick(); props.onfocus ? props.onfocus(e) : null};
    cleanProps.onBlur = (e) => {handleInputBlur(); props.onblur ? props.onblur(e) : null};
    cleanProps.onKeyDown = (e) => {handleKeyDown(e); props.onkeydown ? props.onkeydown(e) : null};
    cleanProps.onInput = (e) => {handleInput(e); props.oninput ? props.oninput(e) : null};
    cleanProps.className = `autocomplete-input ${props.className || ''}`;
    return cleanProps;
  };

  return (
    <div className="autocomplete-wrapper" ref={wrapperRef}>
      <input ref={inputRef} {...buildProps()} />
      { displayOptions ? buildOptionsBox() : null }
    </div>
  );
}

export default AutoComplete;
