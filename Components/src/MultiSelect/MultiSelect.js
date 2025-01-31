import React, {useState, useRef, useEffect} from 'react';
import './MultiSelect.scss';

/**
 * Stub function to act as a placeholder if no onUpdate prop is passed to the AutoComplete component
 */
const noOp = () => {};

/**
 * @param options {Array.<{name: String, value: String}>}
 * @param onUpdate {Function}
 * @param defaultValue {Array<String>} Array of values to be initially highlighted
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const MultiSelect = ({options=[], onUpdate=noOp, defaultValue=[], ...props}) => {
  const wrapperRef = useRef(null);
  const optionBoxRef = useRef(null);
  const inputRef = useRef(null);
  const [displayOptions, setDisplayOptions] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState(defaultValue);

  useEffect(() => {
    onUpdate(selectedOptions);
  }, [selectedOptions]);

  useEffect(() => {
    if (displayOptions) {
      document.addEventListener('click', handleGlobalClick);
    } else {
      document.removeEventListener('click', handleGlobalClick);
    }
  }, [displayOptions]);

  const handleInputFocusOrClick = () => {
    setCurrentOptions(options);
    setDisplayOptions(true);
    inputRef.current.value = '';
  };

  const handleInputBlur = () => {
    // On blur, blank the input field
    inputRef.current.value = '';
  };

  const handleGlobalClick = (e) => {
    // If the user clicks inside the input box, do nothing
    if (e.target === inputRef.current) { return; }

    // If the user clicks an option, let the option's event handler run
    if (e.target.classList.contains('multi-select-option')) { return; }

    // Close the currentOptions box
    setDisplayOptions(false);
  };

  const handleOptionClick = (e) => {
    const opts = new Set(selectedOptions);
    const opt = e.target.getAttribute('data-value');
    opts.has(opt) ?
      opts.delete(opt) :
      opts.add(opt);
    setSelectedOptions(Array.from(opts));
  };

  const handleCheckboxClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.parentElement.click();
  };

  const handleInput = (e) => {
    // If a value is present in the input field, use it to filter currentOptions
    if (e.target.value) {
      const filteredOptions = [];
      for (let opt of options) {
        // Do not render currentOptions which do not match the filter
        if (opt.name.toLowerCase().search(e.target.value.toLowerCase()) === -1) {
          continue;
        }

        // Include option in currentOptions array
        filteredOptions.push(opt);
      }
      setCurrentOptions(filteredOptions);
    } else {
      setCurrentOptions(options);
    }

    if (!displayOptions) {
      setDisplayOptions(true);
    }
  }

  const buildProps = () => {
    // Clone props and remove custom props which should not appear in DOM
    const cleanProps = {...structuredClone(props)};
    delete cleanProps.options;
    delete cleanProps.key;

    // defaultValue is handled in componentDidMount
    delete cleanProps.defaultValue;

    // Overwrite props assigned to input element with our own handlers, then run user-defined handlers afterward
    cleanProps.onClick = (e) => {handleInputFocusOrClick(); props.onclick ? props.onclick(e) : null};
    cleanProps.onFocus = (e) => {handleInputFocusOrClick(); props.onfocus ? props.onfocus(e) : null};
    cleanProps.onBlur = (e) => {handleInputBlur(); props.onblur ? props.onblur(e) : null};
    cleanProps.onInput = (e) => {handleInput(e); props.oninput ? props.oninput(e) : null};
    cleanProps.className = `multi-select-input ${props.className || ''}`;
    return cleanProps;
  };

  return (
    <div className="multi-select-wrapper" ref={wrapperRef}>
      <input ref={inputRef} {...buildProps()} />
      {
        displayOptions ?
          (
            <div className="multi-select-options" ref={optionBoxRef}>
              {
                currentOptions.map((opt) => (
                  <div
                    key={opt.value}
                    className={`multi-select-option`}
                    data-value={opt.value}
                    onClick={handleOptionClick}
                  >
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(opt.value)}
                      onClick={handleCheckboxClick}
                      readOnly
                    />
                    {opt.name}
                  </div>
                ))
              }
            </div>
          ) :
          null
      }
    </div>
  );
}

export default MultiSelect;
