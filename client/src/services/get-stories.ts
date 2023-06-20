import { useAxios } from 'hooks/use-axios';

import type { Story } from 'types';

export const getStories = (): {
	stories: Story[] | undefined;
	loading: boolean;
} => {
	const { data, loading } = useAxios<Story[]>('/api/stories');
	return { stories: data, loading };
};
