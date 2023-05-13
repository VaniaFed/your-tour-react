import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { Props } from './props';
import { RadioGroup } from './radio-group';

export default {
	title: 'RadioGroup',
	component: RadioGroup,
} as Meta;

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
