import React from 'react';
import classNames from 'classnames/bind';

import { Section } from 'components/layouts/section';

import { Props } from './props';
import styles from './gallery.module.scss';
import { getUserPhotos } from 'services/get-user-photos';

const cx = classNames.bind(styles);

export const Gallery = ({ className }: Props) => {
	const { photos } = getUserPhotos();
	return (
		<Section
			className={cx('gallery', className)}
			heading="Фотографии путешествий"
			subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров">
			<ul className={cx('gallery__list')}>
				{photos?.map((img, key) => (
					<img
						src={require(`${process.env.API_URL}/static/${img.src}`)}
						alt={img.title}
						className={cx('gallery__item')}
						role="listitem"
						key={key}
					/>
				))}
			</ul>
		</Section>
	);
};
