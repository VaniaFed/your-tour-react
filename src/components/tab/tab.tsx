import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { TabItem } from 'components/tab-item';

import { Props } from './props';
import styles from './tab.module.scss';

const cx = classNames.bind(styles);

export const Tab: FC<Props> = ({ items, filter, className }) => {
	return (
		<ul className={cx('tab', className)}>
			{items.map((tabItem, i) => (
				<li
					key={i}
					className={cx(
						'tab__item',
						tabItem.text.toLowerCase() === filter.toLowerCase() && 'tab__item_active'
					)}>
					<TabItem text={tabItem.text} />
				</li>
			))}
		</ul>
	);
};
