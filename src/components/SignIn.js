import React, { useState } from "react";

const SignIn = ({ show, close, loggedUser }) => {
	const [input, setInput] = useState({ username: "", password: "" });
	const [error, setError] = useState(false);

	const changeValue = (e) => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value });
	};

	const showError = () => {
		return (
			<p className="text-red-600 text-xs mb-4">
				You need to enter a valid username and password
			</p>
		);
	};

	const onSubmit = (e) => {
		if (input.username.trim() === "" || input.password.trim() === "") {
			setError(true);
		} else {
			setError(false);
			console.log("The following form was submitted");
			console.log(input);
			localStorage.setItem("user", JSON.stringify(input));
			close();
		}

		e.preventDefault();
	};

	return (
		<div
			className={`${
				show ? `top-quarter` : `-top-full`
			} container absolute ml-10  flex justify-center items-center mx-auto transition-all duration-500 ease-in-out`}
		>
			<div className="w-full max-w-xs z-20 relative bg-white shadow-md rounded-btnrad px-6 pt-6 pb-8 mb-4">
				<button
					onClick={close}
					className="text-4xl  leading-4 py-3 px-2 border border-solid border-gray-400 font-extrabold bg-customcolor-header rounded-tr-btnrad focus:outline-none hover:border-2 text-white absolute top-0 right-0"
				>
					&times;
				</button>

				{/** Beginning of form section */}

				<form onSubmit={onSubmit} className="relative mt-10">
					<div className="flex flex-row justify-between">
						<a href="/" className="flex flex-row brandname -ml-2">
							<svg
								width="40"
								height="30"
								viewBox="0 0 480 393"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0)">
									<path
										d="M368.97 73.205L371.575 75.6918L368.97 73.2052L354.676 85.423L352.698 87.1136L354.111 89.3932L396.055 157.066L397.469 159.348L400.185 158.84C412.438 156.544 423.371 160.339 427.86 167.582C432.349 174.824 429.979 184.845 421.03 192.471L419.047 194.162L420.462 196.445L436.891 222.951C437.376 223.735 437.511 224.866 436.86 226.238C436.207 227.614 434.826 229.034 432.759 230.001C430.691 230.969 428.567 231.19 426.886 230.906C425.209 230.623 424.196 229.903 423.711 229.12L407.282 202.613L405.867 200.33L403.151 200.839C390.898 203.135 379.965 199.339 375.476 192.097C370.987 184.854 373.357 174.834 382.306 167.207L384.289 165.517L382.874 163.234L343.99 100.497L341.584 96.6145L338.215 99.4938L316.586 117.981L314.608 119.672L316.021 121.951L344.083 167.227C345.435 169.409 345.515 172.808 342.237 178.136C339.003 183.391 332.925 189.769 323.765 197.238C307.866 210.203 286.379 223.325 263.268 234.141C240.156 244.958 215.723 253.326 194.516 257.727L195.311 260.223L194.516 257.727C182.298 260.262 172.825 261.163 165.996 260.617C159.072 260.064 155.849 258.134 154.497 255.953L126.435 210.677L125.022 208.398L122.31 208.902L50.4565 222.27L50.4564 222.27C46.9452 222.923 44.742 221.683 44.0359 220.539C43.3283 219.393 43.3577 217.108 45.9243 214.924L45.9246 214.924L178.351 102.19L178.351 102.19C179.672 101.065 181.399 100.257 183.207 99.9173L183.208 99.9172L364.406 65.8743C367.918 65.2146 370.129 66.4506 370.841 67.5945C371.551 68.7373 371.529 71.0179 368.97 73.205ZM186.653 108.828L185.707 109.006L185.016 109.594L77.2787 201.31L67.6422 209.514L80.8345 207.059L228.402 179.606L229.356 179.429L230.051 178.835L337.638 86.8759L347.256 78.6549L334.071 81.1321L186.653 108.828ZM330.473 175.296L334.612 166.471L328.408 169.375L305.898 133.055L303.491 129.173L300.123 132.052L236.729 186.238L236.728 186.238C236.071 186.8 235.306 187.289 234.469 187.681C233.634 188.072 232.742 188.358 231.84 188.526L231.84 188.526L144.888 204.702L140.267 205.562L142.674 209.444L167.028 248.739L167.94 250.209L169.739 250.52C173.268 251.128 182.59 251.05 199.735 247.012L198.655 243.939L199.735 247.012C218.171 242.67 238.973 235.279 258.351 226.21C277.729 217.141 296.278 206.116 310.596 195.129L308.124 192.535L310.596 195.129C323.911 184.911 329.116 178.191 330.473 175.296ZM388.656 185.928C390.556 188.994 393.902 190.729 397.332 191.308C400.762 191.887 404.506 191.377 407.849 189.813C411.192 188.248 413.742 185.812 415.073 183.005C416.404 180.198 416.579 176.815 414.679 173.75C412.779 170.684 409.433 168.949 406.002 168.37C402.573 167.792 398.828 168.301 395.486 169.866C392.143 171.43 389.593 173.866 388.262 176.673C386.93 179.48 386.756 182.863 388.656 185.928Z"
										fill="#6740AA"
										stroke="#6740AA"
										strokeWidth="7"
									/>
									<path
										d="M250.472 217.846C249.033 218.641 247.563 219.124 246.06 219.296C244.563 219.438 243.172 219.274 241.887 218.804C240.587 218.316 239.504 217.53 238.636 216.446L241.668 214.77C242.501 215.654 243.534 216.221 244.769 216.472C246.009 216.691 247.338 216.41 248.756 215.627C250.11 214.878 250.935 213.983 251.231 212.942C251.533 211.87 251.305 210.844 250.547 209.864C249.953 209.096 249.241 208.598 248.411 208.371C247.581 208.144 246.725 208.095 245.844 208.225C244.963 208.355 243.828 208.599 242.438 208.956C240.732 209.404 239.308 209.697 238.165 209.835C237.044 209.961 235.888 209.832 234.698 209.447C233.514 209.032 232.439 208.2 231.473 206.95C230.627 205.855 230.178 204.717 230.129 203.538C230.08 202.358 230.419 201.239 231.146 200.179C231.894 199.107 232.977 198.18 234.394 197.397C236.436 196.268 238.468 195.817 240.488 196.045C242.529 196.261 244.235 197.102 245.605 198.566L242.479 200.294C241.78 199.582 240.822 199.152 239.605 199.001C238.374 198.832 237.122 199.098 235.851 199.8C234.663 200.457 233.917 201.281 233.612 202.272C233.293 203.244 233.527 204.239 234.314 205.257C234.879 205.988 235.558 206.462 236.352 206.682C237.167 206.89 237.995 206.94 238.834 206.833C239.679 206.695 240.814 206.452 242.24 206.103C243.961 205.673 245.4 205.399 246.557 205.281C247.7 205.143 248.874 205.276 250.079 205.68C251.268 206.065 252.354 206.891 253.334 208.16C254.092 209.14 254.524 210.218 254.63 211.394C254.735 212.569 254.444 213.731 253.755 214.88C253.067 216.028 251.972 217.017 250.472 217.846ZM259.633 183.821L261.283 185.954L255.343 189.236L269.227 207.195L266.382 208.767L252.498 190.808L246.526 194.107L244.877 191.974L259.633 183.821Z"
										fill="#252BAC"
									/>
								</g>
								<defs>
									<clipPath id="clip0">
										<rect
											width="367.824"
											height="278.726"
											fill="white"
											transform="matrix(0.90572 -0.423877 0.526818 0.849978 0 156.088)"
										/>
									</clipPath>
								</defs>
							</svg>
							<span className="inline text-base font-bold text-black text-opacity-75">
								Student
								<span className="text-opacity-100 text-customcolor-header font-extrabold text-lg">
									-
								</span>
								tutors
							</span>
						</a>
						<small className="text-right leading-tight text-blue-600">
							<a className="text-xs font-semibold" href="/">
								No account?
								<br />
								Sign up
							</a>
						</small>
					</div>

					<p className="text-4xl text-left leading-tight text-black text-black text-opacity-75 font-bold mb-8 mt-6">
						Sign in
					</p>
					{error ? showError() : null}
					<div className="mb-4">
						<label
							className="block text-left text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
						>
							Username
						</label>
						<input
							onChange={changeValue}
							className={`${
								error ? `border border-red-600 border-solid` : null
							} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
							id="username"
							type="text"
							name="username"
							placeholder="Username"
							value={input.username}
						/>
					</div>
					<div className="mb-8">
						<label
							className="block text-left text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							onChange={changeValue}
							className={`${
								error ? `border border-red-600 border-solid` : null
							} shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
							name="password"
							id="password"
							type="password"
							placeholder="Password"
							value={input.password}
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-customcolor-header hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign in
						</button>
						<a
							className="inline-block align-baseline font-semibold text-sm text-blue-600 hover:text-blue-700"
							href="/"
						>
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
