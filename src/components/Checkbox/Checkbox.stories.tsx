import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { Checkbox } from './checkbox';
import { Props } from './props';

export default {
	title: 'Checkbox',
	component: Checkbox,
} as Meta;

export const Unchecked: ComponentStory<typeof Checkbox> = (args: Props) => (
	<Checkbox {...args}>
		Нажимая кнопку, я принимаю условия
		<a href="#">Лицензионного договора</a>
	</Checkbox>
);

Unchecked.args = {
	onChange: (checked: boolean) => {
		console.log(checked);
		(this as any).checked = !checked;
	},
};

export const Checked: ComponentStory<typeof Checkbox> = (args: Props) => <Checkbox {...args} />;

Checked.args = {
	children: 'Checked',
	checked: true,
	onChange: (checked: boolean) => {
		console.log(checked);
	},
};
