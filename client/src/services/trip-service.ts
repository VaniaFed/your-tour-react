import { useAxios } from 'hooks/use-axios';

import type { Trip, Review, Story, Image } from 'types';

export const TripService = {
	getById: (id: string) => {
		const { data, error, loading } = useAxios<Trip>(`https://your-tour-react-api.vercel.app/api/trip/${id}`);
		return { trip: data, error, loading };
	},
	getByCategory: (category: string) => {
		const { data, loading } = useAxios<Trip[]>(`https://your-tour-react-api.vercel.app/api/trips/${category}`);
		return { trips: data, loading };
	},
	getPhotos: () => {
		const { data, loading } = useAxios<Image[]>('https://your-tour-react-api.vercel.app/api/user-photos');
		return { photos: data, loading };
	},
	getStories: () => {
		const { data, loading } = useAxios<Story[]>('https://your-tour-react-api.vercel.app/api/stories');
		return { stories: data, loading };
	},
	getReviews: () => {
		const { data, loading } = useAxios<Review[]>('https://your-tour-react-api.vercel.app/api/reviews');
		return { reviews: data, loading };
	},
};
