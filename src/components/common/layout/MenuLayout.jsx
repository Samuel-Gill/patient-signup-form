import React from "react";
import { NavLink } from "react-router-dom";

const MenuLayout = (props) => {
	let date = new Date().valueOf();
	return (
		<>
			<div className={props.class}>
				<div className="menu_style">
					<NavLink exact activeClassName="active_class" to="/signup"> COVID Signup Form No. {date} </NavLink>
				</div>
				{props.children}
			</div>
		</>
	);
}

export default MenuLayout;