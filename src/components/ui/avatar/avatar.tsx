import React from 'react';
import classNames from 'classnames/bind';

import styles from './avatar.module.scss';
import { Props } from './props';

const cx = classNames.bind(styles);

export const Avatar = ({ src, alt = 'Аватар', className }: Props) => {
	return <img src={require(`${process.env.API_URL}/static/${src}`)} alt={alt} className={cx('avatar', className)} />;
};