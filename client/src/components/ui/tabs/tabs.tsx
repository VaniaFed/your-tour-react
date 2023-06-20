import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { TabItem } from 'components/ui/tabs/tab-item';

import styles from './tabs.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const Tabs: FC<Props> = ({ elements, value, className, onChange = () => {} }) => {
	const [tab, setTab] = useState(value);
	return (
		<menu className={cx('tabs', className)}>
			{elements.map((tabItem, i) => (
				<li className={cx('tabs__item', tabItem.text === tab && 'tabs__item_active')} key={i}>
					<TabItem
						label={tabItem.text}
						onClick={(label) => {
							setTab(label);
							onChange(label);
						}}
					/>
				</li>
			))}
		</menu>
	);
};
