import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from 'components/pages/landing';
import { Trip } from 'components/pages/trip';
import { NotFound } from 'components/pages/not-found';

export const App: FC<{}> = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/trips/:tripId" element={<Trip />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
};
