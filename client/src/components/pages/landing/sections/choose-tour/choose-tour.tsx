import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { Section } from 'components/layouts/section';
import { Tabs } from 'components/ui/tabs';
import { CardSmall } from 'components/ui/card-small';
import { CardLayout } from 'components/layouts/card-layout';

import { tabs, tripCards } from './data';
import { Props } from './props';
import styles from './choose-tour.module.scss';

const cx = classNames.bind(styles);

export const ChooseTour = ({ className }: Props) => {
	const [data, setData] = React.useState(null);

	fetch('/api')
		.then((res) => res.json())
		.then((data) => setData(data))
		.catch((err) => console.error(err));

	useEffect(() => {
		console.log(data);
	}, [data]);

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
