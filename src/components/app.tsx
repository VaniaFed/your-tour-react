import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from 'components/pages/landing';

export const App: FC<{}> = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
		</Routes>
	);
};
