import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { Field } from './field';
import { Props } from './props';

export default {
	title: 'Field',
	component: Field,
} as Meta;

export const Default: ComponentStory<typeof Field> = (args: Props) => <Field {...args} />;

export const WithText: ComponentStory<typeof Field> = (args: Props) => <Field {...args} />;
WithText.args = {
	label: 'Имя (ФИО)',
	name: 'name',
	placeholder: 'Владилен Минин',
};

export const Invalid: ComponentStory<typeof Field> = (args: Props) => <Field {...args} />;
Invalid.args = {
	label: 'Имя (ФИО)',
	value: 'dfsklfjsdklj fklsdjflkd sjfklsdklfd',
	name: 'name',
	placeholder: 'Владилен Минин',
	isInvalid: false,
	errorText: 'Имя слишком длинное',
};
