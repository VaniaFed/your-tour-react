export type RadioItemTypes = {
	label: string;
	value: string;
};

export type Props = {
	items: RadioItemTypes[];
	checked: string | null;
	name: string;
	isInvalid?: boolean;
	className?: string;
	onChange?: (value: string) => void;
};
