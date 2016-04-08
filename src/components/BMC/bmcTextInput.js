import React, { Component, PropTypes } from 'react';

const BMCTextInput = (props) => {
  const handleChange = (e) => {
    props.onChange(e, e.target.value);
  };

  return (
    <input className="small"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange} />
	);
};

BMCTextInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

export default BMCTextInput;
