import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { Link } from './link';
import { Props } from './props';

export default {
	title: 'Link/page',
	component: Link,
} as Meta;

export const Default: ComponentStory<typeof Link> = (args: Props) => <Link href="#">Default link</Link>;
export const H1: ComponentStory<typeof Link> = (args: Props) => (
	<Link href="#" level="h1">
		H1 Link Level
	</Link>
);

export const H2: ComponentStory<typeof Link> = (args: Props) => (
	<Link href="#" level="h2">
		H2 Link Level
	</Link>
);

export const H3: ComponentStory<typeof Link> = (args: Props) => (
	<Link href="#" level="h3">
		H3 Link Level
	</Link>
);

export const ParagraphBig: ComponentStory<typeof Link> = (args: Props) => (
	<Link href="#" level="p-big">
		Paragraph big Link Level
	</Link>
);

export const ParagraphNormal: ComponentStory<typeof Link> = (args: Props) => (
	<Link href="#" level="p-normal">
		Paragraph big Link Level
	</Link>
);

export const ParagraphSmall: ComponentStory<typeof Link> = (args: Props) => (
	<Link href="#" level="p-small">
		Paragraph big Link Level
	</Link>
);

export const WhiteLink: ComponentStory<typeof Link> = (args: Props) => (
	<div style={{ background: '#000' }}>
		<Link href="#" level="h1" color="white">
			White H1 Link
		</Link>
	</div>
);

export const BlackLink: ComponentStory<typeof Link> = (args: Props) => (
	<Link href="#" level="h1" color="black">
		Black H1 Link
	</Link>
);

export const WithIconVK: ComponentStory<typeof Link> = (args: Props) => <Link iconType="vk" {...args} />;
export const WithIconINST: ComponentStory<typeof Link> = (args: Props) => <Link iconType="inst" {...args} />;
export const WithIconFB: ComponentStory<typeof Link> = (args: Props) => <Link iconType="fb" {...args} />;

export const VK_With_Text: ComponentStory<typeof Link> = (args: Props) => (
	<Link iconType="vk" {...args}>
		VK
	</Link>
);
