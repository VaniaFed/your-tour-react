import type { TextareaHTMLAttributes } from 'react';

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	isInvalid: boolean;
	className?: string;
}
