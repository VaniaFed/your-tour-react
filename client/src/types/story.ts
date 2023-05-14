import { Link } from './link';

export interface Story {
	tripName: string;
	text: string;
	list?: string[];
	imgSrc: string;
	socialLinks: Link[];
}
