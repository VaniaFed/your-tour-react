import { UseAxios } from 'hooks/use-axios';
import { Trip } from 'types';

export const getTripsByCategory = (category: string) => {
	const { data, loading } = UseAxios<Trip[]>(`/api/trips/${category}`);
	return { trips: data, loading };
};
