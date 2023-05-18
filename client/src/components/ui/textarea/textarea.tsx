import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './textarea.module.scss';

const cx = classNames.bind(styles);

export const Textarea = ({ isInvalid = true, className, ...rest }: Props) => {
	return <textarea className={cx('textarea', isInvalid && 'textarea_invalid', className)} {...rest} />;
};
