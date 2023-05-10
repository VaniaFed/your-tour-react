import { TabType } from 'types';

export type Props = {
	elements: TabType[];
	value?: string;
	className?: string;
	onChange?: (label: string) => void;
};
