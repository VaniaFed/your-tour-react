import { useState } from 'react';
import { UseClickOutside } from './use-click-outside';

export const UseDropdown = (onItemClick: (val?: any) => void) => {
	const [isOpen, setIsOpen] = useState(false);

	const openMenu = () => {
		setIsOpen(true);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const handleItemClick = (val: string) => {
		onItemClick(val);
		closeMenu();
	};

	const { ref: menuRef } = UseClickOutside<HTMLUListElement>(() => {
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
