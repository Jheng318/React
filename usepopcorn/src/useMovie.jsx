import { useEffect, useState } from "react";
const KEY = "cf35889f";
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    // callback?.();
    const contoller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError(""); // to clear the error

        // to fetch the data from the api and store it in response variable
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: contoller.signal }
        );
        // if there is an error throw an error
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");
        //else store the data from the api into a variable and turn it into a json
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    // to prevent the user's search from being less than 3 characters
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return; // to exit the if
    }
    // handleCloseMovie();
    fetchMovies();
    return function () {
      contoller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
