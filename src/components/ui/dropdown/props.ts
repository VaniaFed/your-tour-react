import { FocusEvent } from 'react';
import { DropdownItemType } from 'types';

export type Props = {
	dropdownItems: DropdownItemType[];
	value: string;
	name: string;
	placeholder?: string;
	isInvalid?: boolean;
	className?: string;
	onChange?: (val: string) => void;
	onBlur?: (e: FocusEvent) => void;
};
