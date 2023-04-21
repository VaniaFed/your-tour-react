import { IconType } from 'types/';

export type Props = {
	children: React.ReactNode;
	href: string;
	size?: 'regular' | 'small';
	active?: boolean;
	iconType?: IconType;
	target?: '_blank' | '_self' | '_parent' | '_top';
	className?: string;
	underline?: boolean;
	activeColor?: 'orange' | 'green';
};
