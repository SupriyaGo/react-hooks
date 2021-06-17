/** @format */

import { useState, useEffect } from "react";

export const useFetch = (url) => {
	const [state, setState] = useState({ data: "", loading: true });
	useEffect(() => {
		setState({ ...state, loading: true });
		fetch(url)
			.then((v) => v.text())
			.then((val) => {
				setState({ data: val, loading: false });
			});
	}, [url]);

	return state;
};
