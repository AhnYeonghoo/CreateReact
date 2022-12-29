import React from "react";

export default function AppWrap() {
	return (
		<div>
			<Navbar>
				<Avatar
					image='https://images.unsplash.com/photo-1664574652984-5b5f769bef07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
					name='Bob'
					size={200}
				/>
				<p>안녕하세요!</p>
			</Navbar>
		</div>
	);
}

function Navbar({ children }) {
	return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
	return (
		<div>
			<img
				src={image}
				alt={`${name}`}
				width={size}
				height={size}
				style={{ borderRadius: "50%" }}
			/>
		</div>
	);
}
