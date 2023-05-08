import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './dropdown-item.module.scss';

const cx = classNames.bind(styles);

export const DropdownItem: FC<Props> = ({ label, value, className, onClick = () => {} }) => {
	return (
		<div className={cx('dropdown-item', className)} onClick={() => onClick(value)}>
			{label}
		</div>
	);
};
