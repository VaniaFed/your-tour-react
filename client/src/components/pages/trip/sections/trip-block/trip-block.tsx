import React from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { Section } from 'components/layouts/section';
import { Paragraph } from 'components/ui/paragraph';
import { Heading } from 'components/ui/heading';

import { getTripById } from 'services/get-trip-by-id';
import { Props } from './props';
import styles from './trip-block.module.scss';

const cx = classNames.bind(styles);

type TripParams = {
	tripId: string;
};

export const TripBlock = ({}: Props) => {
	const { tripId } = useParams<keyof TripParams>() as TripParams;

	const { trip } = getTripById(tripId);

	let image;
	if (trip) {
		image = encodeURI(require(process.env.STATIC_URL + '/' + trip.imgSrc));
	}

	return (
		<>
			{trip ? (
				<div
					className={cx('trip-block')}
					style={{
						background: `linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 20.9%), linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${image}) no-repeat bottom`,
						backgroundSize: 'cover',
					}}>
					<BoxContainer className={cx('trip-block__container')}>
						<div className={cx('trip-block__content')}>
							<Paragraph size="big" className={cx('trip-block__category')}>
								{trip.category}
							</Paragraph>
							<Heading className={cx('trip-block__heading')} size="2">
								{trip.name}
							</Heading>
						</div>
					</BoxContainer>
				</div>
			) : (
				<Section heading="Loading...">Your content</Section>
			)}
		</>
	);
};
