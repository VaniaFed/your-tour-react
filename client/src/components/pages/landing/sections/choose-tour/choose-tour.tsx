import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Section } from 'components/layouts/section';
import { Tabs } from 'components/ui/tabs';
import { CardSmall } from 'components/ui/card-small';
import { CardLayout } from 'components/layouts/card-layout';
import { getTripsByCategory } from 'services/get-trips-by-category';

import { tabs } from './data';
import styles from './choose-tour.module.scss';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const ChooseTour: FC<unknown> = () => {
	const defaultCategory = 'Популярные';
	const [category, setCategory] = useState(defaultCategory);
	const { trips } = getTripsByCategory(category);

	return (
		<Section
			id="tours"
			heading="Выбери свой тур"
			customSubtitle={
				<Tabs elements={tabs} value={tabs[0].text} className={cx('choose-tour__tabs')} onChange={setCategory} />
			}>
			<CardLayout itemsInRow="3" gap="30">
				{trips?.map((card, key) => (
					<li key={key}>
						<CardSmall
							heading={card.name}
							subtitle={card.price}
							imgSrc={card.imgSrc}
							link={`trips/${card._id}`}
						/>
					</li>
				))}
			</CardLayout>
		</Section>
	);
};
