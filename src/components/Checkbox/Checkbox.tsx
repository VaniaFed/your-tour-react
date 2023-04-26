import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Paragraph } from 'components/paragraph';

import { Props } from './props';
import styles from './checkbox.module.scss';

const cx = classNames.bind(styles);

export const Checkbox: FC<Props> = ({ text, checked = false, onChange = () => {} }) => {
	return (
		<label className={cx('checkbox')}>
			<input
				className={cx('checkbox__input')}
				type="checkbox"
				checked={checked}
				onChange={({ target }) => {
					onChange(target.checked);
				}}></input>
			<span className={cx('fake-control', checked && 'fake-control_completed')}></span>
			<Paragraph className={checked && styles.text_completed}>{text}</Paragraph>
		</label>
	);
};
