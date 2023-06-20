import React from 'react';
import classNames from 'classnames/bind';

import styles from './button.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Button: FC<Props> = ({ children, variant = 'primary', className, ...rest }) => {
	return (
		<button className={cx('button', `button_${variant}`, className)} {...rest}>
			{children}
		</button>
	);
};
