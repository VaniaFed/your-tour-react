import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

export const Button: FC<Props> = ({
	children,
	variant = 'primary',
	type = 'button',
	className,
	onClick = () => {},
}) => {
	return (
		<button type={type} className={cx('button', `button_${variant}`, className)} onClick={onClick}>
			{children}
		</button>
	);
};
