import React from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Heading } from 'components/ui/heading';

import { getTripById } from 'services/get-trip-by-id';
import { invariant } from 'utils/invariant';
import { Props } from './props';
import styles from './trip-block.module.scss';

const cx = classNames.bind(styles);

type TripParams = {
	tripId: string;
};

export const TripBlock = ({ className }: Props) => {
	const { tripId } = useParams<TripParams>();

	invariant(tripId);

	const { trip } = getTripById(tripId);

	return (
		<div className={cx('trip-block', className)}>
			{trip && (
				<>
					<Heading>{trip.name}</Heading>
					<img src={require(`${process.env.API_URL}/static/${trip.imgSrc}`)} alt={trip.name} />
				</>
			)}
		</div>
	);
};
