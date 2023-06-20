import type { FocusEvent } from 'react';
import type { DropdownItem } from 'types';

export interface Props {
	dropdownItems: DropdownItem[];
	value: string;
	name: string;
	placeholder?: string;
	isInvalid?: boolean;
	className?: string;
	onChange?: (val: string) => void;
	onBlur?: (e: FocusEvent) => void;
}
