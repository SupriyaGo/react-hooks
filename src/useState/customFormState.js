/** @format */

import React from "react";
import { useForm } from "./useForm";

export default function CustomFormvalues() {
	const [values, handleChange] = useForm({
		name: "",
		email: "",
		password: "",
	});

	return (
		<div>
			<h2>hello</h2>
			<input
				placeholder="Enter name"
				name="name"
				value={values.name}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="email"
				placeholder="Enter email"
				value={values.email}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				placeholder="Enter password"
				value={values.password}
				onChange={handleChange}
			/>
		</div>
	);
}
