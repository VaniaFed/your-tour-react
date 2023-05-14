import { ChangeEvent, FocusEvent, MouseEvent } from 'react';
import { InputType } from 'types';

export type Props = {
	placeholder?: string;
	type: InputType;
	value: string;
	name: string;
	isInvalid?: boolean;
	className?: string;
	onClick?: (e: MouseEvent) => void;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: FocusEvent) => void;
	onBlur?: (e: FocusEvent) => void;
};
