import { useState, useEffect, useRef, type RefObject } from 'react';

export const useSticky = (
	defaultSticky = false,
	posY = 100
): {
	stickyRef: RefObject<HTMLElement>;
	isSticky: boolean;
} => {
	const [isSticky, setIsSticky] = useState(defaultSticky);
	const stickyRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleScroll = (): void => {
			if (window.pageYOffset > posY) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return { stickyRef, isSticky };
};
