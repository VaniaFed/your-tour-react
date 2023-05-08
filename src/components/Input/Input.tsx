import React, { FC, memo } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './input.module.scss';

const cx = classNames.bind(styles);

export const Input: FC<Props> = ({
	placeholder,
	type = 'text',
	value,
	name,
	isInvalid = true,
	className,
	onClick = () => {},
	onChange = () => {},
	onFocus = () => {},
	onBlur = () => {},
}) => {
	return (
		<input
			value={value}
			name={name}
			id={name}
			type={type}
			placeholder={placeholder}
			className={cx('input', isInvalid && 'input_invalid', className)}
			onClick={onClick}
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
		/>
	);
};
