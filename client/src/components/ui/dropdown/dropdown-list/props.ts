import type { DropdownItem } from 'types/dropdown-item';

export interface Props {
	items: DropdownItem[];
	className?: string;
	onClick?: (val: string) => void;
}
