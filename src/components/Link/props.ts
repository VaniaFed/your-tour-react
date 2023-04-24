import { IconType } from 'types/';

export type Props = {
	children: React.ReactNode;
	level?: 'h1' | 'h2' | 'h3' | 'p-big' | 'p-normal' | 'p-small';
	iconType?: IconType;
	color?: 'black' | 'white';
	underline?: boolean;
	href: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	className?: string;
};
