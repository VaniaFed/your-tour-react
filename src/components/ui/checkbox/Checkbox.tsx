import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';

const cx = classNames.bind(styles);

import styles from './checkbox.module.scss';
export const Checkbox = ({ children, checked = false, onChange = () => {} }: Props) => {
	const [active, setActive] = useState(checked);

	useEffect(() => {
		setActive(checked);
	}, [checked]);

	return (
		<label className={cx('checkbox')}>
			<input
				className={cx('checkbox__input')}
				type="checkbox"
				checked={active}
				onChange={({ target }) => {
					setActive(!active);
					onChange(target.checked);
				}}
			/>
			<span className={cx('fake-control', checked && 'fake-control_completed')} />
			{children}
		</label>
	);
};
