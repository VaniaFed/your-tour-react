import { DropdownItem } from 'types/dropdown-item';

export type Props = {
	items: DropdownItem[];
	className?: string;
	onClick?: (val: string) => void;
};
