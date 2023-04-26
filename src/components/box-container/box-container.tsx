import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './box-container.module.scss';

const cx = classNames.bind(styles);

export const BoxContainer: FC<Props> = ({ children, className, size }) => {
	return <div className={cx('box-container', `container_size_${size}`, className)}>{children}</div>;
};
