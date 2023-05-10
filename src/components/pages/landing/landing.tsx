import React from 'react';

import { PageLayout } from 'components/layouts/page-layout';
import { MainLayout } from 'components/layouts/main-layout';
import { FirstScreen } from './sections/first-screen';
import { ChooseTour } from './sections/choose-tour';
import { BuildTour } from './sections/build-tour';
import { Reviews } from './sections/reviews';
import { Gallery } from './sections/gallery';
import { Stories } from './sections/stories';

export const Landing = () => {
	return (
		<PageLayout>
			<MainLayout>
				<FirstScreen />
				<ChooseTour />
				<BuildTour />
				<Reviews />
				<Gallery />
				<Stories />
			</MainLayout>
		</PageLayout>
	);
};
