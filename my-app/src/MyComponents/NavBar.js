import React from "react";

const NavBar = () => {
	return (
		<>
			<nav>
				<h2>abusomwan santos</h2>
				<ul class="flex">
					<li class="mr-6">
						<a class="text-blue-500 hover:text-blue-800" href="#">
							about
						</a>
					</li>
					<li class="mr-6">
						<a class="text-blue-500 hover:text-blue-800" href="#">
							blog
						</a>
					</li>
					<li class="mr-6">
						<a class="text-blue-500 hover:text-blue-800" href="#">
							catalogue
						</a>
					</li>
					<li class="mr-6">
						<a class="text-gray-400 cursor-not-allowed" href="#">
							contact
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
