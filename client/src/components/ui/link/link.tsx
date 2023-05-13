import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Props } from './props';
import styles from './link.module.scss';

const cx = classNames.bind(styles);

export const Link = ({
	children,
	level = 'p-normal',
	color = 'black',
	underline = true,
	iconType,
	href = '#',
	target = '_blank',
	className,
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
		<a href={href} target={target} className={linkClass}>
			{children}
		</a>
	);
};
