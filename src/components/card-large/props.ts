import { TypeLink } from 'types';

export type Props = {
	heading: string;
	paragraph: string;
	listItems?: string[];
	imgSrc: string;
	links?: TypeLink[];
	className?: string;
};
