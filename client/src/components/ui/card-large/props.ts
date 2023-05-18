import { Link } from 'types';

export type Props = {
	heading: string;
	paragraph: string;
	listItems?: string[];
	imgSrc: string;
	links?: Link[];
	className?: string;
};
