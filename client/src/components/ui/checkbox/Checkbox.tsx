import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';

const cx = classNames.bind(styles);

import styles from './checkbox.module.scss';
export const Checkbox = ({ children, checked, ...rest }: Props) => {
	return (
		<label className={cx('checkbox')}>
			<input className={cx('checkbox__input')} type="checkbox" {...rest} />
			<span className={cx('fake-control', checked && 'fake-control_completed')} />
			{children}
		</label>
	);
};
