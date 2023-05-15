import React, { useEffect } from 'react';

import { BoxContainer } from 'components/layouts/box-container';
import { Section } from 'components/layouts/section';
import { CardLayout } from 'components/layouts/card-layout';
import { CardReview } from 'components/ui/card-review';

import { Props } from './props';
import { getReviews } from 'services/get-reviews';

export const Reviews = ({ className }: Props) => {
	const { reviews } = getReviews();

	return (
		<BoxContainer>
			<Section
				id="reviews"
				heading="Отзывы наших путешественников"
				subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
				className={className}>
				<CardLayout itemsInRow="2" gap="30">
					{reviews?.map((card, key) => (
						<CardReview
							text={card.text}
							username={card.username}
							tourName={card.tripName}
							avatarSrc={card.userAvatarSrc}
							key={key}
						/>
					))}
				</CardLayout>
			</Section>
		</BoxContainer>
	);
};
