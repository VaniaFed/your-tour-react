import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Heading } from 'components/ui/heading';
import { Paragraph } from 'components/ui/paragraph';

import { Props } from './props';
import styles from './section.module.scss';

const cx = classNames.bind(styles);

export const Section = ({
	children,
	heading,
	subtitle,
	customSubtitle,
	className,
	headingClassName,
	contentClassName,
}: Props) => {
	const isSectionWithHeader = heading || subtitle || customSubtitle;
	return (
		<section className={cx('section', className)}>
			{heading && (
				<Heading size="2" className={cx('section__heading', headingClassName)}>
					{heading}
				</Heading>
			)}
			{subtitle && <Paragraph className={cx('section__subtitle')}>{subtitle}</Paragraph>}
			{customSubtitle}
			<div className={cx(isSectionWithHeader && 'section__content', contentClassName)}>{children}</div>
		</section>
	);
};
