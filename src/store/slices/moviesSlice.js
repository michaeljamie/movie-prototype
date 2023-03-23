import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        searchTerm: '',
        moviesList: null,
        ownedList: [],
        totalMovies: null,
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setMoviesList(state, action) {
            state.moviesList = action.payload.results;
            state.totalMovies = action.payload.total_results;
        },
        setOwnedList(state, action) {
            state.ownedList = action.payload;
        }

    },
});

export const { changeSearchTerm, setMoviesList, setOwnedList } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;