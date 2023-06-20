import { useAxios } from 'hooks/use-axios';

import type { Trip } from 'types';

export const getTripById = (
	id: string
): {
	trip: Trip | undefined;
	error: any;
	loading: boolean;
} => {
	const { data, error, loading } = useAxios<Trip>(`/api/trip/${id}`);
	return { trip: data, error, loading };
};
