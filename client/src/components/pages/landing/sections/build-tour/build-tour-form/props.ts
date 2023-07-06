import { type BuildTourFields } from './build-tour-fields-interface';

export interface Props {
	className?: string;
	onSubmit: (formData: BuildTourFields) => void;
}
