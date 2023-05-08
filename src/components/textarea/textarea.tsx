import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { TextareaProps } from './props';
import styles from './textarea.module.scss';

const cx = classNames.bind(styles);

export const Textarea: FC<TextareaProps> = ({
	placeholder,
	value,
	name,
	isInvalid = true,
	className,
	onChange = () => {},
	onBlur = () => {},
}) => {
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
