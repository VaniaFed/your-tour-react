import React, { type FC } from 'react';
import bind from 'classnames/bind';

import styles from './build-tour-form.module.scss';

const cx = bind.bind(styles);

interface RowProps {
	children: React.ReactNode;
	className?: string;
}

export const Row: FC<RowProps> = ({ children, className }) => {
	return <div className={cx('build-tour-form__row', className)}>{children}</div>;
};
