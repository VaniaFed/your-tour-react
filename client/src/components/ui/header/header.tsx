import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import { BoxContainer } from 'components/layouts/box-container';
import { LinksLayout } from 'components/layouts/links-layout';
import { Logo } from 'components/ui/logo';
import { Link } from 'components/ui/link';
import { useSticky } from 'hooks/use-sticky';

import { StickyContext } from '../../../providers/sticky-provider';

import styles from './header.module.scss';

import type { FC } from 'react';
import type { Link as TLink } from 'types';
import type { Props } from './props';

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

export const Header: FC<Props> = ({ className }) => {
	const { sticky } = useContext(StickyContext);
	const { stickyRef, isSticky } = useSticky(false, 200);

	const headerTheme = sticky && !isSticky ? 'white' : 'black';
	return (
		<header
			className={cx('header', sticky && 'header_absolute', sticky && isSticky && 'header_sticky', className)}
			ref={stickyRef}>
			<BoxContainer size="1168" className={cx('header__container')}>
				<nav className={cx('header__nav')}>
					<Logo color={headerTheme} href="/#" />
					<LinksLayout className={cx('header__links')} gap="50">
						{links.map((link, key) => (
							<li key={key}>
								<Link href={link.href} smooth color={headerTheme}>
									{link.text}
								</Link>
							</li>
						))}
					</LinksLayout>
					<Link href="tel:+7 999 999 99 99" color={headerTheme}>
						+7 999 999 99 99
					</Link>
				</nav>
			</BoxContainer>
		</header>
	);
};
