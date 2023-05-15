import { ComponentPropsWithoutRef } from 'react';

export interface Props extends ComponentPropsWithoutRef<'textarea'> {
	isInvalid: boolean;
	className?: string;
}
