/** @format */

import React, { useEffect, useState } from "react";

export default function List({ list, handleInput }) {
	const [state, setstate] = useState("");

	useEffect(() => {
		console.log("list:", list);
		setstate(handleInput());
	}, [handleInput]);
	return (
		<div>
			{state},{state * 2},{state * 2 * 2}
		</div>
	);
}
