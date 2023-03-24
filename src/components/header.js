import { IoMdClose } from "react-icons/io"
import {useDispatch, useSelector} from "react-redux";
import { setMoviesList, changeSearchTerm, changeScreen, changePage } from '../store';

function Header() {
    const dispatch = useDispatch();
    const { page, searchTerm, moviesList, paginationScreen } = useSelector((state) => {
        return {
          page: state.form.page,
          searchTerm: state.movies.searchTerm,
          moviesList: state.movies.moviesList,
          paginationScreen: state.form.paginationScreen,
        }
      });

    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    }

    const clearSearch = () => {
        dispatch(changeSearchTerm(''));
        paginationScreen > 1 && dispatch(changeScreen(1));
        page > 1  && dispatch(changePage(1));
        if(moviesList?.length > 0){
            dispatch(setMoviesList([]));
        }
    }

    const handleMovieSearch = (event) => {
        paginationScreen > 1 && dispatch(changeScreen(1));
        page > 1  && dispatch(changePage(1));
        moviesList && dispatch(setMoviesList({results: null, total_results: null}));
        event.preventDefault();
        const fetchData = async () => {
            const req = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6054c57cdd9075b04c98cadeafeffaa7&query=${searchTerm.toLowerCase()}&page=${1}&include_adult=false&limit=10`);
            const res = await req.json();
            dispatch(setMoviesList(res));
        };
        fetchData();
    }

    return(
        <div className="px-4">
            <header className="flex flex-col items-center text-center py-4 dark:text-white">
                <img
                    alt="movie finder logo"
                    className="w-20 py-2" 
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Antu_popcorn-time.svg/1200px-Antu_popcorn-time.svg.png'}/>
                <h3>MOVIE FINDER</h3>
            </header>
            <div className="">
            <form onSubmit={handleMovieSearch} className="flex items-center mb-4">   
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray dark:text-gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search Movies"
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                        id="simple-search" 
                        className="bg-white border border-charcoal text-gray text-sm rounded-lg focus:ring-blue focus:border-black block w-full pl-10 p-2.5  dark:bg-charcoal dark:border-gray dark:placeholder-white dark:text-white dark:focus:ring-blue dark:focus:border-gray dark:focus:outline-0" />
                </div>
                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue rounded-lg border border-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue dark:bg-blue dark:hover:bg-blue dark:focus:ring-blue transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
                <button onClick={clearSearch} className="p-2.5 ml-2 text-sm font-medium text-white bg-blue rounded-lg border border-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue dark:bg-blue dark:hover:bg-blue dark:focus:ring-blue transition-all">
                    <IoMdClose size="20px" />
                    <span className="sr-only">Clear</span>
                </button>
            </form>
            </div>
        </div>
    )
}

export default Header;