import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { Section } from 'components/layouts/section';
import { Tabs } from 'components/ui/tabs';
import { CardSmall } from 'components/ui/card-small';
import { CardLayout } from 'components/layouts/card-layout';

import { tabs } from './data';
import { Props } from './props';
import styles from './choose-tour.module.scss';
import { getTripsByCategory } from 'services/get-trips-by-category';

const cx = classNames.bind(styles);

export const ChooseTour = ({ className }: Props) => {
	const defaultCategory = 'Популярные';
	const [category, setCategory] = useState(defaultCategory);
	const { trips } = getTripsByCategory(category);

	return (
		<BoxContainer className={className}>
			<Section
				id="tours"
				heading="Выбери свой тур"
				customSubtitle={
					<Tabs
						elements={tabs}
						value={tabs[0].text}
						className={cx('choose-tour__tabs')}
						onChange={setCategory}
					/>
				}>
				<CardLayout itemsInRow="3" gap="30">
					{trips?.map((card, key) => (
						<CardSmall
							heading={card.name}
							subtitle={card.price}
							imgSrc={card.imgSrc}
							link={`trips/${card._id}`}
							key={key}
						/>
					))}
				</CardLayout>
			</Section>
		</BoxContainer>
	);
};
