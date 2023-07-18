import React from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Header } from 'components/ui/header';
import { Footer } from 'components/ui/footer';
import { MainLayout } from 'components/layouts/main-layout';

import styles from './page-layout.module.scss';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const PageLayout: FC<unknown> = () => {
	return (
		<>
			<Header className={cx('page-layout__header')} />
			<MainLayout>
				<Outlet />
			</MainLayout>
			<Footer className={cx('page-layout__footer')} />
		</>
	);
};
