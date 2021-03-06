import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    value,
    type,
    onChange,
    placeholder,
    icon,
    label,
    hideLabel = false,
    helpText,
    error,
    required = false,
    min,
    max
}) => {
    let inputType = type;
    let inputIcon = icon;

    // console.log(`isPassword => ${isPassword}`);

    // const toggleVisibility = () => {
    //     console.log('Toggle visibity', inputType, inputType === 'password');
    //     if (inputType === 'password') {
    //         inputType = 'text';
    //         inputIcon = 'visibility_off';
    //     } else {
    //         inputType = 'text';
    //         inputIcon = 'visibility';
    //     }
    // };

    return (
        <div className="field">
            {!hideLabel && (
                <label className="label is-capitalized" htmlFor={label}>
                    {label}
                </label>
            )}
            <div className={'control ' + (icon ? 'has-icons-left' : '')}>
                <input
                    className={`input ${error ? 'is-danger' : ''}`}
                    name={label}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    min={min}
                    max={max}
                />
                {inputIcon && (
                    <span className="icon is-small is-left">
                        <i className="material-icons">{inputIcon}</i>{' '}
                    </span>
                )}
            </div>
            {helpText && error && (
                <p className={`help is-danger`}>{helpText}</p>
            )}
        </div>
    );
};

Input.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    hideLabel: PropTypes.bool,
    icon: PropTypes.string,
    helpText: PropTypes.string
};

Input.defaultProps = {
    type: 'text',
    placeholder: 'Enter',
    hideLabel: false
};

export default React.memo(Input);
