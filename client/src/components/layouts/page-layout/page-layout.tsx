import React from 'react';
import classNames from 'classnames/bind';

import { Header } from 'components/ui/header';
import { Footer } from 'components/ui/footer';

import { Props } from './props';
import styles from './page-layout.module.scss';

const cx = classNames.bind(styles);

export const PageLayout = ({ children }: Props) => {
	return (
		<>
			<Header className={cx('page-layout__header')} />
			{children}
			<Footer className={cx('page-layout__footer')} />
		</>
	);
};
