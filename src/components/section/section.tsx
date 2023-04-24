import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './section.module.scss';
import { Props } from './props';

export const Section: FC<Props> = ({ className }) => {
	const cx = classNames.bind(styles);
	return <div className={cx('section', className)}>section</div>;
};
