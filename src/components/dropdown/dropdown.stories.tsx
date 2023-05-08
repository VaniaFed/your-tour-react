import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { Props } from './props';
import { Dropdown } from './dropdown';

export default {
	title: 'Dropdown',
	component: Dropdown,
} as Meta;

export const Default: ComponentStory<typeof Dropdown> = (args: Props) => <Dropdown {...args} />;
Default.args = {
	dropdownItems: [
		{
			label: 'Аргентина',
			value: 'аргентина',
		},
		{
			label: 'Тверь',
			value: 'тверь',
		},
	],
	className: '',
};
