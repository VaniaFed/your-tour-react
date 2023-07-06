import { useState, useEffect } from 'react';
import axios from 'axios';

interface AxiosResponse<T> {
	data: T | undefined;
	error: Response | undefined;
	loading: boolean;
}

export function useAxios<T>(url: string): AxiosResponse<T> {
	const [data, setData] = useState<T>();
	const [error, setError] = useState<Response>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios
			.get<T>(url)
			.then((res) => res.data)
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				setError(err.toJSON());
			})
			.finally(() => {
				setLoading(false);
			});
	}, [url]);
	return {
		data,
		error,
		loading,
	};
}
