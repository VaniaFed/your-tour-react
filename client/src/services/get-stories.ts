import { UseAxios } from 'hooks/use-axios';
import { Story } from 'types';

export const getStories = () => {
	const { data, loading } = UseAxios<Story[]>(`/api/stories`);
	return { stories: data, loading };
};
