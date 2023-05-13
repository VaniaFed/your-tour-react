import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './paragraph.module.scss';

const cx = classNames.bind(styles);

export const Paragraph = ({ children, size = 'regular', className }: Props) => {
	const paragraphClass = cx('paragraph', size && `paragraph_size_${size}`, className);
	return <p className={paragraphClass}>{children}</p>;
};
