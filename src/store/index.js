import { configureStore } from '@reduxjs/toolkit';
import { 
    moviesReducer,
    setMoviesList,
    setOwnedList,
    changeSearchTerm
} from './slices/moviesSlice';
import { 
    formReducer,
    changeScreen,
    changePage,
} from './slices/formSlice';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        form: formReducer
    }
});

export {
    store,
    changeScreen,
    changePage,
    setMoviesList,
    setOwnedList,
    changeSearchTerm
}