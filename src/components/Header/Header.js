import React from "react";
import Navbar from "./Navbar";
import IntroPage from "./IntroPage";
import logo from "../../assets/logo.png";

const Header = ({ openSignInModal, loggedUser }) => {
	return (
		<div className="header-section bg-gradient-for-header max-h-screen pt-6 font-poppins">
			<Navbar
				logo={logo}
				openSignInModal={openSignInModal}
				loggedUser={loggedUser}
			/>
			<IntroPage />
		</div>
	);
};

export default Header;
