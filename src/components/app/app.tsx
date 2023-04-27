import React from 'react';

import { Footer } from 'components/footer';
import { Header } from 'components/header';

import styles from './app.module.scss';
import classNames from 'classnames/bind';
import { MainLayout } from 'components/main-layout';
import { FirstScreen } from 'components/first-screen';
import { ChooseTour } from 'components/choose-tour';
import { Reviews } from 'components/reviews';
import { Stories } from 'components/stories';

const cx = classNames.bind(styles);
export const App = () => {
	return (
		<div className={cx('app')}>
			<Header className={cx('app__header')} />
			<MainLayout>
				<FirstScreen />
				<ChooseTour />
				<Reviews />
				<Stories />
			</MainLayout>
			<Footer className={cx('page__footer')} />
		</div>
	);
};
