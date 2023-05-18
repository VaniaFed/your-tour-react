import { UseAxios } from 'hooks/use-axios';
import { Review } from 'types';

export const getReviews = () => {
	const { data, loading } = UseAxios<Review[]>(`/api/reviews`);
	return { reviews: data, loading };
};
