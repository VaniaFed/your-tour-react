import React, { ChangeEvent, useState, useEffect, FormEvent } from 'react';
import classNames from 'classnames/bind';
import { Field } from 'components/ui/field';
import { Button } from 'components/ui/button';
import { Checkbox } from 'components/ui/checkbox';
import { Paragraph } from 'components/ui/paragraph';
import { Link } from 'components/ui/link';
import { RadioGroup } from 'components/ui/radio-group';
import { Row } from './row';
import { Props } from './props';
import { IBuildTourFields } from './build-tour-fields-interface';
import { clearState, dropdownItems, radioItems } from './data';
import { checkIfFormValid, validateField } from './validation';
import styles from './build-tour-form.module.scss';

const cx = classNames.bind(styles);

export const BuildTourForm = ({ className, onSubmit = () => {} }: Props) => {
	const [formData, setFormData] = useState(clearState);
	const [isFormValid, setIsFormValid] = useState(true);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const updateInput = (name: keyof IBuildTourFields, value: string | boolean) => {
		setFormData({
			...formData,
			[name]: {
				value,
				...validateField(name, value as string, formData),
			},
		});
	};

	function onChangeInput(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void {
		const name = e.target.name as keyof IBuildTourFields;
		const value =
			e.target.type === 'checkbox' ? (e as ChangeEvent<HTMLInputElement>).target.checked : e.target.value;

		updateInput(name, value);
	}

	const onChangeDropdown = (name: keyof IBuildTourFields, value: string | boolean) => {
		updateInput(name, value);
	};

	const clearForm = () => {
		setFormData(clearState);
		setIsFormValid(true);
		setIsSubmitted(false);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setIsFormValid(checkIfFormValid(formData));
		setIsSubmitted(true);
	};

	const onClear = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		clearForm();
	};

	const { name, direction, email, phone, dateFrom, dateTo, comment, isAdult, isAgreed } = formData;

	useEffect(() => {
		if (isSubmitted && isFormValid) {
			onSubmit(formData);
			clearForm();
		}
	}, [isSubmitted, isFormValid]);

	return (
		<form className={cx('build-tour-form', className)} onSubmit={handleSubmit}>
			<Row>
				<Field
					label="Имя"
					isInvalid={!name.isValid && !isFormValid}
					errorText={name.errorText}
					placeholder="Введите Ваше имя"
					type="text"
					value={name.value}
					name="name"
					className={cx('build-tour-form__field')}
					onChange={onChangeInput}
				/>
				<Field
					label="Направление"
					placeholder="Куда хотите ехать"
					type="dropdown"
					dropdownItems={dropdownItems}
					value={direction.value}
					name="direction"
					isInvalid={!direction.isValid && !isFormValid}
					errorText={direction.errorText}
					className={cx('build-tour-form__field')}
					onChange={(value: any) => onChangeDropdown('direction', value)}
				/>
			</Row>
			<Row>
				<Field
					label="Email"
					placeholder="example@mail.com"
					type="email"
					value={email.value}
					name="email"
					isInvalid={!email.isValid && !isFormValid}
					errorText={email.errorText}
					className={cx('build-tour-form__field')}
					onChange={onChangeInput}
				/>
				<Field
					label="Телефон"
					placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
					type="tel"
					value={phone.value}
					name="phone"
					isInvalid={!phone.isValid && !isFormValid}
					errorText={phone.errorText}
					className={cx('build-tour-form__field')}
					onChange={onChangeInput}
				/>
			</Row>
			<Row>
				<Field
					label="Дата от"
					placeholder="ДД.ММ.ГГГГ"
					type="date"
					value={dateFrom.value}
					name="dateFrom"
					isInvalid={!dateFrom.isValid && !isFormValid}
					errorText={dateFrom.errorText}
					className={cx('build-tour-form__field')}
					onChange={onChangeInput}
				/>
				<Field
					label="Дата до"
					placeholder="ДД.ММ.ГГГГ"
					type="date"
					value={dateTo.value}
					name="dateTo"
					isInvalid={!dateTo.isValid && !isFormValid}
					errorText={dateTo.errorText}
					className={cx('build-tour-form__field')}
					onChange={onChangeInput}
				/>
			</Row>
			<Row>
				<Field
					label="Комментарий"
					type="textarea"
					value={comment.value}
					name="comment"
					isInvalid={!comment.isValid && !isFormValid}
					errorText={comment.errorText}
					className={cx('build-tour-form__field')}
					onChange={onChangeInput}
				/>
			</Row>
			<Row>
				<Field
					label="Вам есть 18 лет?"
					isInvalid={!isAdult.isValid && !isFormValid}
					errorText={isAdult.errorText}
					className={cx('build-tour-form__radio')}>
					<RadioGroup items={radioItems} value={isAdult.value} name="isAdult" onChange={onChangeInput} />
				</Field>
			</Row>
			<Row>
				<Field isInvalid={!isAgreed.isValid && !isFormValid} errorText={isAgreed.errorText}>
					<Checkbox checked={isAgreed.value} onChange={onChangeInput} name="isAgreed">
						<Paragraph size="small" className={cx('checkbox__paragraph')}>
							Нажимая кнопку, я принимаю условия{'\u00A0'}
							<Link href="#" level="p-small">
								Лицензионного договора
							</Link>
						</Paragraph>
					</Checkbox>
				</Field>
			</Row>
			<Row className={cx('row__buttons')}>
				<Button variant="primary" type="submit" className={cx('build-tour-form__button')}>
					Найти тур
				</Button>
				<Button variant="secondary" onClick={onClear} type="reset" className={cx('build-tour-form__button')}>
					Сбросить
				</Button>
			</Row>
		</form>
	);
};
