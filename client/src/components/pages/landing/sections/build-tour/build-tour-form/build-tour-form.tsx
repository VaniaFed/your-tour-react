import React from 'react';
import classNames from 'classnames/bind';
import { Field } from 'components/ui/field';
import { RadioGroup } from 'components/ui/radio-group';
import { Checkbox } from 'components/ui/checkbox';
import { Button } from 'components/ui/button';
import { Link } from 'components/ui/link';
import { Paragraph } from 'components/ui/paragraph';
import { useAxios } from 'hooks/use-axios';

import { useBuildTourForm } from './use-build-tour-form';
import { clearState, radioItems } from './data';
import styles from './build-tour-form.module.scss';
import { Row } from './row';

import type { FC } from 'react';
import type { DropdownItem } from 'types';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const BuildTourForm: FC<Props> = ({ className, onSubmit = () => {} }) => {
	const { data: dropdownItems } = useAxios<DropdownItem[]>('/api/directions');
	const { formData, isFormValid, handlers } = useBuildTourForm(clearState, onSubmit);
	const { onChangeInput, onChangeDropdown, onSubmit: handleSubmit, onClear } = handlers;
	const { name, direction, email, phone, dateFrom, dateTo, comment, isAdult, isAgreed } = formData;
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
					onChange={(value: any) => {
						onChangeDropdown('direction', value);
					}}
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
							<Link href="#" level="p-small" isExternal>
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
