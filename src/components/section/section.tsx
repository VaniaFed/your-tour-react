import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Heading } from 'components/heading';
import { Paragraph } from 'components/paragraph';

import { Props } from './props';
import styles from './section.module.scss';

const cx = classNames.bind(styles);

export const Section: FC<Props> = ({
	children,
	heading = '',
	subtitle = '',
	customSubtitle,
	className,
	headingClassName,
	contentClassName,
}) => {
	return (
		<section className={cx('section', className)}>
			<Heading size="2" className={cx('section__heading', headingClassName)}>
				{heading}
			</Heading>
			{customSubtitle || <Paragraph className={cx('section__subtitle')}>{subtitle}</Paragraph>}
			<div className={cx('section__content', contentClassName)}>{children}</div>
		</section>
	);
};
