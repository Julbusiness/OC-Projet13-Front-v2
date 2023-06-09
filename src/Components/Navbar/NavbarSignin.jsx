import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";

export default function NavbarSignin() {
	return (
		<nav className="main-nav">
			<NavLink to="/" className="main-nav-logo">
				<img
					className="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</NavLink>
			<div>
				<NavLink to="/user/login" className="main-nav-item">
					<i className="fa fa-user-circle"></i>
					Sign In
				</NavLink>
			</div>
		</nav>
	);
}
