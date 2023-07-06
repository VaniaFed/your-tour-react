import React from 'react';
import classNames from 'classnames/bind';

import styles from './card-layout.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const CardLayout: FC<Props> = ({ children, itemsInRow = '1', gap = '50', className }) => {
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
