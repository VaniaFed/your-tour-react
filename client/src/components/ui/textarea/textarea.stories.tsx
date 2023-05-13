import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { Props } from './props';
import { Textarea } from './textarea';

export default {
	title: 'Textarea',
	component: Textarea,
} as Meta;

export const Default: ComponentStory<typeof Textarea> = (args: Props) => <Textarea {...args} />;
Default.args = {
	className: '',
};
