/** @format */

import React, { useState, useMemo } from "react";

export default function MemoComponent() {
	const [toggle, setToggle] = useState(false);
	const [data, setdata] = useState(0);

	const doubleNumber = useMemo(() => handleDoubleNum(data), [data]);
	// const doubleNumber =  handleDoubleNum(data)

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
				<h3>useMemo examples</h3>
				<input
					type="text"
					onChange={(e) => setdata(parseInt(e.target.value))}
				/>
				<h2>{doubleNumber}</h2>
			</div>
		</div>
	);
}

const handleDoubleNum = (val) => {
	alert("I am calling", val * 2);
	return val * 2;
};
