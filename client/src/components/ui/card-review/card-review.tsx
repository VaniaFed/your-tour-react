import React from 'react';
import classNames from 'classnames/bind';
import { Avatar } from 'components/ui/avatar';
import { Heading } from 'components/ui/heading';
import { Paragraph } from 'components/ui/paragraph';

import styles from './card-review.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const CardReview: FC<Props> = ({ text, username, tourName, avatarSrc, className }) => {
	return (
		<div className={cx('card-review', className)}>
			<ul>
				{text.map((paragraph, key) => (
					<li className={cx('card-review__paragraph-item')} key={key}>
						<Paragraph size="big" key={key}>
							{paragraph}
						</Paragraph>
					</li>
				))}
			</ul>
			<div className={cx('card-review__bottom')}>
				<div>
					<Heading size="3">{username}</Heading>
					<Paragraph size="small" className={cx('card-review__trip')}>
						Тур: {tourName}
					</Paragraph>
				</div>
				<Avatar src={avatarSrc} alt="Мария" />
			</div>
		</div>
	);
};
