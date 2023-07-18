interface FieldState<T = string> {
	value: T;
	isValid: boolean;
	errorText: string;
}

export interface BuildTourFields {
	name: FieldState;
	direction: FieldState;
	email: FieldState;
	phone: FieldState;
	dateFrom: FieldState;
	dateTo: FieldState;
	comment: FieldState;
	isAdult: FieldState;
	isAgreed: FieldState<boolean>;
}
