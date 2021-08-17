import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	const [category, setCategory] = useState('');

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategory={setCategory} />

			<ol>
				<GifGrid key={category} category={category} />
			</ol>
		</>
	);
};
