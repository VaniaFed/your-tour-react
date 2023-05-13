import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './radio-group.module.scss';

const cx = classNames.bind(styles);

export const RadioGroup = ({ items = [], value, name, className, onChange = () => {} }: Props) => {
	return (
		<div className={cx('radio-group', className)}>
			{items.map((item, index) => (
				<label key={index} className={cx('radio')}>
					<input
						type="radio"
						name={name}
						value={item.value}
						checked={value === item.value}
						className={cx('radio__input')}
						onChange={onChange}
					/>
					<span className={cx('fake-control')}></span>
					{item.label}
				</label>
			))}
		</div>
	);
};
