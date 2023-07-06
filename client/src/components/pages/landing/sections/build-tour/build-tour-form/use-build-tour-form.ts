import { useState, useEffect } from 'react';

import { checkIfFormValid, validateField } from './validation';

import type { ChangeEvent, FormEvent } from 'react';
import type { BuildTourFields } from './build-tour-fields-interface';

interface FormHandlers {
	onChangeInput: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
	onChangeDropdown: (name: keyof BuildTourFields, value: string) => void;
	onSubmit: (e: FormEvent) => void;
	onClear: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const useBuildTourForm = (
	clearState: BuildTourFields,
	onSubmit: (formData: BuildTourFields) => void
): {
	formData: BuildTourFields;
	isFormValid: boolean;
	handlers: FormHandlers;
} => {
	const [formData, setFormData] = useState(clearState);
	const [isFormValid, setIsFormValid] = useState(true);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const updateInput = (name: keyof BuildTourFields, value: string | boolean): void => {
		setFormData({
			...formData,
			[name]: {
				value,
				...validateField(name, value as string, formData),
			},
		});
	};

	function changeInput(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void {
		const name = e.target.name as keyof BuildTourFields;
		const value =
			e.target.type === 'checkbox' ? (e as ChangeEvent<HTMLInputElement>).target.checked : e.target.value;

		updateInput(name, value);
	}

	const changeDropdown = (name: keyof BuildTourFields, value: string): void => {
		updateInput(name, value);
	};

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		setIsFormValid(checkIfFormValid(formData));
		setIsSubmitted(true);
	};

	const clearForm = (): void => {
		setFormData(clearState);
		setIsFormValid(true);
		setIsSubmitted(false);
	};

	const handleClear = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		clearForm();
	};

	useEffect(() => {
		if (isSubmitted && isFormValid) {
			onSubmit(formData);
			clearForm();
		}
	}, [isSubmitted, isFormValid]);

	const handlers = {
		onChangeInput: changeInput,
		onChangeDropdown: changeDropdown,
		onSubmit: handleSubmit,
		onClear: handleClear,
	};

	return {
		formData,
		isFormValid,
		handlers,
	};
};
