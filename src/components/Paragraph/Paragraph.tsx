import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './paragraph.module.scss';
import { Props } from './props';

const cx = classNames.bind(styles);

export const Paragraph: FC<Props> = ({ children, size = 'regular', className }) => {
	const paragraphClass = cx('paragraph', size && `paragraph_size_${size}`, className);
	return <p className={paragraphClass}>{children}</p>;
};
