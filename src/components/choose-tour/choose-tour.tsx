import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/box-container';
import { Section } from 'components/section';
import { Tabs } from 'components/tabs';
import { CardSmall } from 'components/card-small';
import { CardLayout } from 'components/card-layout';
import { TabType } from 'types/';

import { Props } from './props';
import styles from './choose-tour.module.scss';

const cx = classNames.bind(styles);

const tabs: TabType[] = [
	{
		text: 'Популярные',
	},
	{
		text: 'Авторские',
	},
	{
		text: 'Походы',
	},
	{
		text: 'Сплавы',
	},
	{
		text: 'Велопрогулки',
	},
];

const cards = [
	{
		heading: 'Путешествие в\u00A0горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-1.jpg',
	},
	{
		heading: 'Путешествие в\u00A0горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-2.jpg',
	},
	{
		heading: 'Путешествие в\u00A0горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-3.jpg',
	},
	{
		heading: 'Путешествие в\u00A0горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-4.jpg',
	},
	{
		heading: 'Путешествие в\u00A0горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-5.jpg',
	},
	{
		heading: 'Путешествие в\u00A0горы',
		subtitle: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-6.jpg',
	},
];

export const ChooseTour: FC<Props> = ({ className }) => {
	return (
		<BoxContainer className={className}>
			<Section
				heading="Выбери свой тур"
				customSubtitle={<Tabs elements={tabs} value={tabs[0].text} className={cx('choose-tour__tabs')} />}>
				<CardLayout itemsInRow="3" gap="30">
					{cards.map((card, key) => (
						<CardSmall heading={card.heading} subtitle={card.subtitle} imgSrc={card.imgSrc} key={key} />
					))}
				</CardLayout>
			</Section>
		</BoxContainer>
	);
};