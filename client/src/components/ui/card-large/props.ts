import type { Link } from 'types';

export interface Props {
	heading: string;
	paragraph: string;
	listItems?: string[];
	imgSrc: string;
	links?: Link[];
	className?: string;
}
