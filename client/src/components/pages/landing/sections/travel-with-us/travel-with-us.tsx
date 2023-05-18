import React from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { Section } from 'components/layouts/section';
import { Heading } from 'components/ui/heading';
import { Paragraph } from 'components/ui/paragraph';
import { Link } from 'components/ui/link';

import { Props } from './props';
import styles from './travel-with-us.module.scss';

const cx = classNames.bind(styles);

export const TravelWithUs = ({}: Props) => {
	return (
		<BoxContainer>
			<Section className={cx('travel-with-us')} contentClassName={cx('travel-with-us__content')}>
				<img
					src={require(`${process.env.STATIC_URL}/Travel with us/footer photo.jpg`)}
					alt="Travel With us"
					className={cx('travel-with-us__image')}
				/>
				<div className={cx('travel-with-us__promotion')}>
					<Heading size="3">Пора в путешествие вместе с нами!</Heading>
					<Paragraph className={cx('travel-with-us__text')}>
						Напиши на почту и узнай подробности на{' '}
						<Link href="mailto:yourtour@gmail.com" isExternal={true}>
							yourtour@gmail.com
						</Link>
					</Paragraph>
				</div>
			</Section>
		</BoxContainer>
	);
};
