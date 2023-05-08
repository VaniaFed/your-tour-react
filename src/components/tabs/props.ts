import { TabType } from 'types';

export type Props = {
	elements: TabType[];
	value?: string;
	onChange?: (label: string) => void;
	className?: string;
};
