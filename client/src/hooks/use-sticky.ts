import { useState, useEffect, useRef } from 'react';

export const UseSticky = (defaultSticky = false, posY = 100) => {
	const [isSticky, setIsSticky] = useState(defaultSticky);
	const stickyRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
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
