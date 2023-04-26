import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

export const Button: FC<Props> = ({ children, type = 'primary', onClick = () => {} }) => {
	const resultClass = cx('button', `button_${type}`);
	return (
		<button className={resultClass} onClick={onClick}>
			{children}
		</button>
	);
};
