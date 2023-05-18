import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import { Input } from 'components/ui/input';
import chevron from 'static/ic-dropdown.svg';

import { DropdownList } from './dropdown-list/';
import { Props } from './props';
import styles from './dropdown.module.scss';
import { UseDropdown } from 'hooks/use-dropdown';

const cx = classNames.bind(styles);

export const Dropdown = ({
	dropdownItems,
	value,
	name,
	placeholder,
	isInvalid,
	className,
	onChange = () => {},
	onBlur = () => {},
}: Props) => {
	const { isOpen, menuRef, openMenu, handleItemClick } = UseDropdown(onChange);

	return (
		<div className={cx('dropdown', className)}>
			<div className={cx('dropdown__input-wrapper')}>
				<Input
					placeholder={placeholder}
					value={value}
					type="text"
					name={name}
					id={name}
					isInvalid={isInvalid}
					className={cx('dropdown__input')}
					onClick={openMenu}
					readOnly
					onBlur={onBlur}
				/>
				<img src={chevron} alt="open" className={cx('dropdown__chevron')} />
			</div>
			{isOpen && <DropdownList items={dropdownItems} onClick={handleItemClick} ref={menuRef!} />}
		</div>
	);
};
