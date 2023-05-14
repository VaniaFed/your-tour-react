// import { useState, useEffect } from 'react';
// import { getTripsByCategory } from 'services/get-trips-by-category';
// import { Trip } from 'types';

// export const UseTripsByCategory = (category: string) => {
// 	const [trips, setTrips] = useState<Trip[]>([]);
// 	const [loading, setLoading] = useState(false);

// 	// TODO: add redux with memoized reselect

// 	useEffect(() => {
// 		setLoading(true);
// 		try {
// 			getTripsByCategory(category).then((dataTrips) => {
// 				setTrips(dataTrips);
// 			});
// 		} catch (error) {
// 			console.log(error);
// 		} finally {
// 			setLoading(false);
// 		}
// 	}, [category]);

// 	return {
// 		trips,
// 		loading,
// 	};
// };
