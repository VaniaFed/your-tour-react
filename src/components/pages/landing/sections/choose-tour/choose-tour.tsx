import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { Section } from 'components/layouts/section';
import { Tabs } from 'components/ui/tabs';
import { CardSmall } from 'components/ui/card-small';
import { CardLayout } from 'components/layouts/card-layout';
import { ICardTrip, TabType } from 'types';

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

const tripCards: ICardTrip[] = [
	{
		name: 'Путешествие в\u00A0горы',
		price: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-1.jpg',
	},
	{
		name: 'Путешествие в\u00A0горы',
		price: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-2.jpg',
	},
	{
		name: 'Путешествие в\u00A0горы',
		price: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-3.jpg',
	},
	{
		name: 'Путешествие в\u00A0горы',
		price: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-4.jpg',
	},
	{
		name: 'Путешествие в\u00A0горы',
		price: 'от 80 000 руб',
		imgSrc: 'choose-your-tour/card tour photo-5.jpg',
	},
	{
		name: 'Путешествие в\u00A0горы',
		price: 'от 80 000 руб',
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
					{tripCards.map((card, key) => (
						<CardSmall heading={card.name} subtitle={card.price} imgSrc={card.imgSrc} key={key} />
					))}
				</CardLayout>
			</Section>
		</BoxContainer>
	);
};
