const apiKey = "9f943238c01ed2c6f9c18ac8f6953200";
export const imagUrl = "https://image.tmdb.org/t/p/original/";
const request = {
  fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
};

export default request;
