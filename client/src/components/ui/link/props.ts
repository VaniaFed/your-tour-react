import { Social } from 'types';

export interface Props extends React.ComponentPropsWithoutRef<'a'> {
	isExternal?: boolean;
	children: React.ReactNode;
	level?: 'h1' | 'h2' | 'h3' | 'p-big' | 'p-normal' | 'p-small';
	iconType?: Social;
	color?: 'black' | 'white';
	underline?: boolean;
	className?: string;
	smooth?: boolean;
}
