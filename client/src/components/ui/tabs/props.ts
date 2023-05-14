import { Tab } from 'types';

export type Props = {
	elements: Tab[];
	value?: string;
	className?: string;
	onChange?: (label: string) => void;
};
