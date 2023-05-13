import { ChangeEvent } from 'react';

export type Props = {
	children: React.ReactNode;
	checked: boolean;
	name: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
