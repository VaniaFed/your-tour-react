import { ComponentPropsWithoutRef } from 'react';

export interface Props extends ComponentPropsWithoutRef<'input'> {
	isInvalid?: boolean;
	className?: string;
}
