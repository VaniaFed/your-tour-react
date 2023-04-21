import { FilterType } from 'types/filter-type';

export type Props = {
	text: string;
	className?: string;
	onClick?: (arg: FilterType) => void;
};
