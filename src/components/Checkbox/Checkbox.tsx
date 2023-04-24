import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './checkbox.module.scss';
import { Paragraph } from 'components/paragraph';
import { Props } from './props';

export const Checkbox: FC<Props> = ({ text, checked = false, onChange = () => {} }) => {
	const cx = classNames.bind(styles);
	const wrapperClassname = cx('checkbox');
	const inputClassname = cx('checkbox__input');
	const fakeControlClassName = cx('fake-control', checked && 'fake-control_completed');

	return (
		<label className={wrapperClassname}>
			<input
				className={inputClassname}
				type="checkbox"
				checked={checked}
				onChange={({ target }) => {
					onChange(target.checked);
				}}></input>
			<span className={fakeControlClassName}></span>
			<Paragraph className={checked && styles.text_completed}>{text}</Paragraph>
		</label>
	);
};
