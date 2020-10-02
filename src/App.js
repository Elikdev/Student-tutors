import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Explore from "./components/Explore";
import Tutor from "./components/Tutor";
import Testimonial from "./components/Testimonial";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";
import video from "./assets/img/short-video.jpg";
import image from "./assets/img/disp1.png";
import image2 from "./assets/img/elik.png";
import Aos from "aos";

import "./App.css";

function App() {
	const [show, setShow] = useState(false);
	const [user, setUser] = useState();

	useEffect(() => {
		Aos.init({ duration: 1000 });
		checkUser();
	}, [show]);

	const checkUser = () => {
		const logUser = JSON.parse(localStorage.getItem("user"));

		if (!logUser) {
			console.log("User has not been logged in");
		} else {
			setUser(logUser);
		}
	};

	const openSignInModal = () => {
		setShow(!show);
	};

	return (
		<div className="App">
			{/** Header component */}
			<Header openSignInModal={openSignInModal} loggedUser={user} />

			{show ? (
				<div
					onClick={() => {
						setShow(false);
					}}
					className="z-10 absolute top-0 left-0 bg-customcolor-header bg-opacity-47 h-full w-full"
				></div>
			) : null}

			{/** Sign-in component */}
			<SignIn
				show={show}
				close={() => {
					setShow(false);
				}}
			/>

			<div className="bg-customcolor-bgshade1 bg-opacity-25 pt-20 pb-20">
				{/** Explore component */}
				<Explore />
			</div>

			<div className="bg-customcolor-bgshade2 bg-opacity-25 pb-5">
				<div
					data-aos="fade-up"
					className="container relative mx-auto max-w-3xl"
				>
					<img
						className="w-full rounded-btnrad cursor-pointer"
						src={video}
						alt="video"
					/>
				</div>
				<Tutor /> {/** Tutor component */}
			</div>

			<div className="bg-customcolor-bgshade1 bg-opacity-25 pt-16 pb-20">
				{/** Testimonial component */}
				<Testimonial dispPic={image} dispPic2={image2} />
			</div>

			<div className="bg-gradient-for-footer pt-16 pb-6">
				{/** Footer component */}
				<Footer logo={logo} />
			</div>
		</div>
	);
}

export default App;
