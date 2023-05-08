import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Section } from 'components/layouts/section';
import { images } from './data';
import { Props } from './props';
import styles from './gallery.module.scss';

const cx = classNames.bind(styles);

export const Gallery: FC<Props> = ({ className }) => {
	return (
		<Section
			className={cx('gallery', className)}
			heading="Фотографии путешествий"
			subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров">
			<ul className={cx('gallery__list')}>
				{images.map((img, key) => (
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
