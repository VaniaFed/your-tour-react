import React from 'react';
import classNames from 'classnames/bind';
import { Dropdown } from 'components/ui/dropdown';
import { Textarea } from 'components/ui/textarea';
import { Input } from 'components/ui/input';

import styles from './field.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Field: FC<Props> = ({
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
}) => {
	const DropdownControl = (
		<Dropdown
			dropdownItems={dropdownItems}
			value={value as string}
			placeholder={placeholder}
			name={name}
			isInvalid={isInvalid}
			onChange={onChange as any}
		/>
	);

	const TextareaControl = (
		<Textarea
			placeholder={placeholder}
			value={value as string}
			name={name}
			id={name}
			isInvalid={isInvalid}
			onChange={onChange}
		/>
	);

	const InputControl = (
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

	let inputControl = InputControl;

	switch (type) {
		case 'dropdown':
			inputControl = DropdownControl;
			break;

		case 'textarea':
			inputControl = TextareaControl;
			break;

		default:
			break;
	}

	const renderChildren = (): React.ReactNode => {
		return React.Children.map(children, (child: any) => {
			return React.cloneElement(child, {
				onChange: (val: string) => {
					child.props.onChange(val);
				},
			});
		});
	};

	return (
		<div className={cx('field', className)}>
			{label !== undefined && label.length > 0 && (
				<label htmlFor={name} className={cx('field__label')}>
					{label}
				</label>
			)}
			{children === undefined ? inputControl : renderChildren()}
			{isInvalid && <p className={cx('field__error-text')}>{errorText}</p>}
		</div>
	);
};

Field.displayName = 'Field';
