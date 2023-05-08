import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/box-container';
import { Heading } from 'components/heading';
import { Paragraph } from 'components/paragraph';
import { Button } from 'components/button';

import { Props } from './props';
import styles from './first-screen.module.scss';

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
				<Button variant="small">Найти тур</Button>
			</BoxContainer>
		</section>
	);
};
