import React from 'react';
import classNames from 'classnames/bind';

import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { MainLayout } from 'components/main-layout';
import { FirstScreen } from 'components/first-screen';
import { ChooseTour } from 'components/choose-tour';
import { Reviews } from 'components/reviews';
import { Gallery } from 'components/gallery';
import { Stories } from 'components/stories';

import styles from './app.module.scss';

const cx = classNames.bind(styles);

export const App = () => {
	return (
		<div className={cx('app')}>
			<Header className={cx('app__header')} />
			<MainLayout>
				<FirstScreen />
				<ChooseTour />
				<Reviews />
				<Gallery />
				<Stories />
			</MainLayout>
			<Footer className={cx('page__footer')} />
		</div>
	);
};
