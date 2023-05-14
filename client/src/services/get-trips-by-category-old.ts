import axios from 'axios';
import { Trip } from 'types';

export const getTripsByCategory = async (category: string) => {
	return await axios.get<Trip[]>(`/api/trips/${category}`).then((res) => res.data);
};
