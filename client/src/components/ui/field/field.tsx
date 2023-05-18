import React from 'react';
import classNames from 'classnames/bind';

import { Dropdown } from 'components/ui/dropdown';
import { Textarea } from 'components/ui/textarea';
import { Input } from 'components/ui/input';

import { Props } from './props';
import styles from './field.module.scss';

const cx = classNames.bind(styles);

export const Field = ({
	label,
	placeholder,
	type = 'text',
	value = '',
	dropdownItems = [],
	name = '',
	isInvalid = true,
	errorText = 'Input error',
	children,
	className,
	onChange = () => {},
}: Props) => {
	const inputControl = (type === 'dropdown' && (
		<Dropdown
			dropdownItems={dropdownItems}
			value={value as string}
			placeholder={placeholder}
			name={name}
			isInvalid={isInvalid}
			onChange={onChange as any}
		/>
	)) ||
		(type === 'textarea' && (
			<Textarea
				placeholder={placeholder}
				value={value as string}
				name={name}
				id={name}
				isInvalid={isInvalid}
				onChange={onChange}
			/>
		)) || (
			<Input
				placeholder={placeholder}
				type={type}
				value={value as string}
				name={name}
				id={name}
				isInvalid={isInvalid}
				onChange={onChange}
				className={cx('field__input')}
			/>
		);

	const renderChildren = () => {
		return React.Children.map(children, (child: any) => {
			return React.cloneElement(child, {
				onChange: (val) => {
					child.props.onChange(val);
				},
			});
		});
	};

	return (
		<div className={cx('field', className)}>
			{label && (
				<label htmlFor={name} className={cx('field__label')}>
					{label}
				</label>
			)}
			{renderChildren() || inputControl}
			{isInvalid && <p className={cx('field__error-text')}>{errorText}</p>}
		</div>
	);
};
