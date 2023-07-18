import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { CardSmall } from 'components/ui/card-small';

import { CardLayout } from './card-layout';

import type { Meta, ComponentStory } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'CardLayout',
	component: CardLayout,
	decorators: [withRouter],
};

export default meta;

const cards = [
	{
		heading: 'Путешествие в горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-1.jpg',
	},
	{
		heading: 'Путешествие в горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-2.jpg',
	},
	{
		heading: 'Путешествие в горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-3.jpg',
	},
	{
		heading: 'Путешествие в горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-4.jpg',
	},
	{
		heading: 'Путешествие в горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-5.jpg',
	},
	{
		heading: 'Путешествие в горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-6.jpg',
	},
];

const cardList = cards.map((card, key) => (
	<CardSmall heading={card.heading} subtitle={card.subtitle} imgSrc={card.imgSrc} link="#" key={key} />
));

export const Default: ComponentStory<typeof CardLayout> = (args: Props) => <CardLayout {...args} />;

Default.args = {
	children: cardList,
	className: '',
};
Default.story = {
	parameters: {
		reactRouter: {
			routePath: '/trips/:tripId',
			routeParams: { tripId: '42' },
			routeHandle: 'Trip',
		},
	},
};
