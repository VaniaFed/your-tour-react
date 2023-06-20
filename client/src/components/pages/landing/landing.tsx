import React from 'react';

import { FirstScreen } from './sections/first-screen';
import { ChooseTour } from './sections/choose-tour';
import { BuildTour } from './sections/build-tour';
import { Reviews } from './sections/reviews';
import { Gallery } from './sections/gallery';
import { Stories } from './sections/stories';
import { TravelWithUs } from './sections/travel-with-us';

import type { FC } from 'react';

export const Landing: FC<unknown> = () => {
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
