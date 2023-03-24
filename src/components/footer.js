import {useDispatch, useSelector} from "react-redux";
import { changeScreen, changePage, setMoviesList } from '../store';

function List() {
  const dispatch = useDispatch();
  const { page, paginationScreen, totalMovies, searchTerm } = useSelector((state) => {
    return {
      page: state.form.page,
      paginationScreen: state.form.paginationScreen,
      totalMovies: state.movies.totalMovies,
      searchTerm: state.movies.searchTerm
    }
  });

  const handleMovieSearch = (event, newPage) => {
      event.preventDefault();
      const fetchData = async () => {
          const req = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6054c57cdd9075b04c98cadeafeffaa7&query=${searchTerm.toLowerCase()}&page=${newPage ? newPage : 1}&include_adult=false&limit=10`);
          const res = await req.json();
          dispatch(setMoviesList(res))
      };
      fetchData();
  };

  const nextPage = (event) => {
    dispatch(changeScreen(paginationScreen + 1));
    if(paginationScreen % 2 === 0)
      {
        dispatch(changePage(page + 1));
        handleMovieSearch(event, page + 1);
      }
  };
  
  const prevPage = (event) => {
      dispatch(changeScreen(paginationScreen - 1));
      if(paginationScreen % 2 !== 0 && page > 1)
      {
        dispatch(changePage(page - 1));
        handleMovieSearch(event, page - 1);
      }
  };

  return(
    <div className="">
      {totalMovies ? <div className="flex flex-col items-center py-4">
        <span className="text-sm text-gray-700 dark:text-light_gray">
            Showing <span className="font-semibold text-gray dark:text-white">{paginationScreen * 10 - 9}</span> to <span className="font-semibold text-gray-900 dark:text-white">{paginationScreen * 10 < totalMovies ? paginationScreen * 10 : totalMovies}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalMovies}{totalMovies >= 10000 && '+'}</span> Movies
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button onClick={prevPage} disabled={paginationScreen === 1} className={`inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-gray rounded-l hover:bg-gray dark:bg-charcoal dark:border-gray dark:text-white dark:hover:bg-light_gray dark:hover:text-white`}>
              <svg aria-hidden="true" className="w-5 h-5 mr-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
              Prev
          </button>
          <button onClick={nextPage} disabled={paginationScreen * 10 > totalMovies} className={`inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-gray border-0 border-l border-gray rounded-r hover:bg-gray dark:bg-charcoal dark:border-black dark:text-white dark:hover:bg-light_gray dark:hover:text-white`}>
              Next
              <svg aria-hidden="true" className="w-5 h-5 ml-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
      </div> : null}
    </div>
  )
}

export default List;