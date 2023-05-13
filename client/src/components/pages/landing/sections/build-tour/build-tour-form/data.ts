import { DropdownItemType } from 'types';
import { IBuildTourFields } from './build-tour-fields-interface';
import { RadioItemTypes } from 'components/ui/radio-group/props';

export const dropdownItems: DropdownItemType[] = [
	{
		label: 'Аляска',
		value: 'аляска',
	},
	{
		label: 'Аргентина',
		value: 'аргентина',
	},
	{
		label: 'Новая зеландия',
		value: 'новая зеландия',
	},
	{
		label: 'Турция',
		value: 'турция',
	},
	{
		label: 'Кипр',
		value: 'кипр',
	},
	{
		label: 'Тунис',
		value: 'тунис',
	},
	{
		label: 'Греция',
		value: 'греция',
	},
	{
		label: 'Таиланд',
		value: 'таиланд',
	},
	{
		label: 'Индия (гоа)',
		value: 'индия (гоа)',
	},
	{
		label: 'Чехия',
		value: 'чехия',
	},
	{
		label: 'ОАЭ',
		value: 'оаэ',
	},
];

export const radioItems: RadioItemTypes[] = [
	{ label: 'Да', value: 'да' },
	{ label: 'Нет', value: 'нет' },
];

export const clearState: IBuildTourFields = {
	name: {
		value: '',
		isValid: false,
		errorText: 'Пожалуйста, укажите имя',
	},
	direction: {
		value: '',
		isValid: false,
		errorText: 'Пожалуйста, выберите направление ',
	},
	email: {
		value: '',
		isValid: false,
		errorText: 'Пожалуйста, укажите email',
	},
	phone: {
		value: '',
		isValid: false,
		errorText: 'Пожалуйста, укажите номер телефона',
	},
	dateFrom: {
		value: '',
		isValid: false,
		errorText: 'Пожалуйста, укажите дату начала путешествия',
	},
	dateTo: {
		value: '',
		isValid: false,
		errorText: 'Пожалуйста, укажите дату завершения путешествия',
	},
	comment: {
		value: '',
		isValid: true,
		errorText: '',
	},
	isAdult: {
		value: '',
		isValid: false,
		errorText: 'Необходимо, чтобы вы подтвердили, что вам 18 лет',
	},
	isAgreed: {
		value: false,
		isValid: false,
		errorText: 'Необходимо, чтобы вы приняли условия соглашения',
	},
};
