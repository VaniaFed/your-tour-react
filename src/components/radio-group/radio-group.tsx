import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './radio-group.module.scss';

const cx = classNames.bind(styles);

export const RadioGroup: FC<Props> = ({ items = [], checked, name, isInvalid, className, onChange = () => {} }) => {
	const [active, setActive] = useState(checked);

	const handleChange = (value: string) => {
		setActive(value);
		onChange(value);
	};

	useEffect(() => {
		setActive(checked);
	}, [checked]);

	return (
		<div className={cx('radio-group', className)}>
			{items.map((item, index) => (
				<label key={index} className={cx('radio')}>
					<input
						type="radio"
						name={name}
						checked={active === item.value}
						className={cx('radio__input')}
						onChange={() => handleChange(item.value)}
					/>
					<span className={cx('fake-control')}></span>
					{item.label}
				</label>
			))}
		</div>
	);
};
