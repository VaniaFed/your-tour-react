import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './main-layout.module.scss';
import { Props } from './props';

export const MainLayout: FC<Props> = ({ children, className }) => {
	const cx = classNames.bind(styles);
	return <main className={cx('main-layout', className)}>{children}</main>;
};
