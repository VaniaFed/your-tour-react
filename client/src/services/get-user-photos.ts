import { UseAxios } from 'hooks/use-axios';
import { Image } from 'types';

export const getUserPhotos = () => {
	const { data, loading } = UseAxios<Image[]>(`/api/user-photos`);
	return { photos: data, loading };
};
