import React from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './link.module.scss';
import { NavHashLink } from 'react-router-hash-link';

const cx = classNames.bind(styles);

export const Link = ({
	isExternal = false,
	smooth = false,
	children,
	href = '#',
	level = 'p-normal',
	color = 'black',
	underline = true,
	iconType,
	className,
	...rest
}: Props) => {
	const linkClass = cx(
		'link',
		`link_level_${level}`,
		color && [`link_color_${color}`],
		underline && 'link_underline',
		iconType && [`link_${iconType}`],
		className
	);
	return (
		<>
			{isExternal ? (
				<a className={linkClass} href={href} {...rest}>
					{children}
				</a>
			) : (
				<NavHashLink className={linkClass} to={href} smooth={smooth}>
					{children}
				</NavHashLink>
			)}
		</>
	);
};
