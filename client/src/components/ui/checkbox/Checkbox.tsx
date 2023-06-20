import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './checkbox.module.scss';

import type { Props } from './props';

const cx = classNames.bind(styles);

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ children, checked, ...rest }) => {
	return (
		<label className={cx('checkbox')}>
			<input className={cx('checkbox__input')} type="checkbox" {...rest} />
			<span className={cx('fake-control', checked === true && 'fake-control_completed')} />
			{children}
		</label>
	);
});

Checkbox.displayName = 'Checkbox';
