import React, { Component, PropTypes } from 'react';
import SectionTypes from '../../constants/SectionTypes';

const BMCSelectInput = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };

  return (
		<select className="small" name={props.name} value={props.value} onChange={handleChange}>
		{SectionTypes.map((result, index) => {
			return (
				<option key={index} name={result} value={index}>{result}</option>
			);
		})}
	</select>
	);
};

BMCSelectInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

export default BMCSelectInput;
