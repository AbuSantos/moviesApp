import React from "react";

const SearchBox = (props) => {
	return (
		<div>
			<input
				type="text"	placeholder="Type to search..."
				value={props.value}
				onChange={(e) =>props.setSearchMovies(e.target.value)}
			/>
		</div>
	);
};

export default SearchBox;
