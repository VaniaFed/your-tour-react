import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

export const Button = ({ children, variant = 'primary', type = 'button', className, onClick = () => {} }: Props) => {
	return (
		<button type={type} className={cx('button', `button_${variant}`, className)} onClick={onClick}>
			{children}
		</button>
	);
};
