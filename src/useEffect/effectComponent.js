/** @format */

import React from "react";
import { useFetch } from "./useFetch";

export default function EffectComponent() {
	const { data, loading } = useFetch("http://numbersapi.com/43/trivia");
	if (loading) {
		return <h3>Loading...</h3>;
	}
	return (
		<div>
			<h3>{data}</h3>
		</div>
	);
}
