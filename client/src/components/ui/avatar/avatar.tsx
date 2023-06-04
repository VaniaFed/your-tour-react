import React from 'react';
import classNames from 'classnames/bind';

import styles from './avatar.module.scss';
import { Props } from './props';

const cx = classNames.bind(styles);

export const Avatar = ({ src, alt = 'Аватар', className, ...rest }: Props) => {
	return (
		<img
			src={require(`${process.env.STATIC_URL}/${src}`)}
			className={cx('avatar', className)}
			alt={alt}
			{...rest}
		/>
	);
};
