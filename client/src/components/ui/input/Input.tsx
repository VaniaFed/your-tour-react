import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './input.module.scss';

const cx = classNames.bind(styles);

export const Input = ({ isInvalid = true, className, ...rest }: Props) => {
	return <input className={cx('input', isInvalid && 'input_invalid', className)} {...rest} />;
};
