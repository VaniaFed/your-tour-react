import React from 'react';
import classNames from 'classnames/bind';

import styles from './radio-group.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const RadioGroup: FC<Props> = ({ items = [], value, name, className, onChange = () => {} }) => {
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
