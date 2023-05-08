import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './build-tour.module.scss';
import { Props } from './props';
import { BoxContainer } from 'components/box-container';
import { Section } from 'components/section';
import { BuildTourForm } from 'components/build-tour-form';
import { IBuildTourFields } from 'components/build-tour-form/build-tour-fields-interface';

const cx = classNames.bind(styles);

export const BuildTour: FC<Props> = ({ className }) => {
	const onSubmit = (formData: IBuildTourFields) => {
		// push to server
		console.log(formData);
		console.log('Submitted!');
	};

	return (
		<BoxContainer className={cx('build-tour', className)}>
			<Section
				heading="Собери свой тур"
				subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
				contentClassName={cx('build-tour__content')}>
				<BuildTourForm onSubmit={onSubmit} />
			</Section>
		</BoxContainer>
	);
};
