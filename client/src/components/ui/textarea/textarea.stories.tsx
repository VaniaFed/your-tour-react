import React from 'react';

import { Textarea } from './textarea';

import type { Meta, ComponentStory } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Textarea',
	component: Textarea,
};

export default meta;

export const Default: ComponentStory<typeof Textarea> = (args: Props) => <Textarea {...args} />;
Default.args = {
	className: '',
};
