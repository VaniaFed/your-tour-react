import React from 'react';

import { Field } from './field';

import type { Meta, ComponentStory } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Field',
	component: Field,
};

export default meta;

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
	value: 'name name name',
	name: 'name',
	placeholder: 'Владилен Минин',
	isInvalid: false,
	errorText: 'Имя слишком длинное',
};
