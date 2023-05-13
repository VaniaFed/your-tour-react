import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './dropdown-item.module.scss';

const cx = classNames.bind(styles);

export const DropdownItem = ({ label, value, className, onClick = () => {} }: Props) => {
	return (
		<div className={cx('dropdown-item', className)} onClick={() => onClick(value)}>
			{label}
		</div>
	);
};
