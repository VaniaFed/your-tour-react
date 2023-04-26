import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { CardSmall } from 'components/card-small';

import { CardLayout } from './card-layout';
import { Props } from './props';

export default {
	title: 'CardLayout',
	component: CardLayout,
} as Meta;

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

const cardList = cards.map((card) => (
	<CardSmall heading={card.heading} subtitle={card.subtitle} imgSrc={card.imgSrc} />
));

export const Default: ComponentStory<typeof CardLayout> = (args: Props) => <CardLayout {...args} />;

Default.args = {
	children: cardList,
	className: '',
};
