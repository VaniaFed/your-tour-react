import React from 'react';

import { FirstScreen } from './sections/first-screen';
import { ChooseTour } from './sections/choose-tour';
import { BuildTour } from './sections/build-tour';
import { Reviews } from './sections/reviews';
import { Gallery } from './sections/gallery';
import { Stories } from './sections/stories';
import { TravelWithUs } from './sections/travel-with-us';

export const Landing = () => {
	return (
		<>
			<FirstScreen />
			<ChooseTour />
			<BuildTour />
			<Reviews />
			<Gallery />
			<Stories />
			<TravelWithUs />
		</>
	);
};
