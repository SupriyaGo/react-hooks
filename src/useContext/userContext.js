/** @format */

import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [userData, setUserData] = useState({
		fName: "Supriya",
		lName: "Gorai",
		email: "supriyagorai1995@gmail.com",
	});

	return (
		<UserContext.Provider value={[userData, setUserData]}>
			{props.children}
		</UserContext.Provider>
	);
};
