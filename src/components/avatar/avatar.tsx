import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './avatar.module.scss';
import { Props } from './props';

const cx = classNames.bind(styles);

export const Avatar: FC<Props> = ({ src, alt = 'Аватар', className }) => {
	return <img src={require(`../../static/${src}`)} alt={alt} className={cx('avatar', className)} />;
};
