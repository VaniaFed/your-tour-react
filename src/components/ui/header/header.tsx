import React from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { LinksLayout } from 'components/layouts/links-layout';
import { Logo } from 'components/ui/logo';
import { Link } from 'components/ui/link';

import { TypeLink } from 'types';
import { Props } from './props';
import styles from './header.module.scss';

const links: TypeLink[] = [
	{
		text: 'Туры',
		href: '#',
	},
	{
		text: 'Создать тур',
		href: '#',
	},
	{
		text: 'Отзывы',
		href: '#',
	},
	{
		text: 'Истории',
		href: '#',
	},
];

const cx = classNames.bind(styles);

export const Header = ({ className }: Props) => {
	return (
		<header className={cx('header', className)}>
			<BoxContainer size="1168" className={cx('header__container')}>
				<nav className={cx('header__nav')}>
					<Logo />
					<LinksLayout className={cx('header__links')} gap="50">
						{links.map((link, key) => (
							<li key={key}>
								<Link href={link.href} target="_blank" color="white">
									{link.text}
								</Link>
							</li>
						))}
					</LinksLayout>
					<Link href="tel:+7 999 999 99 99" color="white">
						+7 999 999 99 99
					</Link>
				</nav>
			</BoxContainer>
		</header>
	);
};