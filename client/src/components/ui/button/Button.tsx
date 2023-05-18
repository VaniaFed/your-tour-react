import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

export const Button = ({ children, variant = 'primary', className, ...rest }: Props) => {
	return (
		<button className={cx('button', `button_${variant}`, className)} {...rest}>
			{children}
		</button>
	);
};
