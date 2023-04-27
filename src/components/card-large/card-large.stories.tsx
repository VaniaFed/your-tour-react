import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { CardLarge } from './card-large';
import { Props } from './props';

export default {
	title: 'CardLarge',
	component: CardLarge,
} as Meta;

export const Default: ComponentStory<typeof CardLarge> = (args: Props) => <CardLarge {...args} />;
Default.args = {
	heading: 'Автостопом в Стамбул',
	paragraph:
		'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
	imgSrc: "Traveler's Stories/story photo-1.jpg",
	listItems: ['вкусная еда', 'дешевый транспорт', 'красивый город.'],
	className: '',
};
