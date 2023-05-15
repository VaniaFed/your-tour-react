import { UseAxios } from 'hooks/use-axios';
import { Trip } from 'types';

export const getTripById = (id: string) => {
	const { data, loading } = UseAxios<Trip>(`/api/trip/${id}`);
	return { trip: data, loading };
};
