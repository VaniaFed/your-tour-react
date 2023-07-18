import React from 'react';
import classNames from 'classnames/bind';
import { Section } from 'components/layouts/section';
import { BuildTourForm } from 'components/pages/landing/sections/build-tour/build-tour-form';
import { type BuildTourFields } from 'components/pages/landing/sections/build-tour/build-tour-form/build-tour-fields-interface';

import styles from './build-tour.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const BuildTour: FC<Props> = ({ className }) => {
	const onSubmit = (formData: BuildTourFields): void => {
		console.log(formData);
	};

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
