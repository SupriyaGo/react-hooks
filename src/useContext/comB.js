/** @format */

import React, { useContext, useRef } from "react";
import { UserContext } from "./userContext";

export default function ComB() {
	// getting context data
	const [userData, setUserData] = useContext(UserContext);

	return (
		<div>
			component B
			<ul>
				<li>{userData.fName}</li>
				<li>{userData.lName}</li>
				<li>{userData.email}</li>
			</ul>
		</div>
	);
}
