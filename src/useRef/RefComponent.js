/** @format */

import React, { useState, useRef, useEffect } from "react";

export default function RefComponent(props) {
	const [ccNumber, setCcNumber] = useState("");
	const [expiry, setExpiry] = useState("");
	const [cvv, setCvv] = useState("");

	// references
	const ccNumberRef = useRef(null);
	const expiryInputRef = useRef(null);
	const cvvInputRef = useRef(null);

	// Method 1: useEffect & ref

	useEffect(() => {
		ccNumberRef.current && ccNumberRef.current.focus();
	}, []);

	useEffect(() => {
		if (ccNumber.length === 16) {
			expiryInputRef.current.focus();
		}
	}, [ccNumber.length]);

	const onChangeCcNumber = (e) => {
		setCcNumber(e.target.value);
	};

	useEffect(() => {
		if (expiry.length === 4) {
			cvvInputRef.current.focus();
		}
	}, [expiry.length]);

	const onChangeExpiry = (e) => {
		setExpiry(e.target.value);
	};

	const onChangeCvv = (e) => {
		setCvv(e.target.value);
	};

	// if (props.isLoading) {
	// 	return <h1>loading state...</h1>;
	// }

	return (
		<div>
			<h1>Credit Card Input</h1>
			<div>
				<label>Credit Card Number</label>
				<input
					type="text"
					maxLength={16}
					value={ccNumber}
					onChange={onChangeCcNumber}
					ref={ccNumberRef}
					//Method 2: HTML input autoFocus attribute
					// autoFocus
				/>
			</div>
			<div>
				<label>Expiry</label>
				<input
					type="text"
					maxLength={4}
					value={expiry}
					onChange={onChangeExpiry}
					ref={expiryInputRef}
				/>
			</div>
			<div>
				<label>CVV</label>
				<input
					type="text"
					maxLength={3}
					value={cvv}
					onChange={onChangeCvv}
					ref={cvvInputRef}
				/>
			</div>
		</div>
	);
}
