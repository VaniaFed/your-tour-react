import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Heading } from 'components/ui/heading';
import { Paragraph } from 'components/ui/paragraph';
import { Button } from 'components/ui/Button';

import styles from './card-small.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const CardSmall: FC<Props> = ({ heading, subtitle, imgSrc, className, link = '#' }) => {
	return (
		<div className={cx('card', className)}>
			<img className={cx('card__image')} src={require(`${process.env.STATIC_URL}/${imgSrc}`)} alt={heading} />
			<div>
				<Heading size="3" className={cx('card__heading')}>
					{heading}
				</Heading>
				<Paragraph className={cx('card__subtitle')} size="small">
					{subtitle}
				</Paragraph>
			</div>
			<div className={cx('card__bottom')}>
				<Link to={link}>
					<Button variant="more">Подробнее</Button>
				</Link>
			</div>
		</div>
	);
};
