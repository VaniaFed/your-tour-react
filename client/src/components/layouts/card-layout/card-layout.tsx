import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './card-layout.module.scss';

const cx = classNames.bind(styles);

export const CardLayout = ({ children, itemsInRow = '1', gap = '50', className }: Props) => {
	return (
		<ul
			className={cx(
				'card-layout',
				`card-layout_items-in-row_${itemsInRow}`,
				`card-layout_gap_${gap}`,
				className
			)}>
			{children}
		</ul>
	);
};