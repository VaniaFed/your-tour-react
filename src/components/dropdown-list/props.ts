import { DropdownItemType } from 'types';

export type Props = {
	items: DropdownItemType[];
	className?: string;
	onClick?: (val: string) => void;
};
