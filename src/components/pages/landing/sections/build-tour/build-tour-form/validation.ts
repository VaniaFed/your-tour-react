import { IBuildTourFields } from './build-tour-fields-interface';

const validateName = (name: string): [boolean, string] => {
	let isValid = true;
	let errorText = '';

	if (typeof name !== 'string') {
		isValid = false;
		errorText = 'Имя должно состоять из букв';
	} else if (name.length <= 3) {
		isValid = false;
		errorText = 'Имя слишком короткое';
	} else if (name.length > 20) {
		isValid = false;
		errorText = 'Имя слишком длинное';
	}
	return [isValid, errorText];
};

const validateDirection = (direction: string): [boolean, string] => {
	let isValid = true;
	let errorText = '';

	if (typeof direction !== 'string') {
		isValid = false;
		errorText = 'Направление указано в неверном формате';
	} else if (direction.length === 0) {
		isValid = false;
		errorText = 'Выберите направление';
	}
	return [isValid, errorText];
};

const validateEmail = (email: string): [boolean, string] => {
	let isValid = true;
	let errorText = '';

	if (email.length <= 5) {
		isValid = false;
		errorText = 'Email слишком короткий';
	} else if (email.length > 35) {
		isValid = false;
		errorText = 'Email слишком длинный';
	} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		isValid = false;
		errorText = 'Введите email в корректном формате';
	}

	return [isValid, errorText];
};

const validatePhone = (phone: string): [boolean, string] => {
	let isValid = true;
	let errorText = '';

	if (phone.length <= 5) {
		isValid = false;
		errorText = 'Телефон слишком короткий';
	} else if (phone.length > 15) {
		isValid = false;
		errorText = 'Телефон слишком длинный';
	} else if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone)) {
		isValid = false;
		errorText = 'Введите телефон в корректном формате';
	}

	return [isValid, errorText];
};

const validateDateFrom = (dateFrom: string): [boolean, string] => {
	let isValid = true;
	let errorText = '';

	const date = new Date(dateFrom);
	const todayDate = new Date();

	if (date.getTime() < todayDate.getTime() && date.getDate() !== todayDate.getDate()) {
		isValid = false;
		errorText = 'Введена дата в прошедшем времени';
	} else if (date.getFullYear() - todayDate.getFullYear() > 3) {
		isValid = false;
		errorText = 'Дата слишком большая';
	}

	return [isValid, errorText];
};

const validateDateTo = (dateTo: string, dateFrom: string): [boolean, string] => {
	let isValid = true;
	let errorText = '';

	const date = new Date(dateTo);
	const dateFromDate = new Date(dateFrom);
	const todayDate = new Date();

	if (date.getTime() < todayDate.getTime() && date.getDate() !== todayDate.getDate()) {
		isValid = false;
		errorText = 'Введена дата в прошедшем времени';
	} else if (date.getFullYear() - todayDate.getFullYear() > 3) {
		isValid = false;
		errorText = 'Дата слишком большая';
	} else if (date.getTime() < dateFromDate.getTime()) {
		isValid = false;
		errorText = 'Дата окончания должна быть больше даты начала';
	}

	return [isValid, errorText];
};

const validateIsAdult = (isAdult: string): [boolean, string] => {
	let isValid = true;
	let errorText = '';

	if (typeof isAdult !== 'string') {
		isValid = false;
		errorText = 'Что-то пошло не так';
	} else if (isAdult === 'нет') {
		isValid = false;
		errorText = 'Взрослейте!';
	}

	return [isValid, errorText];
};

const validateIsAgreed = (isAgreed: boolean): [boolean, string] => {
	let isValid = true;
	let errorText = '';

	if (isAgreed === false) {
		isValid = false;
		errorText = 'Необходимо, чтобы вы приняли соглашение';
	}

	return [isValid, errorText];
};

export function validateField(field: keyof IBuildTourFields, value: string, formData: IBuildTourFields) {
	let isValid = true;
	let errorText = '';

	switch (field) {
		case 'name':
			[isValid, errorText] = validateName(value);
			break;

		case 'direction':
			[isValid, errorText] = validateDirection(value);
			break;

		case 'email':
			[isValid, errorText] = validateEmail(value);
			break;

		case 'phone':
			[isValid, errorText] = validatePhone(value);
			break;

		case 'dateFrom':
			[isValid, errorText] = validateDateFrom(value);
			break;

		case 'dateTo':
			[isValid, errorText] = validateDateTo(value, formData.dateFrom.value);
			break;

		case 'isAdult':
			[isValid, errorText] = validateIsAdult(value);
			break;

		case 'isAgreed':
			[isValid, errorText] = validateIsAgreed(JSON.parse(value));
			break;

		default:
			break;
	}

	return {
		isValid,
		errorText,
	};
}

export const checkIfFormValid = (formData: IBuildTourFields) => {
	return Object.entries(formData).every((item) => item[1].isValid === true);
};
