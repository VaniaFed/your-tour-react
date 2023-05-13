import { useEffect, useRef } from 'react';

export function UseClickOutside<T extends HTMLElement>(cb: any) {
	const ref = useRef<T>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			cb();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return { ref };
}
