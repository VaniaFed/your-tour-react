import React, { HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import { Heading } from 'components/ui/heading';
import { Paragraph } from 'components/ui/paragraph';

import { Props } from './props';
import styles from './section.module.scss';
import { BoxContainer } from '../box-container';

const cx = classNames.bind(styles);

export const Section = ({
	children,
	withContainer = true,
	heading,
	subtitle,
	customSubtitle,
	className,
	headingClassName,
	contentClassName,
	...rest
}: Props & HTMLAttributes<HTMLElement>) => {
	const isSectionWithHeader = heading || subtitle || customSubtitle;

	const sectionElements = (
		<>
			{heading && (
				<Heading size="2" className={cx('section__heading', headingClassName)}>
					{heading}
				</Heading>
			)}
			{subtitle && <Paragraph className={cx('section__subtitle')}>{subtitle}</Paragraph>}
			{customSubtitle}
			<div className={cx(isSectionWithHeader && 'section__content', contentClassName)}>{children}</div>
		</>
	);
	return (
		<section className={cx('section', className)} {...rest}>
			{withContainer ? <BoxContainer>{sectionElements}</BoxContainer> : sectionElements}
		</section>
	);
};
