/** @format */

import React, { createContext, useReducer } from "react";

const initialState = {
	loading: true,
	data: {},
	erroeMsg: "",
	postNo: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				...state,
				data: action.payload,
				loading: false,
			};
		case "FETCH_ERROR":
			return {
				...state,
				loading: false,
				erroeMsg: action.payload,
			};
		case "UPDATE_POST":
			return {
				...state,
				loading: true,
				postNo: action.payload,
			};
		default:
			return state;
	}
};

export const ReducerContest = createContext();

export default function ReducerProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ReducerContest.Provider value={[state, dispatch]}>
			{props.children}
		</ReducerContest.Provider>
	);
}
