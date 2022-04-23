import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieListHeader from "./components/MovieListHeader";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
// const [s`tate, setstate] = useState(initialState)
import { useFetch } from "./useFetch";
const Home = () => {
	// const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	// const [searchMovies, setSearchMovies] = useState("");
	const url = `http://www.omdbapi.com/?s=${searchMovies}&apikey=e7f1a55f`;
	const { movies, searchMovies } = useFetch(url);

	const getMovieRequest = async (searchMovies) => {
		//fetch the data from the URL passed in
		const response = await fetch(url);
		//storing the response in the response variable
		const responseJson = await response.json();
		//checking if the search bar has an input
		if (responseJson.Search) {
			//return the search result
			setMovies(responseJson.Search);
		}
		// console.log(responseJson);
	};

	useEffect(() => {
		getMovieRequest(searchMovies);
	}, [searchMovies]);

	//adding movies to the favourites soon as its clicked
	const addFavouriteMovie = (movie) => {
		//creating a new array and passing in the movie that was clicked
		const newFavouriteList = [...favourites, movie];
		// new array set to the favourites state
		setFavourites(newFavouriteList);
	};

	const eleminateDuplicates = (arr) => {
		const newList = [];
		let i;
		let len = favourites.length;
		const obj = {};

		for (i = 0; i < len; i++) {
			obj[newList[i]] = 0;
		}
		console.log(obj);
	};

	const removeFavourite = (movie) => {
		//removing the favorites by filtering the movies Id and returning the ones who dont match
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);
		//passing the new array variables to the setfavourites
		setFavourites(newFavouriteList);
	};

	return (
		<div className="movie-app">
			<div className="flex justify-between align-items-center m-3">
				<MovieListHeader heading="Movies" />
				<SearchBox
					setSearchMovies={setSearchMovies}
					searchMovies={searchMovies}
				/>
			</div>
			<div className="flex flex-nowrap row">
				<MovieList
					movies={movies}
					handleFavouriteClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className="flex justify-between align-items-center m-3">
				<MovieListHeader heading="Favourites" />
			</div>
			<div className="flex flex-nowrap row">
				<MovieList
					movies={favourites}
					handleFavouriteClick={removeFavourite}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	);
};

export default Home;
