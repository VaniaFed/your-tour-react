import React from 'react';

import { CardLarge } from './card-large';

import type { Meta, ComponentStory } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'CardLarge',
	component: CardLarge,
};

export default meta;

export const Default: ComponentStory<typeof CardLarge> = (args: Props) => <CardLarge {...args} />;
Default.args = {
	heading: 'Автостопом в Стамбул',
	paragraph:
		'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
	imgSrc: "Traveler's Stories/story photo-1.jpg",
	listItems: ['вкусная еда', 'дешевый транспорт', 'красивый город.'],
	className: '',
};
