/**
 * Returns a random movie quote.
 * @returns A random movie quote.
 * @example
 * const quote = useMovieQuote();
 * console.log(quote);
 */
export const useMovieQuote = (): string => {
  const movieQuotes = require("movie-quotes");

  return movieQuotes.random();
};
