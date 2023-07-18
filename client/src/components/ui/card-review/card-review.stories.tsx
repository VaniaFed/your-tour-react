import React from 'react';

import { CardReview } from './card-review';

import type { Meta, ComponentStory } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'CardReview',
	component: CardReview,
};

export default meta;

export const Default: ComponentStory<typeof CardReview> = (args: Props) => <CardReview {...args} />;
Default.args = {
	text: [
		'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.',
	],
	username: 'Мария',
	tourName: 'Вдали от дома',
	avatarSrc: 'reviews/review photo-1.jpg',
};

export const ThreeParagraphs: ComponentStory<typeof CardReview> = (args: Props) => <CardReview {...args} />;
ThreeParagraphs.args = {
	text: [
		'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
		'Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.',
		'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. ',
	],
	username: 'Мария',
	tourName: 'Вдали от дома',
	avatarSrc: 'reviews/review photo-1.jpg',
};
