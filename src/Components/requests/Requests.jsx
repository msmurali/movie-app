const API_KEY = '9ae0ff4057d7b2d359997d8a6af6b61c'

const requests = {

    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchFamilyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchMusicMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    fetchMysteryMovies : `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFiMovies : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchComedyMovies : `discover/movie?api_key=${API_KEY}&gwith_genres=35`,
    fetchDramaMovies : `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchHorrorMovies : `discover/movie?api_key=${API_KEY}&gwith_genres=27`,
    fetchAnimatedMovies : `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchRomanceMovies : `discover/movie?api_key=${API_KEY}&gwith_genres=10749`,
    fetchDocumentaries : `discover/movie?api_key=${API_KEY}&gwith_genres=99`,
}

export default requests;