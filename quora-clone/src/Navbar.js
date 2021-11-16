import React from 'react';
import './Navbar.css'
import {
    AssignmentIndOutlined,
    BorderAllRounded, ExpandMore,
    Home, Language, Link,
    NotificationsOutlined,
    PeopleAltOutlined, Search
} from "@material-ui/icons";

function Navbar(props) {
	return (
		<div className="navbar">
			<div className="qHeader_logo">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/2880px-Quora_logo_2015.svg.png" alt=""/>
				<div className="qHeader_icons">
					<div className="qHeader_icon">
						<Home/>
					</div>
					<div className="qHeader_icon">
						<BorderAllRounded/>
					</div>
					<div className="qHeader_icon">
						<AssignmentIndOutlined/>
					</div>					
					<div className="qHeader_icon">
						<PeopleAltOutlined/>
					</div>
					<div className="qHeader_icon">
						<NotificationsOutlined/>
					</div>					
				</div>
			</div>
		
		</div>
	);
}

export default Navbar;