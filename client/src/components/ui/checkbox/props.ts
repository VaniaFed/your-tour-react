import { ComponentPropsWithoutRef } from 'react';

export interface Props extends ComponentPropsWithoutRef<'input'> {
	children: React.ReactNode;
}
