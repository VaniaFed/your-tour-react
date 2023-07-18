import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { BoxContainer } from 'components/layouts/box-container';
import { Section } from 'components/layouts/section';
import { Paragraph } from 'components/ui/paragraph';
import { Heading } from 'components/ui/heading';
import { TripService } from 'services/trip-service';

import styles from './trip-block.module.scss';

import type { FC } from 'react';

const cx = classNames.bind(styles);

interface TripParams {
	tripId: string;
}

export const TripBlock: FC<unknown> = () => {
	const { tripId } = useParams<keyof TripParams>() as TripParams;

	const { trip, loading, error } = TripService.getById(tripId);

	const navigate = useNavigate();

	useEffect(() => {
		if (error && error.status === 404) {
			navigate('/not-found');
		}
	}, [error]);

	let image;
	if (trip) {
		image = encodeURI(require(process.env.STATIC_URL + '/' + trip.imgSrc));
	}

	return (
		<>
			{loading ? (
				<Section heading="Loading...">Your content</Section>
			) : (
				<section
					className={cx('trip-block')}
					style={{
						background: `linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 20.9%), linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${
							image as string
						}) no-repeat bottom`,
						backgroundSize: 'cover',
					}}>
					<BoxContainer className={cx('trip-block__container')}>
						<section className={cx('trip-block__content')}>
							<Paragraph size="big" className={cx('trip-block__category')}>
								{trip?.category}
							</Paragraph>
							<Heading className={cx('trip-block__heading')} size="2">
								{trip?.name}
							</Heading>
						</section>
					</BoxContainer>
				</section>
			)}
		</>
	);
};
