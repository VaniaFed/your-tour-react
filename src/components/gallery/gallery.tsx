import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './gallery.module.scss';
import { Props } from './props';
import { BoxContainer } from 'components/box-container';
import { Section } from 'components/section';

const cx = classNames.bind(styles);

type ImageType = {
	src: string;
	title?: string;
};
const images: ImageType[] = [
	{
		src: "Traveler's Photos/travel photo-1.png",
		title: 'travel photo 1',
	},
	{
		src: "Traveler's Photos/travel photo-2.png",
		title: 'travel photo 2',
	},
	{
		src: "Traveler's Photos/travel photo-3.png",
		title: 'travel photo 3',
	},
	{
		src: "Traveler's Photos/travel photo-4.png",
		title: 'travel photo 4',
	},
	{
		src: "Traveler's Photos/travel photo-5.png",
		title: 'travel photo 5',
	},
	{
		src: "Traveler's Photos/travel photo-6.png",
		title: 'travel photo 6',
	},
	{
		src: "Traveler's Photos/travel photo-7.png",
		title: 'travel photo 7',
	},
	{
		src: "Traveler's Photos/travel photo-8.png",
		title: 'travel photo 8',
	},
	{
		src: "Traveler's Photos/travel photo-9.png",
		title: 'travel photo 9',
	},
	{
		src: "Traveler's Photos/travel photo-10.png",
		title: 'travel photo 10',
	},
	{
		src: "Traveler's Photos/travel photo-11.png",
		title: 'travel photo 11',
	},
	{
		src: "Traveler's Photos/travel photo-12.png",
		title: 'travel photo 12',
	},
	{
		src: "Traveler's Photos/travel photo-13.png",
		title: 'travel photo 13',
	},
];

export const Gallery: FC<Props> = ({ className }) => {
	return (
		<Section
			className={cx('gallery', className)}
			heading="Фотографии путешествий"
			subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров">
			<ul className={cx('gallery__list')}>
				{images.map((img, key) => (
					<img
						src={require(`../../static/${img.src}`)}
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
