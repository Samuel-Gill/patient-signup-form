import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<>
			<div className="menu_style">
				<NavLink exact activeClassName="active_class" to="/signup"> COVID Signup Form </NavLink>
			</div>
		</>
	);
}

export default Menu;