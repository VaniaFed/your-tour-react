import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './main-layout.module.scss';
import { Props } from './props';

const cx = classNames.bind(styles);

export const MainLayout = ({ children, className }: Props) => {
	return <main className={cx('main-layout', className)}>{children}</main>;
};
