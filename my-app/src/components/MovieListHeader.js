import React from "react";

const MovieListHeader = (props) => {
	return (
		<div className="">
			{/* the props was passed from the movie list */}
			<h4>{props.heading}</h4>
		</div>
	);
};

export default MovieListHeader;
