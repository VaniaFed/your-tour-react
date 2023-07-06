import { useAxios } from 'hooks/use-axios';

import type { Trip, Review, Story, Image } from 'types';

export const TripService = {
	getById: (id: string) => {
		const { data, error, loading } = useAxios<Trip>(`/api/trip/${id}`);
		return { trip: data, error, loading };
	},
	getByCategory: (category: string) => {
		const { data, loading } = useAxios<Trip[]>(`/api/trips/${category}`);
		return { trips: data, loading };
	},
	getPhotos: () => {
		const { data, loading } = useAxios<Image[]>('/api/user-photos');
		return { photos: data, loading };
	},
	getStories: () => {
		const { data, loading } = useAxios<Story[]>('/api/stories');
		return { stories: data, loading };
	},
	getReviews: () => {
		const { data, loading } = useAxios<Review[]>('/api/reviews');
		return { reviews: data, loading };
	},
};
