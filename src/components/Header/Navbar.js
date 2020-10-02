import React from "react";
import { MenuItems } from "../../assets/menuItems";

const Navbar = ({ logo, openSignInModal, loggedUser }) => {
	const SignInModal = () => {
		openSignInModal();
	};

	return (
		<div className="px-8 bg-customcolor-header fixed top-0 z-30 pt-6  w-full flex flex-row justify-between text-white">
			<a href="/" className="flex flex-row brandname">
				<img alt="logo" src={logo} className="mr-2" />
				<span className="inline text-xl">Student-tutors</span>
			</a>
			<ul className="list flex flex-row justify-evenly ml-20 text-sm mt-2">
				{MenuItems.map((item, index) => {
					return (
						<li key={index} className="mr-24 tracking-wide">
							<a href={item.url} className={item.cName}>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
			<button
				onClick={SignInModal}
				className="border border-solid border-customcolor-header2 rounded-large px-8 h-10 text-sm hover:border-2 focus:outline-none"
			>
				{loggedUser ? loggedUser.username : "Sign In"}
			</button>
		</div>
	);
};

export default Navbar;
