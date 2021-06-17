/** @format */

import React, { useEffect, useContext } from "react";
import { ReducerContest } from "./reducerContext";

export default function ComponentB() {
	const [state, dispatch] = useContext(ReducerContest);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${state.postNo}`)
			.then((res) => res.json())
			.then((r) => dispatch({ type: "FETCH_SUCCESS", payload: r.title }))
			.catch((error) =>
				dispatch({ type: "FETCH_ERROR", payload: "Something went wrong" })
			);
	}, [state.postNo]);
	return (
		<div>
			component B:
			<div>
				{state.loading ? "Loading..." : state.data}
				{state.error ? state.errorMsg : null}
			</div>
		</div>
	);
}
