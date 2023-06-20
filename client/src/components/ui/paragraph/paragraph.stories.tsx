import React from 'react';

import { Paragraph } from './paragraph';

import type { ComponentStory, Meta } from '@storybook/react';
import type { Props } from './props';

const meta: Meta = {
	title: 'Paragraph',
	component: Paragraph,
};

export default meta;

export const Regular: ComponentStory<typeof Paragraph> = (args: Props) => (
	<Paragraph {...args}>Regular text paragraph</Paragraph>
);

export const Small: ComponentStory<typeof Paragraph> = (args: Props) => (
	<Paragraph size="small" {...args}>
		Regular text paragraph
	</Paragraph>
);

export const Big: ComponentStory<typeof Paragraph> = (args: Props) => (
	<Paragraph size="big" {...args}>
		Regular text paragraph
	</Paragraph>
);
