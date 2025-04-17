import React, {useState, useRef, useEffect} from 'react';
import './MultiSelect.scss';
import './tooltips.scss';

/**
 * Stub function to act as a placeholder if no onUpdate prop is passed to the AutoComplete component
 */
const noOp = () => {};

/**
 * @param options {Array.<{name: String, value: String}>}
 * @param onUpdate {Function}
 * @param defaultValue {Array<String>} Array of values to be initially highlighted
 * @param width {String} CSS width value. Ex. 20px, 5rem. Default 12rem
 * @param tooltipPosition {String} One of: top, bottom, left, right
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const MultiSelect = ({options=[], onUpdate=noOp, defaultValue=[], width='12rem', tooltipPosition='top',
                              ...props}) => {
  if (!Array.isArray(options)) {
    throw new Error(`options prop must be an Array, ${typeof options} provided.`);
  }

  if (!Array.isArray(defaultValue)) {
    throw new Error(`defaultValue prop must be an Array, ${typeof defaultValue} provided.`);
  }

  defaultValue.forEach((val) => {
    if (!options.find((opt) => opt.value === val)) {
      console.warn(`defaultValue ${val} is not among provided options, and will be ignored.`);
      defaultValue = defaultValue.filter((dVal) => dVal !== val);
    }
  });

  const wrapperRef = useRef(null);
  const optionBoxRef = useRef(null);
  const inputRef = useRef(null);
  const [displayOptions, setDisplayOptions] = useState(false);
  const [currentOptions, setCurrentOptions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState(defaultValue);
  const [tooltipText, setTooltipText] = useState(null);

  useEffect(() => {
    onUpdate(selectedOptions);
    if (selectedOptions.length < 2) {
      setTooltipText(null);
    } else {
      setTooltipText(
        currentOptions
          .filter((opt) => selectedOptions.includes(opt.value))
          .map((opt) => opt.name)
          .join(', ') || null
      );
    }
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

    // Populate placeholder with selection
    cleanProps.placeholder = (selectedOptions.length === 0) ?
      (props.placeholder || '') :
      selectedOptions.length > 1 ?
        `${selectedOptions.length} values` :
        options.find((opt) => opt.value === selectedOptions[0])?.name
    delete props.placeholder;

    // Overwrite props assigned to input element with our own handlers, then run user-defined handlers afterward
    cleanProps.onClick = (e) => {handleInputFocusOrClick(); props.onclick ? props.onclick(e) : null};
    cleanProps.onFocus = (e) => {handleInputFocusOrClick(); props.onfocus ? props.onfocus(e) : null};
    cleanProps.onBlur = (e) => {handleInputBlur(); props.onblur ? props.onblur(e) : null};
    cleanProps.onInput = (e) => {handleInput(e); props.oninput ? props.oninput(e) : null};
    return cleanProps;
  };

  const optionBoxStyle = {
    width: inputRef.current ? `${inputRef.current.offsetWidth}px` : 'fit-content',
  };

  return (
    <div className="multi-select-wrapper" style={{width}} ref={wrapperRef}>
      <div data-tooltip={tooltipText} className={` multi-select-input-wrapper tooltip-${tooltipPosition} ${props?.className || ''}`}>
        <input ref={inputRef} {...buildProps()} className="multi-select-input" />
      </div>
      {
        displayOptions ?
          (
            <div className="multi-select-options" style={optionBoxStyle} ref={optionBoxRef}>
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
