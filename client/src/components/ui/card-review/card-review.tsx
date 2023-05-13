import React from 'react';
import classNames from 'classnames/bind';

import { Paragraph } from 'components/ui/paragraph';
import { Heading } from 'components/ui/heading';
import { Avatar } from 'components/ui/avatar';

import styles from './card-review.module.scss';
import { Props } from './props';

const cx = classNames.bind(styles);

export const CardReview = ({ text, username, tourName, avatarSrc, className }: Props) => {
	return (
		<div className={cx('card-review', className)}>
			{text.map((paragraph, key) => (
				<Paragraph size="big" className={cx('card-review__paragraph')} key={key}>
					{paragraph}
				</Paragraph>
			))}
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
