import React from 'react';
import classNames from 'classnames/bind';
import { Input } from 'components/ui/input';
import { useDropdown } from 'hooks/use-dropdown';
import chevron from 'static/ic-dropdown.svg';

import { DropdownList } from './dropdown-list/';
import styles from './dropdown.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Dropdown: FC<Props> = ({
	dropdownItems,
	value,
	name,
	placeholder,
	isInvalid,
	className,
	onChange = () => {},
	onBlur = () => {},
}) => {
	const { isOpen, menuRef, openMenu, handleItemClick } = useDropdown(onChange);

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
			{isOpen && <DropdownList items={dropdownItems} onClick={handleItemClick} ref={menuRef} />}
		</div>
	);
};
