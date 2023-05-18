import React from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { LinksLayout } from 'components/layouts/links-layout';
import { Logo } from 'components/ui/logo';
import { Link } from 'components/ui/link';

import { Link as TLink } from 'types';
import { Props } from './props';
import styles from './header.module.scss';
import { UseSticky } from 'hooks/use-sticky';

const links: TLink[] = [
	{
		text: 'Туры',
		href: '/#tours',
	},
	{
		text: 'Создать тур',
		href: '/#build-tour',
	},
	{
		text: 'Отзывы',
		href: '/#reviews',
	},
	{
		text: 'Истории',
		href: '/#stories',
	},
];

const cx = classNames.bind(styles);

export const Header = ({ className }: Props) => {
	const { stickyRef, isSticky } = UseSticky(false, 200);

	return (
		<header className={cx('header', isSticky && 'header_sticky', className)} ref={stickyRef}>
			<BoxContainer size="1168" className={cx('header__container')}>
				<nav className={cx('header__nav')}>
					<Logo color={isSticky ? 'black' : 'white'} href="/#" />
					<LinksLayout className={cx('header__links')} gap="50">
						{links.map((link, key) => (
							<li key={key}>
								<Link href={link.href} smooth color={isSticky ? 'black' : 'white'}>
									{link.text}
								</Link>
							</li>
						))}
					</LinksLayout>
					<Link href="tel:+7 999 999 99 99" color={isSticky ? 'black' : 'white'}>
						+7 999 999 99 99
					</Link>
				</nav>
			</BoxContainer>
		</header>
	);
};
