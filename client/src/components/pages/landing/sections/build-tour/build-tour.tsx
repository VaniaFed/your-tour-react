import React from 'react';
import classNames from 'classnames/bind';

import styles from './build-tour.module.scss';
import { Props } from './props';
import { Section } from 'components/layouts/section';
import { BuildTourForm } from 'components/pages/landing/sections/build-tour/build-tour-form';
import { IBuildTourFields } from 'components/pages/landing/sections/build-tour/build-tour-form/build-tour-fields-interface';

const cx = classNames.bind(styles);

export const BuildTour = ({ className }: Props) => {
	const onSubmit = (formData: IBuildTourFields) => {};

	return (
		<Section
			id="build-tour"
			className={cx('build-tour', className)}
			heading="Собери свой тур"
			subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
			contentClassName={cx('build-tour__content')}>
			<BuildTourForm onSubmit={onSubmit} />
		</Section>
	);
};
