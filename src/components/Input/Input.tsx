import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './input.module.scss';
import { Props } from './props';

export const Input: FC<Props> = ({ value, placeholder, className, onEnter = () => {}, onBlur = () => {} }) => {
	const cx = classNames.bind(styles);
	const resultClass = cx('input', className);
	return (
		<input
			type="text"
			autoFocus
			defaultValue={value}
			className={resultClass}
			placeholder={placeholder}
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					onEnter(e.currentTarget.value);
					e.currentTarget.value = '';
				}
			}}
			onBlur={(e) => {
				onBlur(e.currentTarget.value);
				e.currentTarget.value = '';
			}}></input>
	);
};
