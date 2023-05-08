import React, { FC, useState, useEffect, useRef, memo } from 'react';
import classNames from 'classnames/bind';

import { Input } from 'components/ui/input';
import { DropdownList } from './dropdown-list/';
import chevron from 'static/ic-dropdown.svg';

import { Props } from './props';
import styles from './dropdown.module.scss';

const cx = classNames.bind(styles);

export const Dropdown: FC<Props> = ({
	dropdownItems,
	value = '',
	name,
	placeholder,
	isInvalid,
	className,
	onChange = () => {},
	onBlur = () => {},
}) => {
	const [active, setActive] = useState(value);
	const [open, setOpen] = useState(false);

	const openMenu = () => {
		setOpen(true);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	const handleItemClick = (val: string) => {
		setActive(val);
		onChange(val);
		closeMenu();
	};

	const menuRef = useRef<HTMLUListElement>(document.createElement('ul'));

	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				closeMenu();
			}
		};

		document.addEventListener('mousedown', handler);
	}, []);

	useEffect(() => {
		setActive(value);
	}, [value]);

	return (
		<div className={cx('dropdown', className)}>
			<div className={cx('dropdown__input-wrapper')}>
				<Input
					placeholder={placeholder}
					value={active}
					type="text"
					name={name}
					isInvalid={isInvalid}
					className={cx('dropdown__input')}
					onClick={openMenu}
					onBlur={onBlur}
				/>
				<img src={chevron} alt="open" className={cx('dropdown__chevron')} />
			</div>
			{open && <DropdownList items={dropdownItems} onClick={handleItemClick} ref={menuRef!} />}
		</div>
	);
};
