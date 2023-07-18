import type { Tab } from 'types';

export interface Props {
	elements: Tab[];
	value?: string;
	className?: string;
	onChange?: (label: string) => void;
}
