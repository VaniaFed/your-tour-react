import React from 'react';

import { BoxContainer } from 'components/layouts/box-container';
import { Section } from 'components/layouts/section';
import { CardLayout } from 'components/layouts/card-layout';
import { CardReview } from 'components/ui/card-review';

import { Props } from './props';
import { reviewCards } from './data';

export const Reviews = ({ className }: Props) => {
	return (
		<BoxContainer>
			<Section
				heading="Отзывы наших путешественников"
				subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров"
				className={className}>
				<CardLayout itemsInRow="2" gap="30">
					{reviewCards.map((card, key) => (
						<CardReview
							text={card.text}
							username={card.username}
							tourName={card.tourName}
							avatarSrc={card.avatarSrc}
							key={key}
						/>
					))}
				</CardLayout>
			</Section>
		</BoxContainer>
	);
};
