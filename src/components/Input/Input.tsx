import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './input.module.scss';

const cx = classNames.bind(styles);

export const Input: FC<Props> = ({ value, placeholder, className, onEnter = () => {}, onBlur = () => {} }) => {
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
