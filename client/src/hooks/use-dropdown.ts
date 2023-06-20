import { useState, type RefObject } from 'react';

import { useClickOutside } from './use-click-outside';

export const useDropdown = (
	onItemClick: (val?: any) => void
): {
	isOpen: boolean;
	menuRef: RefObject<HTMLUListElement>;
	openMenu: () => void;
	closeMenu: () => void;
	handleItemClick: (val: string) => void;
} => {
	const [isOpen, setIsOpen] = useState(false);

	const openMenu = (): void => {
		setIsOpen(true);
	};

	const closeMenu = (): void => {
		setIsOpen(false);
	};

	const handleItemClick = (val: string): void => {
		onItemClick(val);
		closeMenu();
	};

	const { ref: menuRef } = useClickOutside<HTMLUListElement>(() => {
		closeMenu();
	});

	return {
		isOpen,
		menuRef,
		openMenu,
		closeMenu,
		handleItemClick,
	};
};
