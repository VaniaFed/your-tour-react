import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './links-layout.module.scss';

const cx = classNames.bind(styles);

export const LinksLayout: FC<Props> = ({ children, gap = '35', className }) => {
	return <ul className={cx('links-layout', `links-layout_gap_${gap}`, className)}>{children}</ul>;
};
