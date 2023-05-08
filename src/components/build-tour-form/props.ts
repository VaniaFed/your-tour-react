import { IBuildTourFields } from './build-tour-fields-interface';

export type Props = {
	className?: string;
	onSubmit: (formData: IBuildTourFields) => void;
};
