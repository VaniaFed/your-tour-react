import { useAxios } from 'hooks/use-axios';

import type { Image } from 'types';

export const getUserPhotos = (): {
	photos: Image[] | undefined;
	loading: boolean;
} => {
	const { data, loading } = useAxios<Image[]>('/api/user-photos');
	return { photos: data, loading };
};
