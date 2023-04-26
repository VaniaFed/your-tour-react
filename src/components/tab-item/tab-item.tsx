import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './tab-item.module.scss';

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
