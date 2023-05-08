import React, { FC } from 'react';

import { BoxContainer } from 'components/box-container';
import { Section } from 'components/section';
import { CardLayout } from 'components/card-layout';
import { CardReview } from 'components/card-review';
import { ICardReview } from 'types';

import { Props } from './props';

const reviewCards: ICardReview[] = [
	{
		text: [
			'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.',
		],
		username: 'Мария',
		tourName: 'Вдали от дома',
		avatarSrc: 'reviews/review photo-1.jpg',
	},
	{
		text: [
			'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
			'Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.',
		],
		username: 'Павел',
		tourName: 'Путешествие в горы',
		avatarSrc: 'reviews/review photo-2.jpg',
	},
];

export const Reviews: FC<Props> = ({}) => {
	return (
		<BoxContainer>
			<Section
				heading="Отзывы наших путешественников"
				subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров">
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
