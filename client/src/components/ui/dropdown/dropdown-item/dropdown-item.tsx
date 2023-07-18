import React from 'react';
import classNames from 'classnames/bind';

import styles from './dropdown-item.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const DropdownItem: FC<Props> = ({ label, value, className, onClick = () => {} }) => {
	return (
		<div
			className={cx('dropdown-item', className)}
			onClick={() => {
				onClick(value);
			}}>
			{label}
		</div>
	);
};
