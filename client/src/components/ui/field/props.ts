import { ChangeEvent, ReactNode } from 'react';
import { DropdownItem, InputType } from 'types';

export type Props = {
	label?: string;
	placeholder?: string;
	type?: InputType;
	value?: string | boolean;
	dropdownItems?: DropdownItem[];
	name?: string;
	isInvalid?: boolean;
	children?: ReactNode;
	errorText?: string;
	className?: any;
	onChange?: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
};
