import React from "react";

const MovieList = (props) => {
	//passing the favorites component inside the movielist components
	const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{/* the returned data from the api is mapped and passed to the UI */}
			{props.movies.map((movie, index) => (
				<div className="movie-app">
					<div className="flex justify-start m-2 image-container overflow-x-scroll">
						<img src={movie.Poster} alt="movie" />
						{/* <span>{movie.Title}</span> */}
						<div
							onClick={() => props.handleFavouriteClick(movie)}
							className="overlay flex align-items-center justify-content"
						>
							<FavouriteComponent />
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
