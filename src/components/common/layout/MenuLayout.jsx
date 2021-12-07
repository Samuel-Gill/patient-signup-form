import React from "react";
import { NavLink } from "react-router-dom";

const MenuLayout = (props) => {
	return (
		<>
			<div className={props.class}>
				<div className="menu_style">
					<NavLink exact activeClassName="active_class" to="/signup"> COVID Signup Form </NavLink>
				</div>
				{props.children}
			</div>
		</>
	);
}

export default MenuLayout;