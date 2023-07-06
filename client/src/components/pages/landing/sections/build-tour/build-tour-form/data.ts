import { type RadioItem } from 'components/ui/radio-group/props';

import { type BuildTourFields } from './build-tour-fields-interface';

export const radioItems: RadioItem[] = [
	{ label: 'Да', value: 'да' },
	{ label: 'Нет', value: 'нет' },
];

export const clearState: BuildTourFields = {
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
