import { ChangeEvent } from 'react';

export type RadioItemTypes = {
	label: string;
	value: string;
};

export type Props = {
	items: RadioItemTypes[];
	value: string | undefined;
	name: string;
	className?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
