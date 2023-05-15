import { useState, useEffect } from 'react';
import axios from 'axios';

export function UseAxios<T>(url: string) {
	const [data, setData] = useState<T>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		try {
			axios
				.get<T>(url)
				.then((res) => res.data)
				.then((data) => setData(data));
		} catch (error) {
			console.error('AXIOS ERROR');
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, [url]);

	return {
		data,
		loading,
	};
}
