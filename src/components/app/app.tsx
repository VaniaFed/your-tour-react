import React from 'react';

import { Footer } from 'components/footer';
import { Header } from 'components/header';

import styles from './app.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export const App = () => {
	return (
		<div className={cx('app')}>
			<Header className={cx('app__header')} />
			<Footer className={cx('page__footer')} />
		</div>
	);
};
