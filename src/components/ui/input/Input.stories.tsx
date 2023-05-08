import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';

import { Props } from './props';
import { Input } from './input';

export default {
	title: 'Input',
	component: Input,
} as Meta;

export const Default: ComponentStory<typeof Input> = (args: Props) => <Input {...args} />;
Default.args = {
	className: '',
};
