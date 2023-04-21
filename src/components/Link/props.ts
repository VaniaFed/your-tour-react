export type Props = {
	children: React.ReactNode;
	href: string;
	size?: 'regular' | 'small';
	active?: boolean;
	iconType?: 'vk' | 'inst' | 'fb' | 'youtube';
	target?: '_blank' | '_self' | '_parent' | '_top';
	className?: string;
	underline?: boolean;
	color?: 'white';
};
