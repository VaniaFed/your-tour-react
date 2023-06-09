import React, { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Props } from './props';

export const Button: FC<Props> = ({ children = 'Button text', type = 'primary', onClick = () => {} }) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('button', `button_${type}`);
	return (
		<button className={resultClass} onClick={onClick}>
			{children}
		</button>
	);
};
