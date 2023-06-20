import React from 'react';

import { RadioGroup } from './radio-group';

import type { Meta, ComponentStory } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'RadioGroup',
	component: RadioGroup,
};

export default meta;

export const Default: ComponentStory<typeof RadioGroup> = (args: Props) => <RadioGroup {...args} />;
Default.args = {
	className: '',
	items: [
		{ label: 'Да', value: 'да' },
		{ label: 'Нет', value: 'нет' },
	],
	value: 'да',
	name: 'age',
};
