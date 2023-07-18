import { useEffect, useRef, type RefObject } from 'react';

export function useClickOutside<T extends HTMLElement>(
	onClickOutside: () => void
): {
	ref: RefObject<T>;
} {
	const ref = useRef<T>(null);

	const handleClickOutside = (event: MouseEvent): void => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			onClickOutside();
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
