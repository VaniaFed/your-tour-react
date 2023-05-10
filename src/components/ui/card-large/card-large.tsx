import React from 'react';
import classNames from 'classnames/bind';

import { LinksLayout } from 'components/layouts/links-layout';
import { Heading } from 'components/ui/heading';
import { Paragraph } from 'components/ui/paragraph';
import { Button } from 'components/ui/button';
import { Link } from 'components/ui/link';

import styles from './card-large.module.scss';
import { Props } from './props';

const cx = classNames.bind(styles);

export const CardLarge = ({ heading, paragraph, imgSrc, listItems = [], links = [], className }: Props) => {
	return (
		<div className={cx('card-large', className)}>
			<img src={require(`${process.env.API_URL}/static/${imgSrc}`)} className={cx('card-large__image')} />
			<div>
				<Heading size="3" className={cx('card-large__heading')}>
					{heading}
				</Heading>
				<Paragraph className={cx('card-large__paragraph')}>{paragraph}</Paragraph>
				{listItems.length > 0 && (
					<ul className={cx('card-large__list')}>
						{listItems.map((item: string, key) => (
							<li className={cx('card-large__item')} key={key}>
								{item}
							</li>
						))}
					</ul>
				)}
			</div>
			<div className={cx('card-large__bottom')}>
				<Button variant="more">Подробнее</Button>
				{links.length > 0 && (
					<LinksLayout className={cx('card-large__links')} gap="35">
						{links.map((link, key) => (
							<li key={key}>
								<Link href={link.href} color="white">
									{link.text}
								</Link>
							</li>
						))}
					</LinksLayout>
				)}
			</div>
		</div>
	);
};
