import React from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { LinksLayout } from 'components/layouts/links-layout';
import { Paragraph } from 'components/ui/paragraph';
import { Link } from '../link';

import { Link as TLink } from 'types';
import { Props } from './props';
import styles from './footer.module.scss';

export const Footer = ({ className }: Props) => {
	const cx = classNames.bind(styles);

	const links: TLink[] = [
		{
			text: 'instagram',
			href: '#',
			iconType: 'inst',
		},
		{
			text: 'facebook',
			href: '#',
			iconType: 'fb',
		},
		{
			text: 'vkontakte',
			href: '#',
			iconType: 'vk',
		},
	];
	return (
		<footer className={cx('footer', className)}>
			<BoxContainer>
				<div className={cx('footer__socials')}>
					<Paragraph className={cx('footer__paragraph')}>Наши социальные сети</Paragraph>
					<LinksLayout className={cx('footer__links')} gap="25">
						{links.map((link, key) => (
							<li key={key}>
								<Link href={link.href} iconType={link.iconType}>
									{link.text}
								</Link>
							</li>
						))}
					</LinksLayout>
				</div>
			</BoxContainer>
		</footer>
	);
};
