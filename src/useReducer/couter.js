/** @format */

import React, { useReducer } from "react";

// our reducer state
const initialState = {
	count: 0,
	updated: false,
};

// creating reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return {
				count: state.count + 1,
				updated: true,
			};
		case "decrement":
			return {
				count: state.count - 1,
				updated: true,
			};
		case "increment2":
			return {
				count: state.count + action.payload,
				updated: true,
			};
		case "decrement2":
			return {
				count: state.count - action.payload,
				updated: true,
			};
		case "reset":
			return {
				...state,
				count: 0,
			};
		default:
			return state;
	}
};

export default function Couter() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<div>Counter: {state.count}</div>
			<button onClick={() => dispatch({ type: "increment" })}>increment</button>
			<button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
			<div>
				<button onClick={() => dispatch({ type: "increment2", payload: 5 })}>
					increment2
				</button>
				<button onClick={() => dispatch({ type: "decrement2", payload: 5 })}>
					decrement2
				</button>
			</div>

			<div>
				<button onClick={() => dispatch({ type: "reset" })}>reset</button>
			</div>
		</div>
	);
}
