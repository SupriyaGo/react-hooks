/** @format */

import React, { useContext } from "react";
import { ReducerContest } from "./reducerContext";
import ComponentB from "./ComponentB";

export default function ComponentA() {
	const [state, dispatch] = useContext(ReducerContest);
	return (
		<div>
			Component A
			<div>
				<button onClick={() => dispatch({ type: "UPDATE_POST", payload: 1 })}>
					Post 1
				</button>
				<button onClick={() => dispatch({ type: "UPDATE_POST", payload: 2 })}>
					Post 2
				</button>
				<button onClick={() => dispatch({ type: "UPDATE_POST", payload: 3 })}>
					Post 3
				</button>
				<button onClick={() => dispatch({ type: "UPDATE_POST", payload: 4 })}>
					Post 4
				</button>
			</div>
			<div>
				<ComponentB />
			</div>
		</div>
	);
}
