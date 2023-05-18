import { Social } from 'types';

export type Link = {
	text: string;
	href: string;
	isActive?: boolean;
	iconType?: Social;
};
