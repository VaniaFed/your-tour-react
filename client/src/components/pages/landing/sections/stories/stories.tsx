import React from 'react';
import classNames from 'classnames/bind';

import { BoxContainer } from 'components/layouts/box-container';
import { Section } from 'components/layouts/section';
import { CardLayout } from 'components/layouts/card-layout';
import { CardLarge } from 'components/ui/card-large';

import { Props } from './props';
import styles from './stories.module.scss';
import { getStories } from 'services/get-stories';

const cx = classNames.bind(styles);

export const Stories = ({ className }: Props) => {
	const { stories } = getStories();

	return (
		<BoxContainer className={cx('stories', className)}>
			<Section
				id="stories"
				heading="Истории путешествий"
				subtitle="Идейные соображения высшего порядка, а также рамки и место обучения кадров">
				<CardLayout>
					{stories?.map((story, key) => (
						<li key={key}>
							<CardLarge
								heading={story.tripName}
								paragraph={story.text}
								imgSrc={story.imgSrc}
								listItems={story.list}
								links={story.socialLinks}
							/>
						</li>
					))}
				</CardLayout>
			</Section>
		</BoxContainer>
	);
};
