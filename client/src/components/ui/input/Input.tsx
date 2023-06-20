import React from 'react';
import classNames from 'classnames/bind';

import styles from './input.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Input: FC<Props> = ({ isInvalid = true, className, ...rest }) => {
	return <input className={cx('input', isInvalid && 'input_invalid', className)} {...rest} />;
};
