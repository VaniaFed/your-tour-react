import { useAxios } from 'hooks/use-axios';

import type { Trip } from 'types';

export const getTripsByCategory = (
	category: string
): {
	trips: Trip[] | undefined;
	loading: boolean;
} => {
	const { data, loading } = useAxios<Trip[]>(`/api/trips/${category}`);
	return { trips: data, loading };
};
