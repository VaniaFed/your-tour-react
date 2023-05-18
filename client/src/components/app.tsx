import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from 'components/pages/landing';
import { Trip } from 'components/pages/trip';
import { NotFound } from 'components/pages/not-found';
import { PageLayout } from './layouts/page-layout';

export const App: FC<{}> = () => {
	return (
		<Routes>
			<Route path="/" element={<PageLayout />}>
				<Route index element={<Landing />} />
				<Route path="/trips/:tripId" element={<Trip />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};
