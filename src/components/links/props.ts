import { ActiveColorType, TypeLink } from 'types/';

export type Props = {
	links: TypeLink[];
	className?: string;
	activeColor?: ActiveColorType;
	underline?: boolean;
};
