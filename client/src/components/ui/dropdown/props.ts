import { FocusEvent } from 'react';
import { DropdownItem } from 'types';

export type Props = {
	dropdownItems: DropdownItem[];
	value: string;
	name: string;
	placeholder?: string;
	isInvalid?: boolean;
	className?: string;
	onChange?: (val: string) => void;
	onBlur?: (e: FocusEvent) => void;
};
