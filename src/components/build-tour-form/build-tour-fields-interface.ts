interface IFieldState {
	value: string;
	isValid: boolean;
	errorText: string;
}

export interface IBuildTourFields {
	name: IFieldState;
	direction: IFieldState;
	email: IFieldState;
	phone: IFieldState;
	dateFrom: IFieldState;
	dateTo: IFieldState;
	comment: IFieldState;
	isAdult: IFieldState;
	isAgreed: IFieldState;
}
