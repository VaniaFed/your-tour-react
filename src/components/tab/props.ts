import { TabType } from 'types/';

export type Props = {
	items: TabType[];
	filter: string;
	setFilter?: (value: string) => void;
	className?: string;
};
