import React from 'react';
import classNames from 'classnames/bind';

import styles from './avatar.module.scss';

import type { Props } from './props';
import type { FC } from 'react';

const cx = classNames.bind(styles);

export const Avatar: FC<Props> = ({ src = '', alt = 'Аватар', className, ...rest }) => {
	return (
		<img
			src={require(`${STATIC_URL}/${src}`)}
			className={cx('avatar', className)}
			alt={alt}
			{...rest}
		/>
	);
};
