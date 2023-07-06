import React from 'react';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames/bind';
import { BoxContainer } from 'components/layouts/box-container';
import { Heading } from 'components/ui/heading';
import { Paragraph } from 'components/ui/paragraph';
import { Button } from 'components/ui/button';

import styles from './first-screen.module.scss';

import type { FC } from 'react';
import type { Props } from './props';

const cx = classNames.bind(styles);

export const FirstScreen: FC<Props> = ({ className }) => {
	return (
		<section className={cx('first-screen', className)}>
			<BoxContainer className={cx('first-screen__content')}>
				<Heading size="1" className={cx('first-screen__heading')}>
					Идеальные путешествия существуют
				</Heading>
				<Paragraph className={cx('first-screen__paragraph')}>
					Идейные соображения высшего порядка, а также рамки и место обучения кадров
				</Paragraph>
				<HashLink to="/#tours" smooth>
					<Button variant="small">Найти тур</Button>
				</HashLink>
			</BoxContainer>
		</section>
	);
};
