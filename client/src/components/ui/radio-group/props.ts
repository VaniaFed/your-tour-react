import type { InputHTMLAttributes } from 'react';

export interface RadioItem {
	label: string;
	value: string;
}

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	items: RadioItem[];
}
