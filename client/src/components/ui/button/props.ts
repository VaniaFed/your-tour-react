import { ComponentPropsWithoutRef } from 'react';

export interface Props extends ComponentPropsWithoutRef<'button'> {
	variant?: 'primary' | 'secondary' | 'more' | 'small';
	className?: string;
}
