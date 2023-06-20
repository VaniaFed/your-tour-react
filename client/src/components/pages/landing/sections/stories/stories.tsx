import React from 'react';
import { Section } from 'components/layouts/section';
import { CardLayout } from 'components/layouts/card-layout';
import { CardLarge } from 'components/ui/card-large';
import { getStories } from 'services/get-stories';

import type { FC } from 'react';

export const Stories: FC<unknown> = () => {
	const { stories } = getStories();
	return (
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
	);
};
