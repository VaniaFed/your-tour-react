import { ChangeEvent, FocusEvent } from 'react';

export type TextareaProps = {
	placeholder?: string;
	value: string;
	name: string;
	isInvalid: boolean;
	className?: string;
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (e: FocusEvent) => void;
};
