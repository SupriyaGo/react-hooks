/** @format */

import React, { useRef, useContext } from "react";
import { UserContext } from "./userContext";
import ComB from "./comB";

export default function ComA() {
	// getting context data
	const [userData, setUserData] = useContext(UserContext);
	// creating references for input
	const inputRef = useRef();
	// on change email function
	const handleEmaailChange = (e) => {
		e.preventDefault();
		console.log(inputRef.current.value);
		setUserData({
			...userData,
			email: inputRef.current.value,
		});
	};

	return (
		<div>
			component A<h3>Change email</h3>
			<form onSubmit={handleEmaailChange}>
				<input ref={inputRef} type="text" />
				<button>Change</button>
			</form>
			<ComB />
		</div>
	);
}
