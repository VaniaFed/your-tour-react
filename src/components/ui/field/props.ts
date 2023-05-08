import { ChangeEvent, ReactNode } from 'react';
import { InputTypes, DropdownItemType } from 'types';

export type Props = {
	label?: string;
	placeholder?: string;
	type?: InputTypes;
	value?: string | boolean;
	dropdownItems?: DropdownItemType[];
	name?: string;
	isInvalid?: boolean;
	children?: ReactNode;
	errorText?: string;
	className?: any;
	onChange?: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
};
