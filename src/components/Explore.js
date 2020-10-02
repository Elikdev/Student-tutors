import React from "react";

const Explore = () => {
	return (
		<div data-aos="fade-up" className="container mx-auto w-2/3">
			<p className="text-5xl text-customcolor-header leading-tight font-semibold text-center">
				Different topics on various courses/subjects
			</p>
			<p className="text-base text-gray-800 mt-5">
				Choose from over 10,000 topics that have been made
				<br />
				easy and fun to understand.
			</p>
			<button className="bg-customcolor-header mt-5 mb-5 text-base shadow-lg hover:bg-gradient-for-hoverbtn focus:outline-none text-white rounded-btnrad w-32 px-2 py-2">
				Explore
			</button>
		</div>
	);
};

export default Explore;
