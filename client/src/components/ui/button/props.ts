import { ReactNode, MouseEvent, ButtonHTMLAttributes, ComponentPropsWithoutRef } from 'react';

export interface Props extends ComponentPropsWithoutRef<'button'> {
	variant?: 'primary' | 'secondary' | 'more' | 'small';
	className?: string;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
