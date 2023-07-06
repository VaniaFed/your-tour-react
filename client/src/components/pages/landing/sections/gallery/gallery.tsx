import React from 'react';
import classNames from 'classnames/bind';
import { Section } from 'components/layouts/section';
import { TripService } from 'services/trip-service';

import styles from './gallery.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Gallery: FC<Props> = ({ className }) => {
	const { photos } = TripService.getPhotos();
	return (
		<Section
			className={cx('gallery', className)}
			heading="Фотографии путешествий"
			withContainer={false}
			subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров">
			<ul className={cx('gallery__list')}>
				{photos?.map((img, key) => (
					<li className={cx('gallery__item')} key={key}>
						<img
							src={require(`${process.env.STATIC_URL}/${img.src}`)}
							alt={img.title}
							className={cx('gallery__pic')}
							key={key}
						/>
					</li>
				))}
			</ul>
		</Section>
	);
};
