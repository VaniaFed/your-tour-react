import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './tab-item.module.scss';
import { Props } from './props';

export const TabItem: FC<Props> = ({ text, className, onClick = () => {} }) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('tab-item', className);
	return (
		<button
			className={resultClass}
			onClick={() => {
				onClick(text);
			}}>
			{text}
		</button>
	);
};
