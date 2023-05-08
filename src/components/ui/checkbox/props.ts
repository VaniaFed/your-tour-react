export type Props = {
	children: React.ReactNode;
	checked?: boolean;
	textStyle?: any;
	fakeControlStyle?: any;
	isInvalid?: boolean;
	onChange?: (checked: boolean) => void;
};
