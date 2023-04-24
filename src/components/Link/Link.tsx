import React from 'react';
import classNames from 'classnames/bind';

import styles from './link.module.scss';
import { Props } from './props';

export const Link = ({
	children,
	href = '#',
	target = '_blank',
	iconType,
	underline = true,
	size,
	color,
	activeColor,
	className,
}: Props) => {
	const cx = classNames.bind(styles);
	const linkClass = cx(
		'link',
		iconType && [`link_${iconType}`],
		underline && 'link_underline',
		size && [`link_${size}`],
		color && [`link_${color}`],
		activeColor && [`link_active_${activeColor}`],
		className
	);
	return (
		<a href={href} target={target} className={linkClass}>
			{children}
		</a>
	);
};
