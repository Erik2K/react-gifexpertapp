import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setCategory(e.target.value);
	};

	return (
		<form onKeyUp={handleSubmit}>
			<input
				type='text'
				placeholder='Search...'
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.any.isRequired,
};
