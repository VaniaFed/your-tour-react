import React from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
// import { Links } from 'components/row-layout';
import { Paragraph } from 'components/ui/paragraph';

import { TypeLink } from 'types';
import { Props } from './props';
import styles from './footer.module.scss';

export const Footer = ({ className }: Props) => {
	const cx = classNames.bind(styles);

	const links: TypeLink[] = [
		{
			text: 'instagram',
			href: '#',
			isIcon: true,
			iconType: 'inst',
		},
		{
			text: 'facebook',
			href: '#',
			isIcon: true,
			iconType: 'fb',
		},
		{
			text: 'vkontakte',
			href: '#',
			isIcon: true,
			iconType: 'vk',
		},
	];
	return (
		<footer className={cx('footer', className)}>
			<BoxContainer>
				<div className={cx('footer__socials')}>
					<Paragraph className={cx('footer__paragraph')}>Наши социальные сети</Paragraph>
					{/* <LinksLayout links={links} className={cx('footer__links')} activeColor="green">aaa</LinksLayout> */}
				</div>
			</BoxContainer>
		</footer>
	);
};
