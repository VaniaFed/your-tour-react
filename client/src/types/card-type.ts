import { TypeLink } from './link-type';

export interface ICardTrip {
	name: string;
	price: string;
	imgSrc: string;
}

export interface ICardReview {
	text: string[];
	tourName: string;
	username: string;
	avatarSrc: string;
}

export interface ICardStorie {
	name: string;
	text: string;
	socialLinks: TypeLink[];
	imgSrc: string;
	advantages?: string[];
}

export type CardType = ICardTrip | ICardReview | ICardStorie;
