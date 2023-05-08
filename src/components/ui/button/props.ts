import { ReactNode, MouseEvent, ButtonHTMLAttributes } from 'react';

export type Props = {
	variant?: 'primary' | 'secondary' | 'more' | 'small';
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	children: ReactNode;
	className?: string;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};
