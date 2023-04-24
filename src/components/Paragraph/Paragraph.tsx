import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './paragraph.module.scss';
import { Props } from './props';

export const Paragraph: FC<Props> = ({ children = 'Paragraph text', size = 'regular', className }) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('paragraph', `paragraph_size_${size}`, 'todo-item__text_completed', className);
	return <p className={resultClass}>{children}</p>;
};
