import React from 'react';
import classNames from 'classnames/bind';

import { Heading } from 'components/ui/heading';
import { Paragraph } from 'components/ui/paragraph';
import { Button } from 'components/ui/button';

import { Props } from './props';
import styles from './card-small.module.scss';

const cx = classNames.bind(styles);

export const CardSmall = ({ heading, subtitle, imgSrc, className }: Props) => {
	return (
		<div className={cx('card', className)}>
			<img className={cx('card__image')} src={require(`${process.env.API_URL}/static/${imgSrc}`)} alt={heading} />
			<div>
				<Heading size="3" className={cx('card__heading')}>
					{heading}
				</Heading>
				<Paragraph className={cx('card__subtitle')} size="small">
					{subtitle}
				</Paragraph>
			</div>
			<div className={cx('card__bottom')}>
				<Button variant="more">Подробнее</Button>
			</div>
		</div>
	);
};
