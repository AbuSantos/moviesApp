import { useState, useEffect } from "react";

export const useFetch = () => {
	const [movies, setMovies] = useState([]);
	const [searchMovies, setSearchMovies] = useState("");

	//fetching the movie from the api and returning a search result
	const getMovieRequest = async (searchMovies) => {
		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson.Search) {
			setMovies(response.Search);
		}
	};

	//loading the use fetch hook
	useEffect(() => {
		getMovieRequest(searchMovies);
	}, [searchMovies]);
	return { movies, searchMovies };
};
