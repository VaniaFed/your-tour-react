import React from 'react';

import { PageLayout } from 'components/layouts/page-layout';
import { MainLayout } from 'components/layouts/main-layout';
import { TripBlock } from './sections/trip-block';

export const Trip = () => {
	return (
		<PageLayout>
			<MainLayout>
				<TripBlock />
			</MainLayout>
		</PageLayout>
	);
};
