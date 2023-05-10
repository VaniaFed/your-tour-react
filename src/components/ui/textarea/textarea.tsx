import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './textarea.module.scss';

const cx = classNames.bind(styles);

export const Textarea = ({
	placeholder,
	value,
	name,
	isInvalid = true,
	className,
	onChange = () => {},
	onBlur = () => {},
}: Props) => {
	return (
		<textarea
			placeholder={placeholder}
			value={value}
			name={name}
			id={name}
			className={cx('textarea', isInvalid && 'textarea_invalid', className)}
			onChange={onChange}
			onBlur={onBlur}
		/>
	);
};
