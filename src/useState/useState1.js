/** @format */

import React, { useState } from "react";

export default function useState1() {
	const [name, setName] = useState("default name");
	const [{ email, pass }, setValue] = useState({
		email: "",
		pass: "",
	});

	return (
		<div>
			<h2>Name: {name}</h2>
			<button onClick={() => setName("Supu")}>change name</button>
			<div>
				<input
					type="text"
					placeholder="Email"
					value={email}
					onChange={(e) =>
						setValue((prevState) => ({
							email: e.target.value,
							pass: prevState.pass,
						}))
					}
				/>
				<input
					type="password"
					placeholder="Password"
					value={pass}
					onChange={(e) =>
						setValue((prevState) => ({
							email: prevState.email,
							pass: e.target.value,
						}))
					}
				/>
			</div>
		</div>
	);
}
