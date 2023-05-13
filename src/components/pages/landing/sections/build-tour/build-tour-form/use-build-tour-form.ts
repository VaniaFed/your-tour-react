import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { IBuildTourFields } from './build-tour-fields-interface';
import { checkIfFormValid, validateField } from './validation';

export const UseBuildTourForm = (clearState: IBuildTourFields, onSubmit: (data: IBuildTourFields) => void) => {
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

	function changeInput(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void {
		const name = e.target.name as keyof IBuildTourFields;
		const value =
			e.target.type === 'checkbox' ? (e as ChangeEvent<HTMLInputElement>).target.checked : e.target.value;

		updateInput(name, value);
	}

	const changeDropdown = (name: keyof IBuildTourFields, value: string) => {
		updateInput(name, value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setIsFormValid(checkIfFormValid(formData));
		setIsSubmitted(true);
	};

	const clearForm = () => {
		setFormData(clearState);
		setIsFormValid(true);
		setIsSubmitted(false);
	};

	const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
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
