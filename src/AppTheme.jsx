import React, { useContext } from "react";
import "./AppTheme.css";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";

export default function AppTheme() {
	return (
		<DarkModeProvider>
			<Header />
			<Main />
			<Footer />
		</DarkModeProvider>
	);
}

function Header() {
	return <header className='header'>Header</header>;
}

function Main() {
	return (
		<main className='main'>
			Main
			<Profile />
			<Products />
		</main>
	);
}

function Profile() {
	return (
		<div>
			Profile
			<User />
		</div>
	);
}

function User() {
	return <div>User</div>;
}

function Products() {
	return (
		<div>
			Products
			<ProductDetail />
		</div>
	);
}
function ProductDetail() {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	return (
		<div>
			roduct Detail
			<p>
				DarkMode:{" "}
				{darkMode ? (
					<span style={{ backgroundColor: "black", color: "white" }}>
						Dark Mode
					</span>
				) : (
					<span>Light Mode</span>
				)}
			</p>
			<button onClick={() => toggleDarkMode()}>Toggle</button>
		</div>
	);
}

function Footer() {
	return <footer className='footer'>Footer</footer>;
}
