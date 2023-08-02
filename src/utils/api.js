import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 
"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODRkYWRjMmVjOTlhODFlYzIxYWIzN2VhNzdiNmUyOCIsInN1YiI6IjY0YzBkYzA2ZGY4NmE4MDEyNTgyNTNhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ra-eb4OtbIVX5CH8JJan8b4-Xb276RAYCJQif1K5Ar0"




const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};


export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

