import React from 'react';
import classNames from 'classnames/bind';

import styles from './tab-item.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const TabItem: FC<Props> = ({ label, className, onClick = () => {} }) => {
	return (
		<button
			className={cx('tab-item', className)}
			onClick={() => {
				onClick(label);
			}}>
			{label}
		</button>
	);
};
