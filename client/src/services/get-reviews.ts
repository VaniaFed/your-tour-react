import { useAxios } from 'hooks/use-axios';

import type { Review } from 'types';

export const getReviews = (): {
	reviews: Review[] | undefined;
	loading: boolean;
} => {
	const { data, loading } = useAxios<Review[]>('/api/reviews');
	return { reviews: data, loading };
};
