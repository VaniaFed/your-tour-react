import React from 'react';
import classNames from 'classnames/bind';

import styles from './textarea.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Textarea: FC<Props> = ({ isInvalid = true, className, ...rest }) => {
	return <textarea className={cx('textarea', isInvalid && 'textarea_invalid', className)} {...rest} />;
};
