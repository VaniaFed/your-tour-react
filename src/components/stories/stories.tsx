import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/box-container';
import { Section } from 'components/section';
import { CardLayout } from 'components/card-layout';
import { CardLarge } from 'components/card-large';
import { ICardStorie } from 'types';

import { Props } from './props';
import styles from './stories.module.scss';

const cx = classNames.bind(styles);

const storieCards: ICardStorie[] = [
	{
		name: 'Автостопом в\u00A0Стамбул',
		text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
		imgSrc: "Traveler's Stories/story photo-1.jpg",
		advantages: ['вкусная еда', 'дешевый транспорт', 'красивый город.'],
		socialLinks: [
			{
				text: 'instagram',
				href: '#',
			},
			{
				text: 'facebook',
				href: '#',
			},
			{
				text: 'YouTube',
				href: '#',
			},
		],
	},
	{
		name: 'Автостопом в\u00A0Стамбул',
		text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
		imgSrc: "Traveler's Stories/story photo-2.jpg",
		socialLinks: [
			{
				text: 'instagram',
				href: '#',
			},
			{
				text: 'ВКонтакте',
				href: '#',
			},
		],
	},
	{
		name: 'Автостопом в\u00A0Стамбул',
		text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
		imgSrc: "Traveler's Stories/story photo-3.jpg",
		socialLinks: [
			{
				text: 'instagram',
				href: '#',
			},
			{
				text: 'facebook',
				href: '#',
			},
			{
				text: 'ВКонтакте',
				href: '#',
			},
		],
	},
];

export const Stories: FC<Props> = ({ className }) => {
	return (
		<BoxContainer className={cx('stories', className)}>
			<Section
				heading="Истории путешествий"
				subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров">
				<CardLayout>
					{storieCards.map((storie, key) => (
						<li key={key}>
							<CardLarge
								heading={storie.name}
								paragraph={storie.text}
								imgSrc={storie.imgSrc}
								listItems={storie.advantages}
								links={storie.socialLinks}
							/>
						</li>
					))}
				</CardLayout>
			</Section>
		</BoxContainer>
	);
};
