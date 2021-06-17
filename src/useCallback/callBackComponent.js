/** @format */

import React, { useState, useCallback } from "react";
import List from "./list";

export default function CallBackComponent() {
	const [toggle, setToggle] = useState(false);
	const [data, setdata] = useState(0);

	const handleInput = useCallback(() => {
		return data;
	}, [data]);

	return (
		<div
			style={{
				display: "flex",
				flex: 1,
			}}
		>
			<div
				style={{
					backgroundColor: toggle ? "#333" : "#fff",
					color: toggle ? "#fff" : "#333",
					height: 500,
					width: "100%",
				}}
			>
				<button onClick={() => setToggle((c) => !c)}>Change</button>
				<h3>use callback examples</h3>
				<input
					type="text"
					onChange={(e) => setdata(parseInt(e.target.value))}
				/>
				<List list={data} handleInput={handleInput} />
			</div>
		</div>
	);
}
