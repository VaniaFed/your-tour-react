import type { ChangeEvent, ReactNode } from 'react';
import type { DropdownItem, InputType } from 'types';

export interface Props {
	label?: string;
	placeholder?: string;
	type?: InputType;
	value?: string | boolean;
	dropdownItems?: DropdownItem[];
	name?: string;
	id?: string;
	isInvalid?: boolean;
	children?: ReactNode;
	errorText?: string;
	className?: any;
	onChange?: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}
