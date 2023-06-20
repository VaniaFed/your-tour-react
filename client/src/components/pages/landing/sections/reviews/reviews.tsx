import React from 'react';
import classNames from 'classnames/bind';
import { Section } from 'components/layouts/section';
import { CardLayout } from 'components/layouts/card-layout';
import { CardReview } from 'components/ui/card-review';
import { getReviews } from 'services/get-reviews';

import styles from './reviews.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Reviews: FC<Props> = ({ className }) => {
	const { reviews } = getReviews();

	return (
		<Section
			id="reviews"
			heading="Отзывы наших путешественников"
			subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
			className={className}>
			<CardLayout itemsInRow="2" gap="30">
				{reviews?.map((card, key) => (
					<li key={key}>
						<CardReview
							text={card.text}
							username={card.username}
							tourName={card.tripName}
							avatarSrc={card.userAvatarSrc}
							key={key}
							className={cx('reviews__card')}
						/>
					</li>
				))}
			</CardLayout>
		</Section>
	);
};
