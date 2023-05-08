import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { TextareaProps } from './props';
import { Textarea } from './textarea';

export default {
	title: 'Textarea',
	component: Textarea,
} as Meta;

export const Default: ComponentStory<typeof Textarea> = (args: TextareaProps) => <Textarea {...args} />;
Default.args = {
	className: '',
};
