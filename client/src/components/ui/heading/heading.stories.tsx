import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { Heading } from './heading';
import { Props } from './props';

export default {
	title: 'Heading',
	component: Heading,
} as Meta;

export const H1: ComponentStory<typeof Heading> = (args: Props) => <Heading {...args}>H1</Heading>;
export const H2: ComponentStory<typeof Heading> = (args: Props) => (
	<Heading size="2" {...args}>
		H2
	</Heading>
);
export const H3: ComponentStory<typeof Heading> = (args: Props) => (
	<Heading size="3" {...args}>
		H3
	</Heading>
);

export const WithSpan: ComponentStory<typeof Heading> = (args: Props) => (
	<Heading {...args}>
		Heading 1 with <span style={{ fontSize: '14px' }}>Little span</span>
	</Heading>
);
