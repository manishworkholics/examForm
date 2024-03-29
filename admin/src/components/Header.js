import React from "react";
import { Link } from "react-router-dom";
// import Logo from '../assets/logodavv.png'
const Header = () => {

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-primary  sticky-top  navbardetails">
				<div className="container-fluid px-2 ">
					<Link className="navbar-brand fontcolourwhite .text-white" to="/">
						{/* <img src={Logo} className="logotop img-fluid"/> */}

					</Link>
					<button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon "></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
							<li className="nav-item"><Link className="nav-link " to="/">Movies</Link></li>
							<li className="nav-item"><Link className="nav-link " to="subscription">Subscription</Link></li>
							<li className="nav-item"><Link className="nav-link " to="users-management">User-Management</Link></li>
							<li className="nav-item"><Link className="nav-link " to="login">Logout</Link></li>
							
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;