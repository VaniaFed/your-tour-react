import { SocialsType } from 'types';

export type TypeLink = {
	text: string;
	href: string;
	isActive?: boolean;
	isIcon?: boolean;
	iconType?: SocialsType;
};
